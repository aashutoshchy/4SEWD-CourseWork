import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import Loading from "../Loading/Loading";
import "./Artists.css";

const API_URL = import.meta.env.VITE_API_URL;

function Artists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/artists`)
      .then((response) => response.json())
      .then((data) => {
        setArtists(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className="artists-page">
      <p className="heading">Artists</p>
      {loading && <Loading />}
      <div className="artist-list">
        {artists.map((artist) => {
          return (
            <ArtistCard
              key={artist.slug}
              slug={artist.slug}
              id={artist.id}
              name={artist.name}
              src={artist.cardImage || artist.profileImage}
              role={artist.occupation}
              bio={artist.bio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Artists;
