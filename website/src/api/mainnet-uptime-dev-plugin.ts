import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import {
  fetchMainnetUptimePercent,
  mainnetUptimeErrorResponse,
  mainnetUptimeJsonResponse,
} from "./grafana-public-uptime";

function requestPath(url: string | undefined): string {
  if (!url) {
    return "";
  }

  const queryIndex = url.indexOf("?");
  return queryIndex === -1 ? url : url.slice(0, queryIndex);
}

async function handleMainnetUptime(
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void,
): Promise<void> {
  if (requestPath(req.url) !== "/api/mainnet-uptime" || req.method !== "GET") {
    next();
    return;
  }

  try {
    const percent = await fetchMainnetUptimePercent();
    const response = mainnetUptimeJsonResponse(percent);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.end(await response.text());
  } catch (error) {
    const response = mainnetUptimeErrorResponse(error);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.end(await response.text());
  }
}

export function mainnetUptimeDevApiPlugin(): Plugin {
  return {
    name: "mainnet-uptime-dev-api",
    configureServer(server) {
      server.middlewares.use(handleMainnetUptime);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleMainnetUptime);
    },
  };
}
