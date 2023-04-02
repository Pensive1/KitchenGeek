import { calcIngredientPortion } from "../../utils/calcs.js";
const Ingredient = ({ ingredient, origServing, newServing }) => {
  const ingAmount = ingredient.amount;
  const ingredientPortion = calcIngredientPortion(
    origServing,
    ingAmount,
    newServing
  );

  return (
    <li>
      {ingredientPortion < 1
        ? `${ingredientPortion.toFixed(2)} `
        : `${ingredientPortion} `}
      {ingredient.unit ? `${ingredient.unit} of ` : ""}
      {ingredient.name}
    </li>
  );
};

export default Ingredient;
