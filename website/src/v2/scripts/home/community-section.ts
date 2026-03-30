/* ══ COMMUNITY SECTION ══ */
const communitySection = () => {
    const section = document.getElementById("community")!;
    const divider = section.querySelector(".community-divider")!;
    const eyebrow = section.querySelector(".community-eyebrow")!;
    const headline = section.querySelector(".community-headline")!;
    const panels = section.querySelectorAll(
        ".community-panel",
    ) as NodeListOf<HTMLElement>;
    const delays = [0.3, 0.45, 0.6, 0.75];

    let animated = false;
    const obs = new IntersectionObserver(
        (entries) => {
            if (entries[0].intersectionRatio >= 0.15 && !animated) {
                animated = true;
                obs.disconnect();
                divider.classList.add("expanded");
                eyebrow.classList.add("in");
                headline.classList.add("in");
                panels.forEach((panel, i) => {
                    panel.style.transition = `opacity 0.7s ease ${delays[i]}s, transform 0.7s ease ${delays[i]}s`;
                    panel.classList.add("in");
                });
            }
        },
        { threshold: 0.15 },
    );
    obs.observe(section);
};
