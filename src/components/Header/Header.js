import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import IcnExplore from "../Icons/IcnExplore";
import IcnCookBook from "../Icons/IcnCookBook";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <h4>Kitchen Geek</h4>
        </Link>
        <nav className="header__links">
          <NavLink
            className="header__link"
            to="/"
            onClick={() => setIsActive(1)}
          >
            <IcnExplore isActive={isActive === 1 ? true : false} />
            Discover
          </NavLink>
          <NavLink
            className="header__link"
            to="/cookbook"
            onClick={() => setIsActive(2)}
          >
            <IcnCookBook isActive={isActive === 2 ? true : false} />
            My Cookbook
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
