import "./IngredientList.scss";

const IngredientList = ({ ingredients }) => {
  return (
    <section>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              {ingredient.amount < 1
                ? `${ingredient.amount.toFixed(2)} `
                : `${ingredient.amount} `}
              {ingredient.unit ? `${ingredient.unit} of ` : ""}
              {ingredient.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IngredientList;
