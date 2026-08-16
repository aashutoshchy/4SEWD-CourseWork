import Artist from "../models/Artist.js";

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
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
      bannerImage,
      cardImage,
      galleryImages,
      spotifyUrl,
      youtubeUrl,
      socialLinks,
      realName,
      birthDate,
      height,
      weight,
      occupation,
      instruments,
      soloDebut,
      yearsActive,
    } = req.body;

    const artist = await Artist.create({
      name,
      slug,
      genre,
      bio,
      debutDate,
      profileImage,
      bannerImage,
      cardImage,
      galleryImages,
      spotifyUrl,
      youtubeUrl,
      socialLinks,
      realName,
      birthDate,
      height,
      weight,
      occupation,
      instruments,
      soloDebut,
      yearsActive,
    });

    res.status(201).json(artist);
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

export const updateArtist = async (req, res) => {
  try {
    const {
      name,
      slug,
      genre,
      bio,
      debutDate,
      profileImage,
      bannerImage,
      cardImage,
      galleryImages,
      spotifyUrl,
      youtubeUrl,
      socialLinks,
      realName,
      birthDate,
      height,
      weight,
      occupation,
      instruments,
      soloDebut,
      yearsActive,
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
          bannerImage,
          cardImage,
          galleryImages,
          spotifyUrl,
          youtubeUrl,
          socialLinks,
          realName,
          birthDate,
          height,
          weight,
          occupation,
          instruments,
          soloDebut,
          yearsActive,
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
