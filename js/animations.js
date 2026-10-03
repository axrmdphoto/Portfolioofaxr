/* Mobile-safe Visual Explorations motion. Loaded after main.js so the grid is populated. */
(() => {
  const grid = document.getElementById("explorationGrid");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  if (!grid || reduced || !mobile || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("phone-reveal-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .15, rootMargin: "0px 0px -8% 0px" });

  grid.querySelectorAll(".exploration-frame").forEach((frame, index) => {
    frame.classList.add("phone-reveal-ready");
    frame.style.setProperty("--phone-delay", (index % 4) * 70 + "ms");
    observer.observe(frame);
  });
})();
