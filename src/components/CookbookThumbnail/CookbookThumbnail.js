import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  saveRecipe,
  removeRecipe,
  checkBookmarks,
} from "../../utils/usrActions";
import IcnBookmark from "../Icons/IcnBookmark";
import imgPlaceholder from "../../assets/placeholder/thumbnail_placeholder.svg";
import "../RecipeThumbnail/RecipeThumbnail.scss";

const CookbookThumbnail = ({ recipe, loadData = null }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkCheck = async () => {
    const bmStatus = await checkBookmarks(recipe.recipe_id);
    if (bmStatus) {
      return setIsBookmarked(true);
    } else {
      return;
    }
  };

  const bookmarkRecipe = async () => {
    const recipeData = {
      user_id: 1,
      recipe_id: recipe.recipe_id,
      recipe_title: recipe.recipe_title,
      recipe_author: recipe.recipe_author,
      recipe_image: recipe.recipe_image,
    };

    if (isBookmarked) {
      try {
        await removeRecipe(recipe.recipe_id);
        if (loadData) {
          await loadData();
        }

        setIsBookmarked(false);
      } catch (err) {
        console.log(err);
      }
    } else if (!isBookmarked) {
      try {
        await saveRecipe(recipeData);
        if (loadData) {
          await loadData();
        }

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
      <Link to={`/recipe/${recipe.recipe_id}`} className="recipe-thumb__link">
        <img
          className="recipe-thumb__img"
          src={recipe.recipe_image ? recipe.recipe_image : imgPlaceholder}
          alt={recipe.recipe_title}
        />
      </Link>
      <div className="recipe-thumb__details">
        <Link to={`/recipe/${recipe.recipe_id}`} className="recipe-thumb__link">
          <div className="recipe-thumb__txt">
            <p className="recipe-thumb__title">{recipe.recipe_title}</p>
            <p className="recipe-thumb__author">{recipe.recipe_author}</p>
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

export default CookbookThumbnail;
