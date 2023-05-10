import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  saveRecipe,
  removeRecipe,
  checkBookmarks,
} from "../../utils/usrActions";
import IcnBookmark from "../Icons/IcnBookmark";
import imgPlaceholder from "../../assets/placeholder/thumbnail_placeholder.svg";
import "./RecipeThumbnail.scss";

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

  // Refactor user id for OAuth
  const bookmarkRecipe = async () => {
    const recipeData = {
      user_id: 1,
      recipe_id: recipe.id,
      recipe_title: recipe.title,
      recipe_author: recipe.sourceName,
      recipe_image: recipe.image,
    };

    if (isBookmarked) {
      try {
        await removeRecipe(recipe.id);
        setIsBookmarked(false);
      } catch (err) {
        console.log(err);
      }
    } else if (!isBookmarked) {
      try {
        await saveRecipe(recipeData);
        setIsBookmarked(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    bookmarkCheck();
  }, []);

  return (
    <article className="recipe-thumb">
      <Link to={`/recipe/${recipe.id}`} className="recipe-thumb__link">
        <img
          className="recipe-thumb__img"
          src={recipe.image ? recipe.image : imgPlaceholder}
          alt={recipe.title}
        />
      </Link>
      <div className="recipe-thumb__details">
        <Link to={`/recipe/${recipe.id}`} className="recipe-thumb__link">
          <div className="recipe-thumb__txt">
            <p className="recipe-thumb__title">{recipe.title}</p>
            <p className="recipe-thumb__author">{recipe.sourceName}</p>
          </div>
        </Link>
        <div
          className="recipe-thumb__actions"
          onClick={(e) => {
            e.stopPropagation();
            bookmarkRecipe();
          }}
        >
          <IcnBookmark isBookmarked={isBookmarked} />
        </div>
      </div>
    </article>
  );
};

export default RecipeThumbnail;
