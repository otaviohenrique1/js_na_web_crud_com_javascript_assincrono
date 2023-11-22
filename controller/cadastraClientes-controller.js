import { clienteService } from "../service/cliente-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.querySelector("[data-nome]");
  const email = evento.target.querySelector("[data-email]");

  clienteService.criaCliente(nome, email)
  .then(() => {
    window.location.href = "../telas/cadastro_concluido.html"
  });
});