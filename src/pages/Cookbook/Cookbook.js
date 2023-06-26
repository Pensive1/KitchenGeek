import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getBookmarked } from "../../utils/usrActions";
import { loggedInContext } from "../../App";
import RecipeList from "../../components/RecipeList/RecipeList";
import EmptyCookbook from "../../components/placeholders/EmptyCookbook";
import LoadingRecipes from "../../components/placeholders/LoadingRecipes";

const Cookbook = () => {
  const navigate = useNavigate();
  const loggedIn = useContext(loggedInContext);
  const [recipes, setRecipes] = useState(null);

  const loadCookbook = async () => {
    const bookmarkedRecipes = await getBookmarked();
    setRecipes(bookmarkedRecipes);
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    } else {
      loadCookbook();
    }
  }, []);

  return (
    <>
      <motion.div
        className="content__wrapper"
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
            <LoadingRecipes />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Cookbook;
