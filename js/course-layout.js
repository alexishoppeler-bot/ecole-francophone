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

  function pageKeyFromHref(href) {
    return href.split('/').pop().replace(/\.html$/i, '');
  }

  function resolveUrl(href) {
    return hrefBase + href;
  }
  const PROGRESS_KEY = 'ah:cours:progress:v1';
  const EXERCISE_PROGRESS_KEY = 'ah:cours:exercise-progress:v1';

  const EF_LEVELS = {
    a1:   { label: 'A1',    icon: '🌱', color: '#5AABF0', name: 'Débutant',      desc: 'Je découvre le français et les repères essentiels.' },
    a2:   { label: 'A2',    icon: '🌿', color: '#3db8b0', name: 'Élémentaire',   desc: 'Je m\'exprime sur des sujets familiers du quotidien.' },
    b1:   { label: 'B1',    icon: '🌳', color: '#b8a055', name: 'Intermédiaire', desc: 'Je comprends et m\'exprime dans des situations variées.' },
    b2:   { label: 'B2',    icon: '🌟', color: '#9B35EC', name: 'Avancé',        desc: 'Je communique avec aisance sur des sujets complexes.' },
    c1c2: { label: 'C1/C2', icon: '🎓', color: '#e84b6c', name: 'Maîtrise',     desc: 'Je maîtrise le français avec fluidité et nuance.' }
  };

  function getStoredLevel() {
    try { return localStorage.getItem('ef_level') || null; } catch(e) { return null; }
  }

  function setStoredLevel(key) {
    try { localStorage.setItem('ef_level', key); } catch(e) {}
  }
  const SITE_TEXT = window.SITE_TEXT || {};
  const UNIT_TEXT = SITE_TEXT.unit || {};
  const UNIT_STATUS  = UNIT_TEXT.status   || { completed:'Terminée', started:'En cours', cardCompleted:'Terminé', cardStarted:'En cours', cardIdle:'À faire', idle:'À faire' };
  const UNIT_NAV     = UNIT_TEXT.nav      || { prev:'Unité précédente', next:'Unité suivante', courseStart:'Début du parcours', courseEnd:'Fin du parcours', courseEndMsg:'Bravo' };
  const UNIT_PROG    = UNIT_TEXT.progress || { sectionKicker:'Statut actuel', sectionBody:'Votre parcours dans cette unité.', markStarted:'Marquer en cours', markCompleted:'Terminée ✓', gamesKicker:'Entraînements', gamesLabel:'Tous les jeux', gamesDone:'jeux terminés', hubComprehension:UNIT_PROG.hubComprehension, hubProduction:'✍️ Production & entraînement' };
  const UNIT_BOT     = UNIT_TEXT.bot      || { idle:'Je suis là. Pose-moi une question.', greet:'Bonjour, ravi de t\'aider.', diagDefault:'Commencez par Communication, puis faites un jeu.', diagDone:'Cette unité est terminée : passez à la suite.', diagGood:'Bonne base : faites le test final ou complétez les jeux restants.', diagStarted:'Vous avez commencé : terminez un jeu court avant de changer d\'unité.' };
  const BRAND = SITE_TEXT.brand || {
    alt: 'École Francophone',
    homeHref: hrefBase + '../index.html',
    blueHtml: 'learning',
    purpleHtml: 'progress',
    courseTitlePrefix: 'École Francophone'
  };
  const COURSE_TEXT = SITE_TEXT.course || {};
  const COURSE_NAV = COURSE_TEXT.nav || {
    ariaLabel: 'Navigation principale',
    home: 'Accueil',
    course: 'Cours',
    autoeval: 'Auto-évaluation'
  };
  const COURSE_INDEX_TEXT = COURSE_TEXT.index || {
    documentTitle: 'École Francophone | Cours',
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
    'École Francophone · cours et repères pratiques',
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

  function renderLevelPickerOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'levelPickerOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Changer de niveau');
    overlay.innerHTML = [
      '<div class="lpo-backdrop"></div>',
      '<div class="lpo-panel">',
      '  <button class="lpo-close" aria-label="Fermer">✕</button>',
      '  <p class="lpo-title">Mon niveau de français</p>',
      '  <div class="lpo-grid">',
      Object.keys(EF_LEVELS).map(function(key) {
        var lv = EF_LEVELS[key];
        return [
          '<button class="lpo-card lpo-card--' + key + '" data-level="' + key + '" type="button">',
          '  <span class="lpo-badge" style="background:' + lv.color + '">' + lv.label + '</span>',
          '  <span class="lpo-icon">' + lv.icon + '</span>',
          '  <span class="lpo-name">' + lv.name + '</span>',
          '  <span class="lpo-desc">' + lv.desc + '</span>',
          '</button>'
        ].join('');
      }).join(''),
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(overlay);

    function closeOverlay() { overlay.classList.remove('open'); }

    overlay.querySelector('.lpo-backdrop').addEventListener('click', closeOverlay);
    overlay.querySelector('.lpo-close').addEventListener('click', closeOverlay);
    overlay.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeOverlay(); });

    overlay.querySelector('.lpo-grid').addEventListener('click', function(e) {
      var btn = e.target.closest('[data-level]');
      if (!btn) return;
      setStoredLevel(btn.dataset.level);
      var platformUrls = {
        a1: hrefBase + '../plateformes/a1/index.html',
        a2: hrefBase + '../plateformes/a2/index.html',
        b1: hrefBase + '../plateformes/b1/index.html',
        b2: hrefBase + '../plateformes/b2/index.html',
        c1c2: hrefBase + '../plateformes/c1c2/index.html'
      };
      window.location.href = platformUrls[btn.dataset.level] || resolveUrl('index.html');
    });

    return overlay;
  }

  function renderHeader() {
    if (!slotHeader) return;
    var level = getStoredLevel();
    var lv = level ? EF_LEVELS[level] : null;
    var a1Progress = getLevelProgress('a1');
    var levelChipHtml = lv
      ? '<button class="header-level-chip" id="headerLevelChip" title="Changer de niveau" type="button" aria-label="Niveau ' + lv.label + ' — Changer">'
        + '<span class="hlc-badge" style="background:' + lv.color + '">' + lv.label + '</span>'
        + '<span class="hlc-icon">' + lv.icon + '</span>'
        + '<span class="hlc-name">' + lv.name + '</span>'
        + '</button>'
      : '';
    var a1ProgressHtml = '<div class="header-level-progress" role="progressbar" aria-label="Progression A1" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + a1Progress.pct + '">'
      + '<span class="hlp-top"><strong>A1</strong><span>' + a1Progress.pct + '%</span></span>'
      + '<span class="hlp-track"><span class="hlp-fill" style="width:' + a1Progress.pct + '%"></span></span>'
      + '<span class="hlp-count">' + a1Progress.done + '/' + a1Progress.total + ' unités</span>'
      + '</div>';

    slotHeader.innerHTML = [
      '<header class="header">',
      '  <div class="header-row1">',
      '    <a href="' + BRAND.homeHref + '" class="header-logo">',
      '      <img src="' + hrefBase + '../assets/logo.png" class="header-logo-img" alt="' + BRAND.alt + '" />',
      '      <span class="header-logo-text"><span class="header-logo-blue">' + BRAND.blueHtml + '</span> <span class="header-logo-purple">' + BRAND.purpleHtml + '</span></span>',
      '    </a>',
      '    <div class="header-right">',
      levelChipHtml,
      a1ProgressHtml,
      '    </div>',
      '  </div>',
      '</header>'
    ].join('');

    if (lv) {
      var overlay = renderLevelPickerOverlay();
      document.getElementById('headerLevelChip').addEventListener('click', function() {
        overlay.classList.add('open');
        overlay.querySelector('.lpo-close').focus();
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
    var PROGRESS_KEY = 'ah:cours:progress:v1';
    var levelMap = {};
    sections.forEach(function(s) {
      if (s.prefix !== undefined) levelMap[s.prefix + 'unite-'] = 'level-' + s.cls;
    });
    levelMap['unite-'] = 'level-a1';
    var activeLevel = null;
    try {
      var raw = localStorage.getItem(PROGRESS_KEY);
      if (raw) {
        var progress = JSON.parse(raw);
        var keys = Object.keys(progress);
        if (keys.length) {
          var last = keys.reduce(function(a, b) {
            return (progress[a].ts || 0) > (progress[b].ts || 0) ? a : b;
          });
          Object.keys(levelMap).forEach(function(pfx) {
            if (last.indexOf(pfx) === 0) activeLevel = levelMap[pfx];
          });
        }
      }
    } catch(e) {}

    var storedLevel = getStoredLevel();

    var visibleSections = storedLevel
      ? sections.filter(function(section) { return section.cls === storedLevel; })
      : sections;
    if (!visibleSections.length) visibleSections = sections;

    slot.innerHTML = visibleSections.map(function(section) {
      var levelId = 'level-' + section.cls;
      var isA1 = section.cls === 'a1';
      var isMyLevel = storedLevel && section.cls === storedLevel;
      var openAttr = storedLevel ? ' open' : '';
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
