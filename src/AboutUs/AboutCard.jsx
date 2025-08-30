import React from "react";
import "../Style/AboutCard.css"; 



export default function AboutCard() {
  const cards = [
    {
      id: 1,
      title: "Quality Education",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      buttonLabel: "EXPLORE COURSES",
    },
    {
      id: 2,
      title: "Experienced Teachers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      buttonLabel: "EXPLORE COURSES",
    },
    {
      id: 3,
      title: "Delicious Food",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      buttonLabel: "EXPLORE COURSES",
    },
  ];

  return (
    <section className="card-section">
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
 <a href="#" className="card-button">
  <span className="bg-circle" aria-hidden="true"></span>
  <span className="label">EXPLORE COURSES</span>
  <span className="arrow">→</span>
</a>
          </div>
        ))}
      </div>
    </section>
  );
}
