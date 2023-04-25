import Food from "../Illustrations/Food";
import "./PlaceholderContent.scss";

const LoadingRecipe = () => {
  return (
    <>
      <div className="placeholder">
        <Food />
        <p className="placeholder__txt">Loading recipe</p>
      </div>
    </>
  );
};

export default LoadingRecipe;
