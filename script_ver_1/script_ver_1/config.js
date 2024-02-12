import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 5000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/script_V1";

export const JWT_SECRET = process.env.JWT_SECRET || "secretkey";