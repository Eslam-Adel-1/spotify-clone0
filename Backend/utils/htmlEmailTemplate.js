export const htmlEmailTemplate = (verificationCode, name) => {
  const result = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
            line-height: 1.6;
        }
        .code {
            font-size: 24px;
            font-weight: bold;
            color: #007bff; /* Blue color */
            background-color: #e9ecef; /* Light gray background */
            padding: 10px 20px;
            border-radius: 5px;
            margin: 20px auto;
            display: inline-block; /* To center properly */
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            color: #999;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div className="container">
        <h1>Verify Your Email</h1>
        <p>Dear ${name},</p>
        <p>Thank you for registering with our service. To complete your registration, please verify your email address by entering the following verification code:</p>
        <div className="code">${verificationCode}</div>
        <p>This code will expire in [Expiration Time - e.g., 15 minutes].  If you did not request this verification, please ignore this email.</p>
        <p>If you have any questions, please contact us at <a href="mailto:eslam54667986@gmail.com">eslam54667986@gmail.com</a>.</p>
    </div>
</body>
</html>`;

  return result;
};

export const htmlForgetPasswordTemplate = (id, name) => {
  const result = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          h1 {
              color: #333;
          }
          p {
              color: #666;
              line-height: 1.6;
          }
          .code {
              font-size: 24px;
              font-weight: bold;
              color: #007bff; /* Blue color */
              background-color: #e9ecef; /* Light gray background */
              padding: 10px 20px;
              border-radius: 5px;
              margin: 20px auto;
              display: inline-block; /* To center properly */
          }
          .footer {
              margin-top: 30px;
              text-align: center;
              color: #999;
              font-size: 14px;
          }
      </style>
  </head>
  <body>
      <div className="container">
          <h1>Verify Your Email</h1>
          <p>Dear ${name},</p>
          <p>reset your password by clicking on the link below:</p>
          <a href="http://www.localhost:3000/reset-password/${id}" style="color: #007bff; text-decoration: none;">Click here to reset your password</a>
          <p>This code will expire in [Expiration Time - e.g., 15 minutes].  If you did not request this verification, please ignore this email.</p>
          <p>If you have any questions, please contact us at <a href="mailto:eslam54667986@gmail.com">eslam54667986@gmail.com</a>.</p>
      </div>
  </body>
  </html>`;

  return result;
};
