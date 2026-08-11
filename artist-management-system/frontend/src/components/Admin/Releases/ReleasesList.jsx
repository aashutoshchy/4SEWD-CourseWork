import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";
import "./ReleasesList.css";

const API_URL = import.meta.env.VITE_API_URL;

function ReleasesList() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/releases`)
      .then((res) => res.json())
      .then((data) => {
        setReleases(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id, title) => {
    const confirmed = window.confirm(
      `Delete "${title}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    const token = localStorage.getItem("aurora_token");

    try {
      const res = await fetch(`${API_URL}/api/releases/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        return;
      }

      setReleases((prev) => prev.filter((r) => r._id !== id));
    } catch (e) {
      alert("Something went wrong deleting the release.");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="releases-list-container">
      <div className="releases-topbar">
        <div>
          <h1 className="releases-heading">Releases</h1>
          <p className="releases-subheading">
            Manage all releases under Aurora Entertainment
          </p>
        </div>
        <Link to="/admin/releases/new" className="add-release-btn">
          <i className="fa-solid fa-plus"></i>
          Add New Release
        </Link>
      </div>

      <div className="releases-table-wrapper">
        <table className="releases-table">
          <thead>
            <tr>
              <th>Release</th>
              <th>Artist</th>
              <th>Type</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <tr key={release._id}>
                <td>
                  <div className="release-cell">
                    <img src={release.coverImage} alt={release.title} />
                    <span>{release.title}</span>
                  </div>
                </td>
                <td>{release.artistId?.name || "—"}</td>
                <td>{release.type || "—"}</td>
                <td>{release.year}</td>
                <td>
                  <div className="action-icons">
                    <Link to={`/admin/releases/edit/${release._id}`}>
                      <i className="fa-solid fa-pen"></i>
                    </Link>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDelete(release._id, release.title)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReleasesList;
