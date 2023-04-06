import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetails } from "../../utils/recipeCalls-paid.mjs";
import { saveRecipe, removeRecipe } from "../../utils/usrActions.js";
import RecipeInstructions from "../../components/RecipeInstructions/RecipeInstructions.js";
import IngredientList from "../../components/IngredientList/IngredientList.js";
import IcnBookmark from "../../components/Icons/IcnBookmark.js";
import "./RecipeDetails.scss";

const RecipeDetails = () => {
  const { id } = useParams("/:id");
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const loadRecipeDetails = async () => {
    const details = await getRecipeDetails(id);
    setRecipeDetails(details);
  };

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

  useEffect(() => {
    loadRecipeDetails();
  }, []);

  return (
    <>
      <h1>Recipe Details</h1>
      {recipeDetails !== null ? (
        <>
          <h3>{recipeDetails.title}</h3>
          <p>By {recipeDetails.sourceName}</p>
          <img src={recipeDetails.image} alt={recipeDetails.title} />
          <Link onClick={bookmarkRecipe}>
            <IcnBookmark isBookmarked={isBookmarked} />
          </Link>
          <IngredientList
            ingredients={recipeDetails.extendedIngredients}
            servings={recipeDetails.servings}
          />
          <RecipeInstructions
            steps={recipeDetails.analyzedInstructions[0].steps}
          />
        </>
      ) : (
        <p>Loading recipe details</p>
      )}
    </>
  );
};

export default RecipeDetails;
