
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


const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "") {
    mensagem.textContent = "Digite seu nome.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Digite um e-mail válido.";
    return;
  }

  mensagem.textContent = "Obrigado, " + nome + "! Seu interesse foi registrado.";
  formulario.reset();
});