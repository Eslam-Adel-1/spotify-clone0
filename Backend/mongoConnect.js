import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const readyState = mongoose.connection.readyState;
    switch (readyState) {
      case 0:
        console.log("not connected");
        break;
      case 1:
        console.log("already connected");
        break;
      case 2:
        console.log("Mongo is connecting");
        break;
      case 3:
        console.log("Mongo is disconnecting");
        break;
      default:
        console.error("unknown readyState", readyState);
    }
  } catch (err) {
    console.error(err);
  }
};
