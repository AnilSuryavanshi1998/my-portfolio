import React from "react";
import "./Hero.css";
import profilePic from "../assets/profile.jpg";  // import करो image

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Anil Suryavanshi</h1>
          <p>I'm a passionate Web Developer specializing in React and Java Backend.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Anil Suryavanshi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;





