// Slider Carousel - Vanilla JS (sem jQuery)
function moveToSelected(element, carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  let selected;

  if (element === "next") {
    const currentSelected = carousel.querySelector(".selected");
    selected = currentSelected ? currentSelected.nextElementSibling : null;
  } else if (element === "prev") {
    const currentSelected = carousel.querySelector(".selected");
    selected = currentSelected ? currentSelected.previousElementSibling : null;
  } else {
    selected = element;
  }

  // Tratativa de erro ao ultrapassar o número de clicks quando não houver mais projetos
  if (!selected || selected.tagName !== "DIV") return;

  const next = selected.nextElementSibling;
  const prev = selected.previousElementSibling;
  const prevSecond = prev ? prev.previousElementSibling : null;
  const nextSecond = next ? next.nextElementSibling : null;

  // Remove todas as classes dos divs filhos
  const divs = carousel.querySelectorAll(":scope > div");
  divs.forEach(div => {
    div.className = "";
  });

  // Adiciona classes apropriadas
  selected.classList.add("selected");

  if (prev) prev.classList.add("prev");
  if (next) next.classList.add("next");

  if (nextSecond) nextSecond.classList.add("nextRightSecond");
  if (prevSecond) prevSecond.classList.add("prevLeftSecond");

  // Adiciona hideRight para todos após nextSecond
  if (nextSecond) {
    let sibling = nextSecond.nextElementSibling;
    while (sibling) {
      sibling.classList.add("hideRight");
      sibling = sibling.nextElementSibling;
    }
  }

  // Adiciona hideLeft para todos antes de prevSecond
  if (prevSecond) {
    let sibling = prevSecond.previousElementSibling;
    while (sibling) {
      sibling.classList.add("hideLeft");
      sibling = sibling.previousElementSibling;
    }
  }
}

// Navegação por teclado
document.addEventListener("keydown", function (e) {
  switch (e.which || e.keyCode) {
    case 37: // left
      moveToSelected("prev", "carousel");
      break;
    case 39: // right
      moveToSelected("next", "carousel");
      break;
    default:
      return;
  }
  e.preventDefault();
});

// Carousel 1 (Frontend)
document.querySelectorAll("#carousel > div").forEach(function (div) {
  div.addEventListener("click", function () {
    moveToSelected(this, "carousel");
  });
});

document.getElementById("prev")?.addEventListener("click", function () {
  moveToSelected("prev", "carousel");
});

document.getElementById("next")?.addEventListener("click", function () {
  moveToSelected("next", "carousel");
});

// Carousel 2 (Backend)
document.querySelectorAll("#carousel-1 > div").forEach(function (div) {
  div.addEventListener("click", function () {
    moveToSelected(this, "carousel-1");
  });
});

document.getElementById("prev-1")?.addEventListener("click", function () {
  moveToSelected("prev", "carousel-1");
});

document.getElementById("next-1")?.addEventListener("click", function () {
  moveToSelected("next", "carousel-1");
});
