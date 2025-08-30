import React from 'react';
import '../Style/FooTer.css'
/*import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
 */
import { FaFacebook, FaTwitter, FaInstagram, FaPinterestP , FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSchool } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        <div className="footer-section footer-logo-section">
          <div className="footer-logo">
            <MdSchool className="logo-icon" />
            <span className="logo-text">Edusion</span>
          </div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
          </p>
          <div className="social-links">
            <span className="connect-text">CONNECT WITH:</span>
            <a href="#" className="social-icon-link"><FaInstagram /></a>
            <a href="#" className="social-icon-link"><FaFacebook /></a>
            <a href="#" className="social-icon-link"><FaTwitter /></a>
            <a href="#" className="social-icon-link"><FaPinterestP /></a>
          </div>
        </div>

     
        <div className="footer-section">
          <h4 className="section-title">Courses</h4>
          <ul className="footer-list">
            <li><a href="#">Creative Writing</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">SEO Business</a></li>
            <li><a href="#">Social Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Website Development</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h4 className="section-title">Company</h4>
          <ul className="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Market API</a></li>
            <li><a href="#">Support Team</a></li>
          </ul>
        </div>

    
        <div className="footer-section">
          <h4 className="section-title">Contact Info</h4>
          <ul className="footer-list contact-list">
            <li>
              <FaPhone className="contact-icon" />
              <div>
                <span className="contact-info-title">Phone Number</span>
                <p className="contact-info">+88 457 845 695</p>
              </div>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <div>
                <span className="contact-info-title">Email Address</span>
                <p className="contact-info">example@yourmail.com</p>
              </div>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <span className="contact-info-title">Location</span>
                <p className="contact-info">California, USA</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">© 2025 Edusion. All Rights Reserved</p>
        <ul className="footer-bottom-links">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Special</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;