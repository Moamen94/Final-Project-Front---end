import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaTwitter, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";
import "../Style/TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span><FaPhoneAlt /> +(354) 6800 37849</span>
        <span><FaEnvelope /> hello@edusion.com</span>
        <span><FaClock /> Mon to Sat Open: 9am - 6pm</span>
      </div>

      <div className="topbar-right">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaPinterestP /></a>
      </div>
    </div>
  );
}
