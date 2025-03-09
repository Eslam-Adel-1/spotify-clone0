import passwordValidator from "password-validator";

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8, "password must be at least 8 characters")
  .is()
  .max(100, "password can not exceed 100 characters")
  .has()
  .symbols(1, "password must at least contain 1 symbol")
  .has()
  .uppercase(1, "password must at least contain 1 uppercase letter")
  .has()
  .lowercase(1, "password must at least contain 1 lowercase letter")
  .has()
  .digits(1, "password must at least contain 1 digit");

export default passwordSchema;
