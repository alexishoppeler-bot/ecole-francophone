'use strict';

(function initCourseLayout() {
  const slotHeader = document.getElementById('header-slot');
  const slotSidebar = document.getElementById('sidebar-slot');
  const slotFooter = document.getElementById('footer-slot');
  const file = window.location.pathname.split('/').pop() || 'index.html';
  const pageId = file.replace(/\.html$/i, '');
  const PROGRESS_KEY = 'ah:cours:progress:v1';
  const SITE_TEXT = window.SITE_TEXT || {};
  const BRAND = SITE_TEXT.brand || {
    alt: 'École Francophone',
    homeHref: '../index.html',
    blueHtml: 'école-',
    purpleHtml: 'francophone',
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
      const key = entry.href.replace('.html', '');
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

  function getPrevNext(page) {
    const index = orderedPages.indexOf(page);
    return {
      prev: index > 0 ? entryByPage[orderedPages[index - 1]] : null,
      next: index >= 0 && index < orderedPages.length - 1 ? entryByPage[orderedPages[index + 1]] : null
    };
  }

  function getStatusLabel(status, level) {
    if (status === 'completed') return 'Terminée';
    if (status === 'started') return 'En cours';
    return level || 'À faire';
  }

  function renderHeader() {
    if (!slotHeader) return;
    slotHeader.innerHTML = [
      '<header class="header">',
      '  <div class="header-row1">',
      '    <a href="' + BRAND.homeHref + '" class="header-logo">',
      '      <img src="../assets/logo.png" class="header-logo-img" alt="' + BRAND.alt + '" />',
      '      <span class="header-logo-text"><span class="header-logo-blue">' + BRAND.blueHtml + '</span><span class="header-logo-purple">' + BRAND.purpleHtml + '</span></span>',
      '    </a>',
      '    <div class="header-right">',
      '      <nav class="header-nav" aria-label="' + COURSE_NAV.ariaLabel + '">',
      '        <a class="header-menu-link" href="../index.html"><span aria-hidden="true">🏠</span><span>' + COURSE_NAV.home + '</span></a>',
      '        <a class="header-menu-link active" href="index.html"><span aria-hidden="true">📚</span><span>' + COURSE_NAV.course + '</span></a>',
      '        <a class="header-menu-link" href="autoeval.html"><span aria-hidden="true">🎯</span><span>' + COURSE_NAV.autoeval + '</span></a>',
      '      </nav>',
      '    </div>',
      '  </div>',
      '</header>'
    ].join('');
  }

  function renderSidebar() {
    if (!slotSidebar) return;
    slotSidebar.innerHTML = [
      '<aside class="sommaire" aria-label="Sommaire des cours">',
      '  <p class="sommaire-title">' + COURSE_SIDEBAR_TEXT.title + '</p>',
      sections.map(function(section) {
        return [
          '  <details class="som-details' + (section.cls ? ' som-level-' + section.cls : '') + '">',
          '    <summary class="som-details-summary">',
          section.cls ? '      <span class="som-level-badge">' + section.title + '</span>' : '',
          '      <span class="som-details-icon">' + section.icon + '</span>',
          '      ' + (section.idxLabel || section.title),
          '      <span class="som-details-arrow" aria-hidden="true">▾</span>',
          '    </summary>',
          '    <ul class="som-details-list">',
          section.entries.map(function(entry) {
            const key = entry.href.replace('.html', '');
            const active = key === pageId ? ' active' : '';
            return [
              '      <li>',
              '        <a class="som-item ' + entry.tone + active + '" href="' + entry.href + '">',
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

    slot.innerHTML = sections.map(function(section) {
      var levelId = 'level-' + section.cls;
      var isA1 = section.cls === 'a1';
      return [
        '<details class="idx-level" id="' + levelId + '" data-prefix="' + (section.prefix || '') + '">',
        '  <summary class="idx-level-summary">',
        '    <span class="idx-level-badge">' + section.title + '</span>',
        '    <span class="idx-level-label">' + (section.idxLabel || '') + '</span>',
        isA1 ? '' : '    <span class="idx-wip">🚧</span>',
        '    <span class="idx-level-count">' + section.entries.length + ' unités</span>',
        '    <span class="idx-chevron">▸</span>',
        '  </summary>',
        '  <div class="idx-list">',
        section.entries.map(function(entry) {
          return '    <a class="idx-item ' + (section.idxItemCls || entry.tone) + '" href="' + entry.href + '">'
            + '<span class="idx-num">' + entry.badge + '</span>'
            + '<span class="idx-title">' + entry.label + '</span>'
            + '</a>';
        }).join('\n'),
        '  </div>',
        '</details>'
      ].join('\n');
    }).join('\n');

    // Append progression link
    var progBanner = document.createElement('div');
    progBanner.className = 'idx-prog-banner';
    progBanner.innerHTML = '<a class="idx-prog-link" href="progression.html">' + COURSE_INDEX_TEXT.progressLinkLabel + '</a>';
    slot.appendChild(progBanner);

    var ref = document.referrer;
    if (ref) {
      var page = ref.split('/').pop().split('?')[0];
      var link = slot.querySelector('.idx-item[href="' + page + '"]');
      if (link) link.classList.add('active');
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

  function createAutonomyPlan(entry) {
    const themeA = entry.themes && entry.themes[0] ? entry.themes[0] : 'thème';
    const themeB = entry.themes && entry.themes[1] ? entry.themes[1] : 'repère';
    if (entry.level === 'A1') {
      return [
        'Commencer par lire le thème de l\'unité et repérer 4 à 6 mots utiles liés à ' + themeA + ' et ' + themeB + '.',
        'Observer les exemples de langue, puis recopier deux phrases simples en changeant seulement une information.',
        'Faire les exercices proposés en vérifiant à chaque fois le vocabulaire réellement compris.',
        'Terminer par un court écrit personnel de 3 à 5 phrases en lien avec la situation suisse romande présentée.'
      ];
    }
    if (entry.level === 'A2') {
      return [
        'Lire l\'unité comme une petite séquence: thème, vocabulaire, repères de langue, puis contexte suisse romand.',
        'Noter les mots et structures utiles pour comprendre ou rédiger seul(e) sur ' + themeA + ' et ' + themeB + '.',
        'Faire les activités en cherchant à relier les informations plutôt qu\'à mémoriser des phrases isolées.',
        'Finir par une production écrite courte ou un résumé personnel en réutilisant au moins deux éléments de l\'unité.'
      ];
    }
    if (entry.level === 'B1') {
      return [
        'Identifier l\'idée centrale de l\'unité et les notions importantes à comprendre avant de passer aux exercices.',
        'Comparer le vocabulaire, les repères de langue et le contexte suisse romand pour organiser vos propres notes.',
        'Faire les activités en visant une reformulation claire, structurée et personnelle du contenu travaillé.',
        'Conclure par un paragraphe argumenté ou explicatif court qui montre ce que vous avez réellement retenu.'
      ];
    }
    return [
      'Entrer dans l\'unité par la problématique générale, puis repérer les notions d\'analyse à maîtriser.',
      'Relever le lexique intellectuel, les nuances et les oppositions utiles pour comprendre le sujet en profondeur.',
      'Faire les activités en cherchant à synthétiser, interpréter et distinguer les points de vue ou les enjeux.',
      'Terminer par une prise de notes structurée ou un développement bref qui reformule clairement votre compréhension.'
    ];
  }

  function buildAutonomySteps(entry) {
    const steps = entry.autonomy || createAutonomyPlan(entry);
    return steps.map(function(step) {
      return '<li>' + step + '</li>';
    }).join('');
  }

  function createTrainingLinks(entry) {
    const links = entry.training || [
      { href: '../games/completer.html', label: 'Compléter', note: 'retrouver le mot ou la structure adaptée' },
      { href: '../games/quiz.html', label: 'Quiz', note: 'vérifier la compréhension du thème' },
      { href: '../games/vrai-faux.html', label: 'Vrai / Faux', note: 'nuancer et valider les idées clés' }
    ];
    return links.map(function(link) {
      return '<li><a href="' + link.href + '">' + link.label + '</a><span>' + link.note + '</span></li>';
    }).join('');
  }

  function buildAssessment(entry) {
    return (entry.assessment || []).map(function(question, index) {
      return [
        '<fieldset class="course-check-item" data-answer="' + question.answer + '">',
        '  <legend>' + (index + 1) + '. ' + question.prompt + '</legend>',
        question.choices.map(function(choice, choiceIndex) {
          return '<label class="course-check-choice"><input type="radio" name="course-q-' + entry.href + '-' + index + '" value="' + choiceIndex + '"><span>' + choice + '</span></label>';
        }).join(''),
        '</fieldset>'
      ].join('');
    }).join('');
  }

  function buildNavigation(entry) {
    const neighbors = getPrevNext(entry.href.replace('.html', ''));
    return [
      '<section class="unite-section">',
      '  <div class="course-nav-links">',
      neighbors.prev
        ? '    <a class="course-nav-link course-nav-link--prev" href="' + neighbors.prev.href + '"><span>Unité précédente</span><strong>' + neighbors.prev.label + '</strong></a>'
        : '    <span class="course-nav-link course-nav-link--ghost"><span>Début du parcours</span><strong>' + entry.sectionTitle + '</strong></span>',
      neighbors.next
        ? '    <a class="course-nav-link course-nav-link--next" href="' + neighbors.next.href + '"><span>Unité suivante</span><strong>' + neighbors.next.label + '</strong></a>'
        : '    <span class="course-nav-link course-nav-link--ghost"><span>Fin du parcours</span><strong>Bravo</strong></span>',
      '  </div>',
      '</section>'
    ].join('');
  }

  function buildUnitMarkup(entry) {
    const unitContent = getUnitContent(entry);
    const verbData = getVerbData(entry);
    var i = 0;

    function section(icon, title, body) {
      var idx = i++;
      return '<section class="unite-section" style="--section-i:' + idx + '">'
        + '<h3 class="unite-section-title"><span class="unite-section-icon" aria-hidden="true">' + icon + '</span>' + title + '</h3>'
        + body
        + '</section>';
    }

    var vocab = unitContent.vocabulary.map(function(item) {
      return '<div class="vocab-card">'
        + '<button class="vocab-listen" aria-label="Écouter" data-word="' + item.word.replace(/"/g, '&quot;') + '">🔊</button>'
        + '<span class="vocab-word">' + item.word + '</span>'
        + '<span class="vocab-def">' + item.definition + '</span>'
        + '</div>';
    }).join('');

    // expressionsPlus [{text,register}] prend la priorité sur expressions simples
    var chipsHtml;
    function chipListen(text) {
      var clean = text.replace(/…$/, '').trim();
      return '<button class="chip-listen" aria-label="Écouter" data-word="' + clean.replace(/"/g, '&quot;') + '">🔊</button>';
    }
    if (unitContent.expressionsPlus && unitContent.expressionsPlus.length) {
      chipsHtml = unitContent.expressionsPlus.map(function(expr) {
        var cls = expr.register ? ' unite-chip--' + expr.register : '';
        var badge = expr.register ? '<span class="chip-register chip-register--' + expr.register + '">' + expr.register + '</span>' : '';
        return '<span class="unite-chip' + cls + '">' + chipListen(expr.text) + expr.text + badge + '</span>';
      }).join('');
    } else {
      chipsHtml = (entry.expressions || []).map(function(expr) {
        return '<span class="unite-chip">' + chipListen(expr) + expr + '</span>';
      }).join('');
    }

    var parts = [];

    parts.push(section('📖', 'Vocabulaire clé',
      '<div class="vocab-grid">' + vocab + '</div>'
    ));

    if (chipsHtml) {
      parts.push(section('💬', 'Expressions clés',
        '<div class="unite-chips">' + chipsHtml + '</div>'
      ));
    }

    // Grammaire + encadré erreur fréquente
    var grammarBody = '<div class="gram-box"><div class="gram-title">' + unitContent.grammarTitle + '</div><div class="gram-rule">'
      + unitContent.grammarRules.map(function(r) { return '<div>' + r + '</div>'; }).join('')
      + '</div></div>';
    if (unitContent.grammarExtra) {
      grammarBody += unitContent.grammarExtra;
    }
    if (unitContent.grammarError) {
      grammarBody += '<div class="gram-error-box"><span class="gram-error-label">Erreur fréquente</span><div class="gram-error-text">' + unitContent.grammarError + '</div></div>';
    }
    parts.push(section('📐', 'Grammaire', grammarBody));

    // Texte authentique
    if (unitContent.textAuth) {
      var ta = unitContent.textAuth;
      var qHtml = (ta.questions || []).map(function(q, qi) {
        return '<li class="textauth-q"><span class="textauth-q-text">' + q.question + '</span>'
          + '<span class="textauth-a">' + q.answer + '</span></li>';
      }).join('');
      parts.push(section('📄', 'Document authentique',
        '<div class="textauth-box">'
        + '<p class="textauth-source">' + (ta.source || '') + '</p>'
        + '<blockquote class="textauth-text">' + ta.text + '</blockquote>'
        + (qHtml ? '<ol class="textauth-questions">' + qHtml + '</ol>' : '')
        + '</div>'
      ));
    }

    var exHtml = '<div class="unite-expression-box"><ul class="unite-expression-list unite-expression-list--cols">'
      + unitContent.examples.map(function(ex){
          return '<li><button class="chip-listen" aria-label="Écouter" data-word="' + ex.replace(/"/g,'&quot;') + '">🔊</button>' + ex + '</li>';
        }).join('')
      + '</ul></div>';
    parts.push(section('💡', 'Exemples', exHtml));

    var verbIdx = i++;
    var conjCards = verbData.verbs.map(function(v) {
      var forms = conjugateVerb(v);
      var rows = forms.map(function(f) {
        return '<div class="conj-row">'
          + '<button class="chip-listen" aria-label="Écouter" data-word="' + f.replace(/"/g, '&quot;') + '">🔊</button>'
          + '<span>' + f + '</span>'
          + '</div>';
      }).join('');
      return '<div class="conj-card">'
        + '<div class="conj-card-head">' + v + '</div>'
        + '<div class="conj-card-body">' + rows + '</div>'
        + '</div>';
    }).join('');
    parts.push(
      '<section class="unite-section" style="--section-i:' + verbIdx + '">'
      + '<h3 class="unite-section-title"><span class="unite-section-icon" aria-hidden="true">🔄</span>Conjugaisons</h3>'
      + '<div class="conj-grid">' + conjCards + '</div>'
      + '</section>'
    );

    // Exercice de débat (C1/C2)
    if (unitContent.debat) {
      var db = unitContent.debat;
      parts.push(section('🗣️', 'Pour aller plus loin : débat',
        '<div class="debat-box">'
        + '<p class="debat-question">' + db.question + '</p>'
        + '<div class="debat-positions">'
        + '<div class="debat-pour"><strong>Arguments pour</strong><ul>' + db.pour.map(function(p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>'
        + '<div class="debat-contre"><strong>Arguments contre / nuances</strong><ul>' + db.contre.map(function(c) { return '<li>' + c + '</li>'; }).join('') + '</ul></div>'
        + '</div>'
        + (db.consigne ? '<p class="debat-consigne">' + db.consigne + '</p>' : '')
        + '</div>'
      ));
    }

    var trainingByLevel = { 'A1': '../cours/entrainement-a1.html' };
    var trainingUrl = trainingByLevel[entry.level];
    if (trainingUrl) {
      var unite = encodeURIComponent(entry.badge);
      var content = '<a href="' + trainingUrl + '?unite=' + unite + '" class="train-random-btn">'
        + '<span class="train-random-icon">🎲</span>'
        + '<span class="train-random-label">Entraînement aléatoire</span>'
        + '<span class="train-random-sub">Quiz · Trous · Vrai/Faux · Paires · Conjugaison · Écoute</span>'
        + '</a>';
      parts.push(section('🏋️', 'Entraînement', content));
    }

    parts.push(buildNavigation(entry));

    return parts.join('');
  }

  function getUnitContent(entry) {
    const byPage = UNIT_CONTENT;
        const key = entry.href.replace('.html', '');
    return byPage[key] || {
      objectives: ['identifier les idées principales de l\'unité', 'réutiliser le vocabulaire essentiel', 'comprendre les structures utiles du thème'],
      vocabulary: (entry.themes || []).slice(0, 4).map(function(theme) {
        return { word: theme, definition: 'mot-clé utile pour comprendre et travailler le thème de l\'unité' };
      }),
      examples: [
        'Je repère les mots importants de cette unité.',
        'Je relis les exemples pour comprendre la structure.',
        'J\'observe la grammaire avant de produire mes propres phrases.',
        'Je vérifie ce que je peux déjà réutiliser seul(e).'
      ],
      grammarTitle: 'Repères de langue',
      grammarRules: ['Observer les structures fréquentes de l\'unité', 'Réutiliser les formulations les plus utiles', 'S\'appuyer sur des exemples courts et clairs']
    };
  }

  function conjugateVerb(inf) {
    var reflexive = false, base = inf;
    if (/^(se |s')/.test(inf)) { reflexive = true; base = inf.replace(/^(se |s')/, ''); }

    var TABLE = {
      'être':        ['suis','es','est','sommes','êtes','sont'],
      'avoir':       ['ai','as','a','avons','avez','ont'],
      'aller':       ['vais','vas','va','allons','allez','vont'],
      'faire':       ['fais','fais','fait','faisons','faites','font'],
      'vouloir':     ['veux','veux','veut','voulons','voulez','veulent'],
      'pouvoir':     ['peux','peux','peut','pouvons','pouvez','peuvent'],
      'devoir':      ['dois','dois','doit','devons','devez','doivent'],
      'savoir':      ['sais','sais','sait','savons','savez','savent'],
      'venir':       ['viens','viens','vient','venons','venez','viennent'],
      'revenir':     ['reviens','reviens','revient','revenons','revenez','reviennent'],
      'devenir':     ['deviens','deviens','devient','devenons','devenez','deviennent'],
      'prendre':     ['prends','prends','prend','prenons','prenez','prennent'],
      'comprendre':  ['comprends','comprends','comprend','comprenons','comprenez','comprennent'],
      'apprendre':   ['apprends','apprends','apprend','apprenons','apprenez','apprennent'],
      'partir':      ['pars','pars','part','partons','partez','partent'],
      'sortir':      ['sors','sors','sort','sortons','sortez','sortent'],
      'ressentir':   ['ressens','ressens','ressent','ressentons','ressentez','ressentent'],
      'sentir':      ['sens','sens','sent','sentons','sentez','sentent'],
      'mettre':      ['mets','mets','met','mettons','mettez','mettent'],
      'transmettre': ['transmets','transmets','transmet','transmettons','transmettez','transmettent'],
      'permettre':   ['permets','permets','permet','permettons','permettez','permettent'],
      'dire':        ['dis','dis','dit','disons','dites','disent'],
      'écrire':      ['écris','écris','écrit','écrivons','écrivez','écrivent'],
      'décrire':     ['décris','décris','décrit','décrivons','décrivez','décrivent'],
      'lire':        ['lis','lis','lit','lisons','lisez','lisent'],
      'relire':      ['relis','relis','relit','relisons','relisez','relisent'],
      'voir':        ['vois','vois','voit','voyons','voyez','voient'],
      'prévoir':     ['prévois','prévois','prévoit','prévoyons','prévoyez','prévoient'],
      'tenir':       ['tiens','tiens','tient','tenons','tenez','tiennent'],
      'retenir':     ['retiens','retiens','retient','retenons','retenez','retiennent'],
      'débattre':    ['débats','débats','débat','débattons','débattez','débattent'],
      'défendre':    ['défends','défends','défend','défendons','défendez','défendent'],
      'répondre':    ['réponds','réponds','répond','répondons','répondez','répondent'],
      'descendre':   ['descends','descends','descend','descendons','descendez','descendent'],
      'réduire':     ['réduis','réduis','réduit','réduisons','réduisez','réduisent'],
      'paraître':    ['parais','parais','paraît','paraissons','paraissez','paraissent'],
      'connaître':   ['connais','connais','connaît','connaissons','connaissez','connaissent'],
      'appeler':     ['appelle','appelles','appelle','appelons','appelez','appellent'],
      'acheter':     ['achète','achètes','achète','achetons','achetez','achètent'],
      'lever':       ['lève','lèves','lève','levons','levez','lèvent'],
      'coucher':     ['couche','couches','couche','couchons','couchez','couchent'],
      'payer':       ['paie','paies','paie','payons','payez','paient'],
      'préférer':    ['préfère','préfères','préfère','préférons','préférez','préfèrent'],
      'espérer':     ['espère','espères','espère','espérons','espérez','espèrent'],
      'protéger':    ['protège','protèges','protège','protégeons','protégez','protègent'],
      'gérer':       ['gère','gères','gère','gérons','gérez','gèrent'],
      'interpréter': ['interprète','interprètes','interprète','interprétons','interprétez','interprètent'],
      'suggérer':    ['suggère','suggères','suggère','suggérons','suggérez','suggèrent'],
      'manger':      ['mange','manges','mange','mangeons','mangez','mangent'],
      'voyager':     ['voyage','voyages','voyage','voyageons','voyagez','voyagent'],
      'partager':    ['partage','partages','partage','partageons','partagez','partagent'],
      'corriger':    ['corrige','corriges','corrige','corrigeons','corrigez','corrigent'],
      'rédiger':     ['rédige','rédiges','rédige','rédigeons','rédigez','rédigent'],
      'commencer':   ['commence','commences','commence','commençons','commencez','commencent'],
      'nuancer':     ['nuance','nuances','nuance','nuançons','nuancez','nuancent'],
      'finir':       ['finis','finis','finit','finissons','finissez','finissent'],
      'choisir':     ['choisis','choisis','choisit','choisissons','choisissez','choisissent'],
      'grandir':     ['grandis','grandis','grandit','grandissons','grandissez','grandissent'],
      'réussir':     ['réussis','réussis','réussit','réussissons','réussissez','réussissent'],
      'approfondir': ['approfondis','approfondis','approfondit','approfondissons','approfondissez','approfondissent'],
      'réfléchir':   ['réfléchis','réfléchis','réfléchit','réfléchissons','réfléchissez','réfléchissent'],
      'agir':        ['agis','agis','agit','agissons','agissez','agissent'],
      'émouvoir':    ['émeus','émeus','émeut','émouvons','émouvez','émeuvent'],
      'sous-entendre':['sous-entends','sous-entends','sous-entend','sous-entendons','sous-entendez','sous-entendent']
    };

    var forms;
    if (TABLE[base]) {
      forms = TABLE[base];
    } else if (base.endsWith('er')) {
      var s = base.slice(0, -2);
      forms = [s+'e', s+'es', s+'e', s+'ons', s+'ez', s+'ent'];
    } else if (base.endsWith('re')) {
      var s = base.slice(0, -2);
      forms = [s+'s', s+'s', s, s+'ons', s+'ez', s+'ent'];
    } else if (base.endsWith('ir')) {
      var s = base.slice(0, -2);
      forms = [s+'s', s+'s', s+'t', s+'ons', s+'ez', s+'ent'];
    } else {
      forms = ['—','—','—','—','—','—'];
    }

    var pronouns = ['je','tu','il/elle','nous','vous','ils/elles'];
    var reflex   = ['me','te','se','nous','vous','se'];
    return forms.map(function(f, i) {
      var pr = pronouns[i];
      if (reflexive) {
        var rf = reflex[i];
        var needsApo = /^[aeiouéèêhàâîïôùû]/i.test(rf) || /^[aeiouéèêhàâîïôùû]/i.test(f);
        pr = pr + ' ' + (needsApo && rf === 'se' ? "s'" : rf + ' ');
      }
      var needsApo = !reflexive && /^[aeiouéèêhàâîïôùû]/i.test(f) && (pr === 'je');
      return (needsApo ? "j'" : pr + ' ') + f;
    });
  }

  function getVerbData(entry) {
    const byPage = VERB_DATA;
        const key = entry.href.replace('.html', '');
    return byPage[key] || {
      verbs: ['être', 'avoir', 'faire', 'aller', 'comprendre'],
      conjugations: [
        '<strong>être</strong> : je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont',
        '<strong>avoir</strong> : j\'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont'
      ]
    };
  }

  function syncStatusDecorations() {
    const progress = readProgress();
    document.querySelectorAll('[data-page]').forEach(function(link) {
      const page = link.getAttribute('data-page');
      const entry = entryByPage[page];
      if (!entry) return;
      const status = progress[page] && progress[page].status ? progress[page].status : 'idle';
      link.dataset.status = status;
      const badge = link.querySelector('.som-progress');
      if (badge) {
        badge.className = 'som-progress som-progress--' + status;
        badge.textContent = getStatusLabel(status, entry.level);
      }
    });
    document.querySelectorAll('.unit-card').forEach(function(card) {
      const href = card.getAttribute('href');
      if (!href) return;
      const page = href.replace('.html', '');
      const entry = entryByPage[page];
      if (!entry) return;
      const status = progress[page] && progress[page].status ? progress[page].status : 'idle';
      card.dataset.status = status;
      const pill = card.querySelector('.unit-card-status');
      if (pill) pill.textContent = getStatusLabel(status, entry.level);
    });
  }

  function bindAssessment() {
    const form = document.getElementById('courseCheckForm');
    const result = document.getElementById('courseCheckResult');
    if (!form || !result) return;
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const fields = Array.from(form.querySelectorAll('.course-check-item'));
      let score = 0;
      let answered = 0;
      fields.forEach(function(field) {
        const expected = Number(field.getAttribute('data-answer'));
        const checked = field.querySelector('input:checked');
        field.classList.remove('is-correct', 'is-wrong');
        if (!checked) return;
        answered += 1;
        if (Number(checked.value) === expected) {
          score += 1;
          field.classList.add('is-correct');
        } else {
          field.classList.add('is-wrong');
        }
      });
      if (answered !== fields.length) {
        result.textContent = 'Répondez aux ' + fields.length + ' questions pour obtenir un score complet.';
        return;
      }
      result.textContent = 'Score : ' + score + ' / ' + fields.length + '.';
    });
  }

  function enhanceUnitPage(entry) {
    if (!entry) return;
    const hero = document.querySelector('.unite-hero');
    const title = document.querySelector('.unite-hero-title');
    const sectionsWrap = document.querySelector('.unite-sections');
    const back = document.querySelector('.cours-back');
    if (!hero || !title || !sectionsWrap) return;
    if (back) back.textContent = COURSE_BACK.unit;
    document.title = BRAND.courseTitlePrefix + ' | Unité ' + entry.badge + ' — ' + entry.label;

    if (getProgressState(pageId) !== 'completed') {
      updateProgress(pageId, 'started');
    }

    if (!hero.querySelector('.unite-hero-sub')) {
      const subtitle = document.createElement('p');
      subtitle.className = 'unite-hero-sub';
      subtitle.textContent = entry.summary;
      title.insertAdjacentElement('afterend', subtitle);
    }

    if (!hero.querySelector('.unite-hero-icon') && !hero.querySelector('.unite-hero-img')) {
      const icon = document.createElement('span');
      icon.className = 'unite-hero-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = entry.iconSymbol || '📘';
      hero.appendChild(icon);
    }

    sectionsWrap.innerHTML = buildUnitMarkup(entry);

    var _cachedVoice = undefined;
    function _getBestFrVoice() {
      if (_cachedVoice !== undefined) return _cachedVoice;
      var voices = window.speechSynthesis.getVoices();
      if (!voices || !voices.length) return (_cachedVoice = null);
      var pick = null;
      for (var i = 0; i < voices.length; i++) {
        if (/google/i.test(voices[i].name) && voices[i].lang === 'fr-CH') { pick = voices[i]; break; }
      }
      if (!pick) for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang === 'fr-CH') { pick = voices[i]; break; }
      }
      if (!pick) for (var i = 0; i < voices.length; i++) {
        if (/google/i.test(voices[i].name) && /^fr/i.test(voices[i].lang)) { pick = voices[i]; break; }
      }
      if (!pick) for (var i = 0; i < voices.length; i++) {
        if (/^fr/i.test(voices[i].lang)) { pick = voices[i]; break; }
      }
      return (_cachedVoice = pick);
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = function() { _cachedVoice = undefined; };
    }

    sectionsWrap.addEventListener('click', function(e) {
      var btn = e.target.closest('.vocab-listen, .chip-listen');
      if (!btn) return;
      var word = btn.dataset.word;
      if (!word || !window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      var utt = new SpeechSynthesisUtterance(word);
      var voice = _getBestFrVoice();
      if (voice) { utt.voice = voice; utt.lang = voice.lang; }
      else { utt.lang = 'fr-CH'; }
      utt.rate = 0.9;
      var speakingClass = btn.classList.contains('chip-listen') ? 'chip-listen--speaking' : 'vocab-listen--speaking';
      btn.classList.add(speakingClass);
      utt.onend = utt.onerror = function() { btn.classList.remove(speakingClass); };
      window.speechSynthesis.speak(utt);
    });

    syncStatusDecorations();
  }

  function renderProgressPanel() {}

  function enhanceIndexCards() {
    if (pageId !== 'index') return;
    document.querySelectorAll('.units-grid').forEach(function(grid) {
      grid.querySelectorAll('.unit-card').forEach(function(card, i) {
        const href = card.getAttribute('href');
        if (!href) return;
        const page = href.replace('.html', '');
        const entry = entryByPage[page];
        if (!entry) return;

        card.dataset.level = entry.level;
        card.dataset.icon = entry.iconSymbol || '📘';
        card.style.setProperty('--card-i', i);

        if (!card.querySelector('.unit-card-body')) {
          const badge = card.querySelector('.unit-card-badge');
          const body = document.createElement('div');
          body.className = 'unit-card-body';
          Array.from(card.childNodes).forEach(function(node) {
            if (node !== badge) body.appendChild(node);
          });
          card.appendChild(body);

          if (!body.querySelector('.unit-card-meta') && entry.summary) {
            const title = body.querySelector('.unit-card-title');
            const meta = document.createElement('span');
            meta.className = 'unit-card-meta';
            meta.textContent = entry.summary;
            if (title) title.insertAdjacentElement('afterend', meta);
            else body.appendChild(meta);
          }

          const status = document.createElement('span');
          status.className = 'unit-card-status';
          body.appendChild(status);
        }
      });
    });
    syncStatusDecorations();
  }


  renderHeader();
  renderSidebar();
  renderIndexPage();
  renderFooter();
  renderProgressPanel();
  enhanceIndexCards();
  enhanceUnitPage(entryByPage[pageId]);
}());
