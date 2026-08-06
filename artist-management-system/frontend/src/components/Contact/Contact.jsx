import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <p className="heading">Contact</p>
      <p className="sub-heading">
        Please leave your inquiry, and our team will review and respond
        accordingly.
      </p>
      <div className="contact-box">
        <div className="contact-input">
          <label htmlFor="">Name </label>
          <input type="text" required />
        </div>
        <div className="contact-input">
          <label htmlFor="">Email </label>
          <input type="email" required />
        </div>
        <div className="contact-input">
          <label htmlFor="">Contact </label>
          <input type="number" required />
        </div>
        <div className="contact-input">
          <label htmlFor="">Feedback </label>
          <textarea name="" id="" rows={5} required></textarea>
        </div>
        <button type="submit" id="contact-submit">
          Submit Inquiry
        </button>
      </div>
    </div>
  );
}

export default Contact;
