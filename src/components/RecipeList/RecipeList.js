import { motion } from "framer-motion";
import "./RecipeList.scss";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";

const RecipeList = ({ recipes, loadData }) => {
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
          return (
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
