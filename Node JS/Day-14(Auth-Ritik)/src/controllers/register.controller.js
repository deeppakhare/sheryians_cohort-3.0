import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!(userName || email || password))
      return res.status(400).json({
        sucess: false,
        message: "Email, username and password required",
      });

    const alreadyRegister = await userModel.findOne({ email });

    if (alreadyRegister)
      return res.status(400).json({
        sucess: false,
        message: "user already exist",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      userName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.SECREATY_KEY);

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

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "Enter email & password",
      });

    const findUser = await userModel.findOne({ email });

    if (!findUser)
      return res.status(400).json({
        message: "User not find",
      });

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch)
      return res.status(401).json({
        message: "Invalid password enter",
      });

    const token = jwt.sign({ id: user._id }, process.env.SECREATY_KEY);

    res.status(200).json({
      status: true,
      message: "User logged in",
      findUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal api error",
    });
  }
};


