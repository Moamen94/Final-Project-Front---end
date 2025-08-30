import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../Style/HomeCard.css";

const features = [
  {
    title: "Quality Education",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    title: "Experienced Teachers",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    title: "Delicious Food",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
];

function HomeCard() {
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div className="card" key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>

          {/* 🔹 الزر كرابط لصفحة /courses */}
          <Link to="/courses" className="readmore-btn">
            <span className="circle"></span>
            <span className="text">READ MORE</span>
            <FaArrowRight className="icon" />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default HomeCard;
