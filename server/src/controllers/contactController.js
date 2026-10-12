import mongoose from "mongoose";
import { Message } from "../models/Message.js";
import { contactSchema } from "../validators/contact.js";
import { sendContactEmail } from "../services/mailer.js";

export async function submitContact(req, res) {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const errors = {};
    for (const issue of parsed.error.issues) {
      errors[issue.path[0] ?? "form"] ??= issue.message; // keep the first message per field
    }
    // Honeypot tripped: pretend success so bots learn nothing.
    if (errors.website) return res.status(201).json({ ok: true });
    return res.status(400).json({ ok: false, errors });
  }

  const { name, email, message } = parsed.data;
  const storing = mongoose.connection.readyState === 1;
  const doc = storing ? await Message.create({ name, email, message }) : null;

  try {
    await sendContactEmail({ name, email, message });
    if (doc) await Message.updateOne({ _id: doc._id }, { emailed: true });
  } catch (err) {
    console.error("Email send failed:", err.message);
    // A stored message is not lost; otherwise report the failure.
    if (!doc) {
      return res.status(502).json({
        ok: false,
        errors: { form: "Could not send right now. Please email me directly." },
      });
    }
  }

  res.status(201).json({ ok: true });
}
