const buildTicker = () => {
    const items = [
        { lbl: "BLOCK HEIGHT", val: "1,284,771", live: true },
        { lbl: "TPS", val: "3,800", live: false },
        { lbl: "UPTIME", val: "99.97%", live: false },
        { lbl: "VALIDATORS", val: "247", live: false },
        { lbl: "", val: "MAINNET: ??", live: false, mainnet: true },
    ];
    const track = document.getElementById("ttrack")!;
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
    let bh = 1284771;
    setInterval(() => {
        bh += Math.floor(Math.random() * 3) + 1;
        document.querySelectorAll(".t-val.live").forEach((el) => {
            el.textContent = bh.toLocaleString();
        });
    }, 3200);
};
