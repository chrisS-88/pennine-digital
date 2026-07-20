export default function initScrollAnimations() {
  const elements = document.querySelectorAll("[data-animate]");
  console.log(elements);

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const once = el.dataset.once !== "false";

        if (el.dataset.delay) {
          el.style.transitionDelay = `${el.dataset.delay}ms`;
        }

        if (entry.isIntersecting) {
          console.log("Visible:", entry.target);
          el.classList.add("is-visible");

          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}
