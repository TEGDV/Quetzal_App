import React from "react";
import HeroTopicText from "../molecules/HeroTopicText.jsx";
import { Link } from "react-router-dom";
import Bubble from "../atoms/Bubble.jsx";
import "../../assets/styles/organisms/HeroTopic.scss";
const HeroTopic = ({ topicTitle, text }) => {
  return topicTitle === "Software Development" ? (
    <HeroTopicText topicTitle={topicTitle} text={text} />
  ) : (
    <Link to={`/${topicTitle}`} className="herotopic" id={topicTitle}>
      <Bubble />
      <HeroTopicText topicTitle={topicTitle} text={text} />
    </Link>
  );
};

export default HeroTopic;
