// import bcrypt from "bcrypt";
import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  const saltRounds = 10;
  var hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
};

export const comparedPassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};
