import { NavLink } from "react-router-dom";
import IcnExplore from "../Icons/IcnExplore";
import IcnCookBook from "../Icons/IcnCookBook";
import "./NavBar.scss";
import { useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <>
      <nav className="navigation">
        <NavLink
          className="navigation__link"
          to="/"
          onClick={() => setIsActive(1)}
        >
          <IcnExplore isActive={isActive === 1 ? true : false} />
          Discover
        </NavLink>
        <NavLink
          className="navigation__link"
          to="/cookbook"
          onClick={() => setIsActive(2)}
        >
          <IcnCookBook isActive={isActive === 2 ? true : false} />
          My Cookbook
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
