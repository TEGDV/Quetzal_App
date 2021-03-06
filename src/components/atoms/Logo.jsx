import React from "react";
import logo from "../../assets/static/logo_quetzal.png";
import "../../assets/styles/atoms/Logo.scss";

const Logo = ({ className }) => (
  <img className={className} src={logo} alt="Quetzal Logo" />
);
export default Logo;
