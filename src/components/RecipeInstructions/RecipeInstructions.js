import "./RecipeInstructions.scss";
const RecipeInstructions = ({ steps }) => {
  return (
    <section className="recipe__instructions">
      <h4 className="recipe__heading --hidden-mobile">Instructions</h4>
      <ol className="recipe__steps">
        {steps.map((instruction, index) => {
          return (
            <li key={index} className="recipe__step">
              {instruction.step}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default RecipeInstructions;
