import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import '../Style/heder.css'; 
import { FaUserGraduate } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="navbar-logo">
        <FaUserGraduate className="logo-icon" />
        <span className="logo-text">Edusion</span>
      </div>

   
      <button
        className={`navbar-burger ${mobileOpen ? 'is-active' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>

    

      
        <li>
          <Link to="/courses" onClick={() => setMobileOpen(false)}>Courses</Link>
        </li>

   
        <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
           <li>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About us</Link>
        </li>

      
      </ul>
      <div className="navbar-buttons">
  <Link to="/cart" className="cart-icon-wrapper">
    <TfiShoppingCartFull className="cart-icon" />
    <span className="cart-count">0</span>
  </Link>
  <Link to="/contact">
    <button className="navbar-contact-btn">Login</button>
  </Link>
  <button className="navbar-account-btn">Sign up</button>
</div>


      </nav>
  );
};

export default Navbar;
