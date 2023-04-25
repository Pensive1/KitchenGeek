import Food from "../Illustrations/Food";
import "./PlaceholderContent.scss";

const LoadingRecipes = () => {
  return (
    <>
      <div className="placeholder">
        <Food />
        <p className="placeholder__txt">Loading recipes</p>
      </div>
    </>
  );
};

export default LoadingRecipes;
