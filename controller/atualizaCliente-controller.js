import { clienteService } from "../service/cliente-service.js";

const pegaURL = new URL(window.location); // Pega a url da pagina

const id = pegaURL.searchParams.get("id");

const inputNome = document.querySelector("[data-nome]");
const inputEmail = document.querySelector("[data-email]");

clienteService.detalhaCliente(id)
  .then((dados) => {
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  });


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.querySelector("[data-nome]");
  const email = evento.target.querySelector("[data-email]");

  clienteService.atualizaCliente(id, nome, email)
  .then(() => {
    window.location.href = "../telas/edicao_concluida.html"
  });
});