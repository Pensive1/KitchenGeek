import {
  calcIngredientPortion,
  roundDecimals,
  parseAmount,
} from "../../utils/calcs.js";
const Ingredient = ({ ingredient, origServing, newServing }) => {
  const ingAmount = ingredient.amount;
  const ingredientPortion = Number(
    calcIngredientPortion(origServing, ingAmount, newServing).toPrecision(2)
  );

  return (
    <li>
      <span>
        {ingredientPortion < 1
          ? `${parseAmount(ingredientPortion)} `
          : `${ingredientPortion} `}
        {ingredient.unit ? `${ingredient.unit} of ` : ""}
      </span>
      {ingredient.name}
    </li>
  );
};

export default Ingredient;
