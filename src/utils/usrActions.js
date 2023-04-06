import axios from "axios";
const baseURL = "http://localhost:8080/api/user";
const cookbookUrl = `${baseURL}/123/recipes`;

// Check if recipe is bookmarked
export const checkBookmarks = async (id) => {
  const res = await axios.get(`${cookbookUrl}/${id}`);

  if (!res.data.error) {
    return true;
  }

  return false;
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
export const getBookmarked = async () => {
  try {
    const { data } = await axios.get(cookbookUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
};
