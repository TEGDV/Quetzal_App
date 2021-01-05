import React from "react";
import TopicText from "../atoms/TopicText.jsx";
import SubtitleText from "../atoms/SubtitleText.jsx";
import "../../assets/styles/molecules/HeroTopicText.scss";

const HeroTopicText = ({ topicTitle, text }) => (
  <div className="herotopic__text" id={topicTitle}>
    <SubtitleText text={topicTitle} />
    <TopicText text={text} />
  </div>
);

export default HeroTopicText;
