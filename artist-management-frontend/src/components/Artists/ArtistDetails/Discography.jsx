import "./Discography.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Discography() {
  const params = useParams();

  const [releases, setReleases] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/releases`)
      .then((response) => response.json())
      .then((data) => setReleases(data));
  }, []);

  return (
    <div className="discography-container">
      {releases.map((release) => (
        <Link
          to={`/artists/${params.slug}/discography/${release.id}`}
          className="release"
          key={release.id}
        >
          <img src={release.coverImage} alt={release.title} />
          <div className="release-info">
            <p className="release-title">{release.title}</p>
            <p className="release-year">{release.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Discography;
