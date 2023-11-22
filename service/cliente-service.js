const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json()
      }
      throw new Error("Não foi possivel listar os clientes");
    });
};

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/JSON',
    },
    body: JSON({
      nome: nome, email: email
    }),
  })
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.body;
      }
      throw new Error("Não foi possivel criar um cliente");
    });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",

  })
    .then((resposta) => {
      // return resposta.body;
      if (!resposta.ok) {
        throw new Error("Não foi possivel remover um cliente");
      }
    });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possivel detalhar o cliente");

    });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/JSON',
    },
    body: JSON({
      nome: nome, email: email
    }),
  })
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possivel atualizar um cliente");

    });
};

export const clienteService = {
  listaClientes, criaCliente, removeCliente, detalhaCliente, atualizaCliente
};

/*
const criaNovaLinha = (nome, email) => {
  const linhaNovoCliente = document.createElement("tr");

  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
    </td>
  `;
  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/profile");
    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response));
      } else {
        resolve(JSON.parse(http.response));
      }
    }
    http.send();
  });
  return promise;
};

listaClientes()
  .then((data) => {
    data.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    });
  });
*/