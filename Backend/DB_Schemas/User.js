import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: null },
  isAdmin: { type: Boolean, default: false },
  verificationCode: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

const User = model("User", userSchema);
export default User;
