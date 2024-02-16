import { config } from "dotenv";
import mongoose from "mongoose";

config();

export const db_connect = async () =>
  await mongoose.connect(process.env.MONGO_DB_URI);
