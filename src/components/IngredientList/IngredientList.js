import { useState } from "react";
import "./IngredientList.scss";
import Ingredient from "../Ingredient/Ingredient.js";

const IngredientList = ({ ingredients, servings }) => {
  const [ingServing, setIngServing] = useState(servings);

  const calcIngredients = (e) => {
    e.preventDefault();
  };

  const updatePortion = (e, amount) => {
    e.preventDefault();
    //Dont make the counter reach 0
    setIngServing(ingServing + amount);
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
      <form>
        <p>Servings</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (ingServing !== 1) updatePortion(e, -1);
          }}
        >
          -
        </button>
        <input
          type="number"
          name="RecipeServing"
          value={ingServing}
          onChange={(e) => updatePortion(e, e.target.value)}
        />
        <button
          onClick={(e) => {
            updatePortion(e, +1);
          }}
        >
          +
        </button>
      </form>
    </>
  );
};

export default IngredientList;
