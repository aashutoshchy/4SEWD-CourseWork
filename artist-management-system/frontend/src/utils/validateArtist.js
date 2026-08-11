export const validateArtist = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Artist name is required";
  }

  if (!formData.slug.trim()) {
    errors.slug = "Slug is required";
  } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
    errors.slug =
      "Slug can only contain lowercase letters, numbers, and hyphens";
  }

  if (!formData.bio.trim()) {
    errors.bio = "Bio is required";
  } else if (formData.bio.trim().length < 20) {
    errors.bio = "Bio should be at least 20 characters";
  }

  const urlPattern = /^https?:\/\/.+/;

  if (formData.spotifyUrl && !urlPattern.test(formData.spotifyUrl)) {
    errors.spotifyUrl = "Enter a valid URL starting with http:// or https://";
  }

  if (formData.youtubeUrl && !urlPattern.test(formData.youtubeUrl)) {
    errors.youtubeUrl = "Enter a valid URL starting with http:// or https://";
  }

  if (formData.instagram && !urlPattern.test(formData.instagram)) {
    errors.instagram = "Enter a valid URL starting with http:// or https://";
  }

  return errors;
};
