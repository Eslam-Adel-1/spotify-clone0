const generateVerificationCode = () => {
  const verificationCode = Math.floor(Math.random() * 1000000).toString();
  return verificationCode;
};

export default generateVerificationCode;
