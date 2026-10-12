import { env } from "../config/env.js";

const fail = (res, status, form) => res.status(status).json({ ok: false, errors: { form } });

export const notFound = (_req, res) => fail(res, 404, "Not found");

// Express identifies error handlers by their 4-argument signature.
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, _req, res, _next) {
  if (err.type === "entity.too.large") return fail(res, 413, "Payload too large");
  if (err.type === "entity.parse.failed") return fail(res, 400, "Invalid JSON");
  console.error(err);
  return fail(res, 500, env.isProd ? "Server error" : err.message);
}
