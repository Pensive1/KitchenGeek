import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import "./Searchbar.scss";

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [queryParams, setQueryParams] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
        navigate(`/results/${queryParams}${query}`);
        break;
      default:
        navigate(`/results/${query}${queryParams}`);
        break;
    }

    //Process object entries as url params (?...&...&)
    //if ingredients (use Object.hasOwn(obj, propName)) : Handle ingredient search
    //if no ingredients prop exist : carry out complex search (?diet="x"&type="x")
  };

  return (
    <form onSubmit={handleSearch} method="dialog">
      <input
        type="search"
        name="recipeSearch"
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
    </form>
  );
};

export default Searchbar;
