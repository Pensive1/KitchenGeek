import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <>
      <h1>Discover Page</h1>
      <Link to="/recipe">
        <p>Sample recipe</p>
      </Link>
    </>
  );
};

export default Discover;
