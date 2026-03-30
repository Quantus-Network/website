let mouseNX = 0.5;
let mouseNY = 0.5;
let lM = 2;
let lN = 2;
let tM = 2;
let tN = 2;
let animTime = 0;

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

window.addEventListener("mousemove", (e) => {
    mouseNX = e.clientX / window.innerWidth;
    mouseNY = e.clientY / window.innerHeight;
    const idx = Math.floor(mouseNX * mouseNY * MODES.length * 3.1) % MODES.length;
    const [m, n] = MODES[idx];
    tM = m;
    tN = n;
    document.getElementById("fval")!.textContent = `${m},${n}`;
});
