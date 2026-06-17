'use strict';

(function initCourseLayout() {
  const slotHeader = document.getElementById('header-slot');
  const slotSidebar = document.getElementById('sidebar-slot');
  const slotFooter = document.getElementById('footer-slot');
  const file = window.location.pathname.split('/').pop() || 'index.html';
  const pageId = file.replace(/\.html$/i, '');

  // Depth below cours/ — unit pages are one level deeper (cours/a2/), tools at root (cours/)
  const _pathParts = window.location.pathname.split('/').filter(Boolean);
  const _coursIdx = _pathParts.lastIndexOf('cours');
  const _depth = _coursIdx >= 0 ? _pathParts.length - _coursIdx - 2 : 0;
  const hrefBase = '../'.repeat(Math.max(0, _depth));
  const ROOT = window.EF_ROOT || hrefBase + '../';
  const SITE_CORE = window.EF_SITE;

  function pageKeyFromHref(href) {
    return href.split('/').pop().replace(/\.html$/i, '');
  }

  function resolveUrl(href) {
    return hrefBase + href;
  }
  const PROGRESS_KEY = 'ah:cours:progress:v1';
  const EXERCISE_PROGRESS_KEY = 'ah:cours:exercise-progress:v1';

  function getStoredLevel() {
    return SITE_CORE ? SITE_CORE.getLevel() : null;
  }

  const SITE_TEXT = window.SITE_TEXT || {};
  const UNIT_TEXT = SITE_TEXT.unit || {};
  const UNIT_STATUS  = UNIT_TEXT.status   || { completed:'Terminée', started:'En cours', cardCompleted:'Terminé', cardStarted:'En cours', cardIdle:'À faire', idle:'À faire' };
  const UNIT_NAV     = UNIT_TEXT.nav      || { prev:'Unité précédente', next:'Unité suivante', courseStart:'Début du parcours', courseEnd:'Fin du parcours', courseEndMsg:'Bravo' };
  const UNIT_PROG    = UNIT_TEXT.progress || { sectionKicker:'Statut actuel', sectionBody:'Votre parcours dans cette unité.', markStarted:'Marquer en cours', markCompleted:'Terminée ✓', gamesKicker:'Entraînements', gamesLabel:'Tous les jeux', gamesDone:'jeux terminés', hubComprehension:UNIT_PROG.hubComprehension, hubProduction:'✍️ Production & entraînement' };
  const UNIT_BOT     = UNIT_TEXT.bot      || { idle:'Je suis là. Pose-moi une question.', greet:'Bonjour, ravi de t\'aider.', diagDefault:'Commencez par Communication, puis faites un jeu.', diagDone:'Cette unité est terminée : passez à la suite.', diagGood:'Bonne base : faites le test final ou complétez les jeux restants.', diagStarted:'Vous avez commencé : terminez un jeu court avant de changer d\'unité.' };
  const BRAND = SITE_TEXT.brand || {
    alt: 'learning progress',
    homeHref: ROOT + 'index.html',
    blueHtml: 'learning',
    purpleHtml: 'progress',
    courseTitlePrefix: 'learning progress'
  };
  const COURSE_TEXT = SITE_TEXT.course || {};
  const COURSE_NAV = COURSE_TEXT.nav || {
    ariaLabel: 'Navigation principale',
    home: 'Accueil',
    course: 'Cours',
    autoeval: 'Auto-évaluation'
  };
  const COURSE_INDEX_TEXT = COURSE_TEXT.index || {
    documentTitle: 'learning progress | Cours',
    backLabel: '← Accueil',
    titleBlueHtml: 'Cours',
    titlePurpleHtml: 'de français',
    subtitle: 'Choisissez une unité dans le sommaire pour accéder aux leçons, exercices et points de langue.',
    progressLinkLabel: '📊 Voir mon tableau de progression →'
  };
  const COURSE_SIDEBAR_TEXT = COURSE_TEXT.sidebar || {
    title: 'Sommaire'
  };
  const COURSE_FOOTER = COURSE_TEXT.footer || [
    'learning progress · cours et repères pratiques',
    'Progression et contenus pensés pour la Suisse romande'
  ];
  const COURSE_BACK = COURSE_TEXT.back || {
    index: '← Accueil',
    unit: '← Cours'
  };

  const sections = COURSE_SECTIONS;

  const entryByPage = {};
  const orderedPages = [];
  sections.forEach(function(section) {
    section.entries.forEach(function(entry, index) {
      const key = pageKeyFromHref(entry.href);
      entryByPage[key] = Object.assign({ sectionTitle: section.title, sectionDescription: section.description, sectionIndex: index }, entry);
      orderedPages.push(key);
    });
  });

  function readProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function writeProgress(progress) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }

  function updateProgress(page, status) {
    if (!page || !entryByPage[page]) return;
    const progress = readProgress();
    progress[page] = progress[page] || {};
    progress[page].status = status;
    progress[page].updatedAt = new Date().toISOString();
    writeProgress(progress);
  }

  function getProgressState(page) {
    const progress = readProgress();
    return progress[page] && progress[page].status ? progress[page].status : 'idle';
  }

  function readExerciseProgress() {
    try {
      return JSON.parse(localStorage.getItem(EXERCISE_PROGRESS_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function getPrevNext(page) {
    const index = orderedPages.indexOf(page);
    return {
      prev: index > 0 ? entryByPage[orderedPages[index - 1]] : null,
      next: index >= 0 && index < orderedPages.length - 1 ? entryByPage[orderedPages[index + 1]] : null
    };
  }

  function getStatusLabel(status, level) {
    if (status === 'completed') return UNIT_STATUS.completed;
    if (status === 'started') return UNIT_STATUS.started;
    return level || UNIT_STATUS.idle;
  }

  function getLevelProgress(levelKey) {
    var progress = readProgress();
    var section = sections.find(function(item) { return item.cls === levelKey; });
    if (!section || !section.entries || !section.entries.length) {
      return { done: 0, total: 0, pct: 0 };
    }
    var done = section.entries.filter(function(entry) {
      var page = pageKeyFromHref(entry.href);
      return progress[page] && progress[page].status === 'completed';
    }).length;
    return {
      done: done,
      total: section.entries.length,
      pct: Math.round(done / section.entries.length * 100)
    };
  }

  function renderHeader() {
    if (!slotHeader || slotHeader.querySelector('.header')) return;
    var level = getStoredLevel();
    var lv = level && SITE_CORE ? SITE_CORE.getLevelData(level) : null;
    var progressLevel = lv ? level : 'a1';
    var progress = getLevelProgress(progressLevel);
    var progressLabel = lv ? lv.label : 'A1';
    var levelChipHtml = lv
      ? '<button class="header-level-card" id="headerLevelChip" title="Changer de niveau" type="button" aria-label="Niveau ' + lv.label + ' — Changer">'
        + '<span class="hlc-badge" style="background:' + lv.color + '">' + lv.label + '</span>'
        + '<span class="hlc-copy"><strong>' + lv.name + '</strong><span>' + lv.icon + ' Niveau actuel</span></span>'
        + '</button>'
      : '<button class="header-level-card" id="headerLevelChip" title="Choisir un niveau" type="button" aria-label="Choisir un niveau">'
        + '<span class="hlc-badge">?</span>'
        + '<span class="hlc-copy"><strong>Niveau</strong><span>Choisir</span></span>'
        + '</button>';
    var progressHtml = '<div class="header-progress" role="progressbar" aria-label="Progression ' + progressLabel + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + progress.pct + '">'
      + '<span class="hp-meta"><strong>' + progressLabel + '</strong><span>' + progress.pct + '%</span><em>' + progress.done + '/' + progress.total + '</em></span>'
      + '<span class="hp-track"><span class="hp-fill" style="width:' + progress.pct + '%"></span></span>'
      + '</div>';

    slotHeader.innerHTML = [
      '<header class="header">',
      '  <div class="header-row1">',
      '    <a href="' + BRAND.homeHref + '" class="header-logo">',
      '      <img src="' + ROOT + 'assets/logo.png" class="header-logo-img" alt="' + BRAND.alt + '" />',
      '      <span class="header-logo-text"><strong>learning</strong> progress</span>',
      '    </a>',
      '    <div class="header-right">',
      levelChipHtml,
      progressHtml,
      '    </div>',
      '  </div>',
      '</header>'
    ].join('');

    if (SITE_CORE) {
      document.getElementById('headerLevelChip').addEventListener('click', function() {
        SITE_CORE.openLevelPicker({ root: ROOT });
      });
    }
  }

  function renderSidebar() {
    if (!slotSidebar) return;
    if (pageId.indexOf('entrainement') === 0) {
      var trainingWrap = document.querySelector('.page-wrap');
      if (trainingWrap) trainingWrap.classList.add('page-wrap--no-sidebar');
      slotSidebar.remove();
      return;
    }
    var storedLevel = getStoredLevel();
    slotSidebar.innerHTML = [
      '<aside class="sommaire" aria-label="Sommaire des cours">',
      '  <p class="sommaire-title">' + COURSE_SIDEBAR_TEXT.title + '</p>',
      sections.map(function(section) {
        var isActive = storedLevel && section.cls === storedLevel;
        var openAttr = isActive ? ' open' : '';
        return [
          '  <details class="som-details' + (section.cls ? ' som-level-' + section.cls : '') + (isActive ? ' som-level-active' : '') + '"' + openAttr + '>',
          '    <summary class="som-details-summary">',
          section.cls ? '      <span class="som-level-badge">' + section.title + '</span>' : '',
          '      <span class="som-details-icon">' + section.icon + '</span>',
          '      ' + (section.idxLabel || section.title),
          '      <span class="som-details-arrow" aria-hidden="true">▾</span>',
          '    </summary>',
          '    <ul class="som-details-list">',
          section.entries.map(function(entry) {
            const key = pageKeyFromHref(entry.href);
            const active = key === pageId ? ' active' : '';
            return [
              '      <li>',
              '        <a class="som-item ' + entry.tone + active + '" href="' + resolveUrl(entry.href) + '">',
              '          <div class="som-badge"><span class="som-badge-num">' + entry.badge + '</span></div>',
              '          <span class="som-row">',
              '            <span class="som-row-label">' + entry.label + '</span>',
              '          </span>',
              '        </a>',
              '      </li>'
            ].join('');
          }).join(''),
          '    </ul>',
          '  </details>'
        ].join('');
      }).join(''),
      '</aside>'
    ].join('');
  }

  function renderIndexPage() {
    var slot = document.getElementById('index-level-slot');
    if (!slot) return;
    var back = document.querySelector('.cours-back');
    var title = document.querySelector('.cours-main-title');
    var sub = document.querySelector('.cours-main-sub');
    if (back) back.textContent = COURSE_INDEX_TEXT.backLabel;
    if (title) {
      title.innerHTML = '<span class="title-blue">' + COURSE_INDEX_TEXT.titleBlueHtml + '</span> <span class="title-purple">' + COURSE_INDEX_TEXT.titlePurpleHtml + '</span>';
    }
    if (sub) sub.textContent = COURSE_INDEX_TEXT.subtitle;
    if (COURSE_INDEX_TEXT.documentTitle) document.title = COURSE_INDEX_TEXT.documentTitle;
    var storedLevel = getStoredLevel();
    var visibleSections = sections;

    slot.innerHTML = visibleSections.map(function(section) {
      var levelId = 'level-' + section.cls;
      var isA1 = section.cls === 'a1';
      var isMyLevel = storedLevel && section.cls === storedLevel;
      var openAttr = isMyLevel ? ' open' : '';
      var myLevelBanner = isMyLevel
        ? '<div class="idx-my-level-banner">Mon niveau</div>'
        : '';
      return [
        '<details class="idx-level' + (isMyLevel ? ' idx-level-active' : '') + '" id="' + levelId + '" data-prefix="' + (section.prefix || '') + '"' + openAttr + '>',
        '  <summary class="idx-level-summary">',
        myLevelBanner,
        '    <span class="idx-level-badge">' + section.title + '</span>',
        '    <span class="idx-level-label">' + (section.idxLabel || '') + '</span>',
        isA1 ? '' : '    <span class="idx-wip">🚧</span>',
        '    <span class="idx-level-count">' + section.entries.length + ' unités</span>',
        '    <span class="idx-chevron">▸</span>',
        '  </summary>',
        '  <div class="idx-list idx-card-grid">',
        section.entries.map(function(entry) {
          return '    <a class="idx-item idx-unit-card ' + (section.idxItemCls || entry.tone) + '" href="' + resolveUrl(entry.href) + '">'
            + '<span class="idx-card-top"><span class="idx-num">' + entry.badge + '</span><span class="idx-card-icon">' + (entry.iconSymbol || section.icon || '') + '</span></span>'
            + '<span class="idx-title">' + entry.label + '</span>'
            + '<span class="idx-card-summary">' + (entry.summary || entry.focus || '') + '</span>'
            + '</a>';
        }).join('\n'),
        '  </div>',
        '</details>'
      ].join('\n');
    }).join('\n');

    // Append progression link
    var progBanner = document.createElement('div');
    progBanner.className = 'idx-prog-banner';
    progBanner.innerHTML = '<a class="idx-prog-link" href="' + resolveUrl('progression.html') + '">' + COURSE_INDEX_TEXT.progressLinkLabel + '</a>';
    slot.appendChild(progBanner);

    var ref = document.referrer;
    if (ref) {
      var page = ref.split('/').pop().split('?')[0];
      var link = slot.querySelector('.idx-item[href$="' + page + '"]');
      if (link) link.classList.add('active');
    }

    // Scroll automatique vers le niveau choisi
    if (storedLevel) {
      var activeEl = document.getElementById('level-' + storedLevel);
      if (activeEl) {
        setTimeout(function() {
          activeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      }
    }
  }

  function renderFooter() {
    if (!slotFooter) return;
    slotFooter.innerHTML = [
      '<footer class="footer footer--cours">',
      '  <span>' + COURSE_FOOTER[0] + '</span>',
      '  <span>' + COURSE_FOOTER[1] + '</span>',
      '</footer>'
    ].join('');
  }

  window._ef = {
    pageId:              pageId,
    hrefBase:            hrefBase,
    sections:            sections,
    entryByPage:         entryByPage,
    orderedPages:        orderedPages,
    UNIT_STATUS:         UNIT_STATUS,
    UNIT_NAV:            UNIT_NAV,
    UNIT_PROG:           UNIT_PROG,
    UNIT_BOT:            UNIT_BOT,
    BRAND:               BRAND,
    COURSE_BACK:         COURSE_BACK,
    slotSidebar:         slotSidebar,
    pageKeyFromHref:     pageKeyFromHref,
    resolveUrl:          resolveUrl,
    readProgress:        readProgress,
    updateProgress:      updateProgress,
    getProgressState:    getProgressState,
    readExerciseProgress:readExerciseProgress,
    getPrevNext:         getPrevNext,
    getStatusLabel:      getStatusLabel
  };

  renderHeader();
  renderSidebar();
  renderIndexPage();
  renderFooter();
}());
