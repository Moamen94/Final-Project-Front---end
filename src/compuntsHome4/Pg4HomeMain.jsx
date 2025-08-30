import React from 'react';
import '../Style/Pg4HomeMain.css'; 
import { FaPaperPlane } from 'react-icons/fa'; 

const Pg4HomeMain = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">
        Subscribbe to our newsletter, <br /> We don't make any spam.
      </h2>
      <p className="newsletter-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim
      </p>
      <div className="newsletter-input-group">
        <input 
          type="email" 
          placeholder="Enter Your Email Address" 
          className="newsletter-input" 
        />
        <button className="newsletter-button">
          <FaPaperPlane className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Pg4HomeMain;