import React from "react";
import "./NoticeCard.css";

function NoticeCard({ title, description, date }) {
  return (
    <div className="NoticeCard">
      <p className="notice-title">{title}</p>
      <p className="notice-description">{description}</p>
      <div>
        <p className="notice-date">{date}</p>
        <a href="">See more</a>
      </div>
    </div>
  );
}

export default NoticeCard;
