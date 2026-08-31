import express from "express";
import dotenv from "dotenv";
import postRoutes from './routes/post.route'

dotenv.config();
const app = express();

app.use('/api/post',postRoutes)
export default app;
