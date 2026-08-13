import React, { useState } from "react";
import "./NoticeForm.css";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function NoticeForm() {
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeDescription, setNoticeDescription] = useState("");
  const navigate = useNavigate();

  const publishNotice = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("aurora_token");
    try {
      const response = await fetch(`${API_URL}/api/notices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: noticeTitle,
          description: noticeDescription,
        }),
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
    <div className="notice-form-container">
      <div className="notice-form-header">
        <h1 className="notice-form-heading">Add New Notice</h1>
      </div>
      <form onSubmit={publishNotice} className="notice-form">
        <div className="notice-input">
          <label htmlFor="notice-title">
            Title<span className="required">*</span>
          </label>
          <input
            type="text"
            id="notice-title"
            value={noticeTitle}
            onChange={(e) => setNoticeTitle(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="notice-input">
          <label>
            Description<span className="required">*</span>
          </label>
          <textarea
            value={noticeDescription}
            onChange={(e) => setNoticeDescription(e.target.value)}
            rows={15}
          ></textarea>
        </div>

        <button type="submit" className="notice-publish-btn">
          Publish
        </button>
      </form>
    </div>
  );
}

export default NoticeForm;
