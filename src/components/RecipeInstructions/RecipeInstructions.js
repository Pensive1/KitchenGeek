const RecipeInstructions = ({ steps }) => {
  return (
    <section>
      <h4>Instructions</h4>
      <ol>
        {steps.map((instruction, index) => {
          return <li key={index}>{instruction.step}</li>;
        })}
      </ol>
    </section>
  );
};

export default RecipeInstructions;
