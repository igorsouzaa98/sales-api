import express from "express";
import UsersController from "../controllers/usersController.js";
import usersValidation from "../models/Users/UsersValidation.js";

const router = express.Router();

router.post("/auth/signup", usersValidation, UsersController.signup);
router.post("/auth/login", usersValidation, UsersController.login);

export default router;
