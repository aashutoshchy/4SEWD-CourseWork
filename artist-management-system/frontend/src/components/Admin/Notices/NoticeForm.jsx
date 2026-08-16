import React, { useState } from "react";
import "./NoticeForm.css";
import "../../../utils/errors.css";
import { validateNotice } from "../../../utils/validateNotice";

const API_URL = import.meta.env.VITE_API_URL;

const initialForm = { title: "", description: "" };

function NoticeForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validateNotice({ ...form }));
  };

  const publishNotice = async (e) => {
    e.preventDefault();

    const validationErrors = validateNotice(form);
    setErrors(validationErrors);
    setTouched({ title: true, description: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus({ state: "submitting", message: "" });
    const token = localStorage.getItem("aurora_token");

    try {
      const response = await fetch(`${API_URL}/api/notices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
        }),
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
      setStatus({ state: "success", message: "Notice published." });
    } catch (error) {
      console.log(error);
      setStatus({
        state: "error",
        message: "Network error — please check your connection and try again.",
      });
    }
  };

  return (
    <div className="notice-form-container">
      <div className="notice-form-header">
        <h1 className="notice-form-heading">Add New Notice</h1>
      </div>
      <form onSubmit={publishNotice} className="notice-form" noValidate>
        <div className="notice-input">
          <label htmlFor="notice-title">
            Title<span className="required">*</span>
          </label>
          <input
            type="text"
            id="notice-title"
            value={form.title}
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            autoFocus
          />
          {touched.title && errors.title && (
            <span className="field-error">{errors.title}</span>
          )}
        </div>
        <div className="notice-input">
          <label htmlFor="notice-description">
            Description<span className="required">*</span>
          </label>
          <textarea
            id="notice-description"
            value={form.description}
            onChange={handleChange("description")}
            onBlur={handleBlur("description")}
            rows={15}
          ></textarea>
          {touched.description && errors.description && (
            <span className="field-error">{errors.description}</span>
          )}
        </div>

        {status.message && (
          <p className={`form-status form-status-${status.state}`}>
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="notice-publish-btn"
          disabled={status.state === "submitting"}
        >
          {status.state === "submitting" ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
}

export default NoticeForm;
