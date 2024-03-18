import express from "express";
import {
  forgetPassword,
  logOut,
  login,
  register,
  resetPassword,
  verifyEmail,
} from "../Controller/AuthController.js";
import { authCheck, validateAuth } from "../Validation/authValidation.js";

const router = express.Router();

router.post("/register", authCheck, validateAuth, register);
router.get("/verifyEmail/:token", verifyEmail);
router.post("/login", login);
router.get("/logout", logOut);
router.post("/forgetPassword", forgetPassword);
router.post("/resetpassword/:token", resetPassword);

export default router;
