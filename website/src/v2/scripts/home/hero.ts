import { renderASCIIRect } from "./ascii";

const heroAscii = document.getElementById("ascii-hero")!;

let heroCols = 0;
let heroRows = 0;
let heroActive = false;
let animTime = 0;
let mouseNX = 0.5;
let mouseNY = 0.5;
let lM = 2;
let lN = 2;
let tM = 2;
let tN = 2;

// Map mouse to integer mode pairs — use interesting ones from reference
const MODES = [
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
    [1, 3],
    [3, 1],
    [2, 4],
    [4, 2],
    [3, 3],
    [3, 4],
    [4, 3],
];

export const calcHeroDims = () => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const isMobile = cw <= 768;
    const fs = isMobile ? 6 : 11;
    const lh = fs * (isMobile ? 1.15 : 1.22);
    const chW = fs * (isMobile ? 0.6 : 0.62);
    heroCols = Math.floor(cw / chW);
    heroRows = Math.floor(ch / lh);
};

export const heroLoop = () => {
    if (!heroActive) {
        requestAnimationFrame(heroLoop);
        return;
    }
    animTime += 0.01;
    lM += (tM - lM) * 0.02;
    lN += (tN - lN) * 0.02;
    const m = Math.max(1, Math.round(lM));
    const n = Math.max(1, Math.round(lN));
    heroAscii.textContent = renderASCIIRect(
        1,
        m,
        n,
        animTime,
        heroCols,
        heroRows,
        true,
    );
    requestAnimationFrame(heroLoop);
};

export const updateHeroActive = (active: boolean) => {
    heroActive = active;
};

export const updateMousePosition = (e: MouseEvent) => {
    mouseNX = e.clientX / window.innerWidth;
    mouseNY = e.clientY / window.innerHeight;
    const idx = Math.floor(mouseNX * mouseNY * MODES.length * 3.1) % MODES.length;
    const [m, n] = MODES[idx];
    tM = m;
    tN = n;
    document.getElementById("fval")!.textContent = `${m},${n}`;
};