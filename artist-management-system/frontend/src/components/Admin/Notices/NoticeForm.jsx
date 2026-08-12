import React from "react";
import "./NoticeForm.css";

function NoticeForm() {
  return (
    <div className="notice-form-container">
      <div className="notice-form-header">
        <h1 className="notice-form-heading">Add New Notice</h1>
      </div>
      <form className="notice-form">
        <div className="notice-input">
          <label htmlFor="notice-title">
            Title<span className="required">*</span>
          </label>
          <input type="text" id="notice-title" autoFocus required />
        </div>
        <div className="notice-input">
          <label>
            Description<span className="required">*</span>
          </label>
          <textarea rows={15}></textarea>
        </div>

        <button type="submit" className="notice-publish-btn">
          Publish
        </button>
      </form>
    </div>
  );
}

export default NoticeForm;
