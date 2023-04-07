import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import "./Searchbar.scss";

const Searchbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  // + queryParams in state

  const [modalOpen, setModalOpen] = useState(false);

  const close = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/results/${query}`);
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
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
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
