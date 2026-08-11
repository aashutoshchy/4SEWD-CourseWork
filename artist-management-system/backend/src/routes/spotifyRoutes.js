import express from "express";
import { fetchSpotifyTrack } from "../controllers/spotifyController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/track", protect, fetchSpotifyTrack);

export default router;
