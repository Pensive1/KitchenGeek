import { useState } from "react";
import filterData from "../../data/filterOptions.json";
const { cuisines, diets, times } = filterData;

const SearchFilterForm = ({ onClick, setQueryParams }) => {
  const [filterValues, setFilterValues] = useState({});

  const getFilterValues = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    if (value !== "") {
      setFilterValues({ ...filterValues, [field]: value });
    } else {
      const valueSet = { ...filterValues };
      delete valueSet[field];
      setFilterValues(valueSet);
    }
  };

  const saveParamsOnClose = (e) => {
    e.preventDefault();
    setQueryParams(filterValues);
    onClick();
  };

  return (
    <>
      <h3>Filter by</h3>
      <div className="__ingred-search">
        <input type="checkbox" name="byIngredient"></input>
        <label htmlFor="byIngredient">By ingredient</label>
      </div>

      <fieldset>
        <label>Cuisine</label>
        <select name="cuisine" onChange={(e) => getFilterValues(e)}>
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
        <select name="diet" onChange={(e) => getFilterValues(e)}>
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
