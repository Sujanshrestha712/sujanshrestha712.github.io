const API_URL = import.meta.env.VITE_API_URL ?? "";

/** Posts the contact form. Resolves to { ok, errors? }; never throws on HTTP errors. */
export async function sendMessage(payload) {
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    return res.ok ? { ok: true } : { ok: false, errors: data.errors ?? { form: "Something went wrong." } };
  } catch {
    return { ok: false, errors: { form: "Network error. Please try again or email me directly." } };
  }
}
