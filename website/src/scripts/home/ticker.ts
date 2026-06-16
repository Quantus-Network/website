import apiClient from "@/api/client";

export const buildTicker = () => {
  const track = document.getElementById("ttrack");
  if (!track) return;

  const labels = {
    blockHeight: track.dataset.i18nBlockHeight || "BLOCK HEIGHT",
    qtps: track.dataset.i18nQtps || "QTPS",
    uptime: track.dataset.i18nUptime || "UPTIME",
    nodes: track.dataset.i18nNodes || "NODES",
    mainnet: track.dataset.i18nMainnet || "MAINNET: ??",
  };

  const items = [
    { lbl: labels.blockHeight, val: "—", live: true, id: "block-height" },
    { lbl: labels.qtps, val: "50", live: false },
    { lbl: labels.uptime, val: "99.97%", live: false },
    { lbl: labels.nodes, val: "—", live: true, id: "nodes" },
    { lbl: "", val: labels.mainnet, live: false, mainnet: true },
  ];

  [0, 1].forEach((copyIdx) => {
    items.forEach(({ lbl, val, live, mainnet, id }) => {
      const el = document.createElement("div");
      el.className = "t-item";
      const idAttr = !!id
        ? ` id="ticker-${id}"`
        : mainnet && copyIdx === 0
          ? ' id="ticker-mainnet"'
          : "";
      el.innerHTML = `${live ? '<div class="tdot"></div>' : ""}
        ${lbl ? '<span class="t-lbl">' + lbl + "</span>" : ""}
        <span class="t-val${live ? " live" : ""}"${idAttr}>${val}</span>`;
      track.appendChild(el);
    });
  });

  const nodesEls = document.querySelectorAll("#ticker-nodes");
  const blockHeightEls = document.querySelectorAll("#ticker-block-height");

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
