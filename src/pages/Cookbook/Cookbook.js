import { useEffect, useState } from "react";
import { getBookmarked } from "../../utils/usrActions";
import RecipeList from "../../components/RecipeList/RecipeList";

const Cookbook = () => {
  const [recipes, setRecipes] = useState(null);

  const loadCookbook = async () => {
    const bookmarkedRecipes = await getBookmarked();
    setRecipes(bookmarkedRecipes);
  };

  useEffect(() => {
    loadCookbook();
  });

  return (
    <>
      {recipes !== null ? (
        <>
          <h1>My Cookbook</h1>
          <RecipeList recipes={recipes} />
        </>
      ) : (
        <p>Loading recipes</p>
      )}
    </>
  );
};

export default Cookbook;
