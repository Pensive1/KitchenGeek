import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import "./Searchbar.scss";

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  // + queryParams in state

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/results/${query}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name="recipeSearch"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Link>Filters</Link>
      <Modal />
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
