import { motion } from "framer-motion";
import { useMatch } from "react-router-dom";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";
import CookbookThumbnail from "../CookbookThumbnail/CookbookThumbnail";
import "./RecipeList.scss";

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
      {pageIscookbook
        ? recipes
            .sort((a, b) => {
              const date1 = a.saved_at;
              const date2 = b.saved_at;

              if (date1 < date2) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((recipe) => {
              return (
                <CookbookThumbnail
                  recipe={recipe}
                  key={recipe.id}
                  loadData={loadData}
                />
              );
            })
        : recipes.map((recipe) => {
            return (
              <RecipeThumbnail
                recipe={recipe}
                key={recipe.id}
                loadData={loadData}
              />
            );
          })}
    </motion.section>
  );
};

export default RecipeList;
