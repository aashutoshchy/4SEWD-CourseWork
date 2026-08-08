import mongoose from "mongoose";

const releaseSchema = new mongoose.Schema(
  {
    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      primary: {
        type: String,
        required: true,
        trim: true,
      },
      secondary: {
        type: String,
        trim: true,
      },
    },
    year: {
      type: Number,
      required: true,
    },
    coverImage: {
      type: String,
    },
    streamingLinks: {
      spotify: { type: String },
      youtube: { type: String },
    },
    lyrics: {
      original: { type: String },
      english: { type: String },
      romanized: { type: String },
    },
  },
  { timestamps: true },
);

const Release = mongoose.model("Release", releaseSchema);

export default Release;
