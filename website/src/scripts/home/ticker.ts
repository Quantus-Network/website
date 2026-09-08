import apiClient from "@/api/client";
import { QTPS } from "@/constants/qtps";

export const buildTicker = () => {
  const track = document.getElementById("ttrack");
  if (!track) return;

  const labels = {
    blockHeight: track.dataset.i18nBlockHeight || "BLOCK HEIGHT",
    qtps: track.dataset.i18nQtps || "QTPS",
    uptime: track.dataset.i18nUptime || "UPTIME",
    nodes: track.dataset.i18nNodes || "NODES",
    mainnetLabel: track.dataset.i18nMainnetLabel || "MAINNET",
    mainnetValue: track.dataset.i18nMainnetValue || "9/9/26",
  };

  const items = [
    { lbl: labels.blockHeight, val: "—", live: true, ref: "block-height" },
    { lbl: labels.qtps, val: String(QTPS), live: false },
    { lbl: labels.uptime, val: "99.97%", live: false },
    { lbl: labels.nodes, val: "—", live: true, ref: "nodes" },
    { lbl: labels.mainnetLabel, val: labels.mainnetValue, live: false },
  ];

  // Every item is rendered twice so the marquee can loop seamlessly, so live
  // values are addressed by data attribute rather than id.
  [0, 1].forEach(() => {
    items.forEach(({ lbl, val, live, ref }) => {
      const el = document.createElement("div");
      el.className = "t-item";
      const refAttr = ref ? ` data-ticker="${ref}"` : "";
      el.innerHTML = `${live ? '<div class="tdot"></div>' : ""}
        ${lbl ? '<span class="t-lbl">' + lbl + "</span>" : ""}
        <span class="t-val${live ? " live" : ""}"${refAttr}>${val}</span>`;
      track.appendChild(el);
    });
  });

  const nodesEls = document.querySelectorAll('[data-ticker="nodes"]');
  const blockHeightEls = document.querySelectorAll(
    '[data-ticker="block-height"]',
  );

  apiClient.nodeRpc.connect();
  apiClient.nodeRpc.subscribe((state) => {
    if (state.blockHeight != null) {
      blockHeightEls.forEach((el) => {
        const formatted = state.blockHeight?.toLocaleString() ?? "-";
        el.textContent = formatted;
      });
    }

    if (state.count != null) {
      nodesEls.forEach((el) => {
        el.textContent = state.count?.toLocaleString() ?? "-";
      });
    }
  });
};
