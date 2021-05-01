import express from "express";
const router = express.Router();
import {
  updatePostManage,
  addRequestPost,
  getPostById,
  getPosts,
  updateDonationDate,
} from "../controllers/postController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addRequestPost).get(protect, getPosts);
router.route("/:id").get(protect, admin, getPostById);
router.route("/:id/manage").put(protect, updatePostManage);
router.route("/:id/review").put(protect, admin, updateDonationDate);


export default router;
