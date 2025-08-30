import React, { useState } from "react";
import "../Style/ContactMain.css"; 

const ContactMain = () => {
  // ✅ خزّان البيانات (state)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // ✅ تحديث القيم عند الكتابة
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ التعامل مع الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // مثال: تخزين في localStorage
    localStorage.setItem("contactForm", JSON.stringify(formData));

    // مثال: إعادة تعيين الفورم
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Send your message.</h2>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name} 
              onChange={handleChange}
              className="form-input" 
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
              className="form-input" 
            />
          </div>
        </div>
        
        <div className="form-group-full">
          <label htmlFor="subject">Your Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject"
            value={formData.subject} 
            onChange={handleChange}
            className="form-input" 
          />
        </div>

        <div className="form-group-full">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message} 
            onChange={handleChange}
            className="form-textarea"
          />
        </div>

        <button type="submit" className="form-submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMain;
