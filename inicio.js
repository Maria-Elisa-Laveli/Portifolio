const btnConhecer = document.getElementById("btnConhecer");
const menu = document.querySelector(".menu");

btnConhecer.addEventListener("click", () => {
  menu.classList.add("show");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    menu.classList.add("show");
  }
});
