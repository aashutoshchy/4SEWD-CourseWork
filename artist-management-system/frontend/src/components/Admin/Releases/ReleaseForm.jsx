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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  useEffect(() => {
    fetch(`${API_URL}/api/artists`)
      .then((res) => res.json())
      .then((data) => setArtists(data))
      .catch((e) => console.log(e));
  }, []);

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

  // Step 1: search iTunes, get up to 5 candidates
  const handleSearchTrack = async () => {
    if (!searchQuery.trim()) return;

    setFetchError("");
    setFetching(true);
    setSearchResults([]);
    setFetchedPreview(null);

    const token = localStorage.getItem("aurora_token");

    try {
      const res = await fetch(
        `${API_URL}/api/itunes/search?q=${encodeURIComponent(searchQuery)}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const data = await res.json();

      if (!res.ok) {
        setFetchError(data.message);
        setFetching(false);
        return;
      }

      setSearchResults(data);
      setFetching(false);
    } catch (e) {
      setFetchError("Failed to fetch track data. Try again.");
      setFetching(false);
    }
  };

  // Step 2: admin picks one candidate from the results list
  const handleSelectResult = (track) => {
    setFetchedPreview(track);
    setSearchResults([]);
  };

  // Step 3: admin confirms the selected preview, apply it to the form
  const handleUsePreview = () => {
    setFormData((prev) => ({
      ...prev,
      title: fetchedPreview.title || prev.title,
      coverImage: fetchedPreview.coverImage || prev.coverImage,
      releaseDate: fetchedPreview.releaseDate
        ? fetchedPreview.releaseDate.split("T")[0]
        : prev.releaseDate,
      duration: fetchedPreview.durationMs
        ? msToDuration(fetchedPreview.durationMs)
        : prev.duration,
      year: fetchedPreview.releaseDate
        ? new Date(fetchedPreview.releaseDate).getFullYear()
        : prev.year,
      genrePrimary: fetchedPreview.genre || prev.genrePrimary,
    }));
    setFetchedPreview(null);
    setSearchQuery("");
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

      {/* iTunes auto-fetch section */}
      <div className="track-fetch-box">
        <h3>Auto-fill from Apple Music</h3>
        <div className="track-fetch-row">
          <input
            type="text"
            placeholder="Search song title + artist (e.g. Bye Summer IU)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearchTrack} disabled={fetching}>
            {fetching ? "Searching..." : "Search"}
          </button>
        </div>
        {fetchError && <p className="field-error">{fetchError}</p>}

        {/* Multiple candidates — admin picks one */}
        {searchResults.length > 0 && (
          <div className="search-results-list">
            {searchResults.map((track, index) => (
              <div
                key={index}
                className="search-result-row"
                onClick={() => handleSelectResult(track)}
              >
                {track.coverImage && (
                  <img src={track.coverImage} alt={track.title} />
                )}
                <div className="search-result-info">
                  <p className="preview-title">{track.title}</p>
                  <p className="preview-channel">
                    {track.artistName} — {track.collectionName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Single selected candidate — admin confirms */}
        {fetchedPreview && (
          <div className="track-preview">
            <img src={fetchedPreview.coverImage} alt={fetchedPreview.title} />
            <div className="track-preview-info">
              <p className="preview-title">{fetchedPreview.title}</p>
              <p className="preview-channel">
                {fetchedPreview.artistName} — {fetchedPreview.collectionName}
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

// converts milliseconds (e.g. 208000) into "3:28"
function msToDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default ReleaseForm;
