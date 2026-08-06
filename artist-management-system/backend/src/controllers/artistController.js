import artists from "../data/artists.js";

export const getAllArtists = (req, res) => {
  res.json(artists);
};

export const getArtistBySlug = (req, res) => {
  const artist = artists.find((a) => a.slug === req.params.slug);

  if (!artist) {
    return res.status(404).json({ message: "Artist not found" });
  }

  res.json(artist);
};
