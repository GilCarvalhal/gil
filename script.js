// Mudando titulo quando o usuário troca de aba.
let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "⚠️ Ei, volta aqui! ⚠️";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

// Slider Carousel
function moveToSelected(element) {
  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass("hideRight");
  $(prevSecond).prevAll().removeClass().addClass("hideLeft");
}

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected("prev");
      break;

    case 39: // right
      moveToSelected("next");
      break;

    default:
      return;
  }
  e.preventDefault();
});

$("#carousel div").click(function () {
  moveToSelected($(this));
});

$("#prev").click(function () {
  moveToSelected("prev");
});

$("#next").click(function () {
  moveToSelected("next");
});

// Scroll Top
window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".scrollTop");
  scroll.classList.toggle("active", this.window.scrollY > 450);
});

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
