export const startGlitchLoop = () => {
  const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";
  const els = document.querySelectorAll<HTMLElement>("#ticker-mainnet");
  if (els.length === 0) {
    throw new Error("No #ticker-mainnet elements found");
  }

  const reals = Array.from(els, (el) => el.textContent ?? "");
  const real = reals[0];
  if (reals.some((text) => text !== real)) {
    throw new Error("Mainnet ticker copies do not agree");
  }

  const separator = ": ";
  const sepIndex = real.lastIndexOf(separator);
  if (sepIndex === -1) {
    throw new Error(`Mainnet ticker text must contain "${separator}"`);
  }

  const staticPart = real.slice(0, sepIndex + separator.length);
  const glitchPart = real.slice(sepIndex + separator.length);
  let frame = 0;
  const totalFrames = 12;

  const nextCycle = () => {
    const scrambleInterval = setInterval(() => {
      const scrambled = glitchPart
        .split("")
        .map((char) => {
          if (char === " ") return " ";
          if (frame > totalFrames * 0.65 || Math.random() > 0.45) return char;
          const rand =
            GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          return Math.random() > 0.5
            ? '<span style="color:#FF6B35">' + rand + "</span>"
            : rand;
        })
        .join("");
      const html = staticPart + scrambled;
      els.forEach((el) => {
        el.innerHTML = html;
      });
      frame++;
      if (frame > totalFrames) {
        clearInterval(scrambleInterval);
        els.forEach((el) => {
          el.textContent = real;
        });
        frame = 0;
        setTimeout(nextCycle, 500);
      }
    }, 30);
  };
  nextCycle();
};
