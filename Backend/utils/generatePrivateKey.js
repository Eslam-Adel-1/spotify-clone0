import crypto from "crypto";

export const generateKey = (length) => {
  const key = crypto.randomBytes(length).toString("hex");
  console.log(key);
  return key;
};
