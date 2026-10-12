import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  CLIENT_ORIGINS: z.string().default("http://localhost:5173"),
  MONGODB_URI: z.string().optional(),
  RESEND_API_KEY: z.string().min(1),
  MAIL_FROM: z.string().min(3).default("Portfolio Contact <onboarding@resend.dev>"),
  MAIL_TO: z.string().email(),
  CONTACT_RATE_LIMIT: z.coerce.number().int().positive().default(5), // messages per IP per hour
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration:");
  for (const issue of parsed.error.issues) {
    console.error(` - ${issue.path.join(".")}: ${issue.message}`);
  }
  process.exit(1);
}

export const env = {
  ...parsed.data,
  isProd: parsed.data.NODE_ENV === "production",
  clientOrigins: parsed.data.CLIENT_ORIGINS.split(",")
    .map((o) => o.trim())
    .filter(Boolean),
};
