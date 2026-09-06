import express from "express";
import dotenv from "dotenv";
import userroute from '../routes/user.route.js'
dotenv.config()
let app = express()
app.use(express.json());

app.use('/api/auth',userroute)

export default app