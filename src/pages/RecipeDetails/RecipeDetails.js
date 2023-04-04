import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../utils/recipeCalls-paid.mjs";
import RecipeInstructions from "../../components/RecipeInstructions/RecipeInstructions.js";
import IngredientList from "../../components/IngredientList/IngredientList.js";

const RecipeDetails = () => {
  const { id } = useParams("/:id");
  const [recipeDetails, setRecipeDetails] = useState(null);

  const loadRecipeDetails = async () => {
    const details = await getRecipeDetails(id);
    setRecipeDetails(details);
  };

  useEffect(() => {
    loadRecipeDetails();
  }, []);
  // Loading State
  // if (!recipeDetails) {
  //   return <p>Loading recipe details</p>;
  // }

  return (
    <>
      <h1>Recipe Details</h1>
      {recipeDetails !== null ? (
        <>
          <h3>{recipeDetails.title}</h3>
          <p>By {recipeDetails.sourceName}</p>
          <img src={recipeDetails.image} alt={recipeDetails.title} />
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
