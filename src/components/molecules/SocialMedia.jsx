import React from "react";
import YoutubeIcon from "../atoms/IconYouTube.jsx";
import GoogleMailIcon from "../atoms/IconGmail.jsx";
import LinkedinIcon from "../atoms/IconLinkedin.jsx";
import GithubIcon from "../atoms/IconGitHub.jsx";
import TwitterIcon from "../atoms/IconTwitter.jsx";
import "../../assets/styles/molecules/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <YoutubeIcon />
      <TwitterIcon />
      <GithubIcon />
      <LinkedinIcon />
      <GoogleMailIcon />
    </div>
  );
};

export default SocialMedia;
