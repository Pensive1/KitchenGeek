import { useState } from "react";
import "./IngredientList.scss";
import Ingredient from "../Ingredient/Ingredient.js";
import { Link } from "react-router-dom";
import IcnAdd from "../Icons/IcnAdd";
import IcnMinus from "../Icons/IcnMinus";
import IcnScale from "../Icons/IcnScale";

const IngredientList = ({ ingredients, servings }) => {
  const [ingServing, setIngServing] = useState(servings);
  const [unit, setUnit] = useState("metric");

  const updatePortion = (amount) => {
    setIngServing(Number(amount));
  };

  const updateUnit = (e) => {
    e.preventDefault();
    // console.log(e.target.innerText);
    if (unit === "metric") {
      e.target.innerText = "US";
      setUnit("us");
    } else {
      e.target.innerText = "UK";
      setUnit("metric");
    }
  };

  const updatePortionWithButtons = (amount) => {
    setIngServing(Number(ingServing) + Number(amount));
  };

  return (
    <>
      <section className="recipe__ingredients">
        <h4 className="recipe__heading">Ingredients</h4>
        <ul className="recipe__ingredient-list">
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredient
                key={index}
                ingredient={ingredient}
                origServing={servings}
                newServing={ingServing}
                unit={unit}
              />
            );
          })}
        </ul>
      </section>
      <form onSubmit={(e) => e.preventDefault()} className="recipe__servings">
        <div className="recipe__serving-details">
          <p className="recipe__label">Serves</p>
          <div className="recipe__portion-controls">
            <button
              className="recipe__portion-btn"
              onClick={() => {
                if (ingServing !== 1) {
                  updatePortionWithButtons(-1);
                }
              }}
            >
              <IcnMinus />
            </button>
            <input
              className="recipe__portion-amount"
              type="number"
              name="RecipeServing"
              value={ingServing}
              onChange={(e) => updatePortion(e.target.value)}
            />
            <button
              className="recipe__portion-btn"
              onClick={() => {
                updatePortionWithButtons(+1);
              }}
            >
              <IcnAdd />
            </button>
          </div>
          <button
            className="recipe__portion-reset"
            type="reset"
            onClick={() => {
              setIngServing(servings);
            }}
          >
            Reset
          </button>
        </div>

        <Link className="recipe__convert" onClick={updateUnit}>
          UK
        </Link>
      </form>
    </>
  );
};

export default IngredientList;
