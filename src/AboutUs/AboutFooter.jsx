import React from 'react';
import '../Style/AboutFooter.css';
import { FaRegHeart} from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { LiaLightbulb } from "react-icons/lia";
import { IoIosMail } from "react-icons/io";

const Card = ({ title, description, icon, style }) => {
  return (
    <div style={style.card}>
      <div style={style.iconWrapper}>{icon}</div>
      <h3 style={style.cardTitle}>{title}</h3>
      <p style={style.cardDescription}>{description}</p>
    </div>
  );
};

const CardsSection = () => {
  const cardData = [
    {
      id: 1,
      title: "Learn More Anywhere",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      icon: <IoMdBook /> 
    },
    {
      id: 2,
      title: "Expert Instructor",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      icon: <FaRegHeart />
    },
    {
      id: 3,
      title: "Team Management",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      icon: <IoPersonOutline />
    },
    {
      id: 4,
      title: "Course Planning",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      icon: <MdOutlineVisibility/>
    },
    {
      id: 5,
      title: "Teacher Monitoring",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      icon: <LiaLightbulb />
    },
    {
      id: 6,
      title: "24/7 Strong Support",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
      icon: <IoIosMail  />
    },
  ];

  const styles = {
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      padding: '50px 20px',
      justifyItems: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #f0f0f0',
      borderRadius: '10px',
      padding: '40px 30px',
      textAlign: 'right',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flexEnd',
    },
    iconWrapper: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
    },
    
    iconColors: [
      '#e6f6f2',
      '#f7e6f6',
      '#e6f2f7',
      '#f2f7e6',
      '#f7e6e6',
      '#e6f2e6',
    ],
  };

  return (
    <div style={styles.cardsContainer}>
      {cardData.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          icon={React.cloneElement(card.icon, { style: { fontSize: '30px', color: '#555' }})}
          style={{
            ...styles.card,
            iconWrapper: {
              ...styles.iconWrapper,
              backgroundColor: styles.iconColors[index],
            }
          }}
        />
      ))}
    </div>
  );
};

export default CardsSection;