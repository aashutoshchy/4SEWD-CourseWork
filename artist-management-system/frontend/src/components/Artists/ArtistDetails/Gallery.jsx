import "./Gallery.css";
import GalleryImages from "./GalleryImages";

function Gallery() {
  return (
    <div className="gallery-container">
      {GalleryImages.map((image) => (
        <div className="gallery-image" key={image.id}>
          <img src={image.imageSrc} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
