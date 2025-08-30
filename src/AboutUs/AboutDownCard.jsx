
import React from 'react';

import '../Style/AboutDownCard.css';
import { CiFaceSmile } from "react-icons/ci";
import { ImFilesEmpty } from "react-icons/im";
import { LiaHeadsetSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
const AboutDownCard = () => {
  const stats = [
    {
    
      icon: <CiFaceSmile />,
      number: 154,
      label: 'Enrolled Students',
      color: '#6366f1',
    },
    {
   
      icon: < ImFilesEmpty/>,
      number: 94,
      label: 'Academic Programs',
      color: '#f97316',
    },
    {
   
      icon: <LiaHeadsetSolid  />,
      number: 29,
      label: 'Winning Award',
      color: '#22c55e',
    },
    {
      
      icon: <IoPersonOutline />,
      number: 17,
      label: 'Certified Students',
      color: '#ec4899',
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="icon" style={{ color: stat.color }}>
            {stat.icon}
          </div>
          <div className="number">{stat.number}</div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutDownCard;