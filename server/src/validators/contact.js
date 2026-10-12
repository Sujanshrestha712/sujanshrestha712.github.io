import { z } from "zod";

// No line breaks allowed in single-line fields (blocks email header injection).
const singleLine = /^[^\r\n]+$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100).regex(singleLine, "Invalid name"),
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(254),
  message: z.string().trim().min(10, "Message is too short").max(3000, "Message is too long"),
  // Honeypot: real users never see or fill this field.
  website: z.string().max(0).optional(),
});
