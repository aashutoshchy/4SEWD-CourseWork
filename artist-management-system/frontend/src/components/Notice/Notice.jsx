import React, { useState } from "react";
import NoticeCard from "./NoticeCard";
import "./Notice.css";

function Notice() {
  const [noticeSearch, setNoticeSearch] = useState();

  return (
    <div className="notice">
      <p className="heading">Notice</p>
      <div className="notice-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          value={noticeSearch}
          onChange={(e) => setNoticeSearch(e.target.value)}
        />
        {noticeSearch && (
          <i
            onClick={() => setNoticeSearch("")}
            className="fa-solid fa-xmark"
          ></i>
        )}
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
