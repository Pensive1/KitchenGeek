import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import filterData from "../../data/filterOptions.json";
import Modal from "../../components/Modal/Modal.js";
import IcnFilter from "../Icons/IcnFilter.js";
import "./Searchbar.scss";

const { cuisines, diets, times } = filterData;

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [queryParams, setQueryParams] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const extraAttrs = useRef(null);
  const searchPlaceholder =
    queryParams === "?ingredients="
      ? "Find recipes by ingredient"
      : "Find a recipe";

  const close = () => {
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  const handleSearch = (e) => {
    e.preventDefault();

    //filter search navigation here
    switch (queryParams) {
      //if no params
      case "":
        navigate(`/results/${query}`);
        break;
      case "?ingredients=":
        navigate(`/results${queryParams}${query}`);
        break;
      default:
        navigate(`/results${queryParams}${query ? `&query=${query}` : ""}`);
        break;
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <div className="search__main">
        <input
          className="search__bar"
          type="search"
          name="recipeSearch"
          placeholder={searchPlaceholder}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Link
          className="search__filter-link"
          onClick={() => (modalOpen ? close() : open())}
        >
          <IcnFilter />
        </Link>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            setQueryParams={setQueryParams}
            handleClose={close}
          />
        )}
        <button className="search__submit" type="submit">
          Search
        </button>
      </div>

      <div className="search__filters">
        <div className="filter__ingred-search">
          <input
            className="filter__checkbox"
            type="checkbox"
            name="ingredients"
          ></input>
          <label htmlFor="ingredients">By ingredient</label>
        </div>
        <fieldset className="filter__fieldset" ref={extraAttrs}>
          <div className="filter__field">
            <label className="filter__label">Cuisine</label>
            <select className="filter__dropdown" name="cuisine">
              <option value="">Cuisine</option>
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
            <select className="filter__dropdown" name="diet">
              <option value="">Diet</option>
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
            <select className="filter__dropdown" name="type">
              <option value="">Time</option>
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
      </div>
    </form>
  );
};

export default Searchbar;
