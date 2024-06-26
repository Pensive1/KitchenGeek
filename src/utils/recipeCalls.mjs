import axios from "axios";

const baseURL = "https://api.spoonacular.com";
const API_KEY = process.env.REACT_APP_API_KEY;
const config = {
  headers: { "x-api-key": API_KEY },
};

// Get random recipes
export const getRandomRecipes = async () => {
  const randomRecipeUrl = `${baseURL}/recipes/random?number=2`;

  try {
    //return the api call
    const { data } = await axios.get(randomRecipeUrl, config);
    const { recipes } = data;
    return recipes;
  } catch (err) {
    console.log(err);
  }
};

//Get recipe by search
export const searchRecipesByName = async (recipeName) => {
  const recipeSearchUrl = `${baseURL}/recipes/complexSearch?query=${recipeName}`;

  try {
    //return the api call
    const { data } = await axios.get(recipeSearchUrl, config);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//Get recipe by cuisine
export const searchRecipesByCuisine = async (cuisine) => {
  const recipeCuisineUrl = `${baseURL}/recipes/complexSearch?cuisine=${cuisine}`;

  try {
    //return the api call
    const { data } = await axios.get(recipeCuisineUrl, config);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//Get recipe by ingredient
export const searchRecipesByIngredients = async ([ingredients]) => {
  const ingredientList = ingredients.join(",");
  const ingredientRecipeUrl = `${baseURL}/recipes/findByIngredients?ingredients=${ingredientList}`;

  try {
    //return the api call
    const { data } = await axios.get(ingredientRecipeUrl, config);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//Get recipe details (by id)
export const getRecipeDetails = async (id) => {
  const recipeUrl = `${baseURL}/recipes/${id}/information?includeNutrition=false`;

  try {
    //return the api call
    const { data } = await axios.get(recipeUrl, config);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//Get recipe by any parameter
export const complexSearch = async (queryParams) => {
  const recipeCuisineUrl = `${baseURL}/recipes/searchComplex${queryParams}&number=24`;

  try {
    //return the api call
    const { data } = await axios.get(recipeCuisineUrl, config);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//Optional: Webscrape ingredients from URL
export const scrapeRecipeFromUrl = async (recipeSite) => {
  const recipeUrl = `${baseURL}/recipes/extract?url=${recipeSite}&analyze=true&includeNutrition=false&includeTaste=false`;

  try {
    //return the api call
    const { data } = await axios.get(recipeUrl, config);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
