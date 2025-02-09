import { isAuthenticated } from "../middlewares/auth.js";
import { getAllAuthors, getMyProfile, login, logout, register } from "./../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/myprofile", isAuthenticated, getMyProfile);
router.get("/authors", isAuthenticated, getAllAuthors);


export default router;