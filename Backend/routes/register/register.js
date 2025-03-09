// JWT
import jwt from "jsonwebtoken";

// Email validator
import validator from "validator";

// Mongoose Schemas
import User from "../../DB_Schemas/User.js";

// Utils Functions
import generateVerificationCode from "../../utils/generateVerificationCode.js";
import { sendVerificationEmail } from "../../utils/nodeMailer.js";
import passwordSchema from "../../utils/passwordValidation.js";
import { encryptPassword } from "../../utils/encryptPassword.js";

// Express Router
import { Router } from "express";

// Environment Variables
import dotenv from "dotenv";

const registerRouter = Router();

registerRouter.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    if (name.length < 4) {
      return res
        .status(400)
        .json({ message: "name must be at least 4 characters" });
    }

    const passwordValidationErrors = passwordSchema.validate(password, {
      details: true,
    });

    if (passwordValidationErrors.length > 0) {
      return res
        .status(400)
        .json({ message: passwordValidationErrors[0].message });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "email is not valid" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "email already exists" });
    }

    const verificationCode = generateVerificationCode();

    const hashedCode = await encryptPassword(verificationCode);
    const hashedPassword = await encryptPassword(password);

    const userAccount = new User({
      name,
      email,
      password: hashedPassword,
      verificationCode: hashedCode,
    });
    await userAccount.save();

    await sendVerificationEmail(name, email, verificationCode);

    const userCookieId = jwt.sign(
      { id: userAccount._id },
      process.env.JWT_SECRET_KEY
    );

    res.cookie("spotify_clone_user_token", userCookieId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });

    return res.status(201).json({
      message: "account created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Error: err.message });
  }
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default registerRouter;
