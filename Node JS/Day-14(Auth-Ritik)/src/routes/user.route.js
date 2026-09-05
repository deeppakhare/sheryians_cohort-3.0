import express from "express";

const router = express.Router()

router.post('/register',registerController)

export default router;