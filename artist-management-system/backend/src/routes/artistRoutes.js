import express from "express";
import {
  getAllArtists,
  getArtistBySlug,
  createArtist,
  updateArtist,
  deleteArtist,
} from "../controllers/artistController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllArtists);
router.get("/:slug", getArtistBySlug);
router.post("/", protect, createArtist);
router.put("/:slug", protect, updateArtist);
router.delete("/:slug", protect, deleteArtist);

export default router;
