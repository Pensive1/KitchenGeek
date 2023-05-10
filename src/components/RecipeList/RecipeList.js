import { motion } from "framer-motion";
import "./RecipeList.scss";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";
import CookbookThumbnail from "../CookbookThumbnail/CookbookThumbnail";
import { useMatch } from "react-router-dom";

const RecipeList = ({ recipes, loadData }) => {
  const pageIscookbook = useMatch("/cookbook");

  return (
    <motion.section
      className="recipe__list"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {recipes === [] ? (
        <p>No bookmarked recipes</p>
      ) : (
        recipes.map((recipe) => {
          return pageIscookbook ? (
            <CookbookThumbnail
              recipe={recipe}
              key={recipe.id}
              loadData={loadData}
            />
          ) : (
            <RecipeThumbnail
              recipe={recipe}
              key={recipe.id}
              loadData={loadData}
            />
          );
        })
      )}
    </motion.section>
  );
};

export default RecipeList;
