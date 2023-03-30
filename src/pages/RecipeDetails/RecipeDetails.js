import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  useParams("/:id");
  return <h1>Recipe Details</h1>;
};

export default RecipeDetails;
