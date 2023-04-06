import { calcIngredientPortion, parseAmount } from "../../utils/calcs.js";
const Ingredient = ({ ingredient, origServing, newServing, unit }) => {
  const ingAmount = ingredient.measures[unit].amount;
  const ingUnit = ingredient.measures[unit].unitShort;
  const ingredientPortion = Number(
    calcIngredientPortion(origServing, ingAmount, newServing).toPrecision(2)
  );

  return (
    <li>
      <span>
        {ingredientPortion < 1
          ? `${parseAmount(ingredientPortion)} `
          : `${ingredientPortion} `}
        {ingUnit ? `${ingUnit} of ` : ""}
      </span>
      {ingredient.name}
    </li>
  );
};

export default Ingredient;
