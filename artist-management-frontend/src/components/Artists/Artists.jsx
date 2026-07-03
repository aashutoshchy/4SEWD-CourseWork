import React from "react";
import ArtistCard from "./ArtistCard";
import artists from "./artistsData";

function Artists() {
  return (
    <div className="artists-page">
      <p className="heading">Artists</p>
      <div className="artist-list">
        {artists.map((artist) => {
          return (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              src={artist.image}
              bio={artist.bio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Artists;
