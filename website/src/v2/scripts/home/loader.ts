import { renderASCIIRect } from "./ascii";
import { updateHeroActive } from "./hero";

const LINES = [
    { t: '> QUANTUS PROTOCOL v0.9.1-bell', d: 0 },
    { t: '> SYSTEM INTEGRITY <span class="ok">[PASS]</span>', d: 120 },
    { t: '> NIST FIPS 204 MODULE LOADED <span class="ok">[OK]</span>', d: 240 },
    { t: '> INITIALIZING <span class="ac">ML-DSA / DILITHIUM-5</span>...', d: 360 },
    { t: '> POST-QUANTUM SIGNATURE SCHEME <span class="ok">ACTIVE</span>', d: 480 },
    { t: '> P2P COMM LAYER → <span class="ac">PQ-ENCRYPTED TUNNEL</span>', d: 600 },
    { t: '> RECURSIVE ZK PROOF ENGINE <span class="ok">READY</span>', d: 720 },
    { t: '> SYNCING BELL TESTNET... PEERS: <span class="ac">247</span>', d: 840 },
    { t: '> CHLADNI FIELD VISUALIZER <span class="ac">LOADING</span>', d: 960 },
];

export const initLoader = () => {
    const term = document.getElementById('terminal');
    const asciiEl = document.getElementById('ascii-out');

    if (!term || !asciiEl) return;


    LINES.forEach(({ t, d }) => {
        const el = document.createElement('div');
        el.className = 'tl'; el.innerHTML = t;
        term.appendChild(el);
        setTimeout(() => el.classList.add('on'), d);
    });

    setTimeout(() => {
        const c = document.createElement('div');
        c.className = 'tl on'; c.innerHTML = '> <span class="blink"></span>';
        term.appendChild(c);
    }, 1000);

    // ASCII phase in loader
    let prog = 0, lT = 0, lM2 = 2, lN2 = 1;
    const LCOLS = 86, LROWS = 22;

    setTimeout(() => {
        asciiEl.classList.add('lit');
        const iv = setInterval(() => {
            prog = Math.min(prog + 0.10, 1);
            lT += 0.06;
            if (prog > 0.2) { lM2 = 1; lN2 = 2; }
            if (prog > 0.42) { lM2 = 2; lN2 = 3; }
            if (prog > 0.62) { lM2 = 3; lN2 = 2; }
            if (prog > 0.8) { lM2 = 2; lN2 = 4; }
            asciiEl.textContent = renderASCIIRect(prog, lM2, lN2, lT, LCOLS, LROWS, false);
            if (prog >= 1) { clearInterval(iv); setTimeout(doTransition, 200); }
        }, 50);
    }, 1100);
}

const doTransition = () => {
    const loader = document.getElementById('loader');
    const hero = document.getElementById('hero');
    const hc = document.getElementById('hc');

    if (!loader || !hero || !hc) return;

    updateHeroActive(true);
    loader.classList.add('out');
    hero.classList.add('on');
    document.querySelector('nav')!.classList.add('visible');

    setTimeout(() => {
        loader.style.display = 'none';
        hc.classList.add('in');
    }, 450);
}