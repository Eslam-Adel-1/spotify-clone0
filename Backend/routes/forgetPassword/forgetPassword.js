import { Router } from "express";
import User from "../../DB_Schemas/User.js";
import { sendForgetPasswordEmail } from "../../utils/nodeMailer.js";
import validator from "validator";

const forgetPasswordRouter = Router();

forgetPasswordRouter.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      return res.status(400).json({ message: "email is not valid" });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const name = userExists.name;
    const id = userExists._id;

    await sendForgetPasswordEmail(name, email, id);

    return res.status(200).json({ message: "email sent" });
  } catch (err) {
    console.error(err.message);
  }
});

export default forgetPasswordRouter;
