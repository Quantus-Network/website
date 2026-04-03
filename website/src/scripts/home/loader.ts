import { createTranslator, getLocaleFromUrl } from "@/utils/i18n";
import { renderASCIIRect } from "./ascii";
import { updateHeroActive } from "./hero";

const LINES = [
  { k: "home.loader.lines.protocol", d: 0 },
  { k: "home.loader.lines.integrity", d: 120 },
  { k: "home.loader.lines.nist_module", d: 240 },
  { k: "home.loader.lines.initializing", d: 360 },
  { k: "home.loader.lines.signature_scheme", d: 480 },
  { k: "home.loader.lines.p2p_layer", d: 600 },
  { k: "home.loader.lines.zk_engine", d: 720 },
  { k: "home.loader.lines.syncing", d: 840 },
  { k: "home.loader.lines.chladni", d: 960 },
];

export const initLoader = async () => {
  const term = document.getElementById("terminal");
  const asciiEl = document.getElementById("ascii-out");

  if (!term || !asciiEl) return;

  const locale = getLocaleFromUrl(window.location.pathname);
  const t = await createTranslator(locale);

  LINES.forEach(({ k, d }) => {
    const el = document.createElement("div");
    el.className = "tl";
    el.innerHTML = t(k);
    term.appendChild(el);
    setTimeout(() => el.classList.add("on"), d);
  });

  setTimeout(() => {
    const c = document.createElement("div");
    c.className = "tl on";
    c.innerHTML = '> <span class="blink"></span>';
    term.appendChild(c);
  }, 1000);

  // ASCII phase in loader
  let prog = 0,
    lT = 0,
    lM2 = 2,
    lN2 = 1;
  const LCOLS = 86,
    LROWS = 22;

  setTimeout(() => {
    asciiEl.classList.add("lit");
    const iv = setInterval(() => {
      prog = Math.min(prog + 0.1, 1);
      lT += 0.06;
      if (prog > 0.2) {
        lM2 = 1;
        lN2 = 2;
      }
      if (prog > 0.42) {
        lM2 = 2;
        lN2 = 3;
      }
      if (prog > 0.62) {
        lM2 = 3;
        lN2 = 2;
      }
      if (prog > 0.8) {
        lM2 = 2;
        lN2 = 4;
      }
      asciiEl.textContent = renderASCIIRect(
        prog,
        lM2,
        lN2,
        lT,
        LCOLS,
        LROWS,
        false,
      );
      if (prog >= 1) {
        clearInterval(iv);
        setTimeout(doTransition, 200);
      }
    }, 50);
  }, 1100);
};

const doTransition = () => {
  const loader = document.getElementById("loader");
  const hero = document.getElementById("hero");
  const hc = document.getElementById("hc");

  if (!loader || !hero || !hc) return;

  updateHeroActive(true);
  loader.classList.add("out");
  hero.classList.add("on");

  setTimeout(() => {
    loader.style.display = "none";
    hc.classList.add("in");
  }, 450);
};
