import { Link } from "react-router-dom";
import BtnGoogle from "./SocialLoginBtns/BtnGoogle";

const AuthLogin = ({ setAuthAction }) => {
  return (
    <>
      <div className="social-btns">
        <BtnGoogle />
      </div>
      <form>
        <div>
          <label htmlFor="usrEmail">Email</label>
          <input type="email" name="usrEmail" id="usrEmail" />
        </div>

        <div>
          <label htmlFor="usrPassword">Password</label>
          <input type="password" name="usrPassword" id="usrPassword" />
        </div>

        {/* Optional: Remember me checkbox */
        /* Optional: Forgot/reset password */}

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
