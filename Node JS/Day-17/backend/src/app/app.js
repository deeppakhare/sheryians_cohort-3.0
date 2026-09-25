import express from "express"
import urlRoutes from "../routes/url.routes.js"
import urlModel from "../models/url.model.js"


const app = express()

app.use(express.json())

app.use("/api/url", urlRoutes)






export default app