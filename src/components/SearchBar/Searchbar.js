import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Searchbar.scss";
import { useState } from "react";

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
      <div className="search__params">
        <Link>Cuisine</Link>
        <Link>Ingredient</Link>
        <Link>Diet</Link>
        <Link>Time</Link>
      </div>
    </form>
  );
};

export default Searchbar;
