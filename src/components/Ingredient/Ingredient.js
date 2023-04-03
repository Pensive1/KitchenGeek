import { calcIngredientPortion } from "../../utils/calcs.js";
const Ingredient = ({ ingredient, origServing, newServing }) => {
  const ingAmount = ingredient.amount;
  const ingredientPortion =
    Math.round(calcIngredientPortion(origServing, ingAmount, newServing) * 4) /
    4;

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
