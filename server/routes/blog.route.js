import express from "express";
import isAuth from "../middleware/isAuth.js";
import { addBlog, deleteBlogs, editBlog, getBlogById, getBlogs, handleImageUpload } from "../controllers/blog.controller.js";
import { upload } from "../config/cloudinary.js";

const router = express.Router();


router.post("/upload-image",upload.single("my_file"), isAuth, handleImageUpload);
router.post("/add", isAuth, addBlog);
router.get("/get",getBlogs);
router.put("/update/:id", isAuth, editBlog);
router.delete("/delete/:id", isAuth, deleteBlogs);
router.get("/get/:id", isAuth, getBlogById);

export default router;