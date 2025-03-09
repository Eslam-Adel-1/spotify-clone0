import { v2 as cloudinary } from "cloudinary";
import Multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const config = {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

cloudinary.config(config);

const multer = new Multer.memoryStorage();
export const upload = Multer({ storage: multer });

export const handleImageUpload = async (file) => {
  const result = await cloudinary.uploader.upload(file);
  return result;
};
