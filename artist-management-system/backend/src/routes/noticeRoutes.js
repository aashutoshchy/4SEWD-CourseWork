import express from "express";
import {
  createNotice,
  deleteNotice,
  getAllNotices,
} from "../controllers/noticeController.js";

const router = express.Router();

router.get("/", getAllNotices);
router.post("/", createNotice);
router.delete("/:id", deleteNotice);

export default router;
