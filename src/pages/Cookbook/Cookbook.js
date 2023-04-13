import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getBookmarked } from "../../utils/usrActions";
import RecipeList from "../../components/RecipeList/RecipeList";
import "./Cookbook.scss";
import EmptyCookbook from "../../components/placeholders/EmptyCookbook";

const Cookbook = () => {
  const [recipes, setRecipes] = useState(null);

  const loadCookbook = async () => {
    const bookmarkedRecipes = await getBookmarked();
    setRecipes(bookmarkedRecipes);
  };

  useEffect(() => {
    loadCookbook();
  }, []);

  return (
    <>
      <motion.div
        className="cookbook"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="cookbook__wrapper">
          {recipes ? (
            <>
              {recipes.length === 0 && <EmptyCookbook />}
              <RecipeList recipes={recipes} loadData={loadCookbook} />
            </>
          ) : (
            <p>Loading recipes</p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Cookbook;
