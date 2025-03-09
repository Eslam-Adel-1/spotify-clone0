// Mongoose Schemas
import User from "../../DB_Schemas/User.js";

// Mongoose imports
import mongoose from "mongoose";

// Utils functions
import {
  encryptPassword,
  comparedPassword,
} from "../../utils/encryptPassword.js";
import passwordSchema from "../../utils/passwordValidation.js";

// Express Imports
import { Router } from "express";

// jwt
import jwt from "jsonwebtoken";

const resetPasswordRouter = Router();

resetPasswordRouter.post("/", async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const cookies = req.cookies;
  const userCookie = cookies?.spotify_clone_user_token;
  const { ObjectId } = mongoose.Types;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  if (!userCookie) {
    return res.status(401).json({ message: "user is not logged in" });
  }

  const userIdCookie = jwt.verify(userCookie, process.env.JWT_SECRET_KEY);
  const id = userIdCookie.id;

  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "id is not valid" });
    }

    const userExists = await User.findOne({ _id: id });

    if (!userExists) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const isPasswordCorrect = await comparedPassword(
      oldPassword,
      userExists.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "old password is incorrect",
      });
    }

    const passwordValidationErrors = passwordSchema.validate(newPassword, {
      details: true,
    });

    if (passwordValidationErrors.length > 0) {
      return res
        .status(400)
        .json({ message: passwordValidationErrors[0].message });
    }

    const hashedNewPassword = await encryptPassword(newPassword);

    await User.updateOne({ _id: id }, { password: hashedNewPassword });

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default resetPasswordRouter;
