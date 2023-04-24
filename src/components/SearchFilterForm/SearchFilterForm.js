import filterData from "../../data/filterOptions.json";
import "./SearchFilterForm.scss";

const { cuisines, diets, times } = filterData;

const SearchFilterForm = ({ onClick, filters }) => {
  return (
    <>
      <div className="filter__content">
        <div className="filter__ingred-search">
          <input
            className="filter__checkbox"
            type="checkbox"
            name="ingredients"
            checked={filters.filterIngredient}
            onChange={(e) => {
              filters.setFilterIngredient(e.target.checked);
            }}
          ></input>
          <label htmlFor="ingredients">Ingredient</label>
        </div>
        <fieldset
          className="filter__fieldset"
          disabled={filters.filterIngredient}
        >
          <div className="filter__field">
            <label className="filter__label">Cuisine</label>
            <select
              className="filter__dropdown"
              name="cuisine"
              value={filters.filterCuisine}
              onChange={(e) => filters.setFilterCuisine(e.target.value)}
            >
              <option value=""></option>
              {cuisines.map((cuisine, index) => {
                return (
                  <option key={index} value={cuisine}>
                    {cuisine}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="filter__field">
            <label className="filter__label" htmlFor="diet">
              Diet
            </label>
            <select
              className="filter__dropdown"
              name="diet"
              value={filters.filterDiet}
              onChange={(e) => filters.setFilterDiet(e.target.value)}
            >
              <option value=""></option>
              {diets.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="filter__field">
            <label className="filter__label" htmlFor="type">
              Time
            </label>
            <select
              className="filter__dropdown"
              name="type"
              value={filters.filterTime}
              onChange={(e) => {
                filters.setFilterTime(e.target.value);
              }}
            >
              <option value=""></option>
              {times.map((timing, index) => {
                return (
                  <option key={index} value={timing}>
                    {timing}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>

        <button className="filter__button" type="submit" onClick={onClick}>
          Close
        </button>
      </div>
    </>
  );
};

export default SearchFilterForm;
