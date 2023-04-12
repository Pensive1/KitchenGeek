import { useState, useRef } from "react";
import filterData from "../../data/filterOptions.json";
import "./SearchFilterForm.scss";

const { cuisines, diets, times } = filterData;

const SearchFilterForm = ({ onClick, setQueryParams }) => {
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
      setQueryParams(parseParams(filterValues));
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
      // console.log(valueSet);
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
            onChange={(e) => {
              getFilterValues(e);
              disableFieldset(e);
            }}
          ></input>
          <label htmlFor="ingredients">By ingredient</label>
        </div>
        <fieldset className="filter__fieldset" ref={extraAttrs}>
          <div className="filter__field">
            <label className="filter__label">Cuisine</label>
            <select
              className="filter__dropdown"
              name="cuisine"
              onChange={(e) => getFilterValues(e)}
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
              onChange={(e) => getFilterValues(e)}
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
              onChange={(e) => {
                getFilterValues(e);
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
          Close
        </button>
      </div>
    </>
  );
};

export default SearchFilterForm;
