import { Router } from "express";
import User from "../../DB_Schemas/User.js";
import { comparedPassword } from "../../utils/encryptPassword.js";

const verifyAccountRouter = Router();

verifyAccountRouter.post("/", async (req, res) => {
  try {
    const { email, verificationCode } = req.body;
    const userExists = await User.findOne({ email }).select("-password");

    if (!userExists) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const comparedPasswordResult = await comparedPassword(
      verificationCode,
      userExists.verificationCode
    );

    if (!comparedPasswordResult) {
      return res
        .status(400)
        .json({ message: "verification code is incorrect" });
    }
    await User.updateOne({ email }, { isVerified: true });

    return res.status(200).json({
      message: "account verified successfully",
      user: {
        email: userExists.email,
        name: userExists.name,
        image: userExists.image,
        isAdmin: userExists.isAdmin,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong", error });
  }
});

export default verifyAccountRouter;
