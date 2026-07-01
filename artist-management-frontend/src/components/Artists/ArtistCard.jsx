import React from "react";

function ArtistCard({ src, name }) {
  return (
    <div className="artist-box">
      <img className="artist-image" src={src} alt="" />
      <p className="artist-name">{name}</p>
    </div>
  );
}

export default ArtistCard;
