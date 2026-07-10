import releases from "./discographyData";
import "./Discography.css";

function Discography() {
  return (
    <div className="discography-container">
      {releases.map((release) => (
        <div className="release" key={release.id}>
          <img src={release.cover} alt="" />
          <div className="release-info">
            <p className="release-title">{release.title}</p>
            <p className="release-year">{release.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Discography;
