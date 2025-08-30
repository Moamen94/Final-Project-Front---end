import React from "react";
import "../Style/HoMEHero.css";
import personImg from "../assets/person2.png"; 

function HoMEHero() {
  return (
    <section className="hero">
      <div className="hero-left">
      
        <img src={personImg} alt="Person" className="hero-img" />
      </div>

      <div className="hero-right">
        <h1>
          Learn New Skills To Go{" "}
          <span className="highlight">Ahead</span> <br />
          <span className="highlight">For Your</span> Career.
        </h1>
      </div>
    </section>
  );
}

export default HoMEHero;
