import { Router } from "express";
import User from "../../DB_Schemas/User.js";
import jwt from "jsonwebtoken";

const userSessionRouter = Router();

userSessionRouter.get("/", async (req, res) => {
  try {
    const cookies = await req.cookies;
    const userToken = cookies.spotify_clone_user_token;

    if (!userToken) {
      return res.status(401).json({
        message: "user is not logged in",
      });
    }

    const userId = jwt.verify(userToken, process.env.JWT_SECRET_KEY);

    if (!userId) {
      return res.status(401).json({
        message: "Token is corrupted",
      });
    }

    const userExists = await User.findOne({ _id: userId.id }).select([
      "-password",
      "-verificationCode",
      "-isVerified",
      "-timestamp",
    ]);

    if (!userExists) {
      return res.status(404).json({
        message: "user is not found",
      });
    }

    return res.status(200).json({
      message: "user is logged in",
      user: userExists,
    });

    //-----------
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

export default userSessionRouter;
