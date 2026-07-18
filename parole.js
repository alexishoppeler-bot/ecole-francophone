document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const authKey = "lp-auth";
  const hasPlatformAccess = localStorage.getItem(authKey) === "ok";
  const skipPages = ["index.html"];
  if (skipPages.includes(page)) return;
  syncTopNav(page);
  initRevealSections();

  function syncTopNav(currentPage) {
    const nav = document.querySelector(".nav-menu");
    if (!nav) return;

    const links = Array.from(nav.querySelectorAll(".nav-link"));
    links.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    const byHref = (href) => nav.querySelector(`.nav-link[href="${href}"]`);
    const demoLink = byHref("unite.html?unite=a1-0");
    const homeLink = byHref("index.html");
    const loginLink = byHref("connexion.html");
    let platformLink = byHref("plateforme.html");

    if (hasPlatformAccess && !platformLink) {
      const loginItem = loginLink?.closest(".nav-item");
      const li = document.createElement("li");
      li.className = "nav-item";
      li.innerHTML = '<a href="plateforme.html" class="nav-link">Plateforme</a>';
      if (loginItem) {
        nav.insertBefore(li, loginItem);
      } else {
        nav.appendChild(li);
      }
      platformLink = byHref("plateforme.html");
    }

    // Une fois connecté, "Connexion" devient "Se déconnecter" partout.
    if (hasPlatformAccess && loginLink) {
      loginLink.textContent = "Se déconnecter";
      loginLink.setAttribute("href", "#");
      loginLink.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem(authKey);
        window.location.href = "connexion.html";
      });
    }

    let activeLink = demoLink;
    if (currentPage === "index.html") activeLink = homeLink;
    if (currentPage === "connexion.html") activeLink = loginLink;
    if (currentPage === "plateforme.html") activeLink = platformLink;
    if (hasPlatformAccess && !["index.html", "connexion.html", "plateforme.html"].includes(currentPage)) {
      activeLink = platformLink || demoLink;
    }

    if (activeLink) {
      activeLink.classList.add("active");
      activeLink.setAttribute("aria-current", "page");
    }
  }

  function initRevealSections() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach((element) => observer.observe(element));
  }

  // --- Breadcrumb ---
  buildBreadcrumb();

  // --- Enrichir le texte du hero ---
  const heroCopy = document.querySelector(".hero-copy");
  const heroPara = heroCopy?.querySelector("p:not(.hero-lead):not(.eyebrow)");

  // --- Enrichir le hero avec mots-clés colorés ---
  if (heroPara) {
    heroPara.innerHTML = enrichHero(heroPara.innerHTML);
  }

  function enrichHero(text) {
    const keywords = [
      "A1", "A2", "B1", "B2",
      "Communication", "Grammaire", "Conjugaison", "Vocabulaire", "Phonétique",
      "Compréhension orale", "Compréhension écrite",
      "Jeux", "Quiz", "Vrai ou faux",
      "Unité 0", "Écouter", "quiz",
      "débuter",
      "histoires", "histoire",
      "pas à pas", "guide",
    ];
    let html = text;
    keywords.forEach((kw) => {
      const regex = new RegExp("(«\\s*)?" + "(" + kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")" + "(\\s*»)?", "gi");
      html = html.replace(regex, (m, pre, word, post) => {
        return (pre || "") + '<span class="parole-keyword">' + word + '</span>' + (post || "");
      });
    });
    return html;
  }


  // --- Highlight des cartes ---
  setTimeout(() => {
    const allCards = document.querySelectorAll(".carte-lien, .unit-card, .volet");
    if (!allCards.length) return;

    let idx = 0;
    function highlightNext() {
      allCards.forEach((c) => c.classList.remove("carte-cta"));
      allCards[idx].classList.add("carte-cta");
      idx = (idx + 1) % allCards.length;
      setTimeout(highlightNext, 1200);
    }
    highlightNext();
  }, 1200);

  // --- Breadcrumb ---
  // Pages moteur génériques : une seule page par type d'activité, partagée par
  // toutes les unités, paramétrée par ?unite=a1-N. Le fil d'Ariane combine donc
  // deux niveaux : la coquille statique (Plateforme > A1) puis la chaîne d'une unité.
  function buildBreadcrumb() {
    const staticParent = { "plateforme.html": null, "index-a1.html": "plateforme.html" };
    const staticLabel = { "plateforme.html": "Plateforme", "index-a1.html": "A1" };

    const uniteParent = {
      "unite.html": "index-a1.html",
      "communication.html": "unite.html",
      "co.html": "communication.html",
      "ce.html": "communication.html",
      "grammaire.html": "unite.html",
      "conjugaison.html": "unite.html",
      "vocabulaire.html": "unite.html",
      "phonetique.html": "unite.html",
      "jeux.html": "unite.html",
      "quiz.html": "jeux.html",
      "vrai-faux.html": "jeux.html",
      "demeler.html": "jeux.html",
      "associer.html": "jeux.html",
      "pendu.html": "jeux.html",
      "mot-trous.html": "jeux.html",
      "progression.html": "unite.html",
    };
    const uniteLabel = {
      "communication.html": "Communication",
      "co.html": "Comp. orale",
      "ce.html": "Comp. écrite",
      "grammaire.html": "Grammaire",
      "conjugaison.html": "Conjugaison",
      "vocabulaire.html": "Vocabulaire",
      "phonetique.html": "Phonétique",
      "jeux.html": "Jeux",
      "quiz.html": "Quiz",
      "vrai-faux.html": "Vrai / Faux",
      "demeler.html": "Démêler",
      "associer.html": "Associer",
      "pendu.html": "Pendu",
      "mot-trous.html": "Phrases à trous",
      "progression.html": "Progression",
    };

    const isUnitePage = uniteParent.hasOwnProperty(page);
    const isStaticPage = staticParent.hasOwnProperty(page);
    if (!isUnitePage && !isStaticPage) return;

    const uniteQS = typeof UNITE_ID !== "undefined" ? ("?unite=" + UNITE_ID) : "";
    const uData = typeof U === "function" ? U() : null;
    const uniteLabelDyn = uData ? ("Unité " + uData.meta.numero) : "Unité";

    const crumbs = [];
    let cur;
    if (isUnitePage) {
      cur = page;
      while (cur && cur !== "unite.html") {
        crumbs.unshift({ label: uniteLabel[cur], href: cur + uniteQS });
        cur = uniteParent[cur];
      }
      crumbs.unshift({ label: uniteLabelDyn, href: "unite.html" + uniteQS });
      cur = "index-a1.html";
    } else {
      cur = page;
    }
    while (cur) {
      crumbs.unshift({ label: staticLabel[cur], href: cur });
      cur = staticParent[cur];
    }

    const navEl = document.createElement("nav");
    navEl.className = "breadcrumb";
    navEl.setAttribute("aria-label", "Fil d'Ariane");
    const ol = document.createElement("ol");

    crumbs.forEach((c, i) => {
      const li = document.createElement("li");
      if (i < crumbs.length - 1) {
        const a = document.createElement("a");
        a.href = c.href;
        a.textContent = c.label;
        li.appendChild(a);
      } else {
        li.setAttribute("aria-current", "page");
        li.textContent = c.label;
      }
      ol.appendChild(li);
    });

    navEl.appendChild(ol);
    const main = document.querySelector("main");
    const headerEl = document.querySelector("header");
    if (headerEl) headerEl.appendChild(navEl);
  }

  // --- Bouton recommencer ---
  const restartPages = [
    "quiz.html", "vrai-faux.html", "demeler.html",
    "associer.html", "pendu.html", "mot-trous.html",
    "co.html", "ce.html", "progression.html",
    "grammaire.html", "conjugaison.html",
    "vocabulaire.html", "phonetique.html",
  ];
  if (restartPages.includes(page)) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-recommencer";
    btn.textContent = "↺ Recommencer";
    btn.addEventListener("click", () => location.reload());
    // Attaché à <body> (pas <main>) : <main> a son propre z-index qui le fait
    // passer sous <footer> quand la page est courte, ce qui rendait ce bouton
    // fixe injoignable au clic (ex : partie du pendu terminée sans erreur).
    document.body.appendChild(btn);
  }
});
