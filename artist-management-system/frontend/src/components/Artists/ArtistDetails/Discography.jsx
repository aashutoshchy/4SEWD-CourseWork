import "./Discography.css";
import { Link, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading.jsx";

const API_URL = import.meta.env.VITE_API_URL;

function Discography() {
  const { slug } = useParams();
  const { artist } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    if (!artist?._id) return;
    fetch(`${API_URL}/api/releases?artistId=${artist._id}`)
      .then((response) => response.json())
      .then((data) => {
        setReleases(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [artist._id]);

  const visibleReleases = releases.filter((release) => {
    if (filterType === "all") return true;
    if (filterType === "single")
      return release.type === "Single" || release.type === "EP";
    if (filterType === "album") return release.type === "Album";
    return true;
  });

  if (!artist) return <h2>No Artist Found!</h2>;
  if (loading) return <Loading />;

  return (
    <div className="discography-container">
      <div className="release-type-sort">
        <button
          className={filterType === "all" ? "active" : ""}
          onClick={() => setFilterType("all")}
        >
          All
        </button>
        <button
          className={filterType === "single" ? "active" : ""}
          onClick={() => setFilterType("single")}
        >
          Singles & EPs
        </button>
        <button
          className={filterType === "album" ? "active" : ""}
          onClick={() => setFilterType("album")}
        >
          Albums
        </button>
      </div>

      {visibleReleases.map((release) => (
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
