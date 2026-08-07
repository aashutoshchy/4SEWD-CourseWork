import Artist from "../models/Artist.js";

export const getAllArtists = async (req, res) => {
  try {
    console.log("getAllArtists hit");
    const artists = await Artist.find();
    console.log("artists found:", artists.length);
    console.log("artists data:", JSON.stringify(artists[0]));
    res.json(artists); // remove this to make the page forever loaded.
  } catch (error) {
    console.log("error caught:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getArtistBySlug = async (req, res) => {
  try {
    const artist = await Artist.findOne({ slug: req.params.slug });

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
