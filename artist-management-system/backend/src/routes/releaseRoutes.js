import express from "express";
import {
  getAllReleases,
  getReleaseById,
  createRelease,
  updateRelease,
  deleteRelease,
} from "../controllers/releaseController.js";

const router = express.Router();

router.get("/", getAllReleases);
router.get("/:id", getReleaseById);
router.post("/", createRelease);
router.put("/:id", updateRelease);
router.delete("/:id", deleteRelease);

export default router;
