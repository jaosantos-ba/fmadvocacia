document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const telefone = document.getElementById("telefone");
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const revealItems = document.querySelectorAll(".reveal");

  function updateHeaderShadow() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }

  function updateActiveSection() {
    const scrollPos = window.scrollY + 140;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (!section) return;
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      link.classList.toggle("active", scrollPos >= top && scrollPos < bottom);
    });
  }

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

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  updateHeaderShadow();
  updateActiveSection();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  window.addEventListener("scroll", updateActiveSection, { passive: true });

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

    const texto =
      `Olá, meu nome é ${nome}.%0A` +
      `Telefone: ${tel}%0A` +
      `Assunto: ${assunto}%0A` +
      `Mensagem: ${mensagem}`;

    status.textContent = "Redirecionando para o WhatsApp...";

    window.open(`https://wa.me/5571992631016?text=${texto}`, "_blank");
    form.reset();
  });
});
