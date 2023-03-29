import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Discover</Link>
      <Link to="/cookbook">My Cookbook</Link>
      <Link to="/shopping">Shopping List</Link>
    </>
  );
};

export default NavBar;
