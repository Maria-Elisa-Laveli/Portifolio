// Inicializa o EmailJS
(function () {
  emailjs.init("T4Z2BjeuFpbDlj06e");
})();

// Toast
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Formulário
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_j54wl0f",
    "template_sop0pxk",
    this
  ).then(
    () => {
      showToast("Mensagem enviada com sucesso 💙 Obrigada pelo contato!");
      form.reset();
    },
    (error) => {
      console.error(error);
      showToast("Ops 😢 Não foi possível enviar a mensagem agora.");
    }
  );
});
