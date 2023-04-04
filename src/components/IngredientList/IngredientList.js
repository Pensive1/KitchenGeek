import { useState } from "react";
import "./IngredientList.scss";
import Ingredient from "../Ingredient/Ingredient.js";

const IngredientList = ({ ingredients, servings }) => {
  const [ingServing, setIngServing] = useState(servings);

  const updatePortion = (amount) => {
    setIngServing(Number(amount));
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
          onClick={() => {
            setIngServing(servings);
          }}
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default IngredientList;
