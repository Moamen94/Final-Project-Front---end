import React from 'react';
import '../Style/Pg2up.css'; 
import heroImage from "../assets/Pg2up.png";

function Pg2up() {
  return (
    <div className="hero-container">
      <div className="image-content">
        <img src={heroImage} alt="Professional woman" className="hero-image" />
        
      </div>
      <div className="text-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages. From blogs to emails to ad copies, auto-generate catchy and high-converting copies.
        </p>
        <br />

        <p className="darker-text">
          Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy
        </p>
        
        <button className="explore-btn">
          Explore More
        </button>

        <div className="courses-header"> 
          <div className="header-line">
            <span>POPULAR COURSES</span>
          </div>
          <h2 className="header-title">
            Choose Our <span className="highlight">Top Courses</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Pg2up;