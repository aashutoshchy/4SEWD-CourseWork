import React from "react";
import NoticeCard from "./NoticeCard";

function Notice() {
  return (
    <div className="notice">
      <p className="notice-heading">Notice</p>
      <div className="notice-search">
        <input type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="notices">
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </div>
    </div>
  );
}

export default Notice;
