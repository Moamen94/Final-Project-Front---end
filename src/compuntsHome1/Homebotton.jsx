import React from "react";
import "../Style/Homebotton.css"; 


import businessIcon from "../assets/business.png";
import dataScienceIcon from "../assets/data-science.png";
import digitalIcon from "../assets/digital.png";
import financeIcon from "../assets/finance.png";
import physicsIcon from "../assets/physics.png";
import uiuxIcon from "../assets/uiux.png";


const courses = [
  { id: 1, title: "Business", courses: "1 Courses", icon: businessIcon, iconBgColor: '#e0e9ff' },
  { id: 2, title: "Data Science", courses: "1 Courses", icon: dataScienceIcon, iconBgColor: '#e9f7f5' },
  { id: 3, title: "Digital Program", courses: "2 Courses", icon: digitalIcon, iconBgColor: '#ffe9ee' },
  { id: 4, title: "Finance", courses: "2 Courses", icon: financeIcon, iconBgColor: '#f0f8ff' },
  { id: 5, title: "Modern Physics", courses: "3 Courses", icon: physicsIcon, iconBgColor: '#ffe9ee' },
  { id: 6, title: "UI/UX Design", courses: "3 Courses", icon: uiuxIcon, iconBgColor: '#e0e9ff' },
];

function Homebotton() {
  return (
    <section className="features">
      <div className="features-wrapper">
        <div className="start-learning-section">
          <span className="text">START LEARNING</span>
          <span className="line"></span>
        </div>
        
        <h2 className="features-title">
          Popular <span>Topics To Learn</span> From Today.
        </h2>
      
        <div className="cards-grid">
          {courses.map((item) => (
            <div key={item.id} className="card">
              
              <div className="card-content-wrapper"> 
                <div className="icon-wrapper" style={{ backgroundColor: item.iconBgColor }}>
                  <img src={item.icon} alt={item.title} className="card-icon" />
                </div>
                <div className="card-text-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="course-count">{item.courses}</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Homebotton;