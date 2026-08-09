import express from "express";

import {
  getFeedbacks,
  createFeedback,
} from "../controllers/contactController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getFeedbacks);
router.post("/", createFeedback);

export default router;
