(() => {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const dots = [...carousel.querySelectorAll("[data-carousel-slide]")];
  const caption = carousel.querySelector("[data-carousel-caption]");
  const toggle = carousel.querySelector(".carousel-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentIndex = 0;
  let timer = null;
  let pausedByUser = reducedMotion.matches;

  const stop = () => {
    window.clearInterval(timer);
    timer = null;
  };

  const show = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, index) => {
      slide.setAttribute("aria-hidden", String(index !== currentIndex));
    });

    dots.forEach((dot, index) => {
      const active = index === currentIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });

    caption.textContent = slides[currentIndex].dataset.caption;
  };

  const start = () => {
    stop();
    if (
      pausedByUser ||
      reducedMotion.matches ||
      document.hidden ||
      carousel.matches(":hover") ||
      carousel.matches(":focus-within")
    ) return;
    timer = window.setInterval(() => show(currentIndex + 1), 5000);
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      show(Number(dot.dataset.carouselSlide));
      start();
    });
  });

  toggle.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    toggle.setAttribute("aria-pressed", String(pausedByUser));
    toggle.setAttribute("aria-label", pausedByUser ? "Play slideshow" : "Pause slideshow");
    toggle.textContent = pausedByUser ? "Play" : "Pause";
    start();
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) start();
  });
  document.addEventListener("visibilitychange", start);
  reducedMotion.addEventListener("change", start);

  show(0);
  start();
})();
