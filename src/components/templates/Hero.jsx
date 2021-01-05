import React from "react";
import Logo from "../atoms/Logo.jsx";
import LinkButton from "../atoms/Button.jsx";
import Footer from "../organisms/Footer.jsx";
import SocialMedia from "../molecules/SocialMedia.jsx";
import HeroTopic from "../organisms/HeroTopic.jsx";
import "../../assets/styles/templates/Hero.scss";
const Hero = () => {
  return (
    <div className="herocontainer">
      <Logo />
      <HeroTopic
        topicTitle="Software Development"
        text="Make Your Big Ideas Come True"
      />
      <LinkButton className="linkButton" text="Get In Touch" path="/" />
      <HeroTopic
        topicTitle="Portfolio"
        text="This Kind Of Dreams Could Be Real"
      />
      <HeroTopic topicTitle="About" text="Who Are Behind Quetzal" />
      <HeroTopic
        topicTitle="Products"
        text="Some Magic Already Exist Just Take A Look"
      />
      <HeroTopic topicTitle="Blog" text="Stories Makes Everything Better" />
      <Footer>
        <SocialMedia />
      </Footer>
    </div>
  );
};

export default Hero;
