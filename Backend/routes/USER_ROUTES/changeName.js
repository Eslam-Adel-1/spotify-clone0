import { Router } from "express";
import User from "../../DB_Schemas/User.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const changeNameRouter = Router();

changeNameRouter.post("/", async (req, res) => {
  const { newName } = req.body;
  const cookies = req.cookies;
  const userCookie = cookies?.spotify_clone_user_token;
  const { ObjectId } = mongoose.Types;

  try {
    if (!userCookie) {
      return res.status(401).json({ message: "user is not logged in" });
    }

    const userIdCookie = jwt.verify(userCookie, process.env.JWT_SECRET_KEY);

    if (!ObjectId.isValid(userIdCookie.id))
      return res.status(400).json({ message: "id is not valid" });

    if (!userIdCookie.id || !newName) {
      return res.status(400).json({ message: "an error occured " });
    }

    const userExists = await User.findOne({ _id: userIdCookie.id });
    if (!userExists) {
      return res.status(404).json({ message: "user is not found" });
    }

    await User.updateOne({ _id: userIdCookie.id }, { name: newName });
    return res.status(200).json({ message: "name changed successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

export default changeNameRouter;
