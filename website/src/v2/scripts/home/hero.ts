import { renderASCIIRect } from "./ascii";

const heroAscii = document.getElementById("ascii-hero")!;

let heroCols = 0;
let heroRows = 0;
let heroActive = false;

const calcHeroDims = () => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const isMobile = cw <= 768;
    const fs = isMobile ? 6 : 11;
    const lh = fs * (isMobile ? 1.15 : 1.22);
    const chW = fs * (isMobile ? 0.6 : 0.62);
    heroCols = Math.floor(cw / chW);
    heroRows = Math.floor(ch / lh);
};

const heroLoop = () => {
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