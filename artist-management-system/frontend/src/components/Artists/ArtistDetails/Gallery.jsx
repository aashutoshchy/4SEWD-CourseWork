import { useOutletContext } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  // pulled from the <Outlet context={{ artist }} /> set up in Artist.jsx —
  // this is how Gallery gets the currently-viewed artist's data without
  // fetching it again itself
  const { artist } = useOutletContext();
  const images = artist.galleryImages || [];

  if (images.length === 0) {
    return <p className="gallery-empty">No gallery images yet.</p>;
  }

  return (
    <div className="gallery-container">
      {images.map((imageUrl, index) => (
        <div className="gallery-image" key={imageUrl}>
          <img src={imageUrl} alt={`${artist.name} gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
