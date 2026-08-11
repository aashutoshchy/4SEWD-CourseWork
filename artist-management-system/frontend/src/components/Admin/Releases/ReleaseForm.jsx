import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageUpload from "../ImageUpload/ImageUpload.jsx";
import "./ReleaseForm.css";

const API_URL = import.meta.env.VITE_API_URL;

function ReleaseForm() {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();

  const [artists, setArtists] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [fetchedPreview, setFetchedPreview] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [formData, setFormData] = useState({
    artistId: "",
    title: "",
    type: "Single",
    year: "",
    duration: "",
    releaseDate: "",
    coverImage: "",
    genrePrimary: "",
    genreSecondary: "",
    spotify: "",
    youtube: "",
    original: "",
    english: "",
    romanized: "",
  });

  const [credits, setCredits] = useState([{ role: "", name: "" }]);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // load artists for the dropdown
  useEffect(() => {
    fetch(`${API_URL}/api/artists`)
      .then((res) => res.json())
      .then((data) => setArtists(data))
      .catch((e) => console.log(e));
  }, []);

  // load existing release data if editing
  useEffect(() => {
    if (!isEditMode) return;

    fetch(`${API_URL}/api/releases/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          artistId: data.artistId?._id || data.artistId || "",
          title: data.title || "",
          type: data.type || "Single",
          year: data.year || "",
          duration: data.duration || "",
          releaseDate: data.releaseDate ? data.releaseDate.split("T")[0] : "",
          coverImage: data.coverImage || "",
          genrePrimary: data.genre?.primary || "",
          genreSecondary: data.genre?.secondary || "",
          spotify: data.streamingLinks?.spotify || "",
          youtube: data.streamingLinks?.youtube || "",
          original: data.lyrics?.original || "",
          english: data.lyrics?.english || "",
          romanized: data.lyrics?.romanized || "",
        });
        setCredits(
          data.credits?.length ? data.credits : [{ role: "", name: "" }],
        );
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1: fetch preview data from YouTube, don't apply it yet
  const handleFetchYoutube = async () => {
    if (!youtubeUrl.trim()) return;

    setFetchError("");
    setFetching(true);
    setFetchedPreview(null);

    const token = localStorage.getItem("aurora_token");

    try {
      const res = await fetch(
        `${API_URL}/api/youtube/video?url=${encodeURIComponent(youtubeUrl)}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const data = await res.json();

      if (!res.ok) {
        setFetchError(data.message);
        setFetching(false);
        return;
      }

      setFetchedPreview(data);
      setFetching(false);
    } catch (e) {
      setFetchError("Failed to fetch video data. Try again.");
      setFetching(false);
    }
  };

  // Step 2: admin confirms the preview is correct, apply it to the form
  const handleUsePreview = () => {
    setFormData((prev) => ({
      ...prev,
      title: fetchedPreview.title,
      coverImage: fetchedPreview.coverImage,
      releaseDate: fetchedPreview.releaseDate.split("T")[0],
      duration: fetchedPreview.duration,
      year: new Date(fetchedPreview.releaseDate).getFullYear(),
      youtube: fetchedPreview.youtubeUrl,
    }));
    setFetchedPreview(null);
    setYoutubeUrl("");
  };

  const handleCreditChange = (index, field, value) => {
    setCredits((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addCreditRow = () => {
    setCredits((prev) => [...prev, { role: "", name: "" }]);
  };

  const removeCreditRow = (index) => {
    setCredits((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const token = localStorage.getItem("aurora_token");

    const payload = {
      artistId: formData.artistId,
      title: formData.title,
      type: formData.type,
      year: formData.year,
      duration: formData.duration,
      releaseDate: formData.releaseDate || undefined,
      coverImage: formData.coverImage,
      genre: {
        primary: formData.genrePrimary,
        secondary: formData.genreSecondary,
      },
      streamingLinks: {
        spotify: formData.spotify,
        youtube: formData.youtube,
      },
      lyrics: {
        original: formData.original || null,
        english: formData.english || null,
        romanized: formData.romanized || null,
      },
      credits: credits.filter((c) => c.role.trim() && c.name.trim()),
    };

    const url = isEditMode
      ? `${API_URL}/api/releases/${id}`
      : `${API_URL}/api/releases`;
    const method = isEditMode ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        setSaving(false);
        return;
      }

      navigate("/admin/releases");
    } catch (e) {
      setError("Something went wrong. Please try again.");
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="release-form-container">
      <h1 className="release-form-heading">
        {isEditMode ? "Edit Release" : "Add New Release"}
      </h1>
      <p className="breadcrumb">
        <Link to="/admin/releases">Releases</Link>
        <span> / </span>
        <span className="breadcrumb-current">
          {isEditMode ? "Edit Release" : "Add New Release"}
        </span>
      </p>

      <hr className="divider" />

      {/* YouTube auto-fetch section */}
      <div className="youtube-fetch-box">
        <h3>Auto-fill from YouTube</h3>
        <div className="youtube-fetch-row">
          <input
            type="url"
            placeholder="Paste YouTube video URL..."
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
          <button
            type="button"
            onClick={handleFetchYoutube}
            disabled={fetching}
          >
            {fetching ? "Fetching..." : "Fetch"}
          </button>
        </div>
        {fetchError && <p className="field-error">{fetchError}</p>}

        {fetchedPreview && (
          <div className="youtube-preview">
            <img src={fetchedPreview.coverImage} alt={fetchedPreview.title} />
            <div className="youtube-preview-info">
              <p className="preview-title">{fetchedPreview.title}</p>
              <p className="preview-channel">
                Channel: {fetchedPreview.channelTitle}
              </p>
              <div className="preview-actions">
                <button type="button" onClick={handleUsePreview}>
                  Use this data
                </button>
                <button
                  type="button"
                  className="preview-cancel"
                  onClick={() => setFetchedPreview(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <hr className="divider" />

      {error && <p className="form-error">{error}</p>}

      <form className="release-form" onSubmit={handleSubmit}>
        <div className="form-left">
          <h3>Release Details</h3>

          <label>
            Artist <span className="required">*</span>
          </label>
          <select
            name="artistId"
            value={formData.artistId}
            onChange={handleChange}
            required
          >
            <option value="">Select an artist</option>
            {artists.map((artist) => (
              <option key={artist._id} value={artist._id}>
                {artist.name}
              </option>
            ))}
          </select>

          <label>
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Song title"
            required
          />

          <label>Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Single">Single</option>
            <option value="EP">EP</option>
            <option value="Album">Album</option>
          </select>

          <div className="form-row">
            <div>
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="3:28"
              />
            </div>
            <div>
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2024"
                required
              />
            </div>
          </div>

          <label>Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
          />

          <div className="form-row">
            <div>
              <label>Genre (Primary)</label>
              <input
                type="text"
                name="genrePrimary"
                value={formData.genrePrimary}
                onChange={handleChange}
                placeholder="Pop"
              />
            </div>
            <div>
              <label>Genre (Secondary)</label>
              <input
                type="text"
                name="genreSecondary"
                value={formData.genreSecondary}
                onChange={handleChange}
                placeholder="R&B"
              />
            </div>
          </div>

          <label>Spotify URL</label>
          <input
            type="url"
            name="spotify"
            value={formData.spotify}
            onChange={handleChange}
            placeholder="https://open.spotify.com/track/..."
          />

          <label>YouTube URL</label>
          <input
            type="url"
            name="youtube"
            value={formData.youtube}
            onChange={handleChange}
            placeholder="https://youtube.com/watch?v=..."
          />
        </div>

        <div className="form-right">
          <h3>Cover Image</h3>
          <ImageUpload
            label="Cover Image"
            value={formData.coverImage}
            onUploaded={(url) =>
              setFormData((prev) => ({ ...prev, coverImage: url }))
            }
            shape="square"
          />

          <h3>Lyrics (optional)</h3>
          <label>Original</label>
          <textarea
            name="original"
            value={formData.original}
            onChange={handleChange}
            rows={4}
            placeholder="Original lyrics..."
          />

          <label>English Translation</label>
          <textarea
            name="english"
            value={formData.english}
            onChange={handleChange}
            rows={4}
            placeholder="English translation..."
          />

          <label>Romanized</label>
          <textarea
            name="romanized"
            value={formData.romanized}
            onChange={handleChange}
            rows={4}
            placeholder="Romanized lyrics..."
          />

          <h3>Credits</h3>
          {credits.map((credit, index) => (
            <div className="credit-row" key={index}>
              <input
                type="text"
                placeholder="Role (e.g. Lyricist)"
                value={credit.role}
                onChange={(e) =>
                  handleCreditChange(index, "role", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Name"
                value={credit.name}
                onChange={(e) =>
                  handleCreditChange(index, "name", e.target.value)
                }
              />
              <button
                type="button"
                className="remove-credit-btn"
                onClick={() => removeCreditRow(index)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))}
          <button
            type="button"
            className="add-credit-btn"
            onClick={addCreditRow}
          >
            + Add Credit
          </button>

          <button type="submit" className="save-btn" disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReleaseForm;
