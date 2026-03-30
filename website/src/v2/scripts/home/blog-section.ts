const blogSection = () => {
    const section = document.getElementById("blog")!;
    const divider = section.querySelector(".blog-divider")!;
    const eyebrow = section.querySelector(".blog-eyebrow")!;
    const headline = section.querySelector(".blog-headline")!;
    const rows = section.querySelectorAll(".blog-row") as NodeListOf<HTMLElement>;
    const viewAll = section.querySelector(".blog-view-all") as HTMLElement;
    const podcast = section.querySelector(".blog-podcast-wrap")!;

    let animated = false;
    const obs = new IntersectionObserver(
        (entries) => {
            if (entries[0].intersectionRatio >= 0.1 && !animated) {
                animated = true;
                obs.disconnect();
                divider.classList.add("expanded");
                eyebrow.classList.add("in");
                headline.classList.add("in");
                rows.forEach((row, i) => {
                    const delay = 0.3 + i * 0.05;
                    row.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, background 0.2s ease, padding-left 0.2s ease`;
                    row.classList.add("in");
                });
                const viewDelay = 0.3 + rows.length * 0.05;
                viewAll.style.transition = `opacity 0.6s ease ${viewDelay}s, transform 0.6s ease ${viewDelay}s, color 0.2s`;
                viewAll.classList.add("in");
                podcast.classList.add("in");
            }
        },
        { threshold: 0.1 },
    );
    obs.observe(section);
};
