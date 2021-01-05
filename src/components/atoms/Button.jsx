import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/atoms/Button.scss";

const LinkButton = ({ text, path, className }) => {
  return (
    <Link to={path} className={className}>
      <button className="link-button">{text}</button>
    </Link>
  );
};

export default LinkButton;
