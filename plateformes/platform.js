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

  renderUnitProgress();
}());
