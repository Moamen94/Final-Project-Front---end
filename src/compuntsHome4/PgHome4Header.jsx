import React from 'react';
import '../Style/PgHome4Header.css';

import { CiCalendar } from "react-icons/ci";
import { MdOutlineContactPage } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { PiStarThin } from "react-icons/pi";
import { RxPilcrow } from "react-icons/rx";
import { BiSolidWindowAlt } from "react-icons/bi";


const PricingCard = ({ planName, price, perUnitText, features, buttonText, isFree, upgradeText }) => {
  return (
    <div className={`pricing-card ${isFree ? 'free-plan' : ''}`}>
      <div className="card-header">
        <h3 className="plan-name">{planName}</h3>
        <p className="price">
          {price}
          <span className="per-unit">{perUnitText}</span>
        </p>
        {upgradeText && <p className="upgrade-text">{upgradeText}</p>}
        
      </div>
      <div className="divider"></div>
      <ul className="features-list">
        {features.map((item, index) => (
          <li key={index} className="feature-item">

            {item.icon && <item.icon className="feature-icon" />}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <button className="start-button">{buttonText}</button>
      
    </div>
  );
};


const PgHome4Header = () => {
  
  const commonFeatures = [
    
    { text: "Learn at your own pace", icon: CiCalendar },
    { text: "Learn at your own pace", icon: MdOutlineContactPage },
    { text: "Learn at your own pace", icon: FcIdea },
    { text: "Learn at your own pace", icon: PiStarThin },
    { text: "Learn at your own pace", icon: BiSolidWindowAlt }, 
    { text: "Learn at your own pace", icon: RxPilcrow }
  ];

  return (
    <div className="pricing-plans-container">
      <PricingCard
        planName="Free"
        price="$0"
        perUnitText="/Month"
        upgradeText="Upgrade as you need"
        features={commonFeatures}
        buttonText="Start Now"
        isFree={true}
      />
      <PricingCard
        planName="Saver plan"
        price="$29"
        perUnitText="/Month"
        upgradeText= {"$348 Per Year"}

        features={commonFeatures}
        buttonText="Start Now"
      />
      <PricingCard
        planName="Unlimited plan"
        price="$49"
        perUnitText="/Month"
             upgradeText ={"$588 Per Year"}
        features={commonFeatures}
        buttonText="Start Now"
      />
    </div>
  );
};

export default PgHome4Header;