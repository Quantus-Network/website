export const buildTicker = () => {
  const track = document.getElementById("ttrack");
  if (!track) return;

  // Get localized labels from data attributes
  const labels = {
    blockHeight: track.dataset.i18nBlockHeight || "BLOCK HEIGHT",
    tps: track.dataset.i18nTps || "TPS",
    uptime: track.dataset.i18nUptime || "UPTIME",
    validators: track.dataset.i18nValidators || "VALIDATORS",
    mainnet: track.dataset.i18nMainnet || "MAINNET: ??",
  };

  const items = [
    { lbl: labels.blockHeight, val: "1,284,771", live: true },
    { lbl: labels.tps, val: "3,800", live: false },
    { lbl: labels.uptime, val: "99.97%", live: false },
    { lbl: labels.validators, val: "247", live: false },
    { lbl: "", val: labels.mainnet, live: false, mainnet: true },
  ];

  [0, 1].forEach((copyIdx) => {
    items.forEach(({ lbl, val, live, mainnet }) => {
      const el = document.createElement("div");
      el.className = "t-item";
      const idAttr = mainnet && copyIdx === 0 ? ' id="ticker-mainnet"' : "";
      el.innerHTML = `${live ? '<div class="tdot"></div>' : ""}
        ${lbl ? '<span class="t-lbl">' + lbl + "</span>" : ""}
        <span class="t-val${live ? " live" : ""}"${idAttr}>${val}</span>`;
      track.appendChild(el);
    });
  });

  // Mock dynamic updates for now (replace with real API polling later)
  let bh = 1284771;
  setInterval(() => {
    bh += Math.floor(Math.random() * 3) + 1;
    document.querySelectorAll(".t-val.live").forEach((el) => {
      el.textContent = bh.toLocaleString();
    });
  }, 3200);
};
