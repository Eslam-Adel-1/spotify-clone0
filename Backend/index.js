import cors from "cors";
import express from "express";
import dotenv from "dotenv";

// Routes Imports
import loginRouter from "./routes/login/login.js";
import registerRouter from "./routes/register/register.js";
import verifyAccountRouter from "./routes/verifiyAccount/verifyAccount.js";
import forgetPasswordRouter from "./routes/forgetPassword/forgetPassword.js";
import resetPasswordRouter from "./routes/resetPassword/resetPassword.js";
import getMessagesRouter from "./routes/getMessages/getMessagesRouter.js";
import userSessionRouter from "./routes/userSession/userSession.js";
import changeNameRouter from "./routes/USER_ROUTES/changeName.js";
import logoutRouter from "./routes/logout/logout.js";
import changeImageRouter from "./routes/USER_ROUTES/changeProfileImage.js";

// MongoDB Imports
import { connectDB } from "./mongoConnect.js";

// mongoDB Schemas
import Message from "./DB_Schemas/Message.js";

// Socket.io Imports
import { Server } from "socket.io";
import { createServer } from "http";

import cookieParser from "cookie-parser";

// A function to generate a random private key
// import { generateKey } from "./utils/generatePrivateKey.js";

//===========================================================================

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ALLOWED_WEBSITES_CORS,
  },
});

app.set("trust proxy", 1);

app.use(
  cors({
    origin: process.env.ALLOWED_WEBSITES_CORS,
    credentials: true,
  })
);

app.use(cookieParser());
//===========================================================================

app.use(express.json());

// api/auth routes
app.use("/api/auth/login", loginRouter);
app.use("/api/auth/register", registerRouter);
app.use("/api/auth/verifyAccount", verifyAccountRouter);
app.use("/api/auth/forgetPassword", forgetPasswordRouter);
app.use("/api/auth/logout", logoutRouter);

// api/user Routes
app.use("/api/user/changeName", changeNameRouter);
app.use("/api/user/resetPassword", resetPasswordRouter);
app.use("/api/user/profileImage", changeImageRouter);

// api/getMessages routes
app.use("/api/getMessages", getMessagesRouter);

// api/userSession routes
app.use("/api/userSession", userSessionRouter);

//++++++++++++++++++++++++++++++++++++++++++

// SOCKET.IO Connections

let connectedUsers = [];

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id); // Add a connection log

  //================================================

  socket.on("user_info", (data) => {
    connectedUsers = connectedUsers.filter((user) => user.email !== data.email);
    connectedUsers.push({ ...data, id: socket.id });
    console.log(connectedUsers);
    io.emit("list_users", connectedUsers);
    // Emit list_users to all clients
  });

  //================================================

  socket.on("send_message", async (data) => {
    try {
      const message = await Message.create({
        senderEmail: data.senderEmail,
        senderName: data.senderName,
        receiverName: data.receiverName,
        receiverEmail: data.receiverEmail,
        content: data.content,
      });

      if (!message) throw new Error("message not saved");

      const receiverId = connectedUsers.find(
        (user) => user.email === data.receiverEmail
      ).id;

      io.to(receiverId).emit("receive_message", data);

      console.log("message saved:");
    } catch (err) {
      console.log(err);
    }
  });

  //================================================

  socket.on("disconnect", () => {
    connectedUsers = connectedUsers.filter(
      (filtered) => filtered.id !== socket.id
    );
    console.log(connectedUsers);
    io.emit("list_users", connectedUsers);
  });
});

//===========================================================================

httpServer.listen(process.env.PORT, async () => {
  console.log("connected to", process.env.PORT);
  await connectDB();
});
