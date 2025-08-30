import React from 'react';
import '../Style/ContactHeader.css'; 
import { FaRegMap } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { BsEnvelope } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
    
      <div className="contact-card">
        <FaRegMap className="contact-icon-map" />
        <h3 className="contact-title">Our Location</h3>
        <p className="contact-details">
          3481 Melrose Place, Beverly Hills <br />
          CA 90210
        </p>
      </div>

      
      <div className="vertical-divider"></div>

      
      <div className="contact-card">
        <TfiMobile className="contact-icon-phone" />
        <h3 className="contact-title">Telephone</h3>
        <p className="contact-details">
          (+1) 517 397 7100 <br />
          (+1) 411 315 8138
        </p>
      </div>

      
      <div className="vertical-divider"></div>

      
      <div className="contact-card">
        <BsEnvelope className="contact-icon-email" />
        <h3 className="contact-title">Send Email</h3>
        <p className="contact-details">
          Info@example.com <br />
          admin@example.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;