import express from "express";
import cors from "cors";
import artistRoutes from "./routes/artistRoutes.js";
import releaseRoutes from "./routes/releaseRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/artists", artistRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/releases", releaseRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

export default app;
