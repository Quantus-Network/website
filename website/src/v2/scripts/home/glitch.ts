const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";
const mainnetEl = document.getElementById("ticker-mainnet")!;
const mainnetReal = "MAINNET: Q2 2026";

const glitchLoop = (el: HTMLElement, real: string) => {
  const staticPart = "MAINNET: ";
  const glitchPart = "Q2 2026";
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
      el.innerHTML = staticPart + scrambled;
      frame++;
      if (frame > totalFrames) {
        clearInterval(scrambleInterval);
        el.textContent = real;
        frame = 0;
        setTimeout(nextCycle, 500);
      }
    }, 30);
  };
  nextCycle();
};

export const startGlitchLoop = () => {
  glitchLoop(mainnetEl, mainnetReal);
};
