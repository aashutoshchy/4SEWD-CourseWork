import React from "react";
import { Link } from "react-router-dom";
import "./DiscographyDetail.css";

function DiscographyDetail() {
  return (
    <div>
      <div className="album-container">
        <div className="album-details">
          <div className="navigation">
            <Link>IU</Link> / <Link>DISCOGRAPHY</Link> / <Link>BYE SUMMER</Link>
          </div>
          <div className="song-detail">
            <h2 className="song-title">Bye Summer</h2>
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
            <div>
              <i class="fa-brands fa-spotify"></i>
              <i class="fa-brands fa-itunes-note"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="album-poster">
          <img
            className="album-image"
            src="https://i.scdn.co/image/ab67616d0000b273af751775c469888f17c5f6d7"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DiscographyDetail;
