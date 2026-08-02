import { Outlet, useParams, NavLink } from "react-router-dom";
import "./Artist.css";

function Artist() {
  const { id } = useParams();

  return (
    <div className="artist-container">
      <div className="artist-visual">
        <img
          src="https://cdn.kpopconcerts.com/wp-content/uploads/2024/08/8-%EC%A0%9C%EA%B3%B5EDAM%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8-1024x683.jpg"
          alt=""
        />
        <h1>Artist Name</h1>
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
        <Outlet />
      </div>
    </div>
  );
}

export default Artist;
