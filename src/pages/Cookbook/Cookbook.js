import { useEffect, useState } from "react";
import { getBookmarked } from "../../utils/usrActions";
import RecipeList from "../../components/RecipeList/RecipeList";
import "./Cookbook.scss";

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
      <div className="cookbook">
        <div className="cookbook__wrapper">
          {recipes ? (
            <>
              <RecipeList recipes={recipes} />
            </>
          ) : (
            <p>Loading recipes</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cookbook;
