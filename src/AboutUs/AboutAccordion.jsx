import React, { useState } from "react";
import "../Style/AboutAccordion.css";
import Accordion from '../assets/AboutAccordion.png';

const faqs = [
  {
    question: "What does it take excellent author?",
    answer:
      "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
  },
  {
    question: "Who will view my content?",
    answer: "Your content will be visible to the audience you target and publish for.",
  },
  {
    question: "What does it take become an author?",
    answer: "Consistency, creativity, and understanding your readers’ needs.",
  },
  {
    question: "How to Change my Password easily?",
    answer: "You can change your password by going to settings > account > change password.",
  },
 
  {
    question: "How does it create content?",
    answer: "It uses advanced AI algorithms to generate content quickly and effectively.",
  },
];

export default function AboutAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
     
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      
      <div className="faq-image">
        <img
          src={Accordion}
          alt="Author"
        />
      </div>
    </div>
  );
}
