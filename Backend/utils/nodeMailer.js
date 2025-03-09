import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { htmlEmailTemplate } from "../utils/htmlEmailTemplate.js";
import { htmlForgetPasswordTemplate } from "../utils/htmlEmailTemplate.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

//---------------------------------------------------------------------

export const sendVerificationEmail = async (name, email, verificationCode) => {
  const emailTemplate = htmlEmailTemplate(verificationCode, name);
  try {
    transporter.sendMail({
      to: email,
      subject: "Verification Code",
      text: `Your verification code is ${verificationCode}`,
      html: emailTemplate,
    });
    console.log("email sent");
  } catch (err) {
    throw new Error(err.message);
  }
};

//---------------------------------------------------------------------

export const sendForgetPasswordEmail = async (name, email, id) => {
  const emailTemplate = htmlForgetPasswordTemplate(id, name);
  try {
    transporter.sendMail({
      to: email,
      subject: "Reset Your Password",
      text: `Reset Your Password`,
      html: emailTemplate,
    });
    console.log("email sent");
  } catch (err) {
    throw new Error(err.message);
  }
};

//---------------------------------------------------------------------
