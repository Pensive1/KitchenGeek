import { useState, useRef } from "react";
import filterData from "../../data/filterOptions.json";
import "./SearchFilterForm.scss";

const { cuisines, diets, times } = filterData;

const SearchFilterForm = ({ onClick, setQueryParams, filters }) => {
  const [filterValues, setFilterValues] = useState({});
  const extraAttrs = useRef(null);
  const cuisineDropdown = useRef(null);
  const dietDropdown = useRef(null);
  const timeDropdown = useRef(null);

  const getFilterValues = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const valueSet = { ...filterValues };

    //Store params in state
    if (value === "on" && checked) {
      setFilterValues({ ...filterValues, [field]: "" });
    } else if (value === "on" && !checked) {
      delete valueSet[field];
      setFilterValues(valueSet);
    } else if (value !== "") {
      setFilterValues({ ...filterValues, [field]: value });
    } else if (value === "") {
      delete valueSet[field];
      setFilterValues(valueSet);
    }
  };

  const parseParams = () => {
    const paramStr = `?${Object.entries(filterValues)
      .map((param) => param.join("="))
      .join("&")}`;
    return paramStr;
  };

  const saveParamsOnClose = (e) => {
    e.preventDefault();
    if (Object.keys(filterValues).length > 0) {
      setQueryParams(parseParams());
    }
    onClick();
  };

  const disableFieldset = (e) => {
    const checkBxName = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      const valueSet = { ...filterValues };
      extraAttrs.current.setAttribute("disabled", null);

      cuisineDropdown.current.value = "";
      dietDropdown.current.value = "";
      timeDropdown.current.value = "";

      Object.keys(valueSet).forEach((key) => delete valueSet[key]);
      valueSet[checkBxName] = "";
      setFilterValues(valueSet);
    } else {
      extraAttrs.current.removeAttribute("disabled");
    }
  };

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
          ref={extraAttrs}
          disabled={filters.filterIngredient}
        >
          <div className="filter__field">
            <label className="filter__label">Cuisine</label>
            <select
              className="filter__dropdown"
              name="cuisine"
              value={filters.filterCuisine}
              onChange={(e) => filters.setFilterCuisine(e.target.value)}
              ref={cuisineDropdown}
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
              ref={dietDropdown}
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
              ref={timeDropdown}
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

        <button
          className="filter__button"
          type="submit"
          onClick={(e) => {
            saveParamsOnClose(e);
          }}
        >
          Save and close
        </button>
      </div>
    </>
  );
};

export default SearchFilterForm;
