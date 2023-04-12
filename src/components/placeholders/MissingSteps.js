import { Link } from "react-router-dom";
import KnifeChoppingBoard from "../Illustrations/KnifeChoppingBoard";
import "./PlaceholderContent.scss";

const MissingSteps = ({ recipeUrl }) => {
  return (
    <>
      <div className="placeholder">
        <KnifeChoppingBoard />
        <p className="placeholder__txt">
          Oops! We couldn't load the instructions.
        </p>
        <Link to={recipeUrl} className="placeholder__cta" target="_blank">
          View recipe website
        </Link>
      </div>
    </>
  );
};

export default MissingSteps;
