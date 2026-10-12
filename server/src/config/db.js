import mongoose from "mongoose";
import { env } from "./env.js";

/** Connects to MongoDB when MONGODB_URI is set; returns whether storage is active. */
export async function connectDb() {
  if (!env.MONGODB_URI) {
    console.warn("MONGODB_URI not set: messages will be emailed but not stored.");
    return false;
  }
  mongoose.set("sanitizeFilter", true);
  await mongoose.connect(env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
  console.log("MongoDB connected");
  return true;
}
