import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import filterData from "../../data/filterOptions.json";
import Modal from "../../components/Modal/Modal.js";
import IcnFilter from "../Icons/IcnFilter.js";
import "./Searchbar.scss";

const { cuisines, diets, times } = filterData;

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);

  const [filterIngredient, setFilterIngredient] = useState(false);
  const [filterCuisine, setFilterCuisine] = useState("");
  const [filterDiet, setFilterDiet] = useState("");
  const [filterTime, setFilterTime] = useState("");

  const searchForm = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);

  const searchPlaceholder = filterIngredient
    ? "Find recipes by ingredient"
    : "Find a recipe";

  //Modal controls
  const close = () => {
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  // Disable fieldset (when ingredient checked)
  // const disableFieldset = () => {
  //   const valueSet = { ...filterValues };

  //   if (filterIngredient === true) {

  //     clearField(cuisineDropdown, setFilterCuisine);
  //     clearField(dietDropdown, setFilterDiet);
  //     clearField(timeDropdown, setFilterTime);

  //     Object.keys(valueSet).forEach((key) => delete valueSet[key]);
  //     valueSet.ingredients = filterIngredient;
  //     setFilterValues(valueSet);
  //   } else {
  //     valueSet.ingredients = filterIngredient;
  //     setFilterValues(valueSet);
  //   }
  // };

  //Track filters
  // const getFilterValues = () => {
  //   const trackedFilters = [
  //     filterIngredient,
  //     filterCuisine,
  //     filterDiet,
  //     filterTime,
  //   ];
  //   const valueSet = { ...filterValues };
  //   // console.log(valueSet);

  //   trackedFilters.map((filterObj) => {
  //     Object.entries(filterObj).forEach(([fKey, fValue]) => {
  //       if (fValue === {} || fValue === false || fValue === "") {
  //         delete valueSet[fKey];
  //       } else {
  //         valueSet[fKey] = fValue;
  //       }
  //     });
  //     // console.log(valueSet);

  //     // console.log(filterVal);
  //   });
  // };

  //Serialise parameters
  const parseParams = (filterObj) => {
    const paramStr = `${Object.entries(filterObj)
      .map((param, paramValue) => param.join("="))
      .join("&")}`;
    return paramStr;
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = Object.fromEntries(new FormData(searchForm.current));
    const searchParams = Object.entries(searchData).filter(
      ([key, value]) => value !== ""
    );

    // If array contains "ingredients"
    const ingredientsIndex = searchParams.findIndex(
      ([param, value]) => param === "ingredients"
    );

    // Bring to the start
    if (ingredientsIndex > -1) {
      [searchParams[0], searchParams[ingredientsIndex]] = [
        searchParams[ingredientsIndex],
        searchParams[0],
      ];
    }

    const searchParamsObj = Object.fromEntries(searchParams);

    console.log(searchParamsObj);

    // // filter search navigation here
    // //Search query only
    if (
      Object.entries(searchParamsObj).length === 1 &&
      Object.hasOwn(searchParamsObj, "mainQuery")
    ) {
      navigate(`/results/${searchParamsObj.mainQuery}`);
    }

    // // Ingredient search
    if (
      Object.entries(searchParamsObj).length > 1 &&
      Object.hasOwn(searchParamsObj, "ingredients")
    ) {
      navigate(`/results?ingredients=${query}`);
    }

    // // Complex search
    if (
      Object.entries(searchParamsObj).length > 1 &&
      !Object.hasOwn(searchParamsObj, "ingredients")
    ) {
      navigate(`/results?${encodeURI(parseParams(searchParamsObj))}`);
    }

    // switch (searchParamsObj) {
    //   //if no params
    //   case Object.entries(searchParamsObj).length === 1 &&
    //     Object.hasOwn(searchParamsObj, "mainQuery"):
    //     navigate(`/results/${searchParamsObj.mainQuery}`);
    //     break;
    //   case "?ingredients=":
    //     navigate(`/results${queryParams}${query}`);
    //     break;
    // default:
    //   navigate(`/results${queryParams}${query ? `&query=${query}` : ""}`);
    //   break;
    // }
  };

  return (
    <form className="search" onSubmit={handleSearch} ref={searchForm}>
      <div className="search__main">
        <input
          className="search__bar"
          type="search"
          name="mainQuery"
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
            handleClose={close}
            filters={{
              setFilterIngredient,
              setFilterCuisine,
              setFilterDiet,
              setFilterTime,
              filterIngredient,
              filterCuisine,
              filterDiet,
              filterTime,
            }}
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
            checked={filterIngredient}
            onChange={(e) => {
              setFilterIngredient(e.target.checked);
              // disableFieldset();
            }}
          ></input>
          <label htmlFor="ingredients">By ingredient</label>
        </div>

        <fieldset className="filter__fieldset" disabled={filterIngredient}>
          <div className="filter__field">
            <label className="filter__label">Cuisine</label>
            <select
              className="filter__dropdown"
              name="cuisine"
              onChange={(e) => {
                setFilterCuisine(e.target.value);
              }}
              value={filterCuisine}
            >
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
            <select
              className="filter__dropdown"
              name="diet"
              value={filterDiet}
              onChange={(e) => {
                setFilterDiet(e.target.value);
              }}
            >
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
            <select
              className="filter__dropdown"
              name="type"
              value={filterTime}
              onChange={(e) => {
                setFilterTime(e.target.value);
              }}
            >
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
