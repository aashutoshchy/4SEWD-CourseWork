import { Outlet, useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Artist.css";
import Loading from "../../components/Loading/Loading.jsx";
const API_URL = import.meta.env.VITE_API_URL;

function Artist() {
  const { slug } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/artists/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setArtist(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <Loading />;

  if (!artist) return <p>Artist not found.</p>;

  return (
    <div className="artist-container">
      <div className="artist-visual">
        <img src={artist.profileImage} alt={artist.name} />
        <h1>{artist.name}</h1>
      </div>
      <div className="artist-details">
        <ul className="artist-nav">
          <li>
            <NavLink to="." end>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="discography">Discography</NavLink>
          </li>
          <li>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
        </ul>
        <Outlet context={{ artist }} />
      </div>
    </div>
  );
}

export default Artist;
