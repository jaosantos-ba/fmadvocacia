
(function () {
  const base = document.body.dataset.base || "./";
  const page = document.body.dataset.page || "home";
  const isHome = page === "home";

  const data = {
    phoneDisplay: "(71) 99263-1016",
    phoneRaw: "5571992631016",
    email: "contato@fabiolamuniz.adv.br",
    city: "Salvador e Lauro de Freitas",
    onlineLabel: "Atendimento online",
    oab: "OAB/BA nº 23.880",
    instagram: "https://www.instagram.com/fabiolamunizadvocacia/",
    facebook: "https://www.facebook.com/fabiolamunizadvocacia/",
    youtube: "https://www.youtube.com/fabiolamunizadvocacia/",
    logoTopo: base + "assets/img/logo_transparente.png",
    logoRodape: base + "assets/img/logo_branca.png",
    whatsapp: "https://wa.me/5571992631016"
  };

  const links = isHome
    ? {
        home: "#inicio",
        about: "#sobre",
        areas: "#areas",
        diff: "#diferenciais",
        contact: "#contato",
        clientArea: "./public/area-cliente.html"
      }
    : {
        home: "../index.html#inicio",
        about: "../index.html#sobre",
        areas: "../index.html#areas",
        diff: "../index.html#diferenciais",
        contact: "../index.html#contato",
        clientArea: "area-cliente.html"
      };

  const headerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="topbar-content">
          <div class="topbar-left">
            <a href="tel:+5571992631016"><i class="bi bi-telephone-fill"></i> ${data.phoneDisplay}</a>
            <a href="mailto:${data.email}"><i class="bi bi-envelope-fill"></i> ${data.email}</a>
            <span><i class="bi bi-geo-alt-fill"></i> ${data.city}</span>
            <a href="${data.whatsapp}" target="_blank" rel="noopener noreferrer"><i class="bi bi-laptop"></i> ${data.onlineLabel}</a>
          </div>
          <div class="topbar-social">
            <a href="${data.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="${data.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="${data.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>

    <header class="site-header" id="inicio">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="${links.home}">
            <img src="${data.logoTopo}" alt="Fabíola Muniz Advocacia" class="brand-logo" />
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="menuPrincipal">
            <ul class="navbar-nav ms-auto align-items-lg-center">
              <li class="nav-item"><a class="nav-link" href="${links.home}">Início</a></li>
              <li class="nav-item"><a class="nav-link" href="${links.about}">Quem Sou</a></li>
              <li class="nav-item"><a class="nav-link" href="${links.areas}">Atuação</a></li>
              <li class="nav-item"><a class="nav-link" href="${links.diff}">Diferenciais</a></li>
              <li class="nav-item"><a class="nav-link" href="${links.contact}">Contato</a></li>
              <li class="nav-item ms-lg-3">
                <a class="btn btn-header" href="${links.clientArea}">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;

  const footerHomeExtra = isHome ? "" : "";
  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4 align-items-start">
          <div class="col-lg-4">
            <div class="footer-brand">
              <img src="${data.logoRodape}" alt="Fabíola Muniz Advocacia" class="footer-logo" />
              <p class="footer-oab">${data.oab}</p>
            </div>
          </div>

          <div class="col-lg-4">
            <h4>Navegação</h4>
            <ul class="footer-links">
              <li><a href="${links.home}">Início</a></li>
              <li><a href="${links.areas}">Atuação</a></li>
              <li><a href="${links.clientArea}">Área do Cliente</a></li>
              <li><a href="${links.contact}">Contato</a></li>
            </ul>
          </div>

          <div class="col-lg-4">
            <h4>Atendimento</h4>
            <ul class="footer-contact">
              <li><a href="tel:+5571992631016">${data.phoneDisplay}</a></li>
              <li><a href="mailto:${data.email}">${data.email}</a></li>
              <li>${data.city}</li>
              <li><a href="${data.whatsapp}" target="_blank" rel="noopener noreferrer">${data.onlineLabel}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-social">
          <a href="${data.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="${data.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="${data.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        </div>

        <div class="footer-bottom">
          <p>© 2026. Fabíola Muniz Sociedade Individual de Advocacia.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `;

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) headerTarget.innerHTML = headerHTML;
  if (footerTarget) footerTarget.innerHTML = footerHTML;
})();
