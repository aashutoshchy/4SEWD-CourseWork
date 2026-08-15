import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

function ArtistCard({ id, slug, src, name, bio, role }) {
  return (
    <div className="artist-box">
      <Link to={`/artists/${slug}`}>
        <img className="artist-image" src={src} alt={name} />
      </Link>
      <div className="artist-info">
        <p className="artist-name">{name}</p>
        <p className="artist-role">{role}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
