import express from "express"

const app = express()

app.use(express.json());

app.post('/create',loginController)

export default app