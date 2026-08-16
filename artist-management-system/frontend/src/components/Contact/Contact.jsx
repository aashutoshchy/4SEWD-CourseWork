import React, { useState } from "react";
import "./Contact.css";
import "../../utils/errors.css";
import { validateContact } from "../../utils/validateContact";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = { name: "", email: "", contact: "", feedback: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validateContact({ ...form }));
  };

  const submitInquiry = async (e) => {
    e.preventDefault();

    const validationErrors = validateContact(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, contact: true, feedback: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus({ state: "submitting", message: "" });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
        return;
      }

      setForm(initialForm);
      setErrors({});
      setTouched({});
      setStatus({
        state: "success",
        message: "Thanks! Your inquiry has been submitted.",
      });
    } catch (error) {
      console.log(error);
      setStatus({
        state: "error",
        message: "Network error — please check your connection and try again.",
      });
    }
  };

  return (
    <div className="contact-page">
      <p className="heading">Contact</p>
      <p className="sub-heading">
        Please leave your inquiry, and our team will review and respond
        accordingly.
      </p>
      <form onSubmit={submitInquiry} className="contact-box" noValidate>
        <div className="contact-input">
          <label htmlFor="contact-name">Name </label>
          <input
            id="contact-name"
            value={form.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            type="text"
          />
          {touched.name && errors.name && (
            <span className="field-error">{errors.name}</span>
          )}
        </div>
        <div className="contact-input">
          <label htmlFor="contact-email">Email </label>
          <input
            id="contact-email"
            value={form.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            type="email"
          />
          {touched.email && errors.email && (
            <span className="field-error">{errors.email}</span>
          )}
        </div>
        <div className="contact-input">
          <label htmlFor="contact-phone">Contact </label>
          <input
            id="contact-phone"
            value={form.contact}
            onChange={handleChange("contact")}
            onBlur={handleBlur("contact")}
            type="text"
            inputMode="numeric"
          />
          {touched.contact && errors.contact && (
            <span className="field-error">{errors.contact}</span>
          )}
        </div>
        <div className="contact-input">
          <label htmlFor="contact-feedback">Feedback </label>
          <textarea
            id="contact-feedback"
            value={form.feedback}
            onChange={handleChange("feedback")}
            onBlur={handleBlur("feedback")}
            rows={5}
          ></textarea>
          {touched.feedback && errors.feedback && (
            <span className="field-error">{errors.feedback}</span>
          )}
        </div>

        {status.message && (
          <p className={`form-status form-status-${status.state}`}>
            {status.message}
          </p>
        )}

        <button
          type="submit"
          id="contact-submit"
          disabled={status.state === "submitting"}
        >
          {status.state === "submitting" ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
