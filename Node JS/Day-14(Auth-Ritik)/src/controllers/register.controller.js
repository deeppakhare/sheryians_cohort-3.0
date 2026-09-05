import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!(userName || email || password))
      return res.status(400).json({
        sucess: false,
        message: "Emil,data password required",
      });

    const alreadyRegister = await userModel.findOne({ email });

    if (alreadyRegister)
      return res.status(400).json({
        sucess: false,
        message: "user already exist",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel
      .create({
        userName,
        email,
        password: hashedPassword,
      })
      .select("-password");

    const token = jwt.sign(user._id, process.env.SECREATY_KEY);

    return res.status(201).json({
      sucess: true,
      message: "regestered successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal api error",
    });
  }
};
