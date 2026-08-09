import express from "express";
import {
  createNotice,
  deleteNotice,
  getAllNotices,
} from "../controllers/noticeController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllNotices);
router.post("/", protect, createNotice);
router.delete("/:id", protect, deleteNotice);

export default router;
