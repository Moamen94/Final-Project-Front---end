import React from 'react';
import '../Style/Pg2card.css'
import { Link } from "react-router-dom";


import busnissCourseImage from '../assets/busnisscours.png'
import finansCourseImage from '../assets/finanscoures.png'
import uxCourseImage from '../assets/uxcoures.png'
import digtalProgramImage from '../assets/digtalprogram.png'
import dataSeinesImage from '../assets/dataseines.png'
import uiDesignImage from '../assets/uidisign.png';






const courses = [
  {
    image: busnissCourseImage,
    price: '$265',
    category: 'Business',
    title: 'Financial Security Thinking And Principles Theory',
    lessons: 6,
    hours: 4,
    rating: 4.50,
    level: 'All Levels'
  },
  {
    image: finansCourseImage,
    price: '$250',
    category: 'Finance',
    title: 'Professional Ceramic Moulding For Beginners',
    lessons: 15,
    hours: 4,
    rating: 5.00,
    level: 'All Levels'
  },
  {
    image: uxCourseImage,
    price: 'Free',
    category: 'UI/UX Design',
    title: 'Basic Fundamentals Of Interior & Graphics Design',
    lessons: 16,
    hours: 22.5,
    rating: 5.00,
    level: 'Intermediate'
  },
  {
    image: digtalProgramImage ,
    price: 'Free',
    category: 'Digital Program',
    title: 'WordPress For Beginners - Master WordPress',
    lessons: 15,
    hours: 7.5,
    rating: 4.33,
    level: 'Beginner'
  },
  {
    image: dataSeinesImage ,
    price: '$300',
    category: 'Data Science',
    title: 'The Complete Python Course For Beginner 2023',
    lessons: 14,
    hours: 18.33,
    rating: 4.00,
    level: 'Intermediate'
  },
  {
    image: uiDesignImage ,
    price: 'Free',
    category: 'UI/UX Design',
    title: 'Ultimate Photoshop Training: From Beginner',
    lessons: 14,
    hours: 13.33,
    rating: 3.33,
    level: 'All Levels'
  }
];

const CourseCard = ({ course }) => {
  const { image, price, category, title, lessons, hours, rating, level } = course;
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img src={image} alt={title} className="course-image" />
        <span className={`course-price ${price === 'Free' ? 'free' : ''}`}>{price}</span>
      </div>
      <div className="course-content">
        <span className="course-category">{category}</span>
        <h3 className="course-title">{title}</h3>
        <div className="course-meta">
          <span>
            <i className="fas fa-book-open"></i> {lessons} Lessons
          </span>
          <span>
            <i className="fas fa-clock"></i> {hours} hours
          </span>
          <span>
            <i className="fas fa-star"></i> {rating.toFixed(2)}
          </span>
          <span className="course-level">
            <i className="fas fa-chart-line"></i> {level}
          </span>
        </div>
      </div>
    </div>
  );
};


const App3 = () => {
  return (
    <div className="container container-grid">
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link 
  to="/courses" 
  className="view-all-btn"
  onClick={() => window.scrollTo(0, 0)}
>
  View All Courses
</Link>

    </div>
  );
};
export default App3
