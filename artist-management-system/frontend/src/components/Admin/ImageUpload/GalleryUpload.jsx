import { useState } from "react";
import "./GalleryUpload.css";

const API_URL = import.meta.env.VITE_API_URL;

// `images` = the current array of URLs (comes from ArtistForm's state)
// `onChange` = a function ArtistForm gives us to call whenever the array changes
function GalleryUpload({ images, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    // e.target.files is a FileList (browser API), not a real array —
    // Array.from() converts it so we can use .map/.filter/for-of on it
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setError("");
    setUploading(true);

    const token = localStorage.getItem("aurora_token");
    const uploadedUrls = [];

    // for...of + await inside the loop = uploads happen ONE AT A TIME,
    // in order. Slower than uploading all at once, but simpler and safer —
    // if one upload fails, we know exactly which file it was, and we're
    // not firing 5 simultaneous requests at a free-tier backend.
    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        setError(`${file.name} is over 5MB and was skipped`);
        continue; // skip this file, keep going with the rest
      }

      // FormData is the browser's way of building a multipart/form-data
      // body — the same format your existing ImageUpload.jsx already uses.
      // Regular JSON.stringify() can't carry binary file data, this can.
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await fetch(`${API_URL}/api/upload`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
          // note: no "Content-Type" header here on purpose — the browser
          // sets it automatically for FormData, including a required
          // "boundary" value it generates itself. Setting it manually
          // breaks the upload.
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.message);
          continue;
        }

        uploadedUrls.push(data.url);
      } catch (err) {
        setError("Upload failed for one or more images. Try again.");
      }
    }

    // merge the newly uploaded URLs into whatever was already there,
    // and hand the whole new array back up to ArtistForm
    onChange([...images, ...uploadedUrls]);
    setUploading(false);

    // reset the file input's value — without this, selecting the SAME
    // file twice in a row wouldn't fire onChange the second time, because
    // as far as the browser's concerned, the input's value hasn't changed
    e.target.value = "";
  };

  const handleRemove = (urlToRemove) => {
    // keep every url EXCEPT the one that was clicked
    onChange(images.filter((url) => url !== urlToRemove));
  };

  return (
    <div className="gallery-upload">
      <div className="gallery-upload-grid">
        {images.map((url) => (
          // using the url itself as the `key` — safe here because URLs
          // are unique (no two images share the same Cloudinary URL)
          <div className="gallery-upload-thumb" key={url}>
            <img src={url} alt="Gallery" />
            <button
              type="button"
              className="gallery-upload-remove"
              onClick={() => handleRemove(url)}
            >
              &times;
            </button>
          </div>
        ))}

        <label className="gallery-upload-add">
          {uploading ? (
            <span>Uploading...</span>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp"
            multiple
            onChange={handleFileChange}
            hidden
            disabled={uploading}
          />
        </label>
      </div>
      {error && <p className="upload-error">{error}</p>}
    </div>
  );
}

export default GalleryUpload;
