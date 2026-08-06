import mongoose from "mongoose";

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    genre: {
      type: String,
    },
    bio: {
      type: String,
    },
    debutDate: {
      type: Date,
    },
    profileImage: {
      type: String,
    },
    spotifyUrl: {
      type: String,
    },
    youtubeUrl: {
      type: String,
    },
    socialLinks: {
      instagram: { type: String },
      tiktok: { type: String },
    },
  },
  { timestamps: true },
);

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;
