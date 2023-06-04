import { Link } from "react-router-dom";

const AuthLogin = ({ setAuthAction }) => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="usrEmail">Email</label>
          <input type="email" name="usrEmail" id="usrEmail" />
        </div>

        <div>
          <label htmlFor="usrPassword">Password</label>
          <input type="password" name="usrPassword" id="usrPassword" />
        </div>

        <button type="submit">Login</button>
      </form>

      <div>
        <p>Dont have an account?</p>
        <Link onClick={() => setAuthAction(false)}>Create account</Link>
      </div>
    </>
  );
};

export default AuthLogin;
