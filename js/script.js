// Slider Carousel
function moveToSelected(element, carouselId) {
  const $carousel = $("#" + carouselId);

  let selected;

  if (element == "next") {
    selected = $carousel.find(".selected").next();
  } else if (element == "prev") {
    selected = $carousel.find(".selected").prev();
  } else {
    selected = element;
  }

  // Tratativa de erro ao ultrapassar o número de clicks quando não houver mais projetos.
  if (!selected.length) return;

  const next = $(selected).next();
  const prev = $(selected).prev();
  const prevSecond = $(prev).prev();
  const nextSecond = $(next).next();

  $carousel.find("div").removeClass();

  $(selected).addClass("selected");

  $(prev).addClass("prev");
  $(next).addClass("next");

  $(nextSecond).addClass("nextRightSecond");
  $(prevSecond).addClass("prevLeftSecond");

  $(nextSecond).nextAll().addClass("hideRight");
  $(prevSecond).prevAll().addClass("hideLeft");
}

$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected("prev", "carousel"); // ou "carousel-1"
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
$("#carousel div").click(function () {
  moveToSelected($(this), "carousel");
});
$("#prev").click(function () {
  moveToSelected("prev", "carousel");
});
$("#next").click(function () {
  moveToSelected("next", "carousel");
});

// Carousel 2 (Backend)
$("#carousel-1 div").click(function () {
  moveToSelected($(this), "carousel-1");
});
$("#prev-1").click(function () {
  moveToSelected("prev", "carousel-1");
});
$("#next-1").click(function () {
  moveToSelected("next", "carousel-1");
});
