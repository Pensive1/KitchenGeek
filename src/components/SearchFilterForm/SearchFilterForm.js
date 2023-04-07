import filterData from "../../data/filterOptions.json";

const { cuisines, diets, times } = filterData;

const SearchFilterForm = () => {
  return (
    <>
      <h3>Filter by</h3>
      <input type="checkbox" name="byIngredient"></input>
      <label htmlFor="byIngredient">By ingredient</label>

      <fieldset>
        <select name="cuisine">
          <option value=""></option>
          {cuisines.map((cuisine, index) => {
            return (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            );
          })}
        </select>
        <label>Cuisine</label>

        <select name="diet">
          <option value=""></option>
          {diets.map((type, index) => {
            return (
              <option key={index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        <label htmlFor="diet">Diet</label>

        <select name="time">
          <option value=""></option>
          {times.map((timing, index) => {
            return (
              <option key={index} value={timing}>
                {timing}
              </option>
            );
          })}
        </select>
        <label htmlFor="time">Time</label>
      </fieldset>

      <button type="submit">Close</button>
    </>
  );
};

export default SearchFilterForm;
