import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

function ArtistCard({ id, slug, src, name, bio }) {
  return (
    <div className="artist-box">
      <Link to={`/artists/${slug}`}>
        <img className="artist-image" src={src} alt="" />
      </Link>
      <p className="artist-name">{name}</p>
    </div>
  );
}

export default ArtistCard;
