const projects = {
  lotte: {
    description: `
      <h3>Sobre o projeto</h3>

      <p>
        Projeto desenvolvido em grupo como Trabalho de Conclusão de Curso (TCC)
        da ETEC Bartolomeu Bueno da Silva – Anhanguera.
      </p>

      <p>
        O L'otte – Cosmetics é uma plataforma web voltada ao cuidado e à
        renovação da autoestima capilar, oferecendo um diagnóstico online
        integrado à API do Gemini.
      </p>

      <p>
        O sistema funciona também como um protótipo de e-commerce, com
        exibição de produtos, favoritos, carrinho, finalização de compra
        e conta de usuário completa.
      </p>

      <p>
        Tecnologias utilizadas: HTML, CSS, JavaScript, Node.js e MongoDB.
      </p>
    `,
    video: "midia-https://www.youtube.com/embed/iG9iTidrlRA",
    images: [
      "midia-lotte/inicio.png",
      "midia-lotte/prod1.png",
      "midia-lotte/prod2.png",
      "midia-lotte/login.png",
      "midia-lotte/cadastro.png",
      "midia-lotte/perfil.png",
      "midia-lotte/senha.png",
      "midia-lotte/diag1.png",
      "midia-lotte/diag2.png",
      "midia-lotte/adm.png",
      "midia-lotte/panelprodutos.png",
      "midia-lotte/fav.png",

    ]
  },

  marcenaria: {
    description: `
      <h3>Sobre o projeto</h3>

      <p>
        Projeto de design gráfico desenvolvido para a Laveli Marcenaria,
        com foco na criação de um cartão de visitas profissional.
      </p>

      <p>
        O objetivo foi transmitir seriedade, qualidade e confiança,
        utilizando uma identidade visual simples, elegante e funcional.
      </p>
    `,
    video: null,
    images: [
      "midia-lav/frente.png",
      "midia-lav/tras.png"
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalDescription = document.getElementById("modalDescription");
const video = document.getElementById("projectVideo");
const gallery = document.getElementById("carouselTrack");

const expandedImage = document.getElementById("expandedImage");
const backToVideoBtn = document.getElementById("backToVideo");
const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.project;
    const project = projects[key];

    // texto
    modalDescription.innerHTML = project.description;

    // vídeo
    if (project.video) {
      video.src = project.video;
      video.style.display = "block";
      video.currentTime = 0;
    } else {
      video.style.display = "none";
    }

    // reset imagem expandida
    expandedImage.style.display = "none";
    backToVideoBtn.style.display = "none";

    // imagens do carrossel
    gallery.innerHTML = "";
    project.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;

      img.addEventListener("click", () => {
        expandedImage.src = src;
        expandedImage.style.display = "block";
        backToVideoBtn.style.display = "inline-block";
        video.pause();
        video.style.display = "none";
      });

      gallery.appendChild(img);
    });

modal.classList.add("active");
  });
});
backToVideoBtn.addEventListener("click", () => {
  expandedImage.style.display = "none";
  backToVideoBtn.style.display = "none";

  if (video.src) {
    video.style.display = "block";
    video.play();
  }
});
closeBtn.addEventListener("click", () => {
modal.classList.remove("active");
  video.pause();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    video.pause();
  }
});
