import React from "react";
import Avatar from "../atoms/Avatar.jsx";
import Title from "../atoms/Title.jsx";
import BodyText from "../atoms/BodyText.jsx";
import feather from "../../assets/static/feather.png";
import "../../assets/styles/organisms/AboutProfile.scss";

const AboutProfile = ({ fullName, role, imageUrl, text }) => {
  return (
    <div className="profile__container">
      <Avatar size="150px" imageUrl={imageUrl} />
      <Title text={fullName} />
      <h6 className="role">{role}</h6>
      <img src={feather} alt="Black Feather image" />
      <BodyText className="intro" text={text} />
    </div>
  );
};

export default AboutProfile;
