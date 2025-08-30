import React from 'react';
import '../Style/AboutHero.css';
import Abouthero from '../assets/AboutHero.png';

function AboutHero() {
  return (
    <section className="about-hero">
      
      <div className="about-image" aria-hidden="true">
        <img src={Abouthero} alt="About section illustration" />
      </div>

      <div className="about-content">
        <h1>
          Learn New Skills To Go <span className="highlight">Ahead</span> For Your Career.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. From blogs to emails to ad copies, auto-generate catchy,
          original, and high-converting copies in popular tones and languages.
        </p>
        <button type="button" className="explore-btn">Explore More</button>
      </div>
    </section>
  );
}

export default AboutHero;
