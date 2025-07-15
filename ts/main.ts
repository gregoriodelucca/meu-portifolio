// Descrição da seção Sobre
const descricao = document.getElementById("descricao");
if (descricao) {
  descricao.textContent = "Desenvolvedor Front-End Angular, certificado e aprovado pelo Banco Santander, Banco Pan, NTT Data e iFood estou iniciando minha nova jornada desenvolvimento front end, e estou focado em angular, aws e ux/ui designer, sou desenvolvedor web aluno da dio";
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
    titulo: "aasoft",
    descricao: "aasoft front end erp comercial ",
    imagem: "",
    link: "https://www.aasoft.com.br/"
  },
  {
    titulo: "front end com santander ",
    descricao: "exercicios santander front end ",
    imagem: "img/projeto3.png",
    link: "https://github.com/gregoriodelucca/ProjetosExerciciosSantander2025"
  }
];

// Seleciona o container
const container = document.getElementById("projetos-lista");

// Função para renderizar os cards
function renderizarProjetos() {
  if (!container) return;
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

