import { env } from "../config/env.js";

// Sent over HTTPS (Resend) because many hosts block outbound SMTP ports.
const RESEND_URL = "https://api.resend.com/emails";

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);

/** Sends a portfolio contact message to the owner's inbox. Reply goes to the visitor. */
export async function sendContactEmail({ name, email, message }) {
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    signal: AbortSignal.timeout(10_000),
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.MAIL_TO],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)})</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Email provider responded with ${res.status}`);
}
