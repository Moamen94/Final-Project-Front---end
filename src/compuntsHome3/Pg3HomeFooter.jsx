import React from 'react';
import '../Style/Pg3HomeFooter.css'; 


import awardIcon from '../assets/reword.png';
import teacher1 from '../assets/tescher man.png';
import teacher2 from '../assets/tescher 2.png';
import trainedtescher from '../assets/trainedtechers.png'


const Pg3HomeFooter = () => {
  return (
    <div className="hero-section-container">
      
      <div className="hero-content">
        <p className="subtitle">Best Online Learning Platform</p>
        <h1 className="main-title">
          One Platfrom & Many <span className="highlight-text">Courses</span> For You
        </h1>
        <p className="description">
          From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.
        </p>

        
        <ul className="features-list">
          <li className="feature-item">
            <span className="check-icon">✓</span> 9/10 Average Satisfaction Rate
          </li>
          <li className="feature-item">
            <span className="check-icon">✓</span> 96% Completitation Rate
          </li>
          <li className="feature-item">
            <span className="check-icon">✓</span> Friendly Environment & Expert Teacher
          </li>
        </ul>

 <button className="explore-button" type="button">
  <span className="circle" aria-hidden="true"></span>
  <span className="label">EXPLORE OUR COURSES</span>
  <span className="arrow" aria-hidden="true">→</span>
</button>

      </div>

      
      <div className="hero-images">
        <div className="card-top">
          
          <div className="award-card card">
            <img src={awardIcon} alt="Award Icon" className="card-icon" />
         
          </div>
          
          <div className="teacher-card card">
            <img src={teacher2} alt="Teacher" className="teacher-image" />
          </div>
        </div>

        <div className="card-bottom">
          
          <div className="teacher-card card">
            <img src={teacher1} alt="Teacher" className="teacher-image" />
            <div className="contact-icons">
            </div>
          </div>
          
          <div className="trained-teachers-card card">
            <img src={trainedtescher}/>
            <div className="teacher-avatars">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg3HomeFooter;