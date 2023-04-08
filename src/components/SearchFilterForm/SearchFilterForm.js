import { useState, useRef } from "react";
import filterData from "../../data/filterOptions.json";
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
      <h3>Filter by</h3>
      <div className="__ingred-search">
        <input
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
        <label>Cuisine</label>
        <select
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

        <label htmlFor="diet">Diet</label>
        <select
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

        <label htmlFor="type">Time</label>
        <select
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
      </fieldset>

      <button
        type="submit"
        onClick={(e) => {
          saveParamsOnClose(e);
        }}
      >
        Close
      </button>
    </>
  );
};

export default SearchFilterForm;
