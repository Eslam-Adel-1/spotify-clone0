import { model, Schema } from "mongoose";

const messageSchema = new Schema({
  senderEmail: { type: String, required: true },
  senderName: { type: String, required: true },
  receiverName: { type: String, required: true },
  receiverEmail: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = model("Message", messageSchema);
export default Message;
