import React from "react";
import Logo from "../atoms/Logo.jsx";
import "../../assets/styles/organisms/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h4 className="header__container-item">Products</h4>
        <h4 className="header__container-item">Portfolio</h4>
        <Logo className="logo__header" />
        <h4 className="header__container-item">About</h4>
        <h4 className="header__container-item">Blog</h4>
      </div>
    </header>
  );
};

export default Header;
