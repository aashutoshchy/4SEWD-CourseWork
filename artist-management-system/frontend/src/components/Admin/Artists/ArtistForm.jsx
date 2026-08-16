import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageUpload from "../ImageUpload/ImageUpload";
import GalleryUpload from "../ImageUpload/GalleryUpload";
import "./ArtistForm.css";
import { validateArtist } from "../../../utils/validateArtist.js";

const API_URL = import.meta.env.VITE_API_URL;

function ArtistForm() {
  const { slug } = useParams();
  const isEditMode = Boolean(slug);
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    genre: "",
    bio: "",
    debutDate: "",
    profileImage: "",
    bannerImage: "",
    cardImage: "",
    spotifyUrl: "",
    youtubeUrl: "",
    instagram: "",
  });

  const [step2Data, setStep2Data] = useState({
    realName: "",
    birthDate: "",
    height: "",
    weight: "",
    occupation: "",
    instruments: "",
    soloDebut: "",
    yearsActive: "",
    galleryImages: [],
  });

  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isEditMode) return;

    fetch(`${API_URL}/api/artists/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name || "",
          slug: data.slug || "",
          genre: data.genre || "",
          bio: data.bio || "",
          debutDate: data.debutDate ? data.debutDate.split("T")[0] : "",
          profileImage: data.profileImage || "",
          bannerImage: data.bannerImage || "",
          cardImage: data.cardImage || "",
          spotifyUrl: data.spotifyUrl || "",
          youtubeUrl: data.youtubeUrl || "",
          instagram: data.socialLinks?.instagram || "",
        });
        setStep2Data({
          realName: data.realName || "",
          birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
          height: data.height || "",
          weight: data.weight || "",
          occupation: data.occupation || "",
          instruments: data.instruments || "",
          soloDebut: data.soloDebut ? data.soloDebut.split("T")[0] : "",
          yearsActive: data.yearsActive || "",
          galleryImages: data.galleryImages || [],
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [slug, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "name" && !isEditMode) {
        updated.slug = value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }

      return updated;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const fieldErrors = validateArtist(formData);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleStep2Change = (e) => {
    const { name, value } = e.target;
    setStep2Data((prev) => ({ ...prev, [name]: value }));
  };

  const goToStep2 = () => {
    const fieldErrors = validateArtist(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setCurrentStep(2);
  };

  const goToStep1 = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const fieldErrors = validateArtist(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setCurrentStep(1);
      return;
    }

    setSaving(true);

    const token = localStorage.getItem("aurora_token");

    const payload = {
      name: formData.name,
      slug: formData.slug,
      genre: formData.genre,
      bio: formData.bio,
      debutDate: formData.debutDate || undefined,
      profileImage: formData.profileImage,
      bannerImage: formData.bannerImage,
      cardImage: formData.cardImage,
      spotifyUrl: formData.spotifyUrl,
      youtubeUrl: formData.youtubeUrl,
      socialLinks: { instagram: formData.instagram },
      realName: step2Data.realName,
      birthDate: step2Data.birthDate || undefined,
      height: step2Data.height,
      weight: step2Data.weight,
      occupation: step2Data.occupation,
      instruments: step2Data.instruments,
      soloDebut: step2Data.soloDebut || undefined,
      yearsActive: step2Data.yearsActive,
      galleryImages: step2Data.galleryImages,
    };

    const url = isEditMode
      ? `${API_URL}/api/artists/${slug}`
      : `${API_URL}/api/artists`;
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

      navigate("/admin/artists");
    } catch (e) {
      setError("Something went wrong. Please try again.");
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="add-artist-container">
      <h1 className="add-artist-heading">
        {isEditMode ? "Edit Artist" : "Add New Artist"}
      </h1>
      <p className="breadcrumb">
        <Link to="/admin/artists">Artists</Link>
        <span> / </span>
        <span className="breadcrumb-current">
          {isEditMode ? "Edit Artist" : "Add New Artist"}
        </span>
      </p>

      <hr className="divider" />

      {error && <p className="form-error">{error}</p>}

      <form className="add-artist-form" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
            <div className="form-left">
              <h3>Basic Information</h3>

              <label>
                Artist Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter artist's name"
                required
              />
              {errors.name && <p className="field-error">{errors.name}</p>}

              <label>
                Slug <span className="required">*</span>
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="auto-generated-from-name"
                required
              />
              {errors.slug && <p className="field-error">{errors.slug}</p>}

              <label>Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="e.g. J-Pop, K-Pop, Hip-Hop"
              />

              <label>Debut Date</label>
              <input
                type="date"
                name="debutDate"
                value={formData.debutDate}
                onChange={handleChange}
              />

              <label>
                Bio <span className="required">*</span>
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write a short bio..."
                rows={6}
                required
              />
              {errors.bio && <p className="field-error">{errors.bio}</p>}
            </div>

            <div className="form-right">
              <h3>Profile Image</h3>
              <div className="image-upload-section">
                <ImageUpload
                  label="Profile Image"
                  value={formData.profileImage}
                  onUploaded={(url) =>
                    setFormData((prev) => ({ ...prev, profileImage: url }))
                  }
                  shape="circle"
                />

                <ImageUpload
                  label="Banner Image"
                  value={formData.bannerImage}
                  onUploaded={(url) =>
                    setFormData((prev) => ({ ...prev, bannerImage: url }))
                  }
                />

                <ImageUpload
                  label="Card Image"
                  value={formData.cardImage}
                  onUploaded={(url) =>
                    setFormData((prev) => ({ ...prev, cardImage: url }))
                  }
                />
              </div>

              <label>Spotify URL</label>
              <input
                type="url"
                name="spotifyUrl"
                value={formData.spotifyUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="https://open.spotify.com/artist/..."
              />
              {errors.spotifyUrl && (
                <p className="field-error">{errors.spotifyUrl}</p>
              )}

              <label>YouTube URL</label>
              <input
                type="url"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="https://youtube.com/@..."
              />
              {errors.youtubeUrl && (
                <p className="field-error">{errors.youtubeUrl}</p>
              )}

              <label>Instagram URL</label>
              <input
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="https://instagram.com/..."
              />
              {errors.instagram && (
                <p className="field-error">{errors.instagram}</p>
              )}

              <button type="button" className="save-btn" onClick={goToStep2}>
                Next
              </button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="form-left">
              <h3>Background</h3>

              <label>Real Name</label>
              <input
                type="text"
                name="realName"
                value={step2Data.realName}
                onChange={handleStep2Change}
                placeholder="Enter real name"
              />

              <label>Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={step2Data.birthDate}
                onChange={handleStep2Change}
              />

              <label>Height</label>
              <input
                type="text"
                name="height"
                value={step2Data.height}
                onChange={handleStep2Change}
                placeholder="e.g. 170cm"
              />

              <label>Weight</label>
              <input
                type="text"
                name="weight"
                value={step2Data.weight}
                onChange={handleStep2Change}
                placeholder="e.g. 55kg"
              />

              <h3>Career</h3>

              <label>Occupation</label>
              <input
                type="text"
                name="occupation"
                value={step2Data.occupation}
                onChange={handleStep2Change}
                placeholder="e.g. Singer, Songwriter"
              />

              <label>Instruments</label>
              <input
                type="text"
                name="instruments"
                value={step2Data.instruments}
                onChange={handleStep2Change}
                placeholder="e.g. Guitar, Piano"
              />

              <label>Solo Debut</label>
              <input
                type="date"
                name="soloDebut"
                value={step2Data.soloDebut}
                onChange={handleStep2Change}
              />

              <label>Years Active</label>
              <input
                type="text"
                name="yearsActive"
                value={step2Data.yearsActive}
                onChange={handleStep2Change}
                placeholder="e.g. 2013–present"
              />
            </div>

            <div className="form-right">
              <h3>Gallery Images</h3>
              <GalleryUpload
                images={step2Data.galleryImages}
                onChange={(urls) =>
                  setStep2Data((prev) => ({ ...prev, galleryImages: urls }))
                }
              />

              <div className="step-actions">
                <button type="button" className="back-btn" onClick={goToStep1}>
                  Back
                </button>
                <button type="submit" className="save-btn" disabled={saving}>
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ArtistForm;
