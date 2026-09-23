import type { RequestHandler } from "express";
import { rateLimit } from "express-rate-limit";

export function createApiRateLimiter(options: {
  windowMs: number;
  limit: number;
}): RequestHandler {
  assertPositiveInteger(options.windowMs, "windowMs");
  assertPositiveInteger(options.limit, "limit");

  return rateLimit({
    windowMs: options.windowMs,
    limit: options.limit,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { error: "Too many requests. Try again later." },
  });
}

function assertPositiveInteger(value: number, name: string): void {
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error(`rate limit ${name} must be a positive integer`);
  }
}
