import express from "express";
import { upload } from "../congif/multer.config.js";
import { getAllPost } from "../controllers/post.controller.js";
const router = express.Router();

router.post("/create", upload.single("image"), createPost);
router.get('/getAllPost', getAllPost)
export default router;
