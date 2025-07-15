"use strict";
// Descrição da seção Sobre
const descricao = document.getElementById("descricao");
if (descricao) {
    descricao.textContent = "Desenvolvedor Front-End Angular, certificado e aprovado pelo Banco Santander, Banco Pan, NTT Data e iFood.";
}
// Array de projetos
const projetos = [
    {
        titulo: "Site Portfolio",
        descricao: "Site pessoal responsivo feito com react e Bootstrap.",
        imagem: "https://ribeiroveiculossp.vercel.app/assets/capa-CjJkPzzd.jpg",
        link: "https://ribeiroveiculossp.vercel.app/"
    },
    {
        titulo: "App ToDo",
        descricao: "Aplicativo de tarefas com funcionalidades CRUD e autenticação.",
        imagem: "img/projeto2.png",
        link: "https://github.com/seu-usuario/projeto2"
    },
    {
        titulo: "API REST",
        descricao: "API RESTful desenvolvida em Spring Boot com banco de dados MySQL.",
        imagem: "img/projeto3.png",
        link: "https://github.com/seu-usuario/projeto3"
    }
];
// Seleciona o container
const container = document.getElementById("projetos-lista");
// Função para renderizar os cards
function renderizarProjetos() {
    if (!container)
        return;
    container.innerHTML = ""; // limpa o container antes
    projetos.forEach(projeto => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
      <div class="card card-animado h-100 shadow-sm">
        <img src="${projeto.imagem}" class="card-img-top" alt="${projeto.titulo}" />
        <div class="card-body">
          <h5 class="card-title">${projeto.titulo}</h5>
          <p class="card-text">${projeto.descricao}</p>
          <a href="${projeto.link}" target="_blank" class="btn btn-primary">Ver no GitHub</a>
        </div>
      </div>
    `;
        container.appendChild(col);
    });
}
renderizarProjetos();
