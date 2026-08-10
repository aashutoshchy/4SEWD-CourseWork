import React from "react";
import { Link } from "react-router-dom";
import "./ArtistsList.css";

const artists = [
  { id: 1, name: "Yabesh Thapa", debut: 2020, status: "Active" },
  { id: 2, name: "IU", debut: 2008, status: "Active" },
  { id: 3, name: "Zoro", debut: 2020, status: "Active" },
  { id: 4, name: "Eren Yeager", debut: 2020, status: "Active" },
  { id: 5, name: "Mikasa Ackerman", debut: 2020, status: "Active" },
];

function ArtistsList() {
  const handleEdit = (id) => {
    console.log("edit artist", id);
  };

  const handleDelete = (id) => {
    console.log("delete artist", id);
  };

  return (
    <div className="artists-list-container">
      <div className="artists-topbar">
        <div>
          <h1 className="artists-heading">Artists</h1>
          <p className="artists-subheading">
            Manage all artists under Aurora Entertainment
          </p>
        </div>

        <Link to="/admin/dashboard/artists/new" className="add-artist-btn">
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
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist.id}>
                <td>
                  <div className="artist-cell">
                    <div className="artist-avatar"></div>
                    <span className="artist-name">{artist.name}</span>
                  </div>
                </td>
                <td>{artist.debut}</td>
                <td>
                  <span
                    className={`status-badge ${artist.status.toLowerCase()}`}
                  >
                    {artist.status}
                  </span>
                </td>
                <td>
                  <div className="action-icons">
                    <i
                      className="fa-solid fa-pen"
                      onClick={() => handleEdit(artist.id)}
                    ></i>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDelete(artist.id)}
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
