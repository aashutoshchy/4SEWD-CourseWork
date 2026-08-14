import express from "express";

import {
  getFeedbacks,
  createFeedback,
  deleteFeedback,
} from "../controllers/contactController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getFeedbacks);
router.post("/", createFeedback);
router.delete("/:id", protect, deleteFeedback);

export default router;
