import { useState } from "react";
import "./IngredientList.scss";
import Ingredient from "../Ingredient/Ingredient.js";
import { Link } from "react-router-dom";

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
      e.target.innerText = "Imperial";
      setUnit("us");
    } else {
      e.target.innerText = "Metric";
      setUnit("metric");
    }
  };

  const updatePortionWithButtons = (amount) => {
    setIngServing(Number(ingServing) + Number(amount));
  };

  return (
    <>
      <section>
        <h4>Ingredients</h4>
        <ul>
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
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Servings</p>
        <button
          onClick={() => {
            if (ingServing !== 1) {
              updatePortionWithButtons(-1);
            }
          }}
        >
          -
        </button>
        <input
          type="number"
          name="RecipeServing"
          value={ingServing}
          onChange={(e) => updatePortion(e.target.value)}
        />
        <button
          onClick={() => {
            updatePortionWithButtons(+1);
          }}
        >
          +
        </button>
        <button
          type="reset"
          onClick={() => {
            setIngServing(servings);
          }}
        >
          Reset
        </button>
        <Link onClick={updateUnit}>Metric</Link>
      </form>
    </>
  );
};

export default IngredientList;
