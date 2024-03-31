// Mudando titulo quando o usuário troca de aba.
let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "⚠️ Ei, volta aqui! ⚠️";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
