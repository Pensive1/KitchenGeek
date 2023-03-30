import { useEffect, useState } from "react";
import axios from "axios";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";

// import { getRandomRecipes } from "../../utils/recipeCalls.mjs";

const baseURL = "https://api.spoonacular.com";
const API_KEY = process.env.REACT_APP_API_KEY;
const config = {
  headers: { "x-api-key": API_KEY },
};

const Discover = () => {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const getRandomRecipes = async () => {
      const randomRecipeUrl = `${baseURL}/recipes/random?number=2`;

      try {
        const { data } = await axios.get(randomRecipeUrl, config);
        const { recipes } = data;
        setRecipeData(recipes);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomRecipes();
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
