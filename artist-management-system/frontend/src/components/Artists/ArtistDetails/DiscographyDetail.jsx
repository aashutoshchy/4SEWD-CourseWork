import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DiscographyDetail.css";

function DiscographyDetail() {
  const { slug } = useParams();

  const song = {
    id: 1,
    title: "Bye Summer",
    lyrics: {
      original: "This is origial Lyrics",
      english: "English translation goes here...\nLine two...",
      romanized: null,
    },
  };

  const availableLanguages = Object.entries(song.lyrics)
    .filter(([_, text]) => text !== null && text !== "")
    .map(([lang]) => lang);

  const [language, setLanguage] = useState(availableLanguages[0]);

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
            <Link to={`/artists/${slug}`}>IU</Link> /{" "}
            <Link to={`/artists/${slug}/discography`}>DISCOGRAPHY</Link> /{" "}
            <span>{song.title.toUpperCase()}</span>
          </div>
          <div className="song-detail">
            <h2 className="song-title">{song.title}</h2>
            <div className="song-meta">
              <p>EP</p>
              <p>3:36</p>
              <p>Sep 10, 2025</p>
            </div>
            <div className="song-genres">
              <span className="song-genre">Ballad</span>
              <span className="song-genre">Rock / Alt</span>
            </div>
          </div>
          <div className="listen-links">
            <h4>Listen On: </h4>
            <div className="streaming-icons">
              <i className="fa-brands fa-spotify"></i>
              <i className="fa-brands fa-itunes-note"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="album-poster">
          <img
            className="album-image"
            src="https://i.scdn.co/image/ab67616d0000b273af751775c469888f17c5f6d7"
            alt={`${song.title} album cover`}
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

            <pre className="lyrics-text">{song.lyrics[language]}</pre>
          </>
        ) : (
          <p className="no-lyrics">Lyrics not available for this song yet.</p>
        )}
      </div>
      <div className="credits-container">
        <h4>Credits</h4>
        <div className="credits-row">
          <p>Lyricst</p> <p>IU</p>
        </div>
        <div className="credits-row">
          <p>Composer</p> <p>IU</p>
        </div>
        <div className="credits-row">
          <p>Arranger</p> <p>IU</p>
        </div>
      </div>
    </div>
  );
}

export default DiscographyDetail;
