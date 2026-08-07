import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import "dotenv/config";
import mongoose from "mongoose";
import Artist from "./src/models/Artist.js";

const artists = [
  {
    name: "IU",
    slug: "iu",
    genre: "Pop / R&B",
    debutDate: "2023-05-10",
    bio: "Independent artist blending pop melodies with R&B influences.",
    profileImage:
      "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/09/20/7bbf6337-8997-46f2-9616-ca6c4da9a112_70fdfdcb.jpg",
    spotifyUrl: "https://open.spotify.com",
    youtubeUrl: "https://youtube.com/",
    socialLinks: {
      instagram: "https://instagram.com/example",
      twitter: "https://twitter.com/example",
    },
  },
  {
    name: "Darshan Raval",
    slug: "darshanraval",
    genre: "Indie / Alternative",
    debutDate: "2024-01-15",
    bio: "Rising indie artist known for atmospheric soundscapes.",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoW5sPdtnW2p5j7g3cUC1cpl_c0fAodArERdZM0TiXZwWeOen9YRuqxm7&s=10",
    spotifyUrl: "https://open.spotify.com/artist/example2",
    youtubeUrl: "https://youtube.com/@example2",
    socialLinks: {
      instagram: "https://instagram.com/nova",
      twitter: "https://twitter.com/nova",
    },
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected");

    await Artist.deleteMany();
    console.log("Existing artists deleted.");

    await Artist.insertMany(artists);
    console.log("Artists seeded successfully");
  } catch (e) {
    console.log("Seeding Failed", e.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

seedDB();
