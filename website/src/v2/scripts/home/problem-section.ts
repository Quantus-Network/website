const probSection = document.getElementById("problem")!;
const probObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.15) {
                probSection.classList.add("vis");
                probObs.unobserve(probSection);
            }
        });
    },
    { threshold: 0.15 },
);
probObs.observe(probSection);
