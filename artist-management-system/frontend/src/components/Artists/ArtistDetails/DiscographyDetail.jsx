import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DiscographyDetail.css";
import Loading from "../../../components/Loading/Loading.jsx";

const API_URL = import.meta.env.VITE_API_URL;

function DiscographyDetail() {
  const { slug, id } = useParams();
  const [release, setRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/releases/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRelease(data);
        // set default language to first available one
        if (data.lyrics) {
          const first = Object.entries(data.lyrics)
            .filter(([_, text]) => text !== null && text !== "")
            .map(([lang]) => lang)[0];
          setLanguage(first);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (!release) return <h1>Release not found!</h1>;

  const availableLanguages = Object.entries(release.lyrics)
    .filter(([_, text]) => text !== null && text !== "")
    .map(([lang]) => lang);

  const labels = {
    original: "Original",
    english: "English",
    romanized: "Romanized",
  };

  return (
    <div>
      <div className="album-container">
        <div className="album-details">
          <div className="navigation">
            <Link to={`/artists/${slug}`}>
              {release.artistId?.name || slug}
            </Link>{" "}
            / <Link to={`/artists/${slug}/discography`}>DISCOGRAPHY</Link> /{" "}
            <span>{release.title.toUpperCase()}</span>
          </div>
          <div className="song-detail">
            <h2 className="song-title">{release.title}</h2>
            <div className="song-meta">
              <p>{release.type}</p>
              <p>{release.duration}</p>
              <p>
                {release.releaseDate
                  ? new Date(release.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : release.year}
              </p>
            </div>
            <div className="song-genres">
              {release.genre?.primary && (
                <span className="song-genre">{release.genre.primary}</span>
              )}
              {release.genre?.secondary && (
                <span className="song-genre">{release.genre.secondary}</span>
              )}
            </div>
          </div>
          <div className="listen-links">
            <h4>Listen On:</h4>
            <div className="streaming-icons">
              {release.streamingLinks?.spotify && (
                <a
                  href={release.streamingLinks.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-spotify"></i>
                </a>
              )}
              {release.streamingLinks?.youtube && (
                <a
                  href={release.streamingLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="album-poster">
          <img
            className="album-image"
            src={release.coverImage}
            alt={`${release.title} album cover`}
          />
        </div>
      </div>

      <div className="lyrics-container">
        <h4>Lyrics</h4>
        {availableLanguages.length > 0 ? (
          <>
            <div className="lyrics-preferences">
              {availableLanguages.map((lang) => (
                <button
                  key={lang}
                  className={language === lang ? "active" : ""}
                  onClick={() => setLanguage(lang)}
                >
                  {labels[lang]}
                </button>
              ))}
            </div>
            <pre className="lyrics-text">{release.lyrics[language]}</pre>
          </>
        ) : (
          <p className="no-lyrics">Lyrics not available for this song yet.</p>
        )}
      </div>

      <div className="credits-container">
        <h4>Credits</h4>
        {release.credits?.length > 0 ? (
          release.credits.map((credit, index) => (
            <div className="credits-row" key={index}>
              <p>{credit.role}</p>
              <p>{credit.name}</p>
            </div>
          ))
        ) : (
          <p className="no-lyrics">Credits not available.</p>
        )}
      </div>
    </div>
  );
}

export default DiscographyDetail;
