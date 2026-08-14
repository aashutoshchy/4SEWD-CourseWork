import React, { useState } from "react";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [feedback, setFeedback] = useState("");

  const submitInquiry = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, feedback, contact }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-page">
      <p className="heading">Contact</p>
      <p className="sub-heading">
        Please leave your inquiry, and our team will review and respond
        accordingly.
      </p>
      <form onSubmit={submitInquiry} className="contact-box">
        <div className="contact-input">
          <label htmlFor="">Name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="contact-input">
          <label htmlFor="">Email </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div className="contact-input">
          <label htmlFor="">Contact </label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="number"
            required
          />
        </div>
        <div className="contact-input">
          <label htmlFor="">Feedback </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            name=""
            id=""
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" id="contact-submit">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}

export default Contact;
