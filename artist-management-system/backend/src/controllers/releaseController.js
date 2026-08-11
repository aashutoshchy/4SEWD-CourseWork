import Release from "../models/Release.js";
import Artist from "../models/Artist.js";

export const getAllReleases = async (req, res) => {
  try {
    const { artistId } = req.query;

    if (artistId) {
      const releases = await Release.find({ artistId }).populate(
        "artistId",
        "name slug",
      );
      return res.json(releases);
    }

    const releases = await Release.find().populate("artistId", "name slug");
    res.json(releases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReleaseById = async (req, res) => {
  try {
    const release = await Release.findById(req.params.id).populate(
      "artistId",
      "name slug",
    );

    if (!release) {
      return res.status(404).json({ message: "Release not found" });
    }

    res.json(release);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRelease = async (req, res) => {
  try {
    const {
      artistId,
      title,
      year,
      coverImage,
      streamingLinks,
      lyrics,
      genre,
      type,
      duration,
      releaseDate,
      credits,
    } = req.body;

    // verify the artist actually exists before linking to them
    const artist = await Artist.findById(artistId);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    const release = await Release.create({
      artistId,
      title,
      year,
      coverImage,
      streamingLinks,
      lyrics,
      genre,
      type,
      duration,
      releaseDate,
      credits,
    });

    res.status(201).json(release);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

export const updateRelease = async (req, res) => {
  try {
    const { title, year, coverImage, streamingLinks, lyrics, genre } = req.body;

    const release = await Release.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title,
          year,
          coverImage,
          streamingLinks,
          lyrics,
          genre,
          type,
          duration,
          releaseDate,
          credits,
        },
      },
      { new: true, runValidators: true },
    );

    if (!release) {
      return res.status(404).json({ message: "Release not found" });
    }

    res.json(release);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

export const deleteRelease = async (req, res) => {
  try {
    const release = await Release.findByIdAndDelete(req.params.id);

    if (!release) {
      return res.status(404).json({ message: "Release not found" });
    }

    res.json({ message: `${release.title} has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
