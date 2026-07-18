// moteur.js — charge les données de l'unité (?unite=a1-0) et fournit les
// fonctions communes aux pages moteur. Fonctionne en file:// : les données
// sont des fichiers .js injectés de façon synchrone, pas du fetch.
const UNITE_ID = (new URLSearchParams(location.search).get("unite") || "a1-0").replace(/[^a-z0-9-]/g, "");
// Seule l'unité 1 (a1-0) est accessible sans connexion : c'est la démo.
// Les autres unités redirigent vers la connexion, avec un retour direct
// (?next=) vers la page demandée une fois connecté.
const ACCES_OK = UNITE_ID === "a1-0" || localStorage.getItem("lp-auth") === "ok";
if (ACCES_OK) {
  document.write('<script src="data/' + UNITE_ID + '.js"><\/script>');
} else {
  const retour = location.pathname.split("/").pop() + location.search;
  // Masque la page le temps de la redirection, pour éviter un flash
  // du message « Unité introuvable ».
  document.write('<style>main { display: none; }</style>');
  location.replace("connexion.html?next=" + encodeURIComponent(retour));
}

// Précharge la liste des voix le plus tôt possible : sur certains
// navigateurs, speechSynthesis.getVoices() renvoie une liste vide tant que
// l'événement voiceschanged n'a pas eu lieu. Sans ce préchargement, le tout
// premier clic sur un bouton son (dire()) rate la voix Google FR et utilise
// la voix par défaut, qui peut prononcer une liaison différemment.
if (typeof speechSynthesis !== "undefined") {
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener("voiceschanged", () => speechSynthesis.getVoices());
}

function U() {
  const u = window.UNITES && window.UNITES[UNITE_ID];
  if (!u) {
    document.addEventListener("DOMContentLoaded", () => {
      const main = document.querySelector("main");
      if (main) main.innerHTML = '<section class="section"><h2>Unité introuvable</h2><p>L\'unité « ' + UNITE_ID + ' » n\'existe pas. <a href="index-a1.html">Retour au niveau A1</a>.</p></section>';
    });
  }
  return u;
}

// Lien interne vers une autre page moteur, en conservant l'unité.
function lienUnite(page) {
  return page + "?unite=" + UNITE_ID;
}

// Sauvegarde le résultat de l'évaluation finale de l'unité courante, pour
// que la page de liste des unités (index-a1.html) puisse afficher si
// l'évaluation a été faite / réussie. Clé unique localStorage partagée
// entre toutes les unités : { <uniteId>: { pct, valide } }.
function sauvegarderEvaluation(pct, valide) {
  let data = {};
  try { data = JSON.parse(localStorage.getItem("lp-evaluations")) || {}; } catch (e) {}
  data[UNITE_ID] = { pct, valide };
  try { localStorage.setItem("lp-evaluations", JSON.stringify(data)); } catch (e) {}
}

// Remplit titre d'onglet, eyebrow, footer et liens marqués data-lien-unite.
function initPageUnite(sectionLabel) {
  const u = U();
  if (!u) return;
  document.title = sectionLabel + " | Unité " + u.meta.label;
  document.addEventListener("DOMContentLoaded", () => {
    const eyebrow = document.querySelector(".hero .eyebrow");
    if (eyebrow) eyebrow.textContent = "Unité " + u.meta.numero + (sectionLabel === "Unité" ? "" : " · " + sectionLabel);
    const footer = document.querySelector("footer");
    if (footer) footer.textContent = "© 2026 learning progress · " + u.meta.label + " " + sectionLabel;
    document.querySelectorAll("[data-lien-unite]").forEach((a) => {
      a.setAttribute("href", lienUnite(a.getAttribute("data-lien-unite")));
    });
  });
}

// Remplit le hero avec { h1, lead, p } (p accepte du HTML).
function remplirHero(hero) {
  document.addEventListener("DOMContentLoaded", () => {
    const copy = document.querySelector(".hero-copy");
    if (!copy || !hero) return;
    const h1 = copy.querySelector("h1");
    const lead = copy.querySelector(".hero-lead");
    const p = copy.querySelector("p:not(.hero-lead):not(.eyebrow)");
    if (h1 && hero.h1) h1.textContent = hero.h1;
    if (lead && hero.lead) lead.textContent = hero.lead;
    if (p && hero.p) p.innerHTML = hero.p;
  });
}

// Quiz standard des pages leçons (options : [[texte, estCorrect], …]).
function quizZoneHTML(question, options) {
  return '<div class="quiz-zone"><p class="quiz-question">' + question + '</p><div class="quiz-options">'
    + options.map((o) => '<button class="quiz-option" onclick="verifier(this,' + (o[1] ? "true" : "false") + ')">' + o[0] + "</button>").join("")
    + '</div><p class="quiz-feedback"></p></div>';
}

// Mélange un tableau (Fisher-Yates) sans modifier l'original.
// `.sort(() => Math.random() - 0.5)` est biaisé (surtout sur les petits
// tableaux) : la bonne réponse finit souvent à la même position.
function melangerTableau(tableau) {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

// Zones de question multiples pour une carte de leçon (grammaire, vocabulaire,
// conjugaison, phonétique) : c.questions = [{ question, options }, …].
function quizZonesHTML(questions) {
  return questions.map((q) => {
    const optsHTML = melangerTableau(q.options)
      .map((o) => '<button class="quiz-option" onclick="verifier(this,' + (o[1] ? "true" : "false") + ')">' + o[0] + '</button>').join("");
    return '<div class="quiz-zone"><p class="quiz-question">' + q.question + '</p><div class="quiz-options">' + optsHTML + '</div><p class="quiz-feedback"></p></div>';
  }).join("");
}

// Attache à chaque zone de question l'explication propre à SA question
// (c.questions[j].explication), pas une explication unique partagée par
// toute la carte : l'élève doit comprendre pourquoi CETTE réponse-là est
// correcte ou non, pas relire la théorie générale de la carte.
// getCarteExpFallback (optionnel) : explication de repli pour les cartes
// pas encore migrées vers une explication par question.
function attacherExplicationsQuestions(container, carteSelector, cartes, getCarteExpFallback) {
  container.querySelectorAll(carteSelector).forEach((el, i) => {
    const carte = cartes[i];
    const fallback = getCarteExpFallback ? getCarteExpFallback(carte) : "";
    el.querySelectorAll(".quiz-zone").forEach((zone, j) => {
      const exp = (carte.questions[j] && carte.questions[j].explication) || fallback;
      if (exp) zone.dataset.exp = exp;
    });
  });
}

// L'explication (si présente) est posée via zone.dataset.exp par la page
// appelante — jamais injectée dans le HTML — pour éviter tout souci
// d'échappement avec les apostrophes du français.
function verifier(btn, correct) {
  const zone = btn.closest(".quiz-zone");
  const feedback = zone.querySelector(".quiz-feedback");
  const options = zone.querySelectorAll(".quiz-option");
  options.forEach((o) => { o.disabled = true; o.classList.add("quiz-disabled"); });
  const exp = zone.dataset.exp ? " " + zone.dataset.exp : "";
  if (correct) {
    btn.classList.add("quiz-correct");
    feedback.textContent = "Bravo, c'est correct !" + exp;
    feedback.className = "quiz-feedback feedback-correct";
  } else {
    btn.classList.add("quiz-incorrect");
    feedback.textContent = "Ce n'est pas la bonne réponse." + exp;
    feedback.className = "quiz-feedback feedback-incorrect";
    options.forEach((o) => {
      if (o.getAttribute("onclick").includes("true")) o.classList.add("quiz-correct");
    });
  }
}

// Attache l'explication de chaque carte à son .quiz-zone, dans l'ordre.
// getExp(carte) doit renvoyer une chaîne (peut être vide).
function attacherExplications(container, cartes, getExp) {
  const zones = container.querySelectorAll(".quiz-zone");
  zones.forEach((zone, i) => {
    const exp = getExp(cartes[i]);
    if (exp) zone.dataset.exp = exp;
  });
}

// Petit bouton son inline à côté d'un mot ou d'une phrase, dans un tableau de
// vocabulaire (voir vocabulaire.html). `son` est optionnel : à fournir quand
// le texte affiché contient du HTML (ex. <strong>) ou n'est pas directement
// lisible tel quel (ex. un numéro devant le mot) — sinon `mot` sert aux deux.
function motSon(mot, son) {
  const texte = (son || mot).replace(/<[^>]+>/g, "");
  return mot + ' <button class="mot-son-inline" data-son="' + texte + '" onclick="dire(this)">🔊</button>';
}

// Lecture d'un mot (pages phonétique).
// data-son permet de faire lire un texte différent de celui affiché sur le
// bouton (ex : un bouton 🔊 à côté d'un mot, dans un tableau de vocabulaire).
// La liste des voix se charge de façon asynchrone : sur le tout premier clic
// (avant l'événement voiceschanged), getVoices() peut renvoyer un tableau
// vide, et la lecture retombe alors sur la voix par défaut du navigateur
// (pas forcément française), ce qui explique des mots mal prononcés de façon
// apparemment aléatoire. On met donc la liste en cache dès qu'elle est prête.
let voixFRCache = null;
function trouverVoixFR() {
  const voix = speechSynthesis.getVoices();
  if (!voix.length) return null;
  return voix.find((v) => v.lang.startsWith("fr") && v.name.toLowerCase().includes("google"))
    || voix.find((v) => v.lang.startsWith("fr"));
}
if (typeof speechSynthesis !== "undefined") {
  voixFRCache = trouverVoixFR();
  speechSynthesis.onvoiceschanged = () => { voixFRCache = trouverVoixFR(); };
}

function dire(btn) {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance((btn.dataset.son || btn.textContent).trim());
  utterance.lang = "fr-FR";
  utterance.rate = 0.75;
  const voixFR = voixFRCache || trouverVoixFR();
  if (voixFR) utterance.voice = voixFR;
  speechSynthesis.speak(utterance);
  btn.classList.add("phon-mot-active");
  setTimeout(() => btn.classList.remove("phon-mot-active"), 900);
}

// Animation d'apparition des sections .reveal (pages leçons).
function initReveal() {
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.18 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  });
}
