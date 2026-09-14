import {
  fetchMainnetUptimePercent,
  mainnetUptimeErrorResponse,
  mainnetUptimeJsonResponse,
} from "../../src/api/grafana-public-uptime";

export async function onRequestGet() {
  try {
    const percent = await fetchMainnetUptimePercent();
    return mainnetUptimeJsonResponse(percent);
  } catch (error) {
    return mainnetUptimeErrorResponse(error);
  }
}
