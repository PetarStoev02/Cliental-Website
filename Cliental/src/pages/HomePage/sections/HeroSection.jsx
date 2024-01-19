import "./HeroSection.css";
import React from "react";
import videoBG from "../../../assets/videoBg.mp4";
import ContactButton from "../../../components/ContactButton/ContactButton";

const HeroSection = () => {
  return (
    <div className="hero-wraper">
      <video src={videoBG} autoPlay loop muted />
      <div className="content">
        <div className="text">
          <h1>
            Спомагаме за Вашето <br />
            <span>Дигитално развитие</span>
          </h1>
          <h2>
            Вашият успех е нашата страст - Растем заедно във виртуалния свят на
            възможностите.
          </h2>
        </div>

        <ContactButton />
      </div>
    </div>
  );
};

export default HeroSection;
