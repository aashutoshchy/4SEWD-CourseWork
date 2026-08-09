import express from "express";
import {
  getAllReleases,
  getReleaseById,
  createRelease,
  updateRelease,
  deleteRelease,
} from "../controllers/releaseController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllReleases);
router.get("/:id", getReleaseById);
router.post("/", protect, createRelease);
router.put("/:id", protect, updateRelease);
router.delete("/:id", protect, deleteRelease);

export default router;
