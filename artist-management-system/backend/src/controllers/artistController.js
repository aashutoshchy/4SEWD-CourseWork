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

export const createArtist = async (req, res) => {
  try {
    const {
      name,
      slug,
      genre,
      bio,
      debutDate,
      profileImage,
      spotifyUrl,
      youtubeUrl,
      socialLinks,
    } = req.body;

    const artist = await Artist.create({
      name,
      slug,
      genre,
      bio,
      debutDate,
      profileImage,
      spotifyUrl,
      youtubeUrl,
      socialLinks,
    });

    res.status(201).json(artist);
  } catch (error) {
    // Duplicate slug error
    // 409 — conflict (duplicate)
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "An artist with this slug already exists" });
    }
    // validation error (missing required fields, wrong types)
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    // anything else
    // 500 — server/database error
    res.status(500).json({ message: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const {
      name,
      slug,
      genre,
      bio,
      debutDate,
      profileImage,
      spotifyUrl,
      youtubeUrl,
      socialLinks,
    } = req.body;

    const artist = await Artist.findOneAndUpdate(
      { slug: req.params.slug },
      {
        $set: {
          name,
          slug,
          genre,
          bio,
          debutDate,
          profileImage,
          spotifyUrl,
          youtubeUrl,
          socialLinks,
        },
      },
      { new: true, runValidators: true },
    );

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(artist);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "An artist with this slug already exists" });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findOneAndDelete({ slug: req.params.slug });

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json({ message: `${artist.name} has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
