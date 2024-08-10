import express from "express";
import {registerUser,loginUser,logoutUser,updateProfile} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;