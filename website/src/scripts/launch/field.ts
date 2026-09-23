/**
 * Chladni field behind the /launch frame.
 *
 * Deliberately independent of scripts/home/*: Home owns hero.ts and its
 * shared chunk, and this page's field behaves differently — one pattern for
 * the whole page whose phase follows scroll position, drifting upward as the
 * page scrolls and morphing slowly on its own.
 *
 * Under prefers-reduced-motion it paints once and stays put: no morph, no
 * drift, no repaint on scroll.
 */

const CHARS = " .:;+xX|";

/** How much of the field reads as nodal line versus empty plate. */
const DENSITY = 11;
/** Ambient morph speed. 0 would leave the field driven by scroll alone. */
const MORPH = 2;

/** Glyph cell for Geist Mono at 11px with the field's letter-spacing. */
const CHAR_WIDTH = 7.4;
const LINE_HEIGHT = 11.6;

/** Extra rows above and below the viewport so the drift never shows an edge. */
const HEADROOM_RATIO = 0.5;
/** Minimum ms between repaints while morphing (~22fps is plenty here). */
const PAINT_INTERVAL = 45;
/** Scroll progress change below which a scroll-only repaint is skipped. */
const SCROLL_EPSILON = 0.015;

export const initLaunchField = (pre: HTMLElement) => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const morph = reduceMotion ? 0 : MORPH;

  let cols = 0;
  let rows = 0;
  let headroom = 0;
  let phase = 0;
  let lastFrame = 0;
  let lastPaint = 0;
  let drawnAt = -1;
  let scrollQueued = false;

  const progress = () => {
    if (reduceMotion) return 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  const measure = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    headroom = reduceMotion ? 0 : height * HEADROOM_RATIO;
    cols = Math.ceil(width / CHAR_WIDTH) + 2;
    rows = Math.ceil((height + headroom * 2) / LINE_HEIGHT);
    drawnAt = -1;
  };

  const paint = (p: number, force: boolean) => {
    if (!force && morph === 0 && Math.abs(p - drawnAt) < SCROLL_EPSILON) {
      return;
    }
    drawnAt = p;

    const a = 2.4 + p * 0.55 + Math.sin(phase * 0.16) * 0.85;
    const b = 3.3 - p * 0.4 + Math.cos(phase * 0.11) * 0.65;
    const last = CHARS.length - 1;
    let out = "";

    for (let y = 0; y < rows; y++) {
      const v = y / rows;
      for (let x = 0; x < cols; x++) {
        const u = x / cols;
        const z =
          Math.sin(a * Math.PI * u) * Math.sin(b * Math.PI * v) +
          Math.sin(b * Math.PI * u) * Math.sin(a * Math.PI * v);
        const strength = Math.min(1, Math.abs(z) * (DENSITY / 6));
        const i = Math.floor((1 - strength) * CHARS.length);
        out += CHARS[Math.max(0, Math.min(last, i))];
      }
      out += "\n";
    }

    pre.textContent = out;
  };

  const applyDrift = () => {
    pre.style.transform = `translateY(${-progress() * headroom}px)`;
  };

  const loop = (now: number) => {
    if (lastFrame) phase += ((now - lastFrame) / 1000) * (morph * 0.28);
    lastFrame = now;
    if (now - lastPaint > PAINT_INTERVAL) {
      lastPaint = now;
      paint(progress(), true);
    }
    requestAnimationFrame(loop);
  };

  const onScroll = () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      applyDrift();
      if (morph === 0) paint(progress(), false);
    });
  };

  measure();
  paint(0, true);

  window.addEventListener("resize", () => {
    measure();
    paint(progress(), true);
    if (!reduceMotion) applyDrift();
  });

  if (reduceMotion) return;

  applyDrift();
  window.addEventListener("scroll", onScroll, { passive: true });
  if (morph > 0) requestAnimationFrame(loop);
};
