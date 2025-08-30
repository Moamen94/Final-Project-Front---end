import React from "react";
import "../Style/AboutProfiles.css"; 
import profiles1 from '../assets/profiles1.png';
import profiles2 from '../assets/profiles2.png';
import profiles3 from '../assets/profiles3.png';
import profiles4 from '../assets/profiles4.png';

export default function AboutProfiles() {

  const instructors = [
    {
      name: "Daniel Miller",
      title: "Logo Expert",
      courses: 3,
      students: 3,
      img: profiles1,
    },
    {
      name: "Masum Billah",
      title: "Developer",
      courses: 6,
      students: 5,
      img:profiles2,
    },
    {
      name: "Kenneth Renteria",
      title: "Marketer",
      courses: 0,
      students: 0,
      img:profiles3,
    },
    {
      name: "Richard Hood",
      title: "UI UX Designer",
      courses: 2,
      students: 0,
      img:profiles4,
    },
  ];
  
  return (
    <section className="instructors">
      <h2 className="section-title">Our Instructors</h2>
       <div className="cards-container">
        {instructors.map((i) => (
          <ProfileCard key={i.name} {...i} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({ name, title, img, courses, students }) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={img} alt={`${name} portrait`} />

      </div>
      <div className="card-body">
        <h3 className="name">{name}</h3>
        <p className="title">{title}</p>
        <div className="stats">
          <span>{courses} Courses</span>
          <span>{students} Students</span>
        </div>
      </div>
    </article>
  );
}
