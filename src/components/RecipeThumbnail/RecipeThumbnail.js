import { Link } from "react-router-dom";
import "./RecipeThumbnail.scss";
import IcnBookmark from "../Icons/IcnBookmark";

const RecipeThumbnail = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-thumb__link">
      <article className="recipe-thumb">
        <img
          className="recipe-thumb__img"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="recipe-thumb__details">
          <div className="recipe-thumb__txt">
            <p className="recipe-thumb__title">{recipe.title}</p>
            <p className="recipe-thumb__author">{recipe.sourceName}</p>
          </div>
          <div className="recipe-thumb__actions">
            <IcnBookmark />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default RecipeThumbnail;
