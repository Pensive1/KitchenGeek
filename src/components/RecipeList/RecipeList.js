import "./RecipeList.scss";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";

const RecipeList = ({ recipes }) => {
  return (
    <section>
      {recipes.map((recipe) => {
        return <RecipeThumbnail recipe={recipe} key={recipe.id} />;
      })}
    </section>
  );
};

export default RecipeList;
