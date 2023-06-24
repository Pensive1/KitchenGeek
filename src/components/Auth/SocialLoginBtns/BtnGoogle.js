import { Link } from "react-router-dom";

const BtnGoogle = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  return (
    <>
      <Link to={`${SERVER_URL}/auth/google`}>Continue with Google</Link>
    </>
  );
};

export default BtnGoogle;
