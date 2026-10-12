import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465,
  auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
});

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);

/** Sends a portfolio contact message to the owner's inbox. Reply goes to the visitor. */
export function sendContactEmail({ name, email, message }) {
  return transporter.sendMail({
    from: `"Portfolio Contact" <${env.SMTP_USER}>`,
    to: env.MAIL_TO,
    replyTo: { name, address: email },
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)})</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });
}
