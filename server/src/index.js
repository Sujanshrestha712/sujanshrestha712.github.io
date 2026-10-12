import { env } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { app } from "./app.js";

try {
  await connectDb();
} catch (err) {
  console.error("MongoDB connection failed, continuing without storage:", err.message);
}

app.listen(env.PORT, () => console.log(`API listening on :${env.PORT}`));
