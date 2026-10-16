
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

menu.addEventListener("click", function (evento) {
  if (evento.target.tagName === "A") {
    menu.classList.remove("aberto");
  }
});
