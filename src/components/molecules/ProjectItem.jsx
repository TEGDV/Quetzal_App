import React from "react";
import Subtitle from "../atoms/SubtitleText.jsx";
import BodyText from "../atoms/BodyText.jsx";
import "../../assets/styles/molecules/ProjectItem.scss";
const ProjectItem = ({ name, resume, url }) => (
  <div className="project__carousel-item">
    <a href={url} target="_blank" className="carousel-link">
      <Subtitle text={name} />
      <BodyText text={resume} />
    </a>
  </div>
);

export default ProjectItem;
