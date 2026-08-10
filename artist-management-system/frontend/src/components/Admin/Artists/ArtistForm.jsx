import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArtistForm.css";

function ArtistForm() {
  const [formData, setFormData] = useState({
    name: "",
    stageName: "",
    genre: "",
    bio: "",
    spotifyUrl: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5MB");
      return;
    }

    setProfileImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send formData + profileImage to API
    console.log("form data:", formData);
    console.log("profile image:", profileImage);
  };

  return (
    <div className="add-artist-container">
      <h1 className="add-artist-heading">Add New Artist</h1>
      <p className="breadcrumb">
        <Link to="/admin/dashboard/artists">Artists</Link>
        <span> / </span>
        <span className="breadcrumb-current">Add New Artist</span>
      </p>

      <hr className="divider" />

      <form className="add-artist-form" onSubmit={handleSubmit}>
        <div className="form-left">
          <h3>Basic Information</h3>

          <label>
            Artists Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter artist's name"
            required
          />

          <label>Stage Name</label>
          <input
            type="text"
            name="stageName"
            value={formData.stageName}
            onChange={handleChange}
            placeholder="Enter stage name"
          />

          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="e.g. J-Pop, K-Pop, Hip-Hop"
          />

          <label>
            Bio <span className="required">*</span>
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a short bio..."
            rows={6}
            required
          />
        </div>

        <div className="form-right">
          <h3>Profile Image</h3>

          <label htmlFor="profile-upload" className="upload-circle">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="upload-preview" />
            ) : (
              <i className="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
            )}
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/png"
            onChange={handleImageChange}
            hidden
          />
          <p className="upload-text">Click to Upload</p>
          <p className="upload-subtext">Png (Max. 5MB)</p>

          <label>
            Spotify Url <span className="required">*</span>
          </label>
          <input
            type="url"
            name="spotifyUrl"
            value={formData.spotifyUrl}
            onChange={handleChange}
            placeholder="https://open.spotify.com/artist/..."
            required
          />

          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArtistForm;
