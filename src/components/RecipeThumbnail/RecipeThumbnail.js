import { Link } from "react-router-dom";
import IcnBookmark from "../Icons/IcnBookmark";
import "./RecipeThumbnail.scss";
import { checkBookmarks } from "../../utils/usrActions";
import { useState, useEffect } from "react";

const RecipeThumbnail = ({ recipe }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkCheck = async () => {
    const bmStatus = await checkBookmarks(recipe.id);
    if (bmStatus) {
      return setIsBookmarked(true);
    } else {
      return;
    }
  };

  useEffect(() => {
    bookmarkCheck();
  }, []);

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
            <IcnBookmark isBookmarked={isBookmarked} />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default RecipeThumbnail;
