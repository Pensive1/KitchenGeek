import "./RecipeList.scss";
import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail";

const RecipeList = ({ recipes, loadData }) => {
  return (
    <section className="recipe__list">
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
    </section>
  );
};

export default RecipeList;
