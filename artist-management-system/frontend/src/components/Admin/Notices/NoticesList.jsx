import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate.js";
import Loading from "../../Loading/Loading.jsx";
import "./NoticeList.css";

const API_URL = import.meta.env.VITE_API_URL;

function NoticeList() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Do you really want to delete this notice?",
    );
    if (!confirmed) return;

    const token = localStorage.getItem("aurora_token");
    try {
      const res = await fetch(`${API_URL}/api/notices/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        return;
      }
      setNotices((prev) => prev.filter((notice) => notice._id !== id));
    } catch (error) {
      alert("Something went wrong deleting this notice");
    }
  };

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

  if (loading) return <Loading />;

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
            <div key={notice._id} className="notice-card">
              <div className="notice-card-info">
                <h3 className="notice-card-title">{notice.title}</h3>
                <p className="notice-card-desc">
                  {formatDate(notice.createdAt)}
                </p>
              </div>
              <button
                onClick={() => handleDelete(notice._id)}
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
