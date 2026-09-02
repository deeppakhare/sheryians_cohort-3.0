import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/users.models.js";


const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email,name,password
  })

  const token = jwt.sign(
    {
      id: user._id
    },
    "9d5a708671477e4b11776a9756084f2285dc46e73f918903bff3309275f17c4f1e2c3aa7123bca7fcc84cdcc9a5c990954133e631571ec50",
  );

  res.status(201).json({
    message: "User Create Successfully",
    data: {
      user: {
        email,
        name,
        id: user._id
      },
      token,
    },
  });
});

app.get

export default app;
