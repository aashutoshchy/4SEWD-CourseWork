import { useState } from "react";
import { Link } from "react-router-dom";
import "./NoticeList.css";

// Hard coded for now — will be replaced with a fetch to /api/news
const HARD_CODED_NOTICES = [
  {
    id: 1,
    title: 'JENNIE Navigates Fleeting Summer Love in "Less Than a Lover"',
    date: "2026.07.26",
  },
  {
    id: 2,
    title: 'JENNIE Navigates Fleeting Summer Love in "Less Than a Lover"',
    date: "2026.07.26",
  },
  {
    id: 3,
    title: 'JENNIE Navigates Fleeting Summer Love in "Less Than a Lover"',
    date: "2026.07.26",
  },
  {
    id: 4,
    title: 'JENNIE Navigates Fleeting Summer Love in "Less Than a Lover"',
    date: "2026.07.26",
  },
];

function NoticeList() {
  const [notices, setNotices] = useState(HARD_CODED_NOTICES);

  const handleDelete = (id) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
  };

  return (
    <div className="notice-list-container">
      <div className="notice-list-header">
        <div>
          <h1 className="notice-list-heading">Notice</h1>
          <p className="notice-sub-heading">Manage News</p>
        </div>
        <Link to="/admin/notice/new" className="add-news-btn">
          <i className="fa-solid fa-plus"></i> <span>Add News</span>
        </Link>
      </div>
      <div className="notice-list">
        {notices.length === 0 ? (
          <p className="notice-list-empty">No news yet. Add your first one.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className="notice-card">
              <div className="notice-card-info">
                <h3 className="notice-card-title">{notice.title}</h3>
                <p className="notice-card-desc">{notice.date}</p>
              </div>
              <button
                onClick={() => handleDelete(notice.id)}
                className="delete-notice-btn"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoticeList;
