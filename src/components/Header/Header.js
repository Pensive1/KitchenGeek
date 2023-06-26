import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { loggedInContext } from "../../App";
import IcnExplore from "../Icons/IcnExplore";
import IcnCookBook from "../Icons/IcnCookBook";
import "./Header.scss";

const Header = ({ isLoginModalActive, setShowLoginModal }) => {
  const [isActive, setIsActive] = useState(1);
  const loggedIn = useContext(loggedInContext);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link" onClick={() => setIsActive(1)}>
          <h2 className="header__logo">Kitchen Geek</h2>
        </Link>
        <nav className="header__links">
          <div className="header__links-primary">
            <NavLink
              className="header__link"
              to="/"
              onClick={() => setIsActive(1)}
            >
              <IcnExplore isActive={isActive === 1 ? true : false} />
              Discover
            </NavLink>

            {loggedIn && (
              <NavLink
                className="header__link"
                to="/cookbook"
                onClick={() => setIsActive(2)}
              >
                <IcnCookBook isActive={isActive === 2 ? true : false} />
                My Cookbook
              </NavLink>
            )}
          </div>

          <div className="header__links-secondary">
            {loggedIn ? (
              <Link className="header__link" to={"/profile"}>
                Profile
              </Link>
            ) : (
              <Link
                className="header__link"
                onClick={(e) => {
                  e.preventDefault();
                  isLoginModalActive
                    ? setShowLoginModal(false)
                    : setShowLoginModal(true);
                }}
              >
                Log in
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
