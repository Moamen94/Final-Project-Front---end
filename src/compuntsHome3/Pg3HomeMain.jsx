import React from 'react';
import '../Style/Pg3HomeMain.css';


import nexeonLogo from '../assets/nexeonLogo.png';
import architectLogo from '../assets/Architect.png';
import buthersLogo from '../assets/buthersLogo.png';
import husorenLogo from '../assets/husorenLogo.png';
import hipstersLogo from '../assets/hipstersLogo.png';

const Pg3HomeMain= () => {
  return (
    <div className="client-logos-container">
      <div className="title-box">
        <h2 className="title-text">Trusted Company Arround The World!</h2>
      </div>
      <div className="logos-row">
        <img src={nexeonLogo} alt="Nexeon Techno" className="logo" />
        <img src={architectLogo} alt="Architect New York City" className="logo" />
        <img src={buthersLogo} alt="Buthers Outsorbrand" className="logo" />
        <img src={husorenLogo} alt="The Husoren" className="logo" />
        <img src={hipstersLogo} alt="Hipsters" className="logo" />
      </div>
    </div>
  );
};

export default Pg3HomeMain;