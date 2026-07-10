import { Outlet, useParams, NavLink } from "react-router-dom";
import "./Artist.css";

function Artist() {
  const { id } = useParams();

  return (
    <div className="artist-container">
      <div className="artist-visual">
        <img
          src="https://i.pinimg.com/736x/4f/61/73/4f6173bab951ea931c08c32c96023a26.jpg"
          alt=""
        />
        <h1>Artist Name</h1>
      </div>
      <div className="artist-details">
        <ul>
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
