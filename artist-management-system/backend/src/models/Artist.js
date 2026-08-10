import mongoose from "mongoose";

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
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
    realName: {
      type: String,
      trim: true,
    },
    birthDate: {
      type: Date,
    },
    height: {
      type: String,
    },
    weight: {
      type: String,
    },
    occupation: {
      type: String,
    },
    instruments: {
      type: String,
    },
    yearsActive: {
      type: String,
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
