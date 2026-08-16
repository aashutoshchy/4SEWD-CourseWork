import express from "express";
import cors from "cors";
import artistRoutes from "./routes/artistRoutes.js";
import releaseRoutes from "./routes/releaseRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import itunesRoutes from "./routes/itunesRoutes.js";

const app = express();

const allowedOrigins = [
  "https://auroraentertainment.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Thunder Client, curl, mobile apps)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/artists", artistRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/releases", releaseRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/itunes", itunesRoutes);

export default app;
