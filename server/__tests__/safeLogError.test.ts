import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Writable } from "node:stream";

import axios, { AxiosError } from "axios";
import winston from "winston";

import { toSafeLogError } from "../src/utils/safeLogError.js";

const CANARY = "canary-newsletter-token-DO-NOT-LEAK";

function axiosErrorWithBearer(options: {
  message: string;
  code: string;
  status?: number;
}): AxiosError {
  const config = {
    url: "/contacts/update",
    method: "put",
    headers: { Authorization: `Bearer ${CANARY}` },
  };
  const response =
    options.status === undefined
      ? undefined
      : {
          status: options.status,
          statusText: "Unauthorized",
          headers: {},
          config,
          data: { message: "Invalid API key" },
        };

  return new AxiosError(
    options.message,
    options.code,
    config as AxiosError["config"],
    undefined,
    response as AxiosError["response"],
  );
}

function serializeLikeProductionLogger(error: object): string {
  let captured = "";
  const logger = winston.createLogger({
    level: "error",
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json(),
    ),
    defaultMeta: { service: "safe-log-error-test" },
    transports: [
      new winston.transports.Stream({
        stream: new Writable({
          write(chunk, _encoding, callback) {
            captured += chunk.toString();
            callback();
          },
        }),
      }),
    ],
  });

  logger.error({
    message: "Failed adding waitlist contact",
    error,
  });
  logger.close();
  return captured;
}

describe("toSafeLogError", () => {
  it("omits axios Authorization from JSON and winston output", () => {
    const err = axiosErrorWithBearer({
      message: "Request failed with status code 401",
      code: "ERR_BAD_REQUEST",
      status: 401,
    });
    assert.equal(axios.isAxiosError(err), true);

    const safe = toSafeLogError(err);
    const serialized = JSON.stringify(safe);

    assert.equal(serialized.includes(CANARY), false);
    assert.equal(/authorization/i.test(serialized), false);
    assert.equal("config" in safe, false);
    assert.equal("request" in safe, false);
    assert.equal("response" in safe, false);
    assert.equal("headers" in safe, false);

    const logged = serializeLikeProductionLogger(safe);
    const parsed = JSON.parse(logged);
    assert.equal(parsed.message, "Failed adding waitlist contact");
    assert.deepEqual(parsed.error, {
      name: "AxiosError",
      message: "Request failed with status code 401",
      code: "ERR_BAD_REQUEST",
      status: 401,
    });
    assert.equal(logged.includes(CANARY), false);
    assert.equal(/authorization/i.test(logged), false);
  });

  it("keeps axios message, code, and upstream status", () => {
    const err = axiosErrorWithBearer({
      message: "Request failed with status code 401",
      code: "ERR_BAD_REQUEST",
      status: 401,
    });

    const safe = toSafeLogError(err);

    assert.equal(safe.message, "Request failed with status code 401");
    assert.equal(safe.code, "ERR_BAD_REQUEST");
    assert.equal(safe.status, 401);
    assert.equal(safe.name, "AxiosError");
  });

  it("keeps axios timeout code without a response status", () => {
    const err = axiosErrorWithBearer({
      message: "timeout of 50ms exceeded",
      code: "ECONNABORTED",
    });

    const safe = toSafeLogError(err);

    assert.equal(safe.message, "timeout of 50ms exceeded");
    assert.equal(safe.code, "ECONNABORTED");
    assert.equal("status" in safe, false);
    assert.equal(JSON.stringify(safe).includes(CANARY), false);
  });

  it("keeps Error name, message, and code for non-axios failures", () => {
    const err = Object.assign(new Error("duplicate key value"), {
      code: "23505",
    });

    const safe = toSafeLogError(err);

    assert.deepEqual(safe, {
      name: "Error",
      message: "duplicate key value",
      code: "23505",
    });
  });

  it("stringifies non-error throws", () => {
    assert.deepEqual(toSafeLogError("boom"), { message: "boom" });
  });
});
