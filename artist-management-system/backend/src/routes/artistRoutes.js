import express from "express";
import {
  getAllArtists,
  getArtistBySlug,
  createArtist,
  updateArtist,
  deleteArtist,
} from "../controllers/artistController.js";

const router = express.Router();

router.get("/", getAllArtists);
router.get("/:slug", getArtistBySlug);
router.post("/", createArtist);
router.put("/:slug", updateArtist);
router.delete("/:slug", deleteArtist);

export default router;
