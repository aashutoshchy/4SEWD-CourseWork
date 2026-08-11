import express from "express";
import { fetchYoutubeVideo } from "../controllers/youtubeController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/video", protect, fetchYoutubeVideo);

export default router;
