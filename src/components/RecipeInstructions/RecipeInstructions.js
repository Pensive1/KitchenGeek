import MissingSteps from "../placeholders/MissingSteps";
import "./RecipeInstructions.scss";
const RecipeInstructions = ({ steps, recipeUrl }) => {
  // console.log(steps);

  // console.groupEnd();
  return (
    <section className="recipe__instructions">
      <h4 className="recipe__heading recipe__heading--instruction --hidden-mobile">
        Instructions
      </h4>
      <ol className="recipe__steps">
        {steps ? (
          steps.map((instruction, index) => {
            return (
              <li key={index} className="recipe__step">
                {instruction.step}
              </li>
            );
          })
        ) : (
          <MissingSteps recipeUrl={recipeUrl} />
        )}
      </ol>
    </section>
  );
};

export default RecipeInstructions;
