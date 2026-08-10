import "./Discography.css";
import { Link, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading.jsx";

const API_URL = import.meta.env.VITE_API_URL;

function Discography() {
  const { slug } = useParams();
  const { artist } = useOutletContext();
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    if (!artist?._id) return;
    fetch(`${API_URL}/api/releases?artistId=${artist._id}`)
      .then((response) => response.json())
      .then((data) => setReleases(data))
      .catch((e) => console.log(e));
  }, [artist._id]);

  if (!artist) return <Loading />;

  return (
    <div className="discography-container">
      {releases.map((release) => (
        <Link
          to={`/artists/${slug}/discography/${release._id}`}
          className="release"
          key={release._id}
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
