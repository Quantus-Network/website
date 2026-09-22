import assert from "node:assert/strict";
import { once } from "node:events";
import type { Server } from "node:http";
import { describe, it } from "node:test";

import express from "express";

import { createApiRateLimiter } from "../src/middlewares/rateLimit.js";

const LIMITED_MESSAGE = "Too many requests. Try again later.";

function close(server: Server): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
}

async function listen(app: express.Express): Promise<{
  server: Server;
  url: string;
}> {
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Test server did not bind to a TCP port");
  }
  return { server, url: `http://127.0.0.1:${address.port}` };
}

function post(url: string, forwardedFor: string): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": forwardedFor,
    },
    body: JSON.stringify({ email: "person@example.com" }),
  });
}

describe("createApiRateLimiter", () => {
  it("rejects a non-positive limit", () => {
    assert.throws(
      () => createApiRateLimiter({ windowMs: 60_000, limit: 0 }),
      /positive integer/,
    );
  });

  it("returns 429 after the limit for one client IP", async () => {
    const app = express();
    app.set("trust proxy", 1);
    app.post(
      "/api/waitlist",
      createApiRateLimiter({ windowMs: 60_000, limit: 2 }),
      (_req, res) => {
        res.status(201).json({ message: "ok" });
      },
    );

    const { server, url } = await listen(app);
    try {
      const first = await post(`${url}/api/waitlist`, "203.0.113.10");
      const second = await post(`${url}/api/waitlist`, "203.0.113.10");
      const third = await post(`${url}/api/waitlist`, "203.0.113.10");

      assert.equal(first.status, 201);
      assert.equal(second.status, 201);
      assert.equal(third.status, 429);
      assert.deepEqual(await third.json(), { error: LIMITED_MESSAGE });
    } finally {
      await close(server);
    }
  });

  it("counts each client IP separately", async () => {
    const app = express();
    app.set("trust proxy", 1);
    app.post(
      "/api/sponsorships",
      createApiRateLimiter({ windowMs: 60_000, limit: 1 }),
      (_req, res) => {
        res.status(200).json({ message: "ok" });
      },
    );

    const { server, url } = await listen(app);
    try {
      const firstClient = await post(`${url}/api/sponsorships`, "203.0.113.10");
      const secondClient = await post(
        `${url}/api/sponsorships`,
        "203.0.113.11",
      );
      const firstClientAgain = await post(
        `${url}/api/sponsorships`,
        "203.0.113.10",
      );

      assert.equal(firstClient.status, 200);
      assert.equal(secondClient.status, 200);
      assert.equal(firstClientAgain.status, 429);
    } finally {
      await close(server);
    }
  });

  it("ignores a spoofed address ahead of the proxy-reported client IP", async () => {
    const app = express();
    app.set("trust proxy", 1);
    app.post(
      "/api/waitlist",
      createApiRateLimiter({ windowMs: 60_000, limit: 1 }),
      (_req, res) => {
        res.status(201).json({ message: "ok" });
      },
    );

    const { server, url } = await listen(app);
    try {
      const first = await post(
        `${url}/api/waitlist`,
        "198.51.100.9, 203.0.113.10",
      );
      const spoofedPrefix = await post(
        `${url}/api/waitlist`,
        "198.51.100.50, 203.0.113.10",
      );

      assert.equal(first.status, 201);
      assert.equal(spoofedPrefix.status, 429);
    } finally {
      await close(server);
    }
  });
});
