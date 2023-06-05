import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList/RecipeList.js";
import Searchbar from "../../components/SearchBar/Searchbar.js";
import { getRandomRecipes } from "../../utils/recipeCalls-paid.mjs";
import LoadingRecipes from "../../components/placeholders/LoadingRecipes.js";
import "../../styles/styles.scss";

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
    return <LoadingRecipes />;
  }

  return (
    <>
      <div className="content__wrapper">
        <Searchbar />
        <RecipeList recipes={recipeData} />
      </div>
    </>
  );
};

export default Discover;
