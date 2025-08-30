import React from 'react';
import '../Style/PgHome3Header.css';
import asd from '../assets/asd.mp4';

function PgHome3Header() {
  return (
    <header>
      <div className="header-content">
        <video className="intro-video" src={asd} autoPlay loop muted />
       
     
      </div>
    </header>
  );
}

export default PgHome3Header;
