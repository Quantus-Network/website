import { describe, expect, mock, test } from "bun:test";
import {
  fetchMainnetUptimePercent,
  formatUptimePercent,
  parseGrafanaStatPercent,
} from "./grafana-public-uptime";

const grafanaFrame = (values: Array<number | null>) => ({
  results: {
    A: {
      status: 200,
      frames: [
        {
          schema: {
            fields: [
              { name: "Time", type: "time" },
              { name: "Value", type: "number" },
            ],
          },
          data: {
            values: [[1, 2, 3], values],
          },
        },
      ],
    },
  },
});

describe("parseGrafanaStatPercent", () => {
  test("returns the last finite value from the Value field", () => {
    expect(
      parseGrafanaStatPercent(grafanaFrame([84.1, 84.16548549564212])),
    ).toBe(84.16548549564212);
  });

  test("skips trailing nulls like Grafana lastNotNull", () => {
    expect(parseGrafanaStatPercent(grafanaFrame([80, 81.5, null, null]))).toBe(
      81.5,
    );
  });

  test("throws when the payload has no finite values", () => {
    expect(() => parseGrafanaStatPercent(grafanaFrame([null, null]))).toThrow(
      "Grafana uptime frame has no finite value",
    );
  });

  test("throws when the Grafana result is missing", () => {
    expect(() => parseGrafanaStatPercent({ results: {} })).toThrow(
      "Grafana uptime query did not return result A",
    );
  });
});

describe("formatUptimePercent", () => {
  test("formats to two decimal places with a percent sign", () => {
    expect(formatUptimePercent(84.16548549564212)).toBe("84.17%");
  });

  test("throws for non-finite values", () => {
    expect(() => formatUptimePercent(Number.NaN)).toThrow(
      "Uptime percent is not finite",
    );
  });
});

describe("fetchMainnetUptimePercent", () => {
  test("posts to the public Mainnet Bootnodes uptime panel and parses the result", async () => {
    const fetcher = mock(
      async (input: RequestInfo | URL, init?: RequestInit) => {
        expect(String(input)).toBe(
          "https://grafana.quantus.com/api/public/dashboards/f31a012bd45b4f4388c5fd86e59199f6/panels/82/query",
        );
        expect(init?.method).toBe("POST");
        return new Response(JSON.stringify(grafanaFrame([84.16, 84.17])), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    );

    await expect(fetchMainnetUptimePercent(fetcher)).resolves.toBe(84.17);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  test("throws when Grafana returns a non-OK status", async () => {
    const fetcher = mock(async () => new Response("nope", { status: 401 }));

    await expect(fetchMainnetUptimePercent(fetcher)).rejects.toThrow(
      "Grafana uptime query failed: 401",
    );
  });
});
