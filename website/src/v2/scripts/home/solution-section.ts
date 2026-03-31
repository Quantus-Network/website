const solutionSection = () => {
  const TEXT =
    "Quantus is a Layer 1 blockchain built from the ground up with post-quantum cryptography at every layer. Signatures, P2P communications, SSH keys. Not a patch on existing infrastructure. A clean-slate protocol designed for the world that's coming.";
  const CHAR_DELAY = 28;

  const divider = document.getElementById("sol-divider")!;
  const twBlock = document.getElementById("typewriter-block")!;
  const twEyebrow = twBlock.querySelector(".sol-tw-eyebrow")!;
  const twText = document.getElementById("typewriter-text")!;
  const twCursor = document.getElementById("tw-cursor")!;
  const pillarsEl = document.getElementById("pillars")!;
  const pillarCards = pillarsEl.querySelectorAll(".pillar-card");

  /* ── PART 1: divider animates width on scroll into view ── */
  const divObs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        divider.classList.add("expanded");
        divObs.disconnect();
        startSequence();
      }
    },
    { threshold: 0.1 },
  );
  divObs.observe(divider);

  /* ── Sequence ── */
  function startSequence() {
    // Eyebrow fades in 0.9s after divider
    setTimeout(() => twEyebrow.classList.add("visible"), 900);

    // Typing starts 1.5s after section visible
    setTimeout(() => {
      typeOut(TEXT, 0, () => {
        // Typing done — remove cursor, then animate pillars in after 400ms
        twCursor.classList.add("hidden");
        setTimeout(showPillars, 400);
      });
    }, 1500);
  }

  /* ── Typewriter: single string, char by char ── */
  const typeOut = (text: string, idx: number, onDone: () => void) => {
    if (idx >= text.length) {
      onDone();
      return;
    }
    twText.insertBefore(document.createTextNode(text[idx]), twCursor);
    setTimeout(() => typeOut(text, idx + 1, onDone), CHAR_DELAY);
  };

  /* ── Pillars animate in after typing ── */
  const showPillars = () => {
    pillarsEl.classList.add("vis");
    pillarCards[0].classList.add("in-1");
    pillarCards[1].classList.add("in-2");
    pillarCards[2].classList.add("in-3");
  };
};
