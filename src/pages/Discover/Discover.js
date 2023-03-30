import { useEffect, useState } from "react";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";
import { getRandomRecipes } from "../../utils/recipeCalls.mjs";

const Discover = () => {
  const [recipeData, setRecipeData] = useState(null);

  //Run module function in a local async function
  const getRecipes = async () => {
    const recipes = await getRandomRecipes();
    setRecipeData(recipes);
  };

  useEffect(() => {
    // MODULE FUNCTION CALL
    getRecipes();
  }, []);

  if (!recipeData) {
    return <p>Loading recipes...</p>;
  }

  return (
    <>
      <h1>Discover Page</h1>

      {recipeData.map((recipe) => {
        return <RecipeThumbnail recipe={recipe} key={recipe.id} />;
      })}
    </>
  );
};

export default Discover;
