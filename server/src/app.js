import express from "express";
import helmet from "helmet";
import cors from "cors";
import { env } from "./config/env.js";
import { contactRouter } from "./routes/contact.js";
import { apiLimiter } from "./middleware/rateLimit.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

export const app = express();

app.disable("x-powered-by");
app.set("trust proxy", 1); // behind a host proxy (Render etc.) so rate limits see real IPs
app.use(helmet());
app.use(cors({ origin: env.clientOrigins, methods: ["POST", "GET"] }));
app.use(express.json({ limit: "10kb" }));
app.use("/api", apiLimiter);

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);
