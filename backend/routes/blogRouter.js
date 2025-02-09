import express from "express";
import {
  blogPost,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blogController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/post", isAuthenticated, blogPost);
router.delete(
  "/delete/:id",
  isAuthenticated,
  deleteBlog
);
router.get("/all", getAllBlogs);
router.get("/singleblog/:id", isAuthenticated, getSingleBlog);
router.get("/myblogs", isAuthenticated, getMyBlogs);
router.put("/update/:id", isAuthenticated, updateBlog);

export default router;