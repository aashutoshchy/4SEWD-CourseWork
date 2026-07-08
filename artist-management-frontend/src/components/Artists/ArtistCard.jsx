import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

function ArtistCard({ id, src, name, bio }) {
  return (
    <div className="artist-box">
      <Link to={`/artists/${id}`}>
        <img className="artist-image" src={src} alt="" />
      </Link>
      <p className="artist-name">{name}</p>
    </div>
  );
}

export default ArtistCard;
