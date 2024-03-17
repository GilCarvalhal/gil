// Mudando titulo quando o usuário troca de aba.
let docTitle = document.title;

window.addEventListener("blur", () => {
  // Quando sair da aba vai colocar esse titulo.
  document.title = "⚠️🔙 Ei, volta aqui! 🔙⚠️";
});

window.addEventListener("focus", () => {
  // Foco na aba volta ao titulo normal.
  document.title = docTitle;
});
