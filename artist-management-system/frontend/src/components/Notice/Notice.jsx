import React, { useEffect, useState } from "react";
import NoticeCard from "./NoticeCard";
import Loading from "../Loading/Loading";
import { formatDate } from "../../utils/formatDate";
import "./Notice.css";

const API_URL = import.meta.env.VITE_API_URL;

function Notice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/notices`)
      .then((response) => response.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredNotice = notices.filter((notice) => {
    return notice.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <div className="notice">
      <p className="heading">Notice</p>
      <div className="notice-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <i
            onClick={() => setSearchQuery("")}
            className="fa-solid fa-xmark"
          ></i>
        )}
      </div>
      {loading && <Loading />}
      <div className="notices">
        {filteredNotice.map((notice) => (
          <NoticeCard
            key={notice._id}
            title={notice.title}
            description={notice.description}
            date={formatDate(notice.createdAt)}
          />
        ))}
      </div>
    </div>
  );
}

export default Notice;
