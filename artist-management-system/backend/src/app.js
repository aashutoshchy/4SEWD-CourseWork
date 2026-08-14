import express from "express";
import cors from "cors";
import artistRoutes from "./routes/artistRoutes.js";
import releaseRoutes from "./routes/releaseRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import spotifyRoutes from "./routes/spotifyRoutes.js";
import youtubeRoutes from "./routes/youtubeRoutes.js";
import itunesRoutes from "./routes/itunesRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/artists", artistRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/releases", releaseRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/spotify", spotifyRoutes);
app.use("/api/youtube", youtubeRoutes);
app.use("/api/itunes", itunesRoutes);

export default app;
