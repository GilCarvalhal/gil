// Scroll Top com throttle para melhor performance
let ticking = false;

window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      const scroll = document.querySelector(".scrollTop");
      if (scroll) {
        scroll.classList.toggle("active", window.scrollY > 450);
      }
      ticking = false;
    });
    ticking = true;
  }
});

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
