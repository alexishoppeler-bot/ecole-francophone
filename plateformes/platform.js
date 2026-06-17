(function initLevelPlatform() {
  var PROGRESS_KEY = 'ah:cours:progress:v1';
  var config = window.EF_PLATFORM || {};
  var levelKey = config.level;
  var levels = window.efAuth ? efAuth.getAllLevels() : {};
  var level = levels[levelKey];

  if (!level) return;

  if (window.efAuth) {
    efAuth.setLevel(levelKey);
  } else {
    try { localStorage.setItem('ef_level', levelKey); } catch(e) {}
  }

  var root = document.documentElement;
  root.style.setProperty('--platform-color', config.color || level.color);

  var values = {
    platformBadge: level.label + ' ' + level.icon,
    platformKicker: config.kicker || 'Plateforme indépendante',
    platformTitle: config.title || (level.label + ' · ' + level.name),
    platformSubtitle: config.subtitle || level.desc,
    platformPrimary: config.primaryLabel || 'Entrer dans les cours',
    platformSecondary: config.secondaryLabel || 'Voir ma progression',
    cardTitle1: config.cardTitle1 || 'Cours filtrés',
    cardText1: config.cardText1 || 'La base commune affiche uniquement les unités de ce niveau.',
    cardTitle2: config.cardTitle2 || 'Progression dédiée',
    cardText2: config.cardText2 || 'Les activités, statuts et repères restent attachés au parcours choisi.',
    cardTitle3: config.cardTitle3 || 'Même moteur pédagogique',
    cardText3: config.cardText3 || 'Les contenus, exercices et composants restent centralisés pour faciliter la maintenance.'
  };

  Object.keys(values).forEach(function(id) {
    var node = document.getElementById(id);
    if (node) node.textContent = values[id];
  });

  var title = document.getElementById('platformDocumentTitle');
  if (title) title.textContent = 'École Francophone | ' + values.platformTitle;

  var primary = document.getElementById('platformPrimaryLink');
  if (primary) primary.href = '../../cours/index.html';

  var secondary = document.getElementById('platformSecondaryLink');
  if (secondary) secondary.href = '../../cours/progression.html';

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function(ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch(e) { return {}; }
  }

  function getLevelSection() {
    var cd = window.COURSE_DATA;
    if (cd && cd.sections && cd.sections.length) return cd.sections[0];
    var parts = window.COURSE_DATA_PARTS || {};
    return parts[levelKey] && parts[levelKey].section ? parts[levelKey].section : null;
  }

  function getUnitStatus(progress, entry) {
    var page = entry.href ? entry.href.replace('.html', '') : '';
    return progress[page] && progress[page].status ? progress[page].status : 'idle';
  }

  function getStatusLabel(status) {
    if (status === 'completed') return 'Terminée';
    if (status === 'started') return 'En cours';
    return 'À commencer';
  }

  function getStatusPct(status) {
    if (status === 'completed') return 100;
    if (status === 'started') return 45;
    return 0;
  }

  function renderUnitProgress() {
    var grid = document.getElementById('platformUnitGrid');
    if (!grid) return;

    var section = getLevelSection();
    if (!section || !section.entries || !section.entries.length) {
      grid.innerHTML = '<p class="platform-progress-empty">Les unités de ce niveau ne sont pas disponibles.</p>';
      return;
    }

    var progress = readProgress();
    var completed = 0;
    var started = 0;
    var total = section.entries.length;

    var cards = section.entries.map(function(entry) {
      var status = getUnitStatus(progress, entry);
      var pct = getStatusPct(status);
      if (status === 'completed') completed++;
      if (status === 'started') started++;

      return [
        '<a class="platform-unit-card platform-unit-card--' + status + '" href="../../cours/' + entry.href + '">',
        '  <span class="platform-unit-top">',
        '    <span class="platform-unit-badge">' + escapeHtml(entry.badge) + '</span>',
        '    <span class="platform-unit-icon">' + escapeHtml(entry.iconSymbol || section.icon || '') + '</span>',
        '  </span>',
        '  <strong>' + escapeHtml(entry.label) + '</strong>',
        '  <span class="platform-unit-summary">' + escapeHtml(entry.summary || entry.focus || '') + '</span>',
        '  <span class="platform-unit-status">' + getStatusLabel(status) + '</span>',
        '  <span class="platform-unit-bar"><span style="width:' + pct + '%"></span></span>',
        '</a>'
      ].join('');
    }).join('');

    var weightedPct = total > 0 ? Math.round(((completed + started * 0.45) / total) * 100) : 0;
    var pctNode = document.getElementById('platformProgressPct');
    var countNode = document.getElementById('platformProgressCount');
    var fillNode = document.getElementById('platformProgressFill');
    var titleNode = document.getElementById('platformProgressTitle');

    if (pctNode) pctNode.textContent = weightedPct + '%';
    if (countNode) countNode.textContent = completed + ' terminées · ' + started + ' en cours · ' + total + ' unités';
    if (fillNode) fillNode.style.width = weightedPct + '%';
    if (titleNode) titleNode.textContent = 'Unités ' + section.title;

    grid.innerHTML = cards;
  }

  function renderPlatformChatbot() {
    if (document.getElementById('platformChatbot')) return;
    var section = getLevelSection();
    var entries = section && section.entries ? section.entries : [];

    function memoryKey() {
      return 'ef:emmanuelle:platform-memory:v1:' + levelKey;
    }

    function readMemory() {
      try { return JSON.parse(localStorage.getItem(memoryKey()) || '{}'); } catch(e) { return {}; }
    }

    function writeMemory(memory) {
      try { localStorage.setItem(memoryKey(), JSON.stringify(memory)); } catch(e) {}
    }

    function rememberAction(action, entry) {
      var memory = readMemory();
      memory.lastAction = action;
      if (entry) memory.nextUnit = entry.badge + ' · ' + entry.label;
      memory.counts = memory.counts || {};
      memory.counts[action] = (memory.counts[action] || 0) + 1;
      if (action === 'vocab') memory.lastFocus = 'vocabulaire';
      if (action === 'grammar') memory.lastFocus = 'grammaire';
      if (action === 'games') memory.lastFocus = 'jeux';
      writeMemory(memory);
    }

    function searchEntries(words) {
      var q = String(words || '').toLowerCase().split(/\s+/).filter(Boolean);
      return entries.filter(function(entry) {
        var text = [entry.label, entry.summary, entry.focus, entry.task, entry.swissContext, (entry.themes || []).join(' '), (entry.expressions || []).join(' ')].join(' ').toLowerCase();
        return q.some(function(word) { return text.indexOf(word) !== -1; });
      }).slice(0, 5);
    }

    function platformAnswer(action) {
      if (!entries.length) {
        return '<strong>Emmanuelle</strong><p>Les unités de ce niveau ne sont pas encore disponibles.</p>';
      }

      var first = entries[0];
      var vocabThemes = entries.reduce(function(list, entry) {
        return list.concat(entry.themes || []);
      }, []).filter(function(item, index, list) {
        return item && list.indexOf(item) === index;
      }).slice(0, 12);
      var expressions = entries.reduce(function(list, entry) {
        return list.concat(entry.expressions || []);
      }, []).filter(function(item, index, list) {
        return item && list.indexOf(item) === index;
      }).slice(0, 10);
      var progress = readProgress();
      var nextEntry = entries.find(function(entry) {
        return getUnitStatus(progress, entry) !== 'completed';
      }) || entries[0];
      var memory = readMemory();

      if (action === 'start') {
        return '<strong>Emmanuelle · ' + escapeHtml(level.label) + '</strong><p>Je connais les unités, objectifs, thèmes, expressions, jeux et progression de cette plateforme. Cliquez sur une question : je propose une réponse courte et une action concrète.</p>'
          + (memory.nextUnit ? '<p><strong>Mémoire :</strong> dernière unité conseillée : ' + escapeHtml(memory.nextUnit) + (memory.lastFocus ? ' · focus ' + escapeHtml(memory.lastFocus) : '') + '.</p>' : '');
      }
      if (action === 'units') {
        return '<strong>Unités ' + escapeHtml(level.label) + '</strong><ul>' + entries.slice(0, 8).map(function(entry) {
          return '<li><a href="../../cours/' + entry.href + '">' + escapeHtml(entry.badge + ' · ' + entry.label) + '</a><br><small>' + escapeHtml(entry.summary || entry.focus || '') + '</small></li>';
        }).join('') + '</ul>';
      }
      if (action === 'next') {
        return '<strong>Par où commencer ?</strong><p>Je vous conseille : <a href="../../cours/' + nextEntry.href + '">' + escapeHtml(nextEntry.badge + ' · ' + nextEntry.label) + '</a>.</p><p><strong>Pourquoi :</strong> ' + escapeHtml(nextEntry.focus || nextEntry.summary || 'c’est la prochaine étape utile') + '.</p>';
      }
      if (action === 'vocab') {
        return '<strong>Vocabulaire / thèmes</strong><p>' + escapeHtml(vocabThemes.join(', ')) + '.</p><p><strong>Action :</strong> ouvrez une unité et faites une phrase avec 3 mots.</p>';
      }
      if (action === 'phrases') {
        return '<strong>Phrases utiles</strong><ul>' + expressions.slice(0, 8).map(function(expr) {
          return '<li>' + escapeHtml(expr) + '</li>';
        }).join('') + '</ul><p><strong>Action :</strong> remplacez un mot dans une phrase et dites-la à voix haute.</p>';
      }
      if (action === 'grammar') {
        return '<strong>Grammaire</strong><p>Ouvrez une unité, puis cliquez sur l’onglet Grammaire. Les règles sont liées aux phrases utiles, pas isolées.</p><p><a href="../../cours/' + nextEntry.href + '#tab-grammaire">Voir la grammaire conseillée</a></p>';
      }
      if (action === 'games') {
        return '<strong>Jeux et entraînements</strong><p>Chaque unité A1 propose des jeux: Vrai/Faux, Associer, Compléter, Écouter, Quiz, Conjugaison, Mots mêlés et plus.</p><p><a href="../../cours/entrainement-a1.html?unite=' + encodeURIComponent(nextEntry.badge) + '">Ouvrir les jeux conseillés</a></p>';
      }
      if (action === 'progress') {
        var completed = entries.filter(function(entry) { return getUnitStatus(progress, entry) === 'completed'; }).length;
        var started = entries.filter(function(entry) { return getUnitStatus(progress, entry) === 'started'; }).length;
        return '<strong>Progression</strong><p>' + completed + ' unité(s) terminée(s), ' + started + ' en cours, sur ' + entries.length + ' unités.</p><p><strong>Prochaine action :</strong> continuer ' + escapeHtml(nextEntry.badge + ' · ' + nextEntry.label) + '.</p>';
      }
      if (action === 'diagnostic') {
        var completedDiag = entries.filter(function(entry) { return getUnitStatus(progress, entry) === 'completed'; }).length;
        var startedDiag = entries.filter(function(entry) { return getUnitStatus(progress, entry) === 'started'; }).length;
        var advice = completedDiag === 0 && startedDiag === 0
          ? 'Commencez par la première unité et faites un seul jeu.'
          : startedDiag > 0
            ? 'Terminez une unité déjà commencée avant d’en ouvrir une nouvelle.'
            : 'Continuez avec l’unité suivante.';
        return '<strong>Diagnostic automatique</strong><p>' + advice + '</p><p><a href="../../cours/' + nextEntry.href + '">Continuer ' + escapeHtml(nextEntry.badge + ' · ' + nextEntry.label) + '</a></p>';
      }
      if (action === 'five') {
        var variants = ['commencer', 'vocabulaire', 'jeu', 'revision'];
        var last = memory.lastFiveFocus || '';
        var idx = Math.max(0, variants.indexOf(last) + 1) % variants.length;
        if (memory.lastFocus === 'vocabulaire') idx = 2;
        if (memory.lastFocus === 'jeux') idx = 3;
        var focus = variants[idx];
        memory.lastFiveFocus = focus;
        writeMemory(memory);
        var plans = {
          commencer: '<ol><li>Ouvrir <a href="../../cours/' + nextEntry.href + '">' + escapeHtml(nextEntry.badge + ' · ' + nextEntry.label) + '</a>.</li><li>Lire l’objectif.</li><li>Repérer le thème principal.</li><li>Dire une phrase simple.</li><li>Revenir voir la progression.</li></ol>',
          vocabulaire: '<ol><li>Choisir une unité.</li><li>Repérer 3 mots du thème.</li><li>Dire une phrase avec chaque mot.</li><li>Cliquer sur Vocabulaire.</li><li>Faire un jeu court.</li></ol>',
          jeu: '<ol><li>Ouvrir les jeux de <a href="../../cours/entrainement-a1.html?unite=' + encodeURIComponent(nextEntry.badge) + '">' + escapeHtml(nextEntry.badge + ' · ' + nextEntry.label) + '</a>.</li><li>Faire un seul jeu.</li><li>Regarder le score.</li><li>Noter une erreur.</li><li>Recommencer si besoin.</li></ol>',
          revision: '<ol><li>Relire une phrase utile.</li><li>Changer un mot dans la phrase.</li><li>Dire la phrase à voix haute.</li><li>Ouvrir la prochaine unité.</li><li>Faire Communication.</li></ol>'
        };
        return '<strong>Parcours 5 minutes · ' + escapeHtml(focus) + '</strong>' + plans[focus];
      }
      if (action === 'memory') {
        return '<strong>Mémoire locale</strong>' + (memory.nextUnit
          ? '<p>Dernière unité conseillée : ' + escapeHtml(memory.nextUnit) + '.</p><p>Dernier focus : ' + escapeHtml(memory.lastFocus || memory.lastAction || 'parcours') + '.</p>'
          : '<p>Je n’ai pas encore assez d’historique sur cette plateforme.</p>');
      }
      if (action === 'search') {
        return '<strong>Recherche interne sans écrire</strong><p>Choisissez un thème à chercher dans les unités ' + escapeHtml(level.label) + '.</p><div class="platform-chatbot-menu">'
          + '<button type="button" data-platform-bot="search_geo">Pays / ville</button>'
          + '<button type="button" data-platform-bot="search_work">Travail</button>'
          + '<button type="button" data-platform-bot="search_home">Logement</button>'
          + '<button type="button" data-platform-bot="search_admin">Administration</button>'
          + '</div>';
      }
      if (action.indexOf('search_') === 0) {
        var map = {
          search_geo: 'pays ville langue origine suisse',
          search_work: 'travail métier emploi projet',
          search_home: 'logement maison appartement voisin',
          search_admin: 'administration commune formulaire canton'
        };
        var found = searchEntries(map[action] || '');
        return '<strong>Résultats</strong>' + (found.length
          ? '<ul>' + found.map(function(entry) {
              return '<li><a href="../../cours/' + entry.href + '">' + escapeHtml(entry.badge + ' · ' + entry.label) + '</a><br><small>' + escapeHtml(entry.summary || entry.focus || '') + '</small></li>';
            }).join('') + '</ul>'
          : '<p>Aucune unité précise trouvée pour ce thème.</p>');
      }
      if (action === 'method') {
        return '<strong>Méthode simple</strong><ol><li>Ouvrir l’unité conseillée.</li><li>Lire Objectifs.</li><li>Faire Communication.</li><li>Réviser Vocabulaire.</li><li>Faire 2 jeux.</li><li>Regarder Progression.</li></ol>';
      }
      return platformAnswer('start');
    }

    function platformFollowupsHtml(action) {
      var sets = {
        start: [
          ['diagnostic', 'Diagnostic'],
          ['five', 'J’ai 5 minutes'],
          ['search', 'Chercher'],
          ['next', 'Par où commencer ?'],
          ['memory', 'Mémoire']
        ],
        next: [
          ['vocab', 'Quels mots avant ?'],
          ['phrases', 'Quelles phrases ?'],
          ['games', 'Quel jeu après ?'],
          ['progress', 'Progression']
        ],
        units: [
          ['next', 'Choisir pour moi'],
          ['vocab', 'Mots du niveau'],
          ['grammar', 'Grammaire du niveau'],
          ['method', 'Méthode']
        ],
        vocab: [
          ['phrases', 'Faire des phrases'],
          ['games', 'Jeux vocabulaire'],
          ['next', 'Unité conseillée'],
          ['method', 'Méthode']
        ],
        phrases: [
          ['grammar', 'Quelle grammaire ?'],
          ['games', 'Jeux pour pratiquer'],
          ['next', 'Continuer'],
          ['progress', 'Où j’en suis ?']
        ],
        grammar: [
          ['phrases', 'Voir des phrases'],
          ['games', 'Jeux grammaire'],
          ['next', 'Unité conseillée'],
          ['method', 'Méthode']
        ],
        games: [
          ['progress', 'Voir progression'],
          ['vocab', 'Réviser avant'],
          ['next', 'Retour unité'],
          ['method', 'Méthode']
        ],
        progress: [
          ['next', 'Prochaine unité'],
          ['five', 'J’ai 5 minutes'],
          ['games', 'Prochains jeux'],
          ['method', 'Méthode'],
          ['units', 'Toutes les unités']
        ],
        diagnostic: [
          ['next', 'Unité conseillée'],
          ['five', 'J’ai 5 minutes'],
          ['games', 'Jeu rapide'],
          ['progress', 'Progression']
        ],
        five: [
          ['next', 'Ouvrir l’unité'],
          ['vocab', 'Mots avant'],
          ['games', 'Jeu rapide'],
          ['memory', 'Mémoire']
        ],
        search: [
          ['search_geo', 'Pays / ville'],
          ['search_work', 'Travail'],
          ['search_home', 'Logement'],
          ['search_admin', 'Administration']
        ],
        memory: [
          ['diagnostic', 'Diagnostic'],
          ['five', 'J’ai 5 minutes'],
          ['next', 'Continuer'],
          ['progress', 'Progression']
        ]
      };
      var followups = sets[action] || [
        ['next', 'Par où commencer ?'],
        ['units', 'Quelles unités ?'],
        ['vocab', 'Quels mots ?'],
        ['method', 'Méthode']
      ];
      return '<div class="platform-chatbot-followups"><span>Questions possibles</span>'
        + followups.map(function(item) {
          return '<button type="button" data-platform-bot="' + item[0] + '">' + item[1] + '</button>';
        }).join('')
        + '</div>';
    }

    var wrap = document.createElement('section');
    wrap.className = 'platform-chatbot';
    wrap.id = 'platformChatbot';
    wrap.innerHTML = [
      '<button class="platform-chatbot-toggle" type="button" aria-expanded="false" aria-controls="platformChatbotPanel">💬</button>',
      '<div class="platform-chatbot-panel" id="platformChatbotPanel" hidden>',
      '  <div class="platform-chatbot-head">',
      '    <img class="platform-chatbot-avatar" src="../../assets/emanuelle.jpg" alt="Emmanuelle">',
      '    <span class="platform-chatbot-title"><strong>Emmanuelle</strong><span>Réponses par boutons · ' + escapeHtml(level.label) + '</span></span>',
      '  </div>',
      '  <div class="platform-chatbot-log" aria-live="polite">',
      '    <div class="platform-chatbot-msg bot">' + platformAnswer('start') + platformFollowupsHtml('start') + '</div>',
      '  </div>',
      '  <div class="platform-chatbot-choices" aria-label="Questions automatiques">',
      '    <button type="button" data-platform-bot="diagnostic">Diagnostic</button>',
      '    <button type="button" data-platform-bot="five">J’ai 5 minutes</button>',
      '    <button type="button" data-platform-bot="search">Chercher</button>',
      '    <button type="button" data-platform-bot="next">Par où commencer ?</button>',
      '    <button type="button" data-platform-bot="units">Quelles unités ?</button>',
      '    <button type="button" data-platform-bot="vocab">Quels mots ?</button>',
      '    <button type="button" data-platform-bot="phrases">Quelles phrases ?</button>',
      '    <button type="button" data-platform-bot="grammar">Quelle grammaire ?</button>',
      '    <button type="button" data-platform-bot="games">Quels jeux ?</button>',
      '    <button type="button" data-platform-bot="progress">Où j’en suis ?</button>',
      '    <button type="button" data-platform-bot="method">Méthode</button>',
      '    <button type="button" data-platform-bot="memory">Mémoire</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(wrap);

    var toggle = wrap.querySelector('.platform-chatbot-toggle');
    var panel = wrap.querySelector('.platform-chatbot-panel');
    var log = wrap.querySelector('.platform-chatbot-log');
    var choices = wrap.querySelector('.platform-chatbot-choices');

    function addMessage(kind, html, action) {
      var msg = document.createElement('div');
      msg.className = 'platform-chatbot-msg ' + kind;
      msg.innerHTML = kind === 'bot' ? html + platformFollowupsHtml(action) : html;
      log.appendChild(msg);
      log.scrollTop = log.scrollHeight;
      return msg;
    }

    function addTyping() {
      var msg = document.createElement('div');
      msg.className = 'platform-chatbot-msg bot platform-chatbot-typing';
      msg.innerHTML = '<span></span><span></span><span></span>';
      log.appendChild(msg);
      log.scrollTop = log.scrollHeight;
      return msg;
    }

    function runPlatformAction(btn) {
      if (!btn) return;
      var action = btn.dataset.platformBot;
      rememberAction(action, nextEntry);
      addMessage('user', escapeHtml(btn.textContent.trim()));
      var typing = addTyping();
      window.setTimeout(function() {
        typing.remove();
        addMessage('bot', platformAnswer(action), action);
      }, 360);
    }

    choices.addEventListener('click', function(event) {
      var btn = event.target.closest('[data-platform-bot]');
      if (!btn) return;
      runPlatformAction(btn);
    });

    toggle.addEventListener('click', function() {
      var open = panel.hasAttribute('hidden');
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (open) {
        var firstChoice = choices.querySelector('button');
        if (firstChoice) firstChoice.focus();
      }
    });

    log.addEventListener('click', function(event) {
      var btn = event.target.closest('[data-platform-bot]');
      if (!btn) return;
      runPlatformAction(btn);
    });
  }

  renderUnitProgress();
  renderPlatformChatbot();
}());
