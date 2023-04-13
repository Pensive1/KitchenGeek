import Utensils from "../Illustrations/Utensils";
import "./PlaceholderContent.scss";

const EmptyCookbook = () => {
  return (
    <>
      <div className="placeholder">
        <Utensils />
        <p className="placeholder__txt">Your cookbook is empty</p>
      </div>
    </>
  );
};

export default EmptyCookbook;
