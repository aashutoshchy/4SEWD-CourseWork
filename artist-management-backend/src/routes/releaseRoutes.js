import express from "express";
import {
  getAllReleases,
  getReleaseById,
} from "../controllers/releaseController.js";

const router = express.Router();

router.get("/", getAllReleases);
router.get("/:id", getReleaseById);

export default router;
