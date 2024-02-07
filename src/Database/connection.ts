import { config } from "dotenv";
import mongoose from "mongoose";

config();

export const db_connect = async () =>
  await mongoose.connect(
    "mongodb+srv://pedroferreirac:-Candido09@cluster0.svht3vv.mongodb.net/?retryWrites=true&w=majority"
  );
