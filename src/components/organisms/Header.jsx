import React from "react";
import Logo from "../atoms/Logo.jsx";
import "../../assets/styles/organisms/Header.scss";
import { Link, NavLink } from "react-router-dom";
import InfoText from "../atoms/InfoText.jsx";
const Header = () => {
  return (
    <header className="header">
      <nav className="header__container">
        <NavLink to="/Products" activeClassName="selectedLink">
          <InfoText text="Products" />
        </NavLink>
        <NavLink to="/Portfolio" activeClassName="selectedLink">
          <InfoText text="Portfolio" />
        </NavLink>
        <Link to="/">
          <Logo className="logo__header" />
        </Link>
        <NavLink to="/About" activeClassName="selectedLink">
          <InfoText text="About" />
        </NavLink>
        <NavLink to="/Blog" activeClassName="selectedLink">
          <InfoText text="Blog" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
