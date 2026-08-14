import React from "react";
import "./NoticeCard.css";
import { Link } from "react-router-dom";

function NoticeCard({ id, title, description, date }) {
  return (
    <div className="NoticeCard">
      <p className="notice-title">{title}</p>
      <p className="notice-description">{description}</p>
      <div>
        <p className="notice-date">{date}</p>
        <Link to={`/notice/${id}`}>See More</Link>
      </div>
    </div>
  );
}

export default NoticeCard;
