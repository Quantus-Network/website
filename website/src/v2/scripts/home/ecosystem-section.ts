const ecosystemSection = () => {
    const ecoSection = document.getElementById("ecosystem")!;
    const ecoDivider = ecoSection.querySelector(".ecosystem-divider")!;
    const ecoEyebrow = ecoSection.querySelector(".eco-eyebrow")!;
    const ecoHeadline = ecoSection.querySelector(".eco-headline")!;
    const ecoCards = ecoSection.querySelectorAll(".eco-card");

    const phoneOutline = document.getElementById("phone-outline")!;
    const latticeSvg = document.getElementById("lattice-svg")!;
    const techCard = ecoCards[1];
    const spokes = document.querySelectorAll(".net-spoke");
    const netCentre = document.getElementById("net-centre")!;

    /* ── Build lattice SVG ── */
    const cols = 5,
        rows = 4,
        hGap = 32,
        vGap = 28,
        ox = 16,
        oy = 14;
    const ns = "http://www.w3.org/2000/svg";
    const nodePositions = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = ox + c * hGap,
                y = oy + r * vGap;
            nodePositions.push({ x, y });
            // Right connection
            if (c < cols - 1) {
                const l = document.createElementNS(ns, "line");
                l.setAttribute("x1", x.toString());
                l.setAttribute("y1", y.toString());
                l.setAttribute("x2", (x + hGap).toString());
                l.setAttribute("y2", y.toString());
                l.setAttribute("stroke", "rgba(232,230,224,0.12)");
                l.setAttribute("stroke-width", "0.75");
                latticeSvg.appendChild(l);
            }
            // Bottom connection
            if (r < rows - 1) {
                const l = document.createElementNS(ns, "line");
                l.setAttribute("x1", x.toString());
                l.setAttribute("y1", y.toString());
                l.setAttribute("x2", x.toString());
                l.setAttribute("y2", (y + vGap).toString());
                l.setAttribute("stroke", "rgba(232,230,224,0.12)");
                l.setAttribute("stroke-width", "0.75");
                latticeSvg.appendChild(l);
            }
            // Diagonal (every other cell)
            if (c < cols - 1 && r < rows - 1 && (c + r) % 2 === 0) {
                const l = document.createElementNS(ns, "line");
                l.setAttribute("x1", x.toString());
                l.setAttribute("y1", y.toString());
                l.setAttribute("x2", (x + hGap).toString());
                l.setAttribute("y2", (y + vGap).toString());
                l.setAttribute("stroke", "rgba(232,230,224,0.07)");
                l.setAttribute("stroke-width", "0.5");
                l.setAttribute("stroke-dasharray", "2,3");
                latticeSvg.appendChild(l);
            }
        }
    }
    // Accent nodes
    [
        [48, 42],
        [112, 70],
        [80, 98],
    ].forEach(([x, y]) => {
        const c = document.createElementNS(ns, "circle");
        c.setAttribute("cx", x.toString());
        c.setAttribute("cy", y.toString());
        c.setAttribute("r", "3");
        c.setAttribute("stroke", "#FF6B35");
        c.setAttribute("stroke-width", "1");
        c.setAttribute("fill", "rgba(255,107,53,0.15)");
        c.classList.add("accent-node");
        latticeSvg.appendChild(c);
    });
    // Regular nodes (on top of lines)
    const latticeNodes: SVGCircleElement[] = [];
    nodePositions.forEach(({ x, y }) => {
        const c = document.createElementNS(ns, "circle");
        c.setAttribute("cx", x.toString());
        c.setAttribute("cy", y.toString());
        c.setAttribute("r", "2");
        c.setAttribute("fill", "rgba(232,230,224,0.25)");
        c.classList.add("lattice-node");
        latticeSvg.appendChild(c);
        latticeNodes.push(c);
    });

    /* ── Lattice card hover: opacity pulse only ── */
    techCard.addEventListener("mouseenter", () => {
        latticeNodes.forEach((n) => n.classList.add("pulsing"));
    });
    techCard.addEventListener("mouseleave", () => {
        latticeNodes.forEach((n) => n.classList.remove("pulsing"));
    });

    /* ── Set spoke dash lengths ── */
    spokes.forEach((spoke) => {
        const x1 = +spoke.getAttribute("x1")!,
            y1 = +spoke.getAttribute("y1")!;
        const x2 = +spoke.getAttribute("x2")!,
            y2 = +spoke.getAttribute("y2")!;

        const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        spoke.setAttribute("stroke-dasharray", len.toString());
        spoke.setAttribute("stroke-dashoffset", len.toString());
    });

    /* ── Central node pulse animation ── */
    let pulseDir = 1,
        pulseVal = 0.3;
    function pulseCentre() {
        pulseVal += pulseDir * 0.012;

        if (pulseVal >= 1) {
            pulseVal = 1;
            pulseDir = -1;
        }
        if (pulseVal <= 0.3) {
            pulseVal = 0.3;
            pulseDir = 1;
        }

        netCentre.setAttribute("opacity", pulseVal.toString());
        requestAnimationFrame(pulseCentre);
    }
    pulseCentre();

    /* ── Section fade-in on scroll (after #solution) ── */
    const ecoFadeObs = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                ecoSection.classList.add("eco-visible");
                ecoFadeObs.disconnect();
            }
        },
        { threshold: 0.1 },
    );
    ecoFadeObs.observe(ecoSection);

    /* ── IntersectionObserver ── */
    let animated = false;
    const ecoObs = new IntersectionObserver(
        (entries) => {
            if (entries[0].intersectionRatio >= 0.1 && !animated) {
                animated = true;
                ecoObs.disconnect();

                // Divider first
                ecoDivider.classList.add("expanded");

                // Eyebrow + headline
                ecoEyebrow.classList.add("in");
                ecoHeadline.classList.add("in");

                // Cards
                ecoCards[0].classList.add("in-1");
                ecoCards[1].classList.add("in-2");
                ecoCards[2].classList.add("in-3");

                // Phone outline draw
                setTimeout(() => {
                    phoneOutline.style.transition = "stroke-dashoffset 1.8s ease-in-out";
                    phoneOutline.style.strokeDashoffset = "0";
                }, 200);

                // Lattice nodes stagger
                latticeNodes.forEach((node, i) => {
                    setTimeout(() => node.classList.add("lit"), i * 40);
                });

                // Network spokes stagger
                spokes.forEach((spoke, i) => {
                    const spokeElement = spoke as SVGLineElement;

                    setTimeout(
                        () => {
                            spokeElement.style.transition = "stroke-dashoffset 0.8s ease-out";
                            spokeElement.style.strokeDashoffset = "0";
                        },
                        300 + i * 150,
                    );
                });
            }
        },
        { threshold: 0.1 },
    );
    ecoObs.observe(ecoSection);
};
