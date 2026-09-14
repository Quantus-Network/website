export const GRAFANA_ORIGIN = "https://grafana.quantus.com";
export const PUBLIC_DASHBOARD_ACCESS_TOKEN = "f31a012bd45b4f4388c5fd86e59199f6";
/** Mainnet Bootnodes - Uptime on the public Quantus Network Overview dashboard. */
export const MAINNET_UPTIME_PANEL_ID = 82;

const GRAFANA_UPTIME_QUERY_URL = `${GRAFANA_ORIGIN}/api/public/dashboards/${PUBLIC_DASHBOARD_ACCESS_TOKEN}/panels/${MAINNET_UPTIME_PANEL_ID}/query`;

type FetchLike = typeof fetch;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function lastFiniteNumber(values: unknown): number {
  if (!Array.isArray(values)) {
    throw new Error("Grafana uptime frame has no finite value");
  }

  for (let index = values.length - 1; index >= 0; index -= 1) {
    const value = values[index];
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
  }

  throw new Error("Grafana uptime frame has no finite value");
}

function valueFieldIndex(fields: unknown): number {
  if (!Array.isArray(fields)) {
    return 1;
  }

  const named = fields.findIndex(
    (field) => isRecord(field) && field.name === "Value",
  );
  if (named >= 0) {
    return named;
  }

  const numeric = fields.findIndex(
    (field) =>
      isRecord(field) && field.type === "number" && field.name !== "Time",
  );
  return numeric >= 0 ? numeric : 1;
}

export function parseGrafanaStatPercent(payload: unknown): number {
  if (!isRecord(payload) || !isRecord(payload.results)) {
    throw new Error("Grafana uptime query did not return result A");
  }

  const result = payload.results.A;
  if (!isRecord(result)) {
    throw new Error("Grafana uptime query did not return result A");
  }

  if (typeof result.status === "number" && result.status !== 200) {
    throw new Error(`Grafana uptime result A status ${result.status}`);
  }

  const frames = result.frames;
  if (!Array.isArray(frames) || frames.length === 0 || !isRecord(frames[0])) {
    throw new Error("Grafana uptime frame has no finite value");
  }

  const frame = frames[0];
  const schema = isRecord(frame.schema) ? frame.schema : {};
  const data = isRecord(frame.data) ? frame.data : {};
  const values = Array.isArray(data.values) ? data.values : [];
  const fieldIndex = valueFieldIndex(schema.fields);

  return lastFiniteNumber(values[fieldIndex]);
}

export function formatUptimePercent(percent: number): string {
  if (!Number.isFinite(percent)) {
    throw new Error("Uptime percent is not finite");
  }

  return `${percent.toFixed(2)}%`;
}

export async function fetchMainnetUptimePercent(
  fetcher: FetchLike = fetch,
): Promise<number> {
  const response = await fetcher(GRAFANA_UPTIME_QUERY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      intervalMs: 15000,
      maxDataPoints: 50,
      timeRange: {
        from: "now-1h",
        to: "now",
        timezone: "utc",
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Grafana uptime query failed: ${response.status}`);
  }

  return parseGrafanaStatPercent(await response.json());
}

export function mainnetUptimeJsonResponse(percent: number): Response {
  return new Response(JSON.stringify({ percent }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60",
    },
  });
}

export function mainnetUptimeErrorResponse(error: unknown): Response {
  const message = error instanceof Error ? error.message : "uptime_unavailable";
  return new Response(JSON.stringify({ error: message }), {
    status: 502,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
