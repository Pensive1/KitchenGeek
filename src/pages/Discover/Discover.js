import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { getRandomRecipes } from "../../utils/recipeCalls.mjs";

const baseURL = "https://api.spoonacular.com";
const API_KEY = process.env.REACT_APP_API_KEY;
const config = {
  headers: { "x-api-key": API_KEY },
};

const Discover = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    // const recipies = getRandomRecipes();

    // const getRandomRecipes = async () => {
    //   const randomRecipeUrl = `${baseURL}/recipes/random?number=3`;

    //   try {
    //     const { data } = await axios.get(randomRecipeUrl, config);
    //     console.log(data);

    //     setRecipes(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // getRandomRecipes();

    // setRecipes(getRandomRecipes());
    console.log(recipes);
    console.log(getRandomRecipes());
  }, []);

  return (
    <>
      <h1>Discover Page</h1>
      <Link to="/recipe">
        <p>Sample recipe</p>
      </Link>
    </>
  );
};

export default Discover;
