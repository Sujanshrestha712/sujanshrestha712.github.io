import { rateLimit } from "express-rate-limit";
import { env } from "../config/env.js";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: env.CONTACT_RATE_LIMIT,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { ok: false, errors: { form: "Too many messages. Please try again later." } },
});
