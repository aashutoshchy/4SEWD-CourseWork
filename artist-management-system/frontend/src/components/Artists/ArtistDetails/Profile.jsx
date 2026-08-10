import { useOutletContext } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const { artist } = useOutletContext();

  return (
    <div className="profile-container">
      <section className="info-left">
        <p>{artist.bio}</p>
      </section>
      <section className="info-right">
        <img src={artist.profileImage} alt={artist.name} />
        <div className="profile-sec-head">Background</div>
        <div className="bg-info">
          <div className="bg-info-row">
            <p>Real Name</p>
            <p>{artist.realName || "—"}</p>
          </div>
          <div className="bg-info-row">
            <p>Birth Date</p>
            <p>
              {artist.birthDate
                ? new Date(artist.birthDate).toLocaleDateString()
                : "—"}
            </p>
          </div>
          <div className="bg-info-row">
            <p>Height</p>
            <p>{artist.height || "—"}</p>
          </div>
          <div className="bg-info-row">
            <p>Weight</p>
            <p>{artist.weight || "—"}</p>
          </div>
        </div>
        <div className="profile-sec-head">Career</div>
        <div className="bg-info">
          <div className="bg-info-row">
            <p>Occupation</p>
            <p>{artist.occupation || "—"}</p>
          </div>
          <div className="bg-info-row">
            <p>Instruments</p>
            <p>{artist.instruments || "—"}</p>
          </div>
          <div className="bg-info-row">
            <p>Genres</p>
            <p>{artist.genre || "—"}</p>
          </div>
          <div className="bg-info-row">
            <p>Solo Debut</p>
            <p>
              {artist.debutDate
                ? new Date(artist.debutDate).toLocaleDateString()
                : "—"}
            </p>
          </div>
          <div className="bg-info-row">
            <p>Years Active</p>
            <p>{artist.yearsActive || "—"}</p>
          </div>
        </div>
        <div className="sns-sec">
          <p>SNS</p>
          <ul className="sns-handle">
            {artist.spotifyUrl && (
              <li>
                <a href={artist.spotifyUrl} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-spotify"></i>
                </a>
              </li>
            )}
            {artist.youtubeUrl && (
              <li>
                <a href={artist.youtubeUrl} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            )}
            {artist.socialLinks?.instagram && (
              <li>
                <a
                  href={artist.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Profile;
