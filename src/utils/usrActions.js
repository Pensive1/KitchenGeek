import axios from "axios";
const baseURL = "http://localhost:8080/api/user";
const cookbookUrl = `${baseURL}/123/recipes`;

// Check if recipe is bookmarked
export const checkBookmarks = async (id) => {
  try {
    await axios.get(`${cookbookUrl}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

// Save recipe
export const saveRecipe = async (recipeData) => {
  try {
    await axios.post(cookbookUrl, recipeData);
  } catch (err) {
    console.log(err);
  }
};

// Remove recipe from cookbook
export const removeRecipe = async (id) => {
  try {
    await axios.delete(`${cookbookUrl}/${id}`);
  } catch (err) {
    console.log(err);
  }
};
// Get user recipes
