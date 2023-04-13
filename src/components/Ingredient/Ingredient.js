import { calcIngredientPortion, parseAmount } from "../../utils/calcs.js";
const Ingredient = ({ ingredient, origServing, newServing, unit }) => {
  const ingAmount = ingredient.measures[unit].amount;
  const ingUnit = ingredient.measures[unit].unitShort;
  const ingredientPortion = Number(
    calcIngredientPortion(origServing, ingAmount, newServing).toPrecision(2)
  );

  return (
    <li className="recipe__ingredient">
      <span
        className={
          newServing === origServing
            ? "recipe__ingredient-portion"
            : "recipe__ingredient-portion recipe__ingredient-portion--altered"
        }
      >
        {ingredientPortion < 1
          ? `${parseAmount(ingredientPortion)} `
          : `${ingredientPortion} `}
        {ingUnit ? `${ingUnit} ` : ""}
      </span>
      {ingredient.name}
    </li>
  );
};

export default Ingredient;
