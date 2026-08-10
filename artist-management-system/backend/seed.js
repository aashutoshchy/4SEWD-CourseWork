import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import "dotenv/config";
import mongoose from "mongoose";
import Artist from "./src/models/Artist.js";
import Release from "./src/models/Release.js";

const artists = [
  {
    name: "IU",
    slug: "iu",
    genre: "Pop / R&B",
    debutDate: "2008-09-18",
    realName: "Lee Ji-eun",
    birthDate: "1993-05-16",
    height: "162 cm",
    weight: "47 kg",
    occupation: "Singer, Songwriter, Actress",
    instruments: "Vocals, Guitar, Piano",
    yearsActive: "2008 – present",
    bio: "Lee Ji-eun, known by her stage name IU, is a South Korean singer-songwriter and actress. She debuted at fifteen with the EP Lost and Found (2008) and achieved national stardom with 'Good Day' in 2010, which spent five consecutive weeks at the top of South Korea's Gaon Digital Chart.",
    profileImage:
      "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/09/20/7bbf6337-8997-46f2-9616-ca6c4da9a112_70fdfdcb.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU",
    youtubeUrl: "https://youtube.com/@IUofficial",
    socialLinks: {
      instagram: "https://instagram.com/dlwlrma",
    },
  },
  {
    name: "Darshan Raval",
    slug: "darshanraval",
    genre: "Indie / Pop",
    debutDate: "2015-01-01",
    realName: "Darshan Raval",
    birthDate: "1994-06-18",
    height: "170 cm",
    weight: "65 kg",
    occupation: "Singer, Songwriter, Composer",
    instruments: "Vocals, Guitar",
    yearsActive: "2015 – present",
    bio: "Darshan Raval is an Indian singer and songwriter known for his soulful voice and romantic compositions. He rose to fame after appearing on India's Raw Star and has since released numerous chart-topping singles independently.",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoW5sPdtnW2p5j7g3cUC1cpl_c0fAodArERdZM0TiXZwWeOen9YRuqxm7&s=10",
    spotifyUrl: "https://open.spotify.com/artist/2wnlOarNFGi1ySIBmDPSJI",
    youtubeUrl: "https://youtube.com/@DarshanRavalOfficial",
    socialLinks: {
      instagram: "https://instagram.com/darshanravaldz",
    },
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Artist.deleteMany();
    console.log("Existing artists cleared");

    const insertedArtists = await Artist.insertMany(artists);
    console.log("Artists seeded successfully");

    const iuId = insertedArtists[0]._id;
    const darshanId = insertedArtists[1]._id;

    await Release.deleteMany();
    console.log("Existing releases cleared");

    await Release.insertMany([
      {
        artistId: iuId,
        title: "Bye Summer",
        type: "Single",
        duration: "3:28",
        releaseDate: "2024-08-06",
        year: 2024,
        coverImage:
          "https://i.scdn.co/image/ab67616d0000b273af751775c469888f17c5f6d7",
        genre: { primary: "Pop", secondary: "Ballad" },
        streamingLinks: {
          spotify: "https://open.spotify.com/track/example1",
          youtube: "https://youtube.com/watch?v=example1",
        },
        lyrics: {
          original: "Original lyrics here...",
          english: "English translation here...",
          romanized: null,
        },
        credits: [
          { role: "Lyricist", name: "IU" },
          { role: "Composer", name: "IU" },
          { role: "Arranger", name: "Lee Jong-hoon" },
        ],
      },
      {
        artistId: iuId,
        title: "Strawberry Moon",
        type: "Single",
        duration: "3:19",
        releaseDate: "2021-10-19",
        year: 2021,
        coverImage:
          "https://upload.wikimedia.org/wikipedia/en/c/c0/Strawberry_Moon_IU_cover.jpg",
        genre: { primary: "Pop", secondary: "R&B" },
        streamingLinks: {
          spotify: "https://open.spotify.com/track/example2",
          youtube: "https://youtube.com/watch?v=example2",
        },
        lyrics: {
          original: "Original lyrics here...",
          english: null,
          romanized: null,
        },
        credits: [
          { role: "Lyricist", name: "IU" },
          { role: "Composer", name: "IU" },
          { role: "Arranger", name: "Lee Jong-hoon" },
        ],
      },
      {
        artistId: darshanId,
        title: "Tera Zikr",
        type: "Single",
        duration: "4:12",
        releaseDate: "2017-11-08",
        year: 2017,
        coverImage:
          "https://c.saavncdn.com/820/Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg",
        genre: { primary: "Indie", secondary: "Pop" },
        streamingLinks: {
          spotify: "https://open.spotify.com/track/example3",
          youtube: "https://youtube.com/watch?v=example3",
        },
        lyrics: {
          original: "Original lyrics here...",
          english: null,
          romanized: null,
        },
        credits: [
          { role: "Lyricist", name: "Darshan Raval" },
          { role: "Composer", name: "Darshan Raval" },
          { role: "Arranger", name: "Darshan Raval" },
        ],
      },
      {
        artistId: darshanId,
        title: "Saathiya",
        year: 2026,
        coverImage:
          "https://c.saavncdn.com/694/Saathiya-Hindi-2026-20260220193432-500x500.jpg",
        genre: { primary: "Indie", secondary: "Pop" },
        streamingLinks: {
          spotify: "https://open.spotify.com/track/example4",
          youtube: "https://youtube.com/watch?v=example4",
        },
        lyrics: {
          original: "Original lyrics here...",
          english: null,
          romanized: null,
        },
      },
    ]);
    console.log("Releases seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

seedDB();
