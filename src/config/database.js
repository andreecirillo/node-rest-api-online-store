import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/node-rest-api-online-store";

const connect = () =>
  mongoose.connect(mongodbUrl);

export default {
  connect,
  connection: mongoose.connection
};