import { Link } from "react-router-dom";
import IcnBookmark from "../Icons/IcnBookmark";
import "./RecipeThumbnail.scss";
import {
  saveRecipe,
  removeRecipe,
  checkBookmarks,
} from "../../utils/usrActions";
import { useState, useEffect } from "react";

const RecipeThumbnail = ({ recipe, loadData }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkCheck = async () => {
    const bmStatus = await checkBookmarks(recipe.id);
    if (bmStatus) {
      return setIsBookmarked(true);
    } else {
      return;
    }
  };

  const bookmarkRecipe = async () => {
    const recipeData = {
      id: recipe.id,
      title: recipe.title,
      sourceName: recipe.sourceName,
      image: recipe.image,
      timestamp: Date.now(),
    };

    if (isBookmarked) {
      try {
        await removeRecipe(recipe.id);
        await loadData();

        setIsBookmarked(false);
      } catch (err) {
        console.log(err);
      }
    } else if (!isBookmarked) {
      try {
        await saveRecipe(recipeData);
        await loadData();

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
          src={recipe.image}
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
