import RecipeList from "../../components/RecipeList/RecipeList.js";
import Searchbar from "../../components/SearchBar/Searchbar.js";
import "../../styles/styles.scss";
import { getRandomRecipes } from "../../utils/recipeCalls-paid.mjs";
import { useEffect, useState } from "react";

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
      <Searchbar />
      <RecipeList recipes={recipeData} />
    </>
  );
};

export default Discover;
