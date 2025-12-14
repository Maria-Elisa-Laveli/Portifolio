const skills = {
  // HARD SKILLS
  html: {
    title: "HTML5",
    text: "Conhecimento em estruturação semântica de páginas, boas práticas, acessibilidade e organização correta do conteúdo."
  },
  css: {
    title: "CSS3",
    text: "Experiência com layouts responsivos, Flexbox, Grid, animações, transições, sombras e design moderno."
  },
  js: {
    title: "JavaScript",
    text: "Criação de interações dinâmicas, manipulação do DOM, eventos, lógica de programação e funcionalidades no front-end."
  },
  php: {
    title: "PHP",
    text: "Desenvolvimento back-end com PHP, criação de sistemas com formulários, autenticação, CRUD e integração com banco de dados."
  },
  my: {
    title: "MySQL",
    text: "Modelagem de banco de dados, criação de tabelas, relacionamentos, consultas SQL e integração com sistemas."
  },

  // SOFT SKILLS
  com: {
    title: "Comunicação",
    text: "Boa comunicação verbal e escrita, facilidade para trabalhar em equipe e transmitir ideias de forma clara."
  },
  org: {
    title: "Organização",
    text: "Capacidade de manter tarefas organizadas, cumprir prazos e estruturar projetos de forma eficiente."
  },
  eq: {
    title: "Trabalho em equipe",
    text: "Facilidade para colaborar com outras pessoas, ouvir opiniões e contribuir para soluções em conjunto."
  },
  cri: {
    title: "Criatividade",
    text: "Pensamento criativo para resolver problemas, propor melhorias e desenvolver soluções visuais e funcionais."
  },
  reso: {
    title: "Resolução de problemas",
    text: "Capacidade de analisar problemas, buscar soluções eficientes e aprender rapidamente com novos desafios."
  }
};

const modal = document.getElementById("skillModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("click", () => {
    const skill = card.dataset.skill;

    if (skills[skill]) {
      modalTitle.textContent = skills[skill].title;
      modalText.textContent = skills[skill].text;
      modal.style.display = "flex";
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
