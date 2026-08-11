import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading.jsx";
import "./ArtistsList.css";

const API_URL = import.meta.env.VITE_API_URL;

function ArtistsList() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArtists = () => {
    fetch(`${API_URL}/api/artists`)
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  const handleDelete = async (slug, name) => {
    const confirmed = window.confirm(
      `Delete "${name}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    const token = localStorage.getItem("aurora_token");

    try {
      const res = await fetch(`${API_URL}/api/artists/${slug}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        return;
      }

      setArtists((prev) => prev.filter((a) => a.slug !== slug));
    } catch (e) {
      alert("Something went wrong deleting the artist.");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="artists-list-container">
      <div className="artists-topbar">
        <div>
          <h1 className="artists-heading">Artists</h1>
          <p className="artists-subheading">
            Manage all artists under Aurora Entertainment
          </p>
        </div>

        <Link to="/admin/artists/new" className="add-artist-btn">
          <i className="fa-solid fa-plus"></i>
          Add New Artist
        </Link>
      </div>

      <div className="artists-table-wrapper">
        <table className="artists-table">
          <thead>
            <tr>
              <th>Artists</th>
              <th>Debut</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist._id}>
                <td>
                  <div className="artist-cell">
                    <div className="artist-avatar">
                      {artist.profileImage && (
                        <img src={artist.profileImage} alt={artist.name} />
                      )}
                    </div>
                    <span className="artist-name">{artist.name}</span>
                  </div>
                </td>
                <td>
                  {artist.debutDate
                    ? new Date(artist.debutDate).getFullYear()
                    : "—"}
                </td>
                <td>{artist.genre || "—"}</td>
                <td>
                  <div className="action-icons">
                    <Link to={`/admin/artists/edit/${artist.slug}`}>
                      <i className="fa-solid fa-pen"></i>
                    </Link>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDelete(artist.slug, artist.name)}
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

export default ArtistsList;
