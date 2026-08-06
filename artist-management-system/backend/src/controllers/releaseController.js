import releases from "../data/releases.js";

export const getAllReleases = (req, res) => {
  const { artistId } = req.query;

  if (artistId) {
    const filtered = releases.filter((r) => r.artistId === parseInt(artistId));
    return res.json(filtered);
  }

  res.json(releases);
};

export const getReleaseById = (req, res) => {
  const release = releases.find((r) => r.id === parseInt(req.params.id));

  if (!release) {
    return res.status(404).json({ message: "Release not found" });
  }

  res.json(release);
};
