import express from "express";
import User from "../../DB_Schemas/User.js";
import { comparedPassword } from "../../utils/encryptPassword.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({
        message: "user does not exist",
      });
    }

    if (userExists.isVerified === false) {
      return res.status(400).json({ message: "user is not verified" });
    }
    const hashedPassword = userExists.password;

    const passwordMatch = await comparedPassword(password, hashedPassword);

    if (!passwordMatch) {
      return res.status(400).json({
        message: "password is not correct",
      });
    }

    const userCookieId = jwt.sign(
      { id: userExists._id },
      process.env.JWT_SECRET_KEY
    );

    res.cookie("spotify_clone_user_token", userCookieId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
      sameSite: "none",
      secure: true,
    });

    return res.status(200).json({
      message: "user logged in successfully",
      user: {
        id: userExists._id,
        email: userExists.email,
        name: userExists.name,
        image: userExists.image || null,
        isAdmin: userExists.isAdmin,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Error: err.message });
  }
});

export default loginRouter;
