import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { formatDate } from "../../utils/formatDate";
import "./NoticeDetail.css";

const API_URL = import.meta.env.VITE_API_URL;

function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`${API_URL}/api/notices/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Notice not found");
        return res.json();
      })
      .then((data) => {
        setNotice(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || "Something went wrong");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="notice-detail-page">
      <div className="notice-detail-hero">
        <Link
          type="button"
          className="notice-back-btn"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-chevron-left"></i>
          <span>Back</span>
        </Link>

        <h1 className="notice-detail-heading">Notice</h1>

        {!error && notice && (
          <div className="notice-detail-meta">
            <h2 className="notice-detail-title">{notice.title}</h2>
            <span className="notice-detail-date">
              {formatDate(notice.createdAt)}
            </span>
          </div>
        )}
      </div>

      <div className="notice-detail-body">
        {error ? (
          <p className="notice-detail-error">{error}</p>
        ) : (
          <p>{notice.description}</p>
        )}
      </div>
    </div>
  );
}

export default NoticeDetail;
