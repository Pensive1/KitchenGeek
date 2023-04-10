import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetails } from "../../utils/recipeCalls-paid.mjs";
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

    const recipeData = {
      id: recipeDetails.id,
      title: recipeDetails.title,
      sourceName: recipeDetails.sourceName,
      image: recipeDetails.image,
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
          <div className="recipe">
            <main className="recipe__hero">
              <img
                className="recipe__img"
                src={recipeDetails.image}
                alt={recipeDetails.title}
              />
              <div className="recipe__details">
                <h3 className="recipe__title">{recipeDetails.title}</h3>
                <p className="recipe__author">By {recipeDetails.sourceName}</p>
              </div>
              <Link className="recipe__bookmark" onClick={bookmarkRecipe}>
                <IcnBookmark isBookmarked={isBookmarked} />
              </Link>
            </main>
            <Tabs
              ingredients={recipeDetails.extendedIngredients}
              servings={recipeDetails.servings}
              steps={recipeDetails.analyzedInstructions[0].steps}
            />

            <div className="content__wrapper --hidden-mobile">
              <IngredientList
                ingredients={recipeDetails.extendedIngredients}
                servings={recipeDetails.servings}
              />
              <RecipeInstructions
                steps={recipeDetails.analyzedInstructions[0].steps}
              />
            </div>
          </div>
        </>
      ) : (
        <p>Loading recipe details</p>
      )}
    </>
  );
};

export default RecipeDetails;
