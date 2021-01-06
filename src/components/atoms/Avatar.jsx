import React from "react";
import "../../assets/styles/atoms/Avatar.scss";
const Avatar = ({ imageUrl, size }) => {
  return (
    <img
      width={size}
      height={size}
      src={imageUrl}
      alt="Avatar Image"
      className="avatar"
    />
  );
};

export default Avatar;
