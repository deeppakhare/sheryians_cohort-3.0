import express from "express";
import { loginController, registerController } from "../controllers/register.controller.js";

const router = express.Router()

router.post('/register',registerController);

router.get('/login',loginController);

export default router;