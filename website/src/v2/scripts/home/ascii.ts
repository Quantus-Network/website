import { chladniRect } from "./base-math";

export const RAMP = " .,·:;|+x#";

export const renderASCIIRect = (
    prog: number,
    m: number,
    n: number,
    t: number,
    cols: number,
    rows: number,
    fullBleed: boolean,
) => {
    let out = "";
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const px = (col / cols) * 2 - 1;
            const py = (row / rows) * 2 - 1;

            if (!fullBleed) {
                // Loader: radial reveal from centre
                const r = Math.sqrt(px * px + py * py);
                if (r > prog * 1.08) {
                    out += " ";
                    continue;
                }
            }

            const v = chladniRect(px, py, m, n, t);
            const absV = Math.abs(v);
            const NODE = 0.12;

            let idx;
            if (absV < NODE) {
                idx = Math.floor((1 - absV / NODE) * (RAMP.length - 1));
            } else {
                idx = Math.max(0, Math.floor(((0.4 - absV) / 0.4) * 2));
            }
            out += RAMP[Math.max(0, Math.min(RAMP.length - 1, idx))];
        }
        out += "\n";
    }
    return out;
};
