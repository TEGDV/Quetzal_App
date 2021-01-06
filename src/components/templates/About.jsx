import React from "react";
import AboutProfile from "../organisms/AboutProfile.jsx";
import Button from "../atoms/Button.jsx";
import "../../assets/styles/templates/About.scss";
const About = () => {
  return (
    <section className="about">
      <AboutProfile
        text="Producto de toda el talento e inspiracion que he logrado con esta hermosa pasion que tengo por la tecnologia cree Quetzal como representacion de mi esensia en el ambito profesional."
        imageUrl="https://imgur.com/GXlyqsh.png"
        fullName="Jair Aguilar Peña"
        role="Back End Developer"
      />
      <div className="container__buttons">
        <Button path="/" text="Dowloand CV" />
        <Button path="/" text="Get In Touch" />
      </div>
    </section>
  );
};

export default About;
