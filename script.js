const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* Fade-in sections (keep existing behavior) */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade').forEach(section => {
  observer.observe(section);
});
