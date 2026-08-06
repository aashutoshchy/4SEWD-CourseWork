import express from "express";
import cors from "cors";
import artistRoutes from "./routes/artistRoutes.js";
import releaseRoutes from "./routes/releaseRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/artists", artistRoutes);
app.use("/api/releases", releaseRoutes);

export default app;
