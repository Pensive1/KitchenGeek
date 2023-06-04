import { Link } from "react-router-dom";

const AuthRegister = ({ setAuthAction }) => {
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

        <button type="submit">Continue</button>
      </form>

      <div>
        <p>Already have an account?</p>
        <Link onClick={() => setAuthAction(true)}>Sign in</Link>
      </div>
    </>
  );
};

export default AuthRegister;
