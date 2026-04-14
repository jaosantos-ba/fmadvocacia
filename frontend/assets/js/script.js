document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const telefone = document.getElementById("telefone");

  if (telefone) {
    telefone.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");

      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, "($1) $2-$3");
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
      } else if (value.length > 0) {
        value = value.replace(/^(\d*)/, "($1");
      }

      e.target.value = value;
    });
  }

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const fields = form.querySelectorAll("[required]");

    fields.forEach((field) => {
      const value = field.value.trim();

      if (!value) {
        field.classList.add("is-invalid");
        isValid = false;
        return;
      }

      if (field.id === "telefone") {
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10) {
          field.classList.add("is-invalid");
          isValid = false;
          return;
        }
      }

      field.classList.remove("is-invalid");
    });

    if (!isValid) {
      status.textContent = "Revise os campos obrigatórios.";
      return;
    }

    const nome = document.getElementById("nome").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const tel = document.getElementById("telefone").value.trim();

    const texto = `Olá, meu nome é ${nome}.%0A` +
      `Telefone: ${tel}%0A` +
      `Assunto: ${assunto}%0A` +
      `Mensagem: ${mensagem}`;

    status.textContent = "Redirecionando para o WhatsApp...";

    window.open(`https://wa.me/5571993512211?text=${texto}`, "_blank");
    form.reset();
  });
});