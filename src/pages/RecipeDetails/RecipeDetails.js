import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../utils/recipeCalls-paid.mjs";

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
  if (!recipeDetails) {
    return <p>Loading recipe details</p>;
  }

  return (
    <>
      <h1>Recipe Details</h1>
      <h3>{recipeDetails.title}</h3>
      <p>By {recipeDetails.sourceName}</p>

      <img src={recipeDetails.image} alt={recipeDetails.title} />

      <section>
        <h4>Ingredients</h4>
        <ul>
          {recipeDetails.extendedIngredients.map((ingredient, index) => {
            return (
              <li key={index}>
                {ingredient.amount < 1
                  ? `${ingredient.amount.toFixed(2)} `
                  : `${ingredient.amount} `}
                {ingredient.unit ? `${ingredient.unit} of ` : ""}
                {ingredient.name}
              </li>
            );
          })}
        </ul>
      </section>
      <div>
        <h5>Servings: {recipeDetails.servings}</h5>
      </div>
    </>
  );
};

export default RecipeDetails;
