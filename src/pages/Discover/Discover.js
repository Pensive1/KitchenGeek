import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList/RecipeList.js";
import { getRandomRecipes } from "../../utils/recipeCalls-paid.mjs";

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
      <RecipeList recipes={recipeData} />
    </>
  );
};

export default Discover;
