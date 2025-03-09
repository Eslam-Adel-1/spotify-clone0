import { Router } from "express";
import Message from "../../DB_Schemas/Message.js";

const getMessagesRouter = Router();

getMessagesRouter.post("/", async (req, res) => {
  try {
    const { receiverEmail, senderEmail } = req.body;

    if (!receiverEmail || !senderEmail) {
      return res.status(400).json({ message: "email is required" });
    }

    if (receiverEmail === senderEmail) {
      return res.status(400).json({ message: "email is not valid" });
    }

    const messagesInOneWay = await Message.find({ senderEmail, receiverEmail });
    const messagesInOtherWay = await Message.find({
      senderEmail: receiverEmail,
      receiverEmail: senderEmail,
    });

    const messages = [...messagesInOneWay, ...messagesInOtherWay].sort(
      (a, b) => {
        return a.timestamp - b.timestamp;
      }
    );

    return res.status(200).json({ messages });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Error: err.message });
  }
});

export default getMessagesRouter;
