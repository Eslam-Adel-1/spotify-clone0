import { Router } from "express";

// Cloudinary Imports
import { upload, handleImageUpload } from "../../utils/cloudinaryConfig.js";

// mongoose
import mongoose from "mongoose";

// jwt
import jwt from "jsonwebtoken";
import User from "../../DB_Schemas/User.js";

// = = = = = = = = = = = = = = = = = = = = = = = = = = =

const changeImageRouter = Router();

changeImageRouter.post(
  "/",
  upload.single("profile-image"),
  async (req, res) => {
    const cookies = req.cookies;
    const userCookie = cookies?.spotify_clone_user_token;
    const { ObjectId } = mongoose.Types;

    try {
      if (!req.file) {
        return res.status(400).json({
          message: "image is required",
        });
      }

      if (!userCookie) {
        return res.status(401).json({ message: "user is not logged in" });
      }

      const userIdCookie = jwt.verify(userCookie, process.env.JWT_SECRET_KEY);

      if (!ObjectId.isValid(userIdCookie.id))
        return res.status(400).json({ message: "id is not valid" });

      if (!userIdCookie.id) {
        return res.status(401).json({ message: "not authorized" });
      }

      const userExists = await User.findOne({ _id: userIdCookie.id });

      if (!userExists) {
        return res.status(404).json({ message: "user is not found" });
      }

      if (userExists.isVerified === false) {
        return res.status(400).json({ message: "user is not verified" });
      }

      // convert the image binary data from multer into base64 to upload it to cloudinary and to be able to us it in the api

      const b64 = Buffer.from(req.file.buffer).toString("base64");
      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const result = await handleImageUpload(dataURI);

      if (!result) {
        return res.status(400).json({ message: "image is not uploaded" });
      }

      await User.updateOne(
        { _id: userIdCookie.id },
        { image: result.secure_url }
      );

      return res
        .status(200)
        .json({ message: "image is uploaded", image: result.secure_url });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: err.message });
    }
  }
);

export default changeImageRouter;

// = = = = = = = = = = = = = = = = = = = = = = = = = = =
