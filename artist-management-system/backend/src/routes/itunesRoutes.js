import express from "express";
import { fetchItunesTrack } from "../controllers/itunesController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/search", protect, fetchItunesTrack);

export default router;
