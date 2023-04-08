import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import "./Searchbar.scss";

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [queryParams, setQueryParams] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
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
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name="recipeSearch"
        placeholder={searchPlaceholder}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Link onClick={() => (modalOpen ? close() : open())}>Filters</Link>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setQueryParams={setQueryParams}
          handleClose={close}
        />
      )}
      {/* <div className="search__params">
        <Link>Cuisine</Link>
        <Link>Ingredient</Link>
        <Link>Diet</Link>
        <Link>Time</Link>
      </div> */}
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
