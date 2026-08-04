import express from "express";
import {
  getAllArtists,
  getArtistBySlug,
} from "../controllers/artistController.js";

const router = express.Router();

router.get("/", getAllArtists);
router.get("/:slug", getArtistBySlug);

export default router;
