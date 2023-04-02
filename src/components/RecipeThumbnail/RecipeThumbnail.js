import { Link } from "react-router-dom";
import "./RecipeThumbnail.scss";

const RecipeThumbnail = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <article>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.title}</p>
      </article>
    </Link>
  );
};

export default RecipeThumbnail;
