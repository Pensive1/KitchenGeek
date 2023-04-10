import IngredientList from "../IngredientList/IngredientList";
import RecipeInstructions from "../RecipeInstructions/RecipeInstructions";
import "./Tabs.scss";
import { useState } from "react";

const Tabs = ({ ingredients, servings, steps }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="recipe__temp-mob-section">
        <nav className="recipe__content-tabs">
          <ul className="recipe__tab-list">
            <div
              className={
                toggleState === 1
                  ? "recipe__tab-link recipe__tab-link--active"
                  : "recipe__tab-link"
              }
              onClick={() => toggleTab(1)}
            >
              <li className="recipe__tab-option">Ingredients</li>
            </div>
            <div
              className={
                toggleState === 2
                  ? "recipe__tab-link recipe__tab-link--active"
                  : "recipe__tab-link"
              }
              onClick={() => toggleTab(2)}
            >
              <li className="recipe__tab-option">Instructions</li>
            </div>
          </ul>
        </nav>
        <div className="recipe__tab-content">
          {toggleState === 1 && (
            <IngredientList ingredients={ingredients} servings={servings} />
          )}
          {toggleState === 2 && <RecipeInstructions steps={steps} />}
        </div>
      </section>
    </>
  );
};

export default Tabs;
