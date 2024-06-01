import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetails } from "../../utils/recipeCalls.mjs";
import { motion } from "framer-motion";
import {
  saveRecipe,
  removeRecipe,
  checkBookmarks,
} from "../../utils/usrActions.js";
import RecipeInstructions from "../../components/RecipeInstructions/RecipeInstructions.js";
import IngredientList from "../../components/IngredientList/IngredientList.js";
import IcnBookmark from "../../components/Icons/IcnBookmark.js";
import "./RecipeDetails.scss";
import Tabs from "../../components/Tabs/Tabs.js";
import MissingSteps from "../../components/placeholders/MissingSteps.js";
import LoadingRecipe from "../../components/placeholders/LoadingRecipe.js";
import imgPlaceholder from "../../assets/placeholder/thumbnail_placeholder.svg";

const RecipeDetails = () => {
  const { id } = useParams("/:id");
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const loadRecipeDetails = async () => {
    const details = await getRecipeDetails(id);
    setRecipeDetails(details);
  };

  const bookmarkCheck = async () => {
    const bmStatus = await checkBookmarks(id);
    if (bmStatus) {
      return setIsBookmarked(true);
    } else {
      return;
    }
  };

  useEffect(() => {
    loadRecipeDetails();
    bookmarkCheck();
  }, []);

  const bookmarkRecipe = async (e) => {
    e.preventDefault();

    // Refactor user id for OAuth
    const recipeData = {
      user_id: 1,
      recipe_id: recipeDetails.id,
      recipe_title: recipeDetails.title,
      recipe_author: recipeDetails.sourceName,
      recipe_image: recipeDetails.image,
    };

    if (isBookmarked) {
      try {
        removeRecipe(id);
        setIsBookmarked(false);
      } catch (err) {
        console.log(err);
      }
    } else if (!isBookmarked) {
      try {
        await saveRecipe(recipeData);
        setIsBookmarked(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {recipeDetails !== null ? (
        <>
          <motion.div
            className="recipe"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main className="recipe__hero">
              <div className="recipe__img-container">
                <Link className="recipe__bookmark" onClick={bookmarkRecipe}>
                  <IcnBookmark isBookmarked={isBookmarked} />
                </Link>
                <img
                  className="recipe__img"
                  src={
                    recipeDetails.image ? recipeDetails.image : imgPlaceholder
                  }
                  alt={recipeDetails.title}
                />
              </div>
              <div className="recipe__details">
                <h3 className="recipe__title">{recipeDetails.title}</h3>
                <p className="recipe__author">By {recipeDetails.sourceName}</p>
              </div>
            </main>

            {recipeDetails.analyzedInstructions.length === 0 ? (
              <MissingSteps recipeUrl={recipeDetails.sourceUrl} />
            ) : (
              <Tabs
                ingredients={recipeDetails.extendedIngredients}
                servings={recipeDetails.servings}
                steps={
                  recipeDetails.analyzedInstructions.length > 0
                    ? recipeDetails.analyzedInstructions[0].steps
                    : null
                }
              />
            )}

            <div className="recipe__content-wrapper --hidden-mobile">
              <IngredientList
                ingredients={recipeDetails.extendedIngredients}
                servings={recipeDetails.servings}
              />
              <RecipeInstructions
                steps={
                  recipeDetails.analyzedInstructions.length > 0
                    ? recipeDetails.analyzedInstructions[0].steps
                    : null
                }
                recipeUrl={recipeDetails.sourceUrl}
              />
            </div>
          </motion.div>
        </>
      ) : (
        <LoadingRecipe />
      )}
    </>
  );
};

export default RecipeDetails;
