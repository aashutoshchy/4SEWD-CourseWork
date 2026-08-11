import { useState } from "react";
import "./ImageUpload.css";

const API_URL = import.meta.env.VITE_API_URL;

function ImageUpload({ label, value, onUploaded, shape = "square" }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB");
      return;
    }

    setError("");
    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    const token = localStorage.getItem("aurora_token");

    try {
      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        setUploading(false);
        return;
      }

      onUploaded(data.url);
      setUploading(false);
    } catch (err) {
      setError("Upload failed. Try again.");
      setUploading(false);
    }
  };

  return (
    <div className="image-upload">
      <label className={`upload-box upload-${shape}`}>
        {uploading ? (
          <span className="upload-status">Uploading...</span>
        ) : value ? (
          <img src={value} alt={label} className="upload-preview" />
        ) : (
          <i className="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg, image/webp"
          onChange={handleFileChange}
          hidden
        />
      </label>
      <p className="upload-label">{label}</p>
      {error && <p className="upload-error">{error}</p>}
    </div>
  );
}

export default ImageUpload;
