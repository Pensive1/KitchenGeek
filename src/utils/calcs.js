// Contains recipe calculation logic

// Ingredient to serving calculation (origServing, origIngAmount, desiredServing)
export const calcIngredientPortion = (
  origServing,
  origIngAmount,
  newServing
) => {
  return (origIngAmount / origServing) * newServing;
};

export const roundDecimals = (value) => {
  return Math.round(value * 4) / 4;
};

// ParseAmount if n < 1 (0.25 = "quarter", 0.5 = "Half", 0.75 = "three quarter")
export const parseAmount = (value) => {
  switch (value) {
    case 0.25:
      return (value = "Quarter");
    case 0.5:
      return (value = "Half");
    case 0.75:
      return (value = "Three quarter");

    default:
      return value;
  }
};
