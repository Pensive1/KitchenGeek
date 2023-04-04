import { calcIngredientPortion, roundDecimals } from "../../utils/calcs.js";
const Ingredient = ({ ingredient, origServing, newServing }) => {
  const ingAmount = ingredient.amount;
  const ingredientPortion = roundDecimals(
    calcIngredientPortion(origServing, ingAmount, newServing)
  );

  return (
    <li>
      <span>
        {ingredientPortion < 1
          ? `${ingredientPortion.toFixed(2)} `
          : `${ingredientPortion} `}
        {ingredient.unit ? `${ingredient.unit} of ` : ""}
      </span>
      {ingredient.name}
    </li>
  );
};

export default Ingredient;
