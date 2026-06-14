'use strict';

/* global EXERCISE_CONTENT */

(function initEntrainement() {
  var TEXT = window.GAME_TEXT || {};
  var pageId = (window.location.pathname.split('/').pop() || '').replace(/\.html$/i, '');
  if (!pageId.startsWith('entrainement')) return;

  var params   = new URLSearchParams(window.location.search);
  var badge    = params.get('unite');
  var unitId   = badge !== null ? 'unite-' + badge : null;
  var exerciseData = (window.EXERCISE_CONTENT && window.EXERCISE_CONTENT.byUnit) || {};
  var COURSE_PROGRESS_KEY = 'ah:cours:progress:v1';
  var EXERCISE_PROGRESS_KEY = 'ah:cours:exercise-progress:v1';

  /* ── Trouver l'entrée dans les données centralisées ── */
  function findEntry() {
    return unitId && exerciseData[unitId] ? (exerciseData[unitId].entry || null) : null;
  }
  var entry = findEntry();
  var exUnit   = (unitId && exerciseData[unitId]) ? exerciseData[unitId] : null;
  var vocabulary = exUnit && exUnit.vocabulary ? exUnit.vocabulary : [];
  var examples = exUnit && exUnit.examples ? exUnit.examples : [];
  var verbsData = exUnit && exUnit.verbs ? exUnit.verbs : [];
  var conjugations = exUnit && exUnit.conjugations ? exUnit.conjugations : [];
  var dialogues = exUnit && exUnit.dialogues ? exUnit.dialogues : [];

  /* ── Utilitaires ── */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function esc(s) { return String(s || '').replace(/[&<>"']/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]; }); }
  function t(path, fallback) {
    var value = TEXT;
    for (var i = 0; i < path.length; i++) {
      if (!value || typeof value !== 'object' || !(path[i] in value)) return fallback;
      value = value[path[i]];
    }
    return value;
  }

  var hubUrl = badge !== null ? 'entrainement-a1.html?unite=' + esc(badge) : '';
  function hubBtn() { return hubUrl ? '<a class="game-btn game-btn--outline" href="' + hubUrl + '">' + t(['hubUnitButton'], '← Jeux de l\'unité') + '</a>' : ''; }
  function emptyState(message) {
    return '<div class="game-empty"><p>' + message + '</p><a href="' + (entry ? 'entrainement-a1.html?unite=' + esc(badge) : 'index.html') + '">' + t(['returnButton'], '← Retour') + '</a></div>';
  }
  function titleWithEntry(base) {
    return base + (entry ? ' — ' + entry.label : '');
  }

  function buildSmartObjectives() {
    if (!entry) return [];
    var themes = (entry.themes || []).slice(0, 3).join(', ');
    var vocabWords = vocabulary.slice(0, 4).map(function(item) { return item.word; }).join(', ');
    var verbs = verbsData.slice(0, 3).join(', ');
    var focus = entry.focus || entry.summary || entry.label;
    var objectives = [
      'Comprendre le thème de l\'unité : ' + entry.label + '.',
      themes
        ? 'Repérer les idées et mots-clés liés à : ' + themes + '.'
        : 'Repérer les idées principales et les mots importants de l\'unité.',
      vocabWords
        ? 'Utiliser le vocabulaire essentiel : ' + vocabWords + '.'
        : 'Réutiliser le vocabulaire essentiel dans des phrases simples.',
      'Communiquer pour ' + focus + '.'
    ];
    if (verbs) objectives.push('Conjuguer et employer les verbes utiles : ' + verbs + '.');
    return objectives;
  }

  function buildObjectiveQuizQuestions() {
    if (!entry) return [];
    var questions = [];
    var otherThemes = (entry.themes || []).slice(1, 4);
    if (entry.focus) {
      questions.push({
        prompt: 'Quel objectif de communication travaille cette unité ?',
        choices: [entry.focus, 'réciter l\'alphabet sans contexte', 'traduire un texte juridique complet'],
        answer: 0
      });
    }
    if (entry.themes && entry.themes.length) {
      questions.push({
        prompt: 'Quels mots-clés correspondent le mieux à cette unité ?',
        choices: [(entry.themes || []).slice(0, 3).join(', '), 'mathématiques, chimie, sport', 'musique, météo, cuisine'],
        answer: 0
      });
    }
    vocabulary.slice(0, 2).forEach(function(item) {
      var distractors = vocabulary.filter(function(other) { return other.word !== item.word; }).slice(0, 2).map(function(other) {
        return other.definition;
      });
      while (distractors.length < 2) distractors.push(otherThemes.join(', ') || 'une autre notion');
      questions.push({
        prompt: 'Pour atteindre les objectifs, que signifie "' + item.word + '" ?',
        choices: [item.definition].concat(distractors),
        answer: 0
      });
    });
    if (verbsData.length) {
      questions.push({
        prompt: 'Quel verbe est utile pour travailler les objectifs de cette unité ?',
        choices: [verbsData[0], 'télécharger', 'multiplier'],
        answer: 0
      });
    }
    return questions;
  }

  function buildObjectiveTrueFalse() {
    var objectives = buildSmartObjectives();
    var rows = objectives.slice(0, 4).map(function(objective) {
      return { phrase: objective, correct: true };
    });
    if (entry && entry.themes && entry.themes.length) {
      rows.push({ phrase: 'Cette unité demande surtout de travailler un thème sans rapport avec : ' + entry.themes[0] + '.', correct: false });
    }
    if (vocabulary.length) {
      rows.push({ phrase: 'Le vocabulaire aide à réussir les objectifs de l\'unité.', correct: true });
    }
    return rows;
  }

  function shuffleQuestionChoices(question) {
    if (!question || !question.choices || question.choices.length < 2) return question;
    var choices = question.choices.map(function(choice, index) {
      return { text: choice, correct: index === question.answer };
    });
    choices = shuffle(choices);
    return {
      prompt: question.prompt,
      choices: choices.map(function(choice) { return choice.text; }),
      answer: choices.findIndex(function(choice) { return choice.correct; })
    };
  }

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) { return {}; }
  }

  function writeJson(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
  }

  function markUnitStarted() {
    if (!entry) return;
    var page = entry.href.replace('.html', '');
    var progress = readJson(COURSE_PROGRESS_KEY);
    progress[page] = progress[page] || {};
    if (progress[page].status !== 'completed') {
      progress[page].status = 'started';
      progress[page].updatedAt = new Date().toISOString();
      writeJson(COURSE_PROGRESS_KEY, progress);
    }
  }

  function markExerciseProgress(status, score, total) {
    if (!entry || !pageId || pageId === 'entrainement-a1') return;
    var page = entry.href.replace('.html', '');
    var progress = readJson(EXERCISE_PROGRESS_KEY);
    progress[page] = progress[page] || {};
    progress[page][pageId] = {
      status: status,
      score: typeof score === 'number' ? score : null,
      total: typeof total === 'number' ? total : null,
      updatedAt: new Date().toISOString()
    };
    writeJson(EXERCISE_PROGRESS_KEY, progress);
    markUnitStarted();
  }

  var wrap = document.querySelector('.unite-sections');
  if (!wrap) return;
  if (entry && pageId !== 'entrainement-a1') markExerciseProgress('started');

  /* ══════════════════════════════════════════════
     HUB — entrainement-a1.html?unite=X
  ══════════════════════════════════════════════ */
  function renderHub() {
    if (!entry) {
      wrap.innerHTML = '<div class="game-empty"><p>' + t(['empty', 'unitNotFound'], 'Unité introuvable.') + ' <a href="index.html">' + t(['returnToCourses'], '← Cours') + '</a></p></div>';
      return;
    }
    var u = '?unite=' + esc(badge);
    var cards = [
      { href: 'entrainement-a1-vrai-faux.html'    + u, icon: '✓✗',  label: t(['hub', 'games', 'vraiFaux', 'label'], 'Vrai ou Faux'), desc: t(['hub', 'games', 'vraiFaux', 'desc'], 'Évaluer des affirmations sur le thème'), color: 'teal'   },
      { href: 'entrainement-a1-apparier.html'     + u, icon: '🔗',  label: t(['hub', 'games', 'apparier', 'label'], 'Associer'), desc: t(['hub', 'games', 'apparier', 'desc'], 'Relier chaque mot à sa définition'), color: 'blue'   },
      { href: 'entrainement-a1-completer.html'    + u, icon: '✏️',  label: t(['hub', 'games', 'completer', 'label'], 'Compléter'), desc: t(['hub', 'games', 'completer', 'desc'], 'Retrouver les mots manquants'), color: 'purple' },
      { href: 'entrainement-a1-ecouter.html'      + u, icon: '🔊',  label: t(['hub', 'games', 'ecouter', 'label'], 'Écouter'), desc: t(['hub', 'games', 'ecouter', 'desc'], 'Comprendre un document oral'), color: 'gold'   },
      { href: 'entrainement-conjugaison-quiz.html'+ u, icon: '🧠',  label: t(['hub', 'games', 'quiz', 'label'], 'Quiz'), desc: t(['hub', 'games', 'quiz', 'desc'], 'Vérifier sa compréhension de l\'unité'), color: 'red'    },
      { href: 'entrainement-conjugaison-a1.html'  + u, icon: '🔤',  label: t(['hub', 'games', 'conjugaison', 'label'], 'Conjugaison'), desc: t(['hub', 'games', 'conjugaison', 'desc'], 'S\'entraîner sur les verbes clés'), color: 'teal'   },
      { href: 'entrainement-a1-mots-meles.html'   + u, icon: '🔍',  label: t(['hub', 'games', 'motsMeles', 'label'], 'Mots mêlés'), desc: t(['hub', 'games', 'motsMeles', 'desc'], 'Retrouver les mots cachés dans la grille'), color: 'blue'   },
      { href: 'entrainement-a1-anagrammes.html'   + u, icon: '🔀',  label: t(['hub', 'games', 'anagrammes', 'label'], 'Anagrammes'), desc: t(['hub', 'games', 'anagrammes', 'desc'], 'Reconstituer les mots à partir des lettres'), color: 'purple' },
      { href: 'entrainement-a1-flashcards.html'   + u, icon: '🃏',  label: t(['hub', 'games', 'flashcards', 'label'], 'Flashcards'), desc: t(['hub', 'games', 'flashcards', 'desc'], 'Mémoriser le vocabulaire avec des cartes'), color: 'teal'   },
      { href: 'entrainement-a1-dialogue.html'     + u, icon: '💬',  label: t(['hub', 'games', 'dialogue', 'label'], 'Dialogue'), desc: t(['hub', 'games', 'dialogue', 'desc'], 'Simuler une situation de communication'), color: 'gold'   },
      { href: 'entrainement-a1-construire.html'   + u, icon: '🧩',  label: t(['hub', 'games', 'construire', 'label'], 'Construire'), desc: t(['hub', 'games', 'construire', 'desc'], 'Remettre les mots d\'une phrase en ordre'), color: 'red'    },
      { href: 'entrainement-a1-validation.html'   + u, icon: '✍️',  label: t(['hub', 'games', 'valider', 'label'], 'Valider'), desc: t(['hub', 'games', 'valider', 'desc'], 'Tapez le mot correspondant à la définition'), color: 'purple' }
    ];
    var heroEl = document.querySelector('.unite-hero-title');
    if (heroEl) heroEl.textContent = t(['hub', 'heroPrefix'], 'Entraînement — ') + entry.label;
    var sub = document.querySelector('.unite-hero-sub');
    if (sub) sub.textContent = entry.level + ' · Unité ' + badge + ' · ' + (entry.summary || '');
    var objectives = buildSmartObjectives();

    wrap.innerHTML = '<section class="unite-section" style="--section-i:0">'
      + '<h3 class="unite-section-title"><span class="unite-section-icon" aria-hidden="true">🎯</span>Objectifs travaillés</h3>'
      + '<ul class="unite-obj-list">'
      + objectives.map(function(objective) { return '<li>' + esc(objective) + '</li>'; }).join('')
      + '</ul>'
      + '</section>'
      + '<section class="unite-section" style="--section-i:1">'
      + '<h3 class="unite-section-title"><span class="unite-section-icon" aria-hidden="true">🎮</span>' + t(['hub', 'chooseGame'], 'Choisissez un jeu') + '</h3>'
      + '<div class="game-hub">'
      + cards.map(function(c) {
          return '<a class="game-card game-card--' + c.color + '" href="' + c.href + '">'
            + '<span class="game-card-icon" aria-hidden="true">' + c.icon + '</span>'
            + '<span class="game-card-label">' + c.label + '</span>'
            + '<span class="game-card-desc">' + c.desc + '</span>'
            + '</a>';
        }).join('')
      + '</div>'
      + '</section>'
      + '<section class="unite-section" style="--section-i:2">'
      + '<div class="course-nav-links"><a class="course-nav-link course-nav-link--prev" href="' + (entry ? entry.href : 'index.html') + '"><span>' + t(['returnToLesson'], 'Retour à la leçon') + '</span><strong>' + (entry ? entry.label : 'Cours') + '</strong></a></div>'
      + '</section>';
  }

  /* ══════════════════════════════════════════════
     MOTEUR DE JEU générique (une question à la fois)
  ══════════════════════════════════════════════ */
  function GameEngine(container, questions, options) {
    var idx     = 0;
    var score   = 0;
    var locked  = false;
    var opts    = options || {};

    function render() {
      if (idx >= questions.length) { showScore(); return; }
      var q = questions[idx];
      container.innerHTML = opts.renderQ(q, idx, questions.length);
      opts.bindQ && opts.bindQ(q, container, onAnswer);
    }

    function onAnswer(correct, extraCb) {
      if (locked) return;
      locked = true;
      if (correct) score++;
      extraCb && extraCb(correct);
      setTimeout(function() {
        idx++;
        locked = false;
        render();
      }, correct ? 900 : 1400);
    }

    function showScore() {
      var pct = Math.round(score / questions.length * 100);
      markExerciseProgress('completed', score, questions.length);
      var emoji = pct === 100 ? '🏆' : pct >= 70 ? '⭐' : pct >= 40 ? '👍' : '💪';
      container.innerHTML = '<div class="game-score-screen">'
        + '<div class="game-score-emoji">' + emoji + '</div>'
        + '<div class="game-score-num">' + score + '<span>/' + questions.length + '</span></div>'
        + '<div class="game-score-label">' + (pct === 100 ? t(['score', 'perfect'], 'Parfait !') : pct >= 70 ? t(['score', 'great'], 'Très bien !') : pct >= 40 ? t(['score', 'good'], 'Bien !') : t(['score', 'keepGoing'], 'Continuez !')) + '</div>'
        + '<div class="game-score-bar"><div class="game-score-bar-fill" style="width:' + pct + '%"></div></div>'
        + '<div class="game-score-actions">'
        + '<button class="game-btn game-btn--secondary" id="gReplay">' + t(['replayButton'], '🔄 Rejouer') + '</button>'
        + hubBtn()
        + (entry ? '<a class="game-btn game-btn--primary" href="' + entry.href + '">' + t(['lessonButton'], '📖 Leçon') + '</a>' : '')
        + '</div>'
        + '</div>';
      var replayBtn = container.querySelector('#gReplay');
      if (replayBtn) replayBtn.addEventListener('click', function() { idx = 0; score = 0; locked = false; questions = shuffle(questions); render(); });
    }

    this.start = function() { questions = shuffle(questions); render(); };
  }

  /* ── Barre de progression ── */
  function progressBar(current, total) {
    return '<div class="game-progress"><div class="game-progress-bar" style="width:' + Math.round(current / total * 100) + '%"></div><span class="game-progress-text">' + current + ' / ' + total + '</span></div>';
  }

  /* ── Bouton Suivant ── */
  function nextBtn(label) {
    return '<button class="game-btn game-btn--next" id="gNext">' + (label || t(['nextButton'], 'Suivant →')) + '</button>';
  }

  if (entry && pageId !== 'entrainement-a1' && window.MutationObserver) {
    var scoreObserver = new MutationObserver(function() {
      var scoreScreen = wrap.querySelector('.game-score-screen, .game-score-wrap');
      if (!scoreScreen || scoreScreen.dataset.exerciseProgressSaved === '1') return;
      scoreScreen.dataset.exerciseProgressSaved = '1';
      var scoreText = scoreScreen.textContent || '';
      var match = scoreText.match(/(\d+)\s*\/\s*(\d+)/);
      markExerciseProgress('completed', match ? Number(match[1]) : null, match ? Number(match[2]) : null);
    });
    scoreObserver.observe(wrap, { childList: true, subtree: true });
  }

  /* ══════════════════════════════════════════════
     QUIZ — entrainement-conjugaison-quiz.html
  ══════════════════════════════════════════════ */
  function renderQuiz() {
    var questions = exUnit && exUnit.quiz && exUnit.quiz.length
      ? exUnit.quiz.slice()
      : ((entry && entry.assessment) ? entry.assessment.slice() : []);
    questions = questions.concat(buildObjectiveQuizQuestions()).slice(0, 12).map(shuffleQuestionChoices);
    if (!questions.length) {
      wrap.innerHTML = emptyState(t(['empty', 'noQuestions'], 'Pas de questions pour cette unité.'));
      return;
    }

    var engine = new GameEngine(wrap, questions, {
      renderQ: function(q, i, total) {
        return progressBar(i, total)
          + '<div class="game-quiz-card">'
          + '<p class="game-quiz-prompt">' + esc(q.prompt) + '</p>'
          + '<div class="game-choices">'
          + q.choices.map(function(c, ci) {
              return '<button class="game-choice-btn" data-idx="' + ci + '" data-correct="' + (ci === q.answer ? '1' : '0') + '">' + esc(c) + '</button>';
            }).join('')
          + '</div>'
          + '<p class="game-feedback" aria-live="polite"></p>'
          + '</div>';
      },
      bindQ: function(q, c, onAnswer) {
        c.querySelectorAll('.game-choice-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            var isCorrect = btn.dataset.correct === '1';
            var fb = c.querySelector('.game-feedback');
            c.querySelectorAll('.game-choice-btn').forEach(function(b) {
              b.disabled = true;
              if (b.dataset.correct === '1') b.classList.add('game-choice--correct');
              else if (b === btn) b.classList.add('game-choice--wrong');
            });
            if (isCorrect) { fb.textContent = t(['feedback', 'correct'], '✓ Correct !'); fb.className = 'game-feedback game-feedback--ok'; }
            else { fb.textContent = t(['feedback', 'incorrectPrefix'], '✗ La réponse était : ') + esc(q.choices[q.answer]); fb.className = 'game-feedback game-feedback--err'; }
            onAnswer(isCorrect);
          });
        });
      }
    });
    engine.start();
  }

  /* ══════════════════════════════════════════════
     VRAI / FAUX — entrainement-a1-vrai-faux.html
  ══════════════════════════════════════════════ */
  function renderVraiFaux() {
    var raw = [];
    if (exUnit && exUnit.vraiFaux && exUnit.vraiFaux.length) {
      raw = exUnit.vraiFaux.map(function(item) {
        return {
          phrase: esc(item.phrase),
          correct: !!item.correct
        };
      });
    }
    raw = raw.concat(buildObjectiveTrueFalse().map(function(item) {
      return { phrase: esc(item.phrase), correct: !!item.correct };
    }));
    if (!raw.length && vocabulary.length) {
      vocabulary.slice(0, 5).forEach(function(v) {
        raw.push({ phrase: esc(v.word) + ' : ' + esc(v.definition), correct: true });
        var other = vocabulary.filter(function(x) { return x.word !== v.word; });
        if (other.length) {
          var wrong = other[Math.floor(Math.random() * other.length)];
          raw.push({ phrase: esc(v.word) + ' : ' + esc(wrong.definition), correct: false });
        }
      });
    }
    if (!raw.length && entry && entry.assessment) {
      entry.assessment.forEach(function(q) {
        raw.push({ phrase: esc(q.choices[q.answer]), correct: true });
        q.choices.forEach(function(c, ci) {
          if (ci !== q.answer) raw.push({ phrase: esc(c) + ' (pour : ' + esc(q.prompt) + ')', correct: false });
        });
      });
    }
    raw = shuffle(raw);
    if (!raw.length) {
      wrap.innerHTML = emptyState(t(['empty', 'noGameData'], 'Pas de données pour ce jeu.'));
      return;
    }

    var engine = new GameEngine(wrap, raw, {
      renderQ: function(q, i, total) {
        return progressBar(i, total)
          + '<div class="game-vf-card">'
          + '<p class="game-vf-phrase">' + q.phrase + '</p>'
          + '<div class="game-vf-btns">'
          + '<button class="game-vf-btn game-vf-btn--vrai" data-val="true">' + t(['vraiFaux', 'trueLabel'], '✓ Vrai') + '</button>'
          + '<button class="game-vf-btn game-vf-btn--faux" data-val="false">' + t(['vraiFaux', 'falseLabel'], '✗ Faux') + '</button>'
          + '</div>'
          + '<p class="game-feedback" aria-live="polite"></p>'
          + '</div>';
      },
      bindQ: function(q, c, onAnswer) {
        c.querySelectorAll('.game-vf-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            var chosen = btn.dataset.val === 'true';
            var correct = chosen === q.correct;
            var fb = c.querySelector('.game-feedback');
            c.querySelectorAll('.game-vf-btn').forEach(function(b) { b.disabled = true; });
            btn.classList.add(correct ? 'game-vf-btn--ok' : 'game-vf-btn--err');
            if (correct) { fb.textContent = t(['feedback', 'correct'], '✓ Correct !'); fb.className = 'game-feedback game-feedback--ok'; }
            else { fb.textContent = '✗ C\'était ' + (q.correct ? 'vrai' : 'faux') + '.'; fb.className = 'game-feedback game-feedback--err'; }
            onAnswer(correct);
          });
        });
      }
    });
    engine.start();
  }

  /* ══════════════════════════════════════════════
     APPARIER — entrainement-a1-apparier.html
  ══════════════════════════════════════════════ */
  function renderApparier() {
    var raw = exUnit && exUnit.apparier && exUnit.apparier.length
      ? exUnit.apparier.slice()
      : vocabulary.slice();
    if (!raw.length) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez de vocabulaire pour ce jeu.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }

    // grouped format: array of { serie, instruction, pairs[] }
    var isGrouped = raw[0] && Array.isArray(raw[0].pairs);
    var groups = isGrouped ? raw : [{ serie: null, instruction: 'Cliquez un mot, puis sa définition.', pairs: raw }];

    var serieIdx   = 0;
    var totalPairs = groups.reduce(function(s, g) { return s + g.pairs.length; }, 0);

    function renderSerie() {
      var group   = groups[serieIdx];
      var pairs   = shuffle(group.pairs.slice());
      var matched = 0;
      var selected = null;

      var header = isGrouped
        ? '<div class="game-serie-header">'
          + '<span class="game-serie-badge">Série ' + (serieIdx + 1) + ' / ' + groups.length + '</span>'
          + '<span class="game-serie-title">' + esc(group.serie) + '</span>'
          + '</div>'
        : '';

      var words = pairs.map(function(p, i) {
        return '<button class="game-pair-item game-pair-word" data-idx="' + i + '">' + esc(p.word) + '</button>';
      }).join('');
      // data-match stores the definition VALUE so duplicate definitions work (e.g. multiple "en")
      var defs = shuffle(pairs.map(function(p) { return p.definition; }))
        .map(function(def) {
          return '<button class="game-pair-item game-pair-def" data-match="' + esc(def) + '">' + esc(def) + '</button>';
        }).join('');

      wrap.innerHTML = '<div class="game-pair-container">'
        + header
        + '<p class="game-pair-instruction">' + esc(group.instruction) + '</p>'
        + '<div class="game-pair-grid">'
        + '<div class="game-pair-col">' + words + '</div>'
        + '<div class="game-pair-col">' + defs  + '</div>'
        + '</div>'
        + '<p class="game-pair-score" aria-live="polite">0 / ' + pairs.length + ' paires trouvées</p>'
        + '</div>';

      wrap.addEventListener('click', function handler(e) {
        var wordBtn = e.target.closest('.game-pair-word:not([disabled])');
        var defBtn  = e.target.closest('.game-pair-def:not([disabled])');

        if (wordBtn) {
          if (selected && selected.classList.contains('game-pair-word')) selected.classList.remove('game-pair--selected');
          selected = wordBtn;
          wordBtn.classList.add('game-pair--selected');
        } else if (defBtn && selected) {
          var wIdx = parseInt(selected.dataset.idx, 10);
          if (pairs[wIdx].definition === defBtn.dataset.match) {
            selected.disabled = defBtn.disabled = true;
            selected.classList.remove('game-pair--selected');
            selected.classList.add('game-pair--ok');
            defBtn.classList.add('game-pair--ok');
            matched++;
            var scoreEl = wrap.querySelector('.game-pair-score');
            if (scoreEl) scoreEl.textContent = matched + ' / ' + pairs.length + ' paires trouvées';
            if (matched === pairs.length) {
              setTimeout(function() {
                wrap.removeEventListener('click', handler);
                var isLast = serieIdx >= groups.length - 1;
                if (!isLast) {
                  wrap.innerHTML = '<div class="game-score-screen">'
                    + '<div class="game-score-emoji">✅</div>'
                    + '<div class="game-score-label">Série ' + (serieIdx + 1) + ' terminée !</div>'
                    + '<div class="game-score-actions">'
                    + '<button class="game-btn game-btn--primary" id="gNext">Série suivante →</button>'
                    + '</div></div>';
                  var nb = wrap.querySelector('#gNext');
                  if (nb) nb.addEventListener('click', function() { serieIdx++; renderSerie(); });
                } else {
                  wrap.innerHTML = '<div class="game-score-screen">'
                    + '<div class="game-score-emoji">🏆</div>'
                    + '<div class="game-score-num">' + totalPairs + '<span>/' + totalPairs + '</span></div>'
                    + '<div class="game-score-label">Toutes les séries terminées !</div>'
                    + '<div class="game-score-actions">'
                    + '<button class="game-btn game-btn--secondary" id="gReplay">🔄 Recommencer</button>'
                    + hubBtn()
                    + (entry ? '<a class="game-btn game-btn--primary" href="' + entry.href + '">📖 Leçon</a>' : '')
                    + '</div></div>';
                  var rb = wrap.querySelector('#gReplay');
                  if (rb) rb.addEventListener('click', function() { serieIdx = 0; renderSerie(); });
                }
              }, 600);
            }
          } else {
            selected.classList.add('game-pair--err');
            defBtn.classList.add('game-pair--err');
            var s = selected; var d = defBtn;
            setTimeout(function() {
              s.classList.remove('game-pair--err', 'game-pair--selected');
              d.classList.remove('game-pair--err');
            }, 700);
          }
          selected = null;
        }
      });
    }
    renderSerie();
  }

  /* ══════════════════════════════════════════════
     COMPLÉTER — entrainement-a1-completer.html
  ══════════════════════════════════════════════ */
  function renderCompleter() {
    var items = exUnit && exUnit.completer && exUnit.completer.length
      ? exUnit.completer.slice()
      : null;
    if (!items) {
      var exprs    = (entry && entry.expressions) ? entry.expressions : [];
      var pool     = shuffle(buildSmartObjectives().concat(examples).concat(exprs)).slice(0, 6);
      if (pool.length < 2) {
        wrap.innerHTML = '<div class="game-empty"><p>Pas assez d\'exemples pour ce jeu.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
        return;
      }

      items = pool.map(function(sentence) {
        var words = sentence.replace(/\.$/, '').split(/\s+/);
        var candidates = [];
        words.forEach(function(w, i) {
          if (i > 0 && w.replace(/[.,!?]/g, '').length >= 4) candidates.push(i);
        });
        if (!candidates.length) candidates = [Math.floor(words.length / 2)];
        var pick = candidates[Math.floor(Math.random() * candidates.length)];
        var ans  = words[pick].replace(/[.,!?'"]/g, '').toLowerCase();
        var display = words.map(function(w, i) { return i === pick ? '___' : w; }).join(' ');
        return { display: display, answer: ans, full: sentence };
      });
    }
    if (items.length < 2) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez d\'exemples pour ce jeu.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }

    // Word bank: correct answers + distractors
    var bank = shuffle(items.map(function(it) { return it.answer; }).concat(
      vocabulary.slice(0, 4).map(function(v) {
        return v.word.split(' ')[0].toLowerCase();
      })
    )).slice(0, items.length + 3);

    // placed[slotIdx] = bankIdx or null
    var placed = items.map(function() { return null; });
    var dragging = null; // { bankIdx, word, from: 'bank'|'slot', slotIdx? }

    function resetPlaced() { placed = items.map(function() { return null; }); }

    function renderFill() {
      var usedBankIdx = {};
      placed.forEach(function(bi) { if (bi !== null) usedBankIdx[bi] = true; });

      var sentencesHtml = items.map(function(it, i) {
        var word = placed[i] !== null ? bank[placed[i]] : null;
        var slotContent = word
          ? '<span class="fill-slot-word" data-sidx="' + i + '">' + esc(word) + '</span>'
          : '<span class="fill-slot-empty">···</span>';
        return '<div class="fill-row">'
          + it.display.split('___').map(function(part, pi) {
              return esc(part) + (pi === 0 ? '<span class="fill-slot" data-idx="' + i + '">' + slotContent + '</span>' : '');
            }).join('')
          + '</div>';
      }).join('');

      var bankHtml = bank.map(function(w, bi) {
        var used = !!usedBankIdx[bi];
        return '<div class="fill-word' + (used ? ' fill-word--used' : '') + '" draggable="' + (!used) + '" data-bidx="' + bi + '">' + esc(w) + '</div>';
      }).join('');

      wrap.innerHTML = '<div class="game-fill-container">'
        + '<p class="game-fill-instruction">Glissez les mots dans les cases.</p>'
        + '<div class="game-fill-sentences">' + sentencesHtml + '</div>'
        + '<div class="game-fill-bank">' + bankHtml + '</div>'
        + '<button class="game-btn game-btn--primary" id="gCheck">Vérifier ✓</button>'
        + '<div style="text-align:center;margin-top:12px"><button class="game-btn game-btn--secondary" onclick="location.reload()">🔄 Recommencer</button></div>'
        + '<p class="game-fill-result" aria-live="polite"></p>'
        + '</div>';

      // Drag from bank
      wrap.querySelectorAll('.fill-word:not(.fill-word--used)').forEach(function(el) {
        el.addEventListener('dragstart', function(e) {
          dragging = { bankIdx: parseInt(el.dataset.bidx, 10), word: bank[parseInt(el.dataset.bidx, 10)], from: 'bank' };
          el.classList.add('fill-word--dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        el.addEventListener('dragend', function() { el.classList.remove('fill-word--dragging'); });
      });

      // Drag from slot (pick back up)
      wrap.querySelectorAll('.fill-slot').forEach(function(slot) {
        var si = parseInt(slot.dataset.idx, 10);
        slot.addEventListener('dragover', function(e) { e.preventDefault(); slot.classList.add('fill-slot--over'); });
        slot.addEventListener('dragleave', function() { slot.classList.remove('fill-slot--over'); });
        slot.addEventListener('drop', function(e) {
          e.preventDefault();
          slot.classList.remove('fill-slot--over');
          if (!dragging) return;
          if (dragging.from === 'slot') placed[dragging.slotIdx] = null;
          placed[si] = dragging.bankIdx;
          dragging = null;
          renderFill();
        });

        var wordEl = slot.querySelector('.fill-slot-word');
        if (wordEl) {
          wordEl.setAttribute('draggable', 'true');
          wordEl.addEventListener('dragstart', function(e) {
            dragging = { bankIdx: placed[si], word: bank[placed[si]], from: 'slot', slotIdx: si };
            wordEl.classList.add('fill-word--dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.stopPropagation();
          });
        }
      });

      // Drop back to bank
      var bankEl = wrap.querySelector('.game-fill-bank');
      if (bankEl) {
        bankEl.addEventListener('dragover', function(e) { e.preventDefault(); });
        bankEl.addEventListener('drop', function(e) {
          e.preventDefault();
          if (dragging && dragging.from === 'slot') {
            placed[dragging.slotIdx] = null;
            dragging = null;
            renderFill();
          }
        });
      }

      var checkBtn = wrap.querySelector('#gCheck');
      if (checkBtn) {
        checkBtn.addEventListener('click', function() {
          var correct = 0;
          items.forEach(function(it, i) {
            var slot = wrap.querySelector('.fill-slot[data-idx="' + i + '"]');
            if (!slot) return;
            var word = placed[i] !== null ? bank[placed[i]] : null;
            if (word && word.toLowerCase() === it.answer) {
              slot.classList.add('fill-slot--ok'); correct++;
            } else {
              slot.classList.add('fill-slot--err');
              setTimeout(function() { slot.classList.remove('fill-slot--err'); }, 1000);
            }
          });
          var res = wrap.querySelector('.game-fill-result');
          if (res) res.textContent = correct + ' / ' + items.length + ' bonnes réponses';
          if (correct === items.length) {
            setTimeout(function() {
              wrap.innerHTML = '<div class="game-score-screen">'
                + '<div class="game-score-emoji">🏆</div>'
                + '<div class="game-score-num">' + correct + '<span>/' + items.length + '</span></div>'
                + '<div class="game-score-label">Excellent !</div>'
                + '<div class="game-score-actions">'
                + '<button class="game-btn game-btn--secondary" id="gReplay">🔄 Recommencer</button>'
                + hubBtn()
                + (entry ? '<a class="game-btn game-btn--primary" href="' + entry.href + '">📖 Leçon</a>' : '')
                + '</div></div>';
              var rb = wrap.querySelector('#gReplay');
              if (rb) rb.addEventListener('click', function() { resetPlaced(); renderFill(); });
            }, 800);
          }
        });
      }
    }
    renderFill();
  }

  /* ══════════════════════════════════════════════
     ÉCOUTER — entrainement-a1-ecouter.html
  ══════════════════════════════════════════════ */
  function renderEcouter() {
    var questions = exUnit && exUnit.ecouter && exUnit.ecouter.length
      ? exUnit.ecouter.slice(0, 4)
      : ((entry && entry.assessment) ? entry.assessment.slice(0, 4) : []);
    if (!questions.length) {
      wrap.innerHTML = '<p style="padding:32px;text-align:center;color:#888">Aucune question disponible pour cette unité.</p>'
        + hubBtn();
      return;
    }

    var ecoIdx  = 0;
    var ecoScore = 0;
    var ecoTotal = questions.length;
    var chosen  = null;
    var answered = false;

    function speak(text, onEnd) {
      if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
      window.speechSynthesis.cancel();
      var utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'fr-FR';
      utt.rate = 0.88;
      // Prefer a French voice if available
      var voices = window.speechSynthesis.getVoices();
      var frVoice = voices.find(function(v){ return v.lang.startsWith('fr'); });
      if (frVoice) utt.voice = frVoice;
      if (onEnd) utt.onend = onEnd;
      window.speechSynthesis.speak(utt);
    }

    var LETTERS = ['A','B','C','D'];

    function renderQ() {
      if (ecoIdx >= ecoTotal) { renderEcouterScore(); return; }
      var q = questions[ecoIdx];
      chosen   = null;
      answered = false;

      var dots = Array.from({length: ecoTotal}, function(_, i) {
        var cls = i < ecoIdx ? 'game-eco-dot game-eco-dot--done'
                : i === ecoIdx ? 'game-eco-dot game-eco-dot--active'
                : 'game-eco-dot';
        return '<span class="' + cls + '"></span>';
      }).join('');

      wrap.innerHTML = '<div class="game-eco-wrap">'
        + '<div class="game-eco-dots">' + dots + '</div>'
        + '<div class="game-eco-card">'
        + '  <p class="game-eco-label">🎧 Question ' + (ecoIdx + 1) + ' sur ' + ecoTotal + '</p>'
        + '  <div class="game-eco-ripple-wrap" id="ecoRippleWrap">'
        + '    <span class="game-eco-ripple"></span>'
        + '    <span class="game-eco-ripple"></span>'
        + '    <span class="game-eco-ripple"></span>'
        + '    <button class="game-eco-play" id="ecoPlayBtn" aria-label="Écouter la question">🔊</button>'
        + '  </div>'
        + '  <div class="game-eco-waves" id="ecoWaves">'
        + '    <span class="game-eco-wave"></span><span class="game-eco-wave"></span>'
        + '    <span class="game-eco-wave"></span><span class="game-eco-wave"></span>'
        + '    <span class="game-eco-wave"></span>'
        + '  </div>'
        + '  <p class="game-eco-hint" id="ecoHint">Appuyez sur le bouton pour écouter,<br><strong>puis choisissez la bonne réponse.</strong></p>'
        + '</div>'
        + '<div class="game-eco-choices" id="ecoChoices">'
        + q.choices.map(function(c, ci) {
            return '<button class="game-eco-choice" data-ci="' + ci + '" data-letter="' + LETTERS[ci] + '">' + esc(c) + '</button>';
          }).join('')
        + '</div>'
        + '<div class="game-eco-fb" id="ecoFb" style="display:none"></div>'
        + '<button class="game-btn game-btn--primary" id="ecoNext" style="display:none;margin-top:8px">'
        + (ecoIdx < ecoTotal - 1 ? 'Question suivante →' : 'Voir mon score →') + '</button>'
        + '</div>';

      var playBtn  = wrap.querySelector('#ecoPlayBtn');
      var waves    = wrap.querySelector('#ecoWaves');
      var hint     = wrap.querySelector('#ecoHint');
      var ripples  = wrap.querySelectorAll('.game-eco-ripple');
      var fb       = wrap.querySelector('#ecoFb');
      var nextBtn  = wrap.querySelector('#ecoNext');

      function setPlaying(on) {
        playBtn.textContent = on ? '⏸' : '🔊';
        waves.classList.toggle('game-eco-waves--active', on);
        ripples.forEach(function(r){ r.classList.toggle('game-eco-ripple--playing', on); });
      }

      function playQ() {
        playBtn.disabled = true;
        setPlaying(true);
        hint.innerHTML = 'Écoutez attentivement…';
        speak(q.prompt, function() {
          playBtn.disabled = false;
          setPlaying(false);
          hint.innerHTML = 'Choisissez la bonne réponse ci-dessous.';
        });
      }
      playBtn.addEventListener('click', playQ);
      setTimeout(playQ, 350);

      wrap.querySelectorAll('.game-eco-choice').forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (answered) return;
          chosen = parseInt(btn.dataset.ci, 10);
          answered = true;
          window.speechSynthesis && window.speechSynthesis.cancel();
          setPlaying(false);
          wrap.querySelectorAll('.game-eco-choice').forEach(function(b) {
            b.disabled = true;
            if (parseInt(b.dataset.ci, 10) === q.answer) b.classList.add('eco-correct');
          });
          var ok = chosen === q.answer;
          if (ok) {
            ecoScore++;
            btn.classList.add('eco-correct');
            fb.innerHTML = '✅ Correct !';
            fb.className = 'game-eco-fb eco-fb--ok';
          } else {
            btn.classList.add('eco-wrong');
            fb.innerHTML = '❌ La bonne réponse : <strong>' + esc(q.choices[q.answer]) + '</strong>';
            fb.className = 'game-eco-fb eco-fb--err';
          }
          fb.style.display = 'flex';
          nextBtn.style.display = 'inline-flex';
        });
      });

      nextBtn.addEventListener('click', function() {
        ecoIdx++;
        renderQ();
      });
    }

    function renderEcouterScore() {
      var pct = Math.round(ecoScore / ecoTotal * 100);
      var emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪';
      wrap.innerHTML = '<div class="game-score-wrap">'
        + '<div class="game-score-circle">' + emoji + '</div>'
        + '<h3 class="game-score-title">' + ecoScore + ' / ' + ecoTotal + '</h3>'
        + '<p class="game-score-sub">' + (pct >= 80 ? 'Excellente écoute !' : pct >= 50 ? 'Bon travail, continuez !' : 'Réécoutez et réessayez.') + '</p>'
        + '<div class="game-btn-row">'
        + '<button class="game-btn game-btn--secondary" onclick="location.reload()">🔄 Recommencer</button>'
        + hubBtn()
        + '</div>'
        + '</div>';
    }

    // Voices load asynchronously on some browsers
    if (window.speechSynthesis && window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = function() { renderQ(); };
    } else {
      renderQ();
    }
  }

  /* ══════════════════════════════════════════════
     CONJUGAISON A1 — entrainement-conjugaison-a1.html
  ══════════════════════════════════════════════ */
  function renderConjugaison() {
    var verbs = exUnit && exUnit.conjugaison && exUnit.conjugaison.verbs
      ? exUnit.conjugaison.verbs.slice()
      : verbsData.slice();
    if (!verbs.length) {
      verbs = ['être', 'avoir', 'aller'];
    }
    var pronouns = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];

    // Build lookup: { verb -> { pronoun -> form } }
    var conjugationRefs = exUnit && exUnit.conjugaison && exUnit.conjugaison.conjugations
      ? exUnit.conjugaison.conjugations
      : conjugations;
    var lookup = {};
    if (conjugationRefs) {
      conjugationRefs.forEach(function(line) {
        var clean = line.replace(/<[^>]+>/g, '');
        var sep = clean.indexOf(' : ');
        if (sep === -1) return;
        var verb = clean.slice(0, sep).trim().toLowerCase();
        var forms = clean.slice(sep + 3).split(', ');
        lookup[verb] = {};
        pronouns.forEach(function(pr) {
          forms.forEach(function(f) {
            if (f.toLowerCase().startsWith(pr + ' ')) {
              lookup[verb][pr] = f.slice(pr.length + 1).trim().toLowerCase();
            }
          });
        });
      });
    }

    wrap.innerHTML = '<div class="game-conj-container">'
      + '<p class="game-conj-instruction">Écrivez la bonne forme du verbe pour chaque pronom.</p>'
      + verbs.map(function(verb) {
          return '<div class="game-conj-verb">'
            + '<div class="game-conj-verb-title">' + esc(verb) + '</div>'
            + '<div class="game-conj-grid">'
            + pronouns.map(function(pr) {
                return '<div class="game-conj-row">'
                  + '<span class="game-conj-pr">' + esc(pr) + '</span>'
                  + '<input class="game-conj-input" data-verb="' + esc(verb.toLowerCase()) + '" data-pr="' + esc(pr) + '" placeholder="…" autocomplete="off" autocorrect="off" spellcheck="false">'
                  + '<span class="game-conj-fb" aria-live="polite"></span>'
                  + '</div>';
              }).join('')
            + '</div>'
            + '</div>';
        }).join('')
      + '</div>';

    wrap.querySelectorAll('.game-conj-input').forEach(function(inp) {
      inp.addEventListener('input', function() {
        var val = inp.value.trim().toLowerCase();
        var fb  = inp.nextElementSibling;
        var verbKey = inp.dataset.verb;
        var pr = inp.dataset.pr;
        var expected = lookup[verbKey] && lookup[verbKey][pr];
        if (!val) {
          fb.textContent = ''; fb.className = 'game-conj-fb';
          inp.className = 'game-conj-input';
        } else if (expected && val === expected) {
          fb.textContent = '✓'; fb.className = 'game-conj-fb game-conj-fb--ok';
          inp.className = 'game-conj-input game-conj-input--ok';
        } else {
          fb.textContent = ''; fb.className = 'game-conj-fb';
          inp.className = 'game-conj-input';
        }
      });
    });
  }

  /* ══════════════════════════════════════════════
     MOTS MÊLÉS — entrainement-a1-mots-meles.html
  ══════════════════════════════════════════════ */
  function renderMotsMeles() {
    var hiddenWords = exUnit && exUnit.motsMeles && exUnit.motsMeles.length
      ? exUnit.motsMeles.slice()
      : null;
    var vocab = vocabulary;
    if (!hiddenWords && vocab.length < 4) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez de vocabulaire.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }
    var SIZE = 12;
    var ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var DIRS = [{r:0,c:1},{r:1,c:0},{r:1,c:1},{r:1,c:-1}];
    // Normalise: uppercase, strip accents, letters only, 3-9 chars
    if (!hiddenWords) {
      var candidates = [];
      vocab.forEach(function(v) {
        var w = v.word.split(/\s+/)[0].toUpperCase()
          .normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Z]/g,'');
        if (w.length >= 3 && w.length <= 9) candidates.push(w);
      });
      hiddenWords = shuffle(candidates).slice(0, 8);
    }
    // Build grid
    var grid = [];
    for (var ii = 0; ii < SIZE; ii++) { grid[ii] = new Array(SIZE).fill(null); }
    var wordPos = [];
    hiddenWords.forEach(function(word) {
      for (var att = 0; att < 200; att++) {
        var dir = DIRS[Math.floor(Math.random() * DIRS.length)];
        var sr = Math.floor(Math.random() * SIZE), sc = Math.floor(Math.random() * SIZE);
        var cells = []; var ok = true;
        for (var li = 0; li < word.length; li++) {
          var nr = sr + li*dir.r, nc = sc + li*dir.c;
          if (nr<0||nr>=SIZE||nc<0||nc>=SIZE||
             (grid[nr][nc]!==null&&grid[nr][nc]!==word[li])) { ok=false; break; }
          cells.push({r:nr,c:nc});
        }
        if (ok) {
          cells.forEach(function(cell,li){ grid[cell.r][cell.c]=word[li]; });
          wordPos.push({word:word, cells:cells, found:false});
          break;
        }
      }
    });
    for (var ri=0;ri<SIZE;ri++) for (var ci=0;ci<SIZE;ci++) {
      if (grid[ri][ci]===null) grid[ri][ci]=ALPHA[Math.floor(Math.random()*26)];
    }
    var startSel = null;
    var foundCount = 0;

    function renderMG() {
      var gridHtml = '<div class="game-wg-grid" style="--wg-size:' + SIZE + '">';
      for (var r=0;r<SIZE;r++) {
        for (var c=0;c<SIZE;c++) {
          var cls = 'game-wg-cell';
          if (startSel && startSel.r===r && startSel.c===c) cls += ' wg-selected';
          wordPos.forEach(function(wp){ if(wp.found && wp.cells.some(function(x){return x.r===r&&x.c===c;})) cls+=' wg-found'; });
          gridHtml += '<button class="' + cls + '" data-r="' + r + '" data-c="' + c + '">' + grid[r][c] + '</button>';
        }
      }
      gridHtml += '</div>';
      var listHtml = '<div class="game-wg-words">' +
        wordPos.map(function(wp){ return '<span class="game-wg-word'+(wp.found?' game-wg-word--found':'')+'">' + wp.word + '</span>'; }).join('') + '</div>';
      wrap.innerHTML = '<div class="game-wg-container">'
        + '<p class="game-wg-instr">Cliquez la <strong>1re lettre</strong>, puis la <strong>dernière lettre</strong> du mot.</p>'
        + listHtml + gridHtml
        + '<p class="game-wg-status" aria-live="polite">' + foundCount + ' / ' + wordPos.length + ' mots trouvés</p>'
        + '</div>';
    }
    renderMG();

    // Hover preview: highlight cells between start and hovered cell
    wrap.addEventListener('mouseover', function(e) {
      if (!startSel) return;
      var btn = e.target.closest('.game-wg-cell');
      if (!btn) return;
      var r = parseInt(btn.dataset.r,10), c = parseInt(btn.dataset.c,10);
      wrap.querySelectorAll('.wg-hover').forEach(function(el){ el.classList.remove('wg-hover'); });
      var dr = r-startSel.r, dc = c-startSel.c;
      if (dr===0 && dc===0) return;
      var validDir = dr===0||dc===0||Math.abs(dr)===Math.abs(dc);
      if (!validDir) return;
      var len = Math.max(Math.abs(dr),Math.abs(dc))+1;
      var stepR = dr===0?0:(dr>0?1:-1), stepC = dc===0?0:(dc>0?1:-1);
      for (var i=0;i<len;i++) {
        var nr=startSel.r+i*stepR, nc=startSel.c+i*stepC;
        var cell=wrap.querySelector('.game-wg-cell[data-r="'+nr+'"][data-c="'+nc+'"]');
        if(cell) cell.classList.add('wg-hover');
      }
    });
    wrap.addEventListener('mouseleave', function() {
      wrap.querySelectorAll('.wg-hover').forEach(function(el){ el.classList.remove('wg-hover'); });
    });

    wrap.addEventListener('click', function(e) {
      var btn = e.target.closest('.game-wg-cell');
      if (!btn) return;
      var r = parseInt(btn.dataset.r,10), c = parseInt(btn.dataset.c,10);
      if (!startSel) {
        startSel = {r:r, c:c};
        renderMG();
      } else {
        var dr=r-startSel.r, dc=c-startSel.c;
        var len = Math.max(Math.abs(dr),Math.abs(dc))+1;
        var validDir = (dr===0||dc===0||Math.abs(dr)===Math.abs(dc));
        if (validDir && len >= 3) {
          var stepR = dr===0?0:(dr>0?1:-1), stepC = dc===0?0:(dc>0?1:-1);
          var sel = '';
          for (var i=0;i<len;i++) sel += grid[startSel.r+i*stepR][startSel.c+i*stepC];
          var matched = false;
          wordPos.forEach(function(wp) {
            if (wp.found) return;
            if (sel===wp.word||sel===wp.word.split('').reverse().join('')) {
              wp.found=true; foundCount++; matched=true;
            }
          });
          if (matched && foundCount===wordPos.length) {
            startSel=null;
            setTimeout(function(){
              wrap.innerHTML='<div class="game-score-screen"><div class="game-score-emoji">🏆</div>'
                +'<div class="game-score-num">'+wordPos.length+'<span>/'+wordPos.length+'</span></div>'
                +'<div class="game-score-label">Tous les mots trouvés !</div>'
                +'<div class="game-score-actions">'
                +'<button class="game-btn game-btn--secondary" id="gReplay">🔄 Rejouer</button>'
                +hubBtn()
                +(entry?'<a class="game-btn game-btn--primary" href="'+entry.href+'">📖 Leçon</a>':'')
                +'</div></div>';
              var rb=wrap.querySelector('#gReplay');
              if(rb) rb.addEventListener('click',function(){ foundCount=0; wordPos.forEach(function(wp){wp.found=false;}); renderMG(); });
            }, 400);
            return;
          }
        }
        startSel = null;
        renderMG();
      }
    });
  }

  /* ══════════════════════════════════════════════
     ANAGRAMMES — entrainement-a1-anagrammes.html
  ══════════════════════════════════════════════ */
  function renderAnagrammes() {
    var items = exUnit && exUnit.anagrammes && exUnit.anagrammes.length
      ? exUnit.anagrammes.slice()
      : vocabulary.filter(function(v){ return v.word.length >= 3 && v.word.indexOf(' ') === -1; });
    if (items.length < 3) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez de vocabulaire.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }
    items = shuffle(items).slice(0, 8);
    var idx = 0, score = 0;

    function renderAna() {
      if (idx >= items.length) {
        var pct = Math.round(score/items.length*100);
        wrap.innerHTML = '<div class="game-score-screen">'
          +'<div class="game-score-emoji">'+(pct===100?'🏆':pct>=70?'⭐':'👍')+'</div>'
          +'<div class="game-score-num">'+score+'<span>/'+items.length+'</span></div>'
          +'<div class="game-score-label">'+(pct===100?'Parfait !':pct>=70?'Très bien !':'Continuez !')+'</div>'
          +'<div class="game-score-actions">'
          +'<button class="game-btn game-btn--secondary" id="gReplay">🔄 Rejouer</button>'
          +hubBtn()
          +(entry?'<a class="game-btn game-btn--primary" href="'+entry.href+'">📖 Leçon</a>':'')
          +'</div></div>';
        var rb=wrap.querySelector('#gReplay');
        if(rb) rb.addEventListener('click',function(){ idx=0; score=0; items=shuffle(items); renderAna(); });
        return;
      }
      var item = items[idx];
      var letters = shuffle(item.word.toUpperCase().split(''));
      var assembled = [];

      function rebuildAna() {
        wrap.innerHTML = progressBar(idx, items.length)
          + '<div class="game-ana-card">'
          + '<p class="game-ana-def">' + esc(item.definition) + '</p>'
          + '<div class="game-ana-assembled" id="anaAssembled">'
          + (assembled.length ? assembled.map(function(l,i){
              return '<button class="game-ana-chip game-ana-chip--placed" data-assembled-idx="'+i+'">'+esc(l)+'</button>';
            }).join('') : '<span class="game-ana-placeholder">—</span>')
          + '</div>'
          + '<div class="game-ana-bank" id="anaBank">'
          + letters.map(function(l,i){
              var used = assembled.length>i && false; // track used differently
              return '<button class="game-ana-chip" data-letter-idx="'+i+'">'+esc(l)+'</button>';
            }).join('')
          + '</div>'
          + '<p class="game-ana-fb" aria-live="polite"></p>'
          + '<button class="game-btn game-btn--secondary" id="anaReset" style="margin-top:8px">↩ Effacer</button>'
          + '</div>';

        var usedIndices = [];
        assembled.forEach(function(_,i){ usedIndices.push(i); });
        // Rebuild properly
        var remaining = letters.slice();
        var assembledCopy = assembled.slice();
        assembledCopy.forEach(function(l){ remaining.splice(remaining.indexOf(l),1); });

        var bankEl = wrap.querySelector('#anaBank');
        if(bankEl) bankEl.innerHTML = remaining.map(function(l,i){
          return '<button class="game-ana-chip" data-li="'+i+'" data-letter="'+esc(l)+'">'+esc(l)+'</button>';
        }).join('');

        var asmEl = wrap.querySelector('#anaAssembled');
        if(asmEl) asmEl.innerHTML = assembledCopy.length
          ? assembledCopy.map(function(l,i){ return '<button class="game-ana-chip game-ana-chip--placed" data-ai="'+i+'" title="Retirer">'+esc(l)+'</button>'; }).join('')
          : '<span class="game-ana-placeholder">Cliquez les lettres</span>';

        // Placed letter click: remove that letter
        wrap.querySelectorAll('#anaAssembled .game-ana-chip--placed').forEach(function(btn){
          btn.addEventListener('click', function(){
            var ai = parseInt(btn.dataset.ai, 10);
            assembled.splice(ai, 1);
            rebuildAna();
          });
        });

        // Bank click: add letter
        wrap.querySelectorAll('#anaBank .game-ana-chip').forEach(function(btn){
          btn.addEventListener('click', function(){
            assembled.push(btn.dataset.letter);
            // Check if word complete
            if(assembled.join('')===item.word.toUpperCase()){
              score++;
              var fb=wrap.querySelector('.game-ana-fb');
              if(fb){fb.textContent='✓ Bravo ! '+item.word.toUpperCase(); fb.className='game-ana-fb game-feedback--ok';}
              btn.disabled=true;
              setTimeout(function(){ idx++; assembled=[]; renderAna(); }, 1100);
            } else if(assembled.length===item.word.length){
              var fb=wrap.querySelector('.game-ana-fb');
              if(fb){fb.textContent='✗ Essayez encore.'; fb.className='game-ana-fb game-feedback--err';}
              setTimeout(function(){ assembled=[]; rebuildAna(); }, 800);
            } else {
              rebuildAna();
            }
          });
        });
        // Assembled click: remove last letter (undo)
        var resetBtn=wrap.querySelector('#anaReset');
        if(resetBtn) resetBtn.addEventListener('click',function(){ assembled=[]; rebuildAna(); });
      }
      rebuildAna();
    }
    renderAna();
  }

  /* ══════════════════════════════════════════════
     FLASHCARDS — entrainement-a1-flashcards.html
  ══════════════════════════════════════════════ */
  function renderFlashcards() {
    var deck = exUnit && exUnit.flashcards && exUnit.flashcards.length
      ? exUnit.flashcards.slice()
      : vocabulary.slice();
    if (deck.length < 3) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez de vocabulaire.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }
    var seedDeck = deck.slice();
    deck = shuffle(deck);
    var review = []; // cards to review again
    var idx = 0;
    var flipped = false;
    var known = 0;

    function renderFC() {
      if (idx >= deck.length) {
        // End of round
        if (review.length) {
          var pct = Math.round(known / (known + review.length) * 100);
          wrap.innerHTML = '<div class="game-score-screen">'
            + '<div class="game-score-emoji">' + (pct>=80?'🏆':pct>=50?'⭐':'👍') + '</div>'
            + '<div class="game-score-num">' + known + '<span>/' + (known+review.length) + '</span></div>'
            + '<div class="game-score-label">À revoir : ' + review.length + ' carte(s)</div>'
            + '<div class="game-score-actions">'
            + '<button class="game-btn game-btn--primary" id="fcContinue">🔄 Réviser les erreurs (' + review.length + ')</button>'
            + (entry?'<a class="game-btn game-btn--secondary" href="'+entry.href+'">📖 Leçon</a>':'')
            + '</div></div>';
          var cont = wrap.querySelector('#fcContinue');
          if(cont) cont.addEventListener('click', function(){ deck=shuffle(review.slice()); review=[]; idx=0; known=0; flipped=false; renderFC(); });
        } else {
          wrap.innerHTML = '<div class="game-score-screen">'
            + '<div class="game-score-emoji">🏆</div>'
            + '<div class="game-score-num">' + known + '<span>/' + known + '</span></div>'
            + '<div class="game-score-label">Toutes les cartes maîtrisées !</div>'
            + '<div class="game-score-actions">'
            + '<button class="game-btn game-btn--secondary" id="fcReplay">🔄 Rejouer</button>'
            + (entry?'<a class="game-btn game-btn--primary" href="'+entry.href+'">📖 Leçon</a>':'')
            + '</div></div>';
          var rb=wrap.querySelector('#fcReplay');
          if(rb) rb.addEventListener('click',function(){ deck=shuffle(seedDeck.slice()); review=[]; idx=0; known=0; flipped=false; renderFC(); });
        }
        return;
      }
      var card = deck[idx];
      flipped = false;
      wrap.innerHTML = progressBar(idx, deck.length)
        + '<div class="game-fc-scene" id="fcScene" role="button" tabindex="0" aria-label="Retourner la carte">'
        + '<div class="game-fc-card" id="fcCard">'
        + '<div class="game-fc-front"><p class="game-fc-word">' + esc(card.word) + '</p><p class="game-fc-hint">Cliquez pour voir la définition</p></div>'
        + '<div class="game-fc-back"><p class="game-fc-def">' + esc(card.definition) + '</p></div>'
        + '</div>'
        + '</div>'
        + '<div class="game-fc-actions" id="fcActions" style="display:none">'
        + '<button class="game-btn game-fc-btn--review" id="fcReview">↩ À revoir</button>'
        + '<button class="game-btn game-fc-btn--knew" id="fcKnew">✓ Je savais !</button>'
        + '</div>';

      var scene=wrap.querySelector('#fcScene'), cardEl=wrap.querySelector('#fcCard'), actions=wrap.querySelector('#fcActions');
      function flip() {
        if(flipped) return;
        flipped=true;
        cardEl.classList.add('game-fc-card--flipped');
        actions.style.display='flex';
      }
      scene.addEventListener('click', flip);
      scene.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' ') flip(); });
      var reviewBtn=wrap.querySelector('#fcReview'), knewBtn=wrap.querySelector('#fcKnew');
      if(reviewBtn) reviewBtn.addEventListener('click',function(){ review.push(card); idx++; renderFC(); });
      if(knewBtn)   knewBtn.addEventListener('click',function(){ known++; idx++; renderFC(); });
    }
    renderFC();
  }

  /* ══════════════════════════════════════════════
     SIMULATEUR DE DIALOGUE — entrainement-a1-dialogue.html
  ══════════════════════════════════════════════ */
  function renderDialogue() {
    var scenarios = exUnit && exUnit.dialogue && exUnit.dialogue.length ? exUnit.dialogue : dialogues;
    if (!scenarios || !scenarios.length) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas de dialogue pour cette unité.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }

    function startScenario(scenIdx) {
      var scenario = scenarios[scenIdx];
      var steps = scenario.steps;
      var stepIdx = 0, score = 0, history = [];
      var totalUserSteps = steps.filter(function(s){ return s.from === 'user'; }).length;

      function buildHist() {
        return history.map(function(h) {
          return '<div class="game-dial-bubble game-dial-bubble--' + h.from + '">'
            + '<span class="game-dial-who">' + (h.from==='bot'?'🤖':'👤') + '</span>'
            + '<span class="game-dial-text">' + esc(h.text) + '</span>'
            + (h.fb ? '<span class="game-dial-fb game-dial-fb--' + (h.ok?'ok':'err') + '">' + esc(h.fb) + '</span>' : '')
            + '</div>';
        }).join('');
      }

      function renderDial() {
        while (stepIdx < steps.length && steps[stepIdx].from === 'bot') {
          history.push({ from: 'bot', text: steps[stepIdx].text });
          stepIdx++;
        }

        if (stepIdx >= steps.length) {
          var pct = Math.round(score / totalUserSteps * 100);
          var nextIdx = (scenIdx + 1) % scenarios.length;
          wrap.innerHTML = '<div class="game-dial-container">'
            + '<div class="game-dial-history">' + buildHist() + '</div>'
            + '<div class="game-score-screen" style="margin-top:16px">'
            + '<div class="game-score-emoji">' + (pct===100?'🏆':pct>=70?'⭐':'👍') + '</div>'
            + '<div class="game-score-num">' + score + '<span>/' + totalUserSteps + '</span></div>'
            + '<div class="game-score-label">' + (pct===100?'Dialogue parfait !':pct>=70?'Très bien !':'Continuez à pratiquer !') + '</div>'
            + '<div class="game-score-actions">'
            + '<button class="game-btn game-btn--secondary" id="gReplay">🔄 Recommencer</button>'
            + (scenarios.length > 1 ? '<button class="game-btn game-btn--primary" id="gNextDial">Dialogue suivant →</button>' : '')
            + (entry ? '<a class="game-btn game-btn--outline" href="entrainement-a1.html?unite=' + esc(badge) + '">← Jeux</a>' : '')
            + '</div></div></div>';
          var rb = wrap.querySelector('#gReplay');
          if (rb) rb.addEventListener('click', function(){ startScenario(scenIdx); });
          var nb = wrap.querySelector('#gNextDial');
          if (nb) nb.addEventListener('click', function(){ startScenario(nextIdx); });
          return;
        }

        var userStep = steps[stepIdx];
        var tried = [];

        function renderOptions(errFb) {
          var optHtml = '<div class="game-dial-options">'
            + userStep.options.map(function(opt, oi) {
                var wasTried = tried.indexOf(oi) >= 0;
                return '<button class="game-dial-opt' + (wasTried ? ' game-dial-opt--err' : '') + '"'
                  + (wasTried ? ' disabled' : '') + ' data-oi="' + oi + '">' + esc(opt.text) + '</button>';
              }).join('')
            + '</div>'
            + (errFb ? '<p class="game-dial-inline-fb">' + esc(errFb) + '</p>' : '');

          wrap.innerHTML = '<div class="game-dial-container">'
            + '<div class="game-dial-scenario">'
            + (scenarios.length > 1 ? '<span class="game-dial-badge">Dialogue ' + (scenIdx+1) + ' / ' + scenarios.length + '</span> ' : '')
            + '<strong>🎭 ' + esc(scenario.title) + '</strong> — ' + esc(scenario.context) + '</div>'
            + '<div class="game-dial-history">' + buildHist() + '</div>'
            + optHtml + '</div>';

          wrap.querySelectorAll('.game-dial-opt:not([disabled])').forEach(function(btn) {
            btn.addEventListener('click', function() {
              var oi = parseInt(btn.dataset.oi, 10);
              var opt = userStep.options[oi];
              if (opt.ok) {
                if (tried.length === 0) score++;
                history.push({ from: 'user', text: opt.text, ok: true, fb: opt.fb });
                stepIdx++;
                setTimeout(renderDial, 1000);
              } else {
                tried.push(oi);
                renderOptions(opt.fb);
              }
            });
          });
        }

        renderOptions(null);
      }

      wrap.innerHTML = '<div class="game-dial-container">'
        + (scenarios.length > 1 ? '<span class="game-dial-badge">Dialogue ' + (scenIdx+1) + ' / ' + scenarios.length + '</span>' : '')
        + '<div class="game-dial-scenario"><strong>🎭 ' + esc(scenario.title) + '</strong><br>' + esc(scenario.context) + '</div>'
        + '<button class="game-btn game-btn--primary" id="dialStart">Commencer →</button></div>';
      var startBtn = wrap.querySelector('#dialStart');
      if (startBtn) startBtn.addEventListener('click', renderDial);
    }

    startScenario(0);
  }

  /* ══════════════════════════════════════════════
     CONSTRUIRE UNE PHRASE — entrainement-a1-construire.html
  ══════════════════════════════════════════════ */
  function renderConstruire() {
    var pool = exUnit && exUnit.construire && exUnit.construire.length
      ? exUnit.construire.slice()
      : null;
    if (!pool) {
      var exprs    = (entry && entry.expressions) ? entry.expressions : [];
      pool = shuffle(examples.concat(exprs)).filter(function(s){
        var wc = s.split(/\s+/).length;
        return wc >= 3 && wc <= 10;
      }).slice(0, 6);
    }

    if (pool.length < 2) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez de phrases pour ce jeu.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }
    var idx = 0, score = 0;

    function renderBuild() {
      if (idx >= pool.length) {
        var pct = Math.round(score/pool.length*100);
        wrap.innerHTML = '<div class="game-score-screen">'
          +'<div class="game-score-emoji">'+(pct===100?'🏆':pct>=70?'⭐':'👍')+'</div>'
          +'<div class="game-score-num">'+score+'<span>/'+pool.length+'</span></div>'
          +'<div class="game-score-label">'+(pct===100?'Parfait !':pct>=70?'Très bien !':'Continuez !')+'</div>'
          +'<div class="game-score-actions">'
          +'<button class="game-btn game-btn--secondary" id="gReplay">🔄 Rejouer</button>'
          +hubBtn()
          +(entry?'<a class="game-btn game-btn--primary" href="'+entry.href+'">📖 Leçon</a>':'')
          +'</div></div>';
        var rb=wrap.querySelector('#gReplay');
        if(rb) rb.addEventListener('click',function(){ idx=0; score=0; pool=shuffle(pool); renderBuild(); });
        return;
      }

      var sentence = pool[idx].replace(/\.$/, '');
      var words = sentence.split(/\s+/);
      var shuffled = shuffle(words.map(function(w,i){return {w:w,i:i};}));
      var placed = [];

      function rebuildBuild(feedback) {
        var bankHtml = '<div class="game-build-bank">';
        shuffled.forEach(function(obj,si) {
          var isPlaced = placed.some(function(p){return p.si===si;});
          bankHtml += '<button class="game-build-chip'+(isPlaced?' game-build-chip--used':'')+'" data-si="'+si+'" '+(isPlaced?'disabled':'')+'>'+esc(obj.w)+'</button>';
        });
        bankHtml += '</div>';

        var answerHtml = '<div class="game-build-answer">';
        if(placed.length) {
          placed.forEach(function(p,pi){
            answerHtml += '<button class="game-build-placed" data-pi="'+pi+'">'+esc(p.w)+'</button>';
          });
        } else {
          answerHtml += '<span class="game-build-empty">Cliquez les mots dans l\'ordre correct</span>';
        }
        answerHtml += '</div>';

        wrap.innerHTML = progressBar(idx, pool.length)
          + '<div class="game-build-container">'
          + '<p class="game-build-instr">Remettez les ' + words.length + ' mots dans le bon ordre :</p>'
          + answerHtml + bankHtml
          + (feedback ? '<p class="game-build-fb '+feedback.cls+'">'+esc(feedback.txt)+'</p>' : '<p class="game-build-fb"></p>')
          + (placed.length===words.length
              ? '<button class="game-btn game-btn--primary" id="buildCheck">Vérifier ✓</button>'
              : '')
          + '</div>';

        wrap.querySelectorAll('.game-build-chip:not([disabled])').forEach(function(btn){
          btn.addEventListener('click', function(){
            var si = parseInt(btn.dataset.si,10);
            placed.push({si:si, w:shuffled[si].w, origIdx:shuffled[si].i});
            rebuildBuild(null);
          });
        });
        wrap.querySelectorAll('.game-build-placed').forEach(function(btn){
          btn.addEventListener('click', function(){
            var pi = parseInt(btn.dataset.pi,10);
            placed.splice(pi,1);
            rebuildBuild(null);
          });
        });
        var checkBtn=wrap.querySelector('#buildCheck');
        if(checkBtn) checkBtn.addEventListener('click', function(){
          var userSentence = placed.map(function(p){return p.w;}).join(' ');
          var correct = userSentence === sentence;
          if(correct) {
            score++;
            rebuildBuild({cls:'game-feedback--ok', txt:'✓ Correct ! "'+sentence+'"'});
            setTimeout(function(){idx++;placed=[];renderBuild();},1200);
          } else {
            rebuildBuild({cls:'game-feedback--err', txt:'✗ Ordre incorrect. La phrase : « ' + sentence + ' »'});
            setTimeout(function(){idx++;placed=[];renderBuild();},2200);
          }
        });
      }
      rebuildBuild(null);
    }
    renderBuild();
  }

  /* ══════════════════════════════════════════════
     VALIDER — entrainement-a1-validation.html
     Voit la définition → tape le mot
  ══════════════════════════════════════════════ */
  function renderValidation() {
    var items = exUnit && exUnit.validation && exUnit.validation.length
      ? exUnit.validation.slice()
      : vocabulary.slice();
    if (items.length < 3) {
      wrap.innerHTML = '<div class="game-empty"><p>Pas assez de vocabulaire.</p><a href="entrainement-a1.html?unite=' + esc(badge) + '">← Retour</a></div>';
      return;
    }
    items = shuffle(items);
    var idx = 0, score = 0, mistakes = [];

    /* Normalize une réponse pour la comparaison */
    function norm(s) {
      return String(s || '').toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip accents
        .replace(/^(le |la |les |l'|l'|un |une |des |du |de la |de l'|de l')/i, '') // strip articles
        .trim();
    }

    function isCorrect(input, word) {
      var n1 = norm(input), n2 = norm(word);
      if (n1 === n2) return true;
      // Also accept if input is contained in word or vice versa (handles compound words)
      if (n1.length >= 3 && (n2.startsWith(n1) || n1 === n2.split(' ')[0])) return true;
      return false;
    }

    function renderVal(feedback) {
      if (idx >= items.length) { showScore(); return; }
      var item = items[idx];
      var pct = Math.round(idx / items.length * 100);

      wrap.innerHTML = progressBar(idx, items.length)
        + '<div class="game-val-card">'
        + '<p class="game-val-def">' + esc(item.definition) + '</p>'
        + '<div class="game-val-input-row">'
        + '<input class="game-val-input" id="valInput" type="text" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Tapez le mot en français…">'
        + '<button class="game-btn game-btn--primary game-val-submit" id="valSubmit">Vérifier</button>'
        + '</div>'
        + (feedback ? '<div class="game-val-feedback ' + feedback.cls + '">' + feedback.html + '</div>' : '<div class="game-val-feedback"></div>')
        + '<div class="game-val-hint" id="valHint"></div>'
        + '<div class="game-val-actions">'
        + '<button class="game-btn game-btn--outline ae-btn--sm" id="valHintBtn">💡 Indice</button>'
        + '<button class="game-btn game-btn--outline ae-btn--sm" id="valSkip">Passer →</button>'
        + '</div>'
        + '</div>';

      var input = wrap.querySelector('#valInput');
      var submitBtn = wrap.querySelector('#valSubmit');
      var hintBtn = wrap.querySelector('#valHintBtn');
      var skipBtn = wrap.querySelector('#valSkip');
      var hintEl = wrap.querySelector('#valHint');
      var hintShown = 0;

      if (input) {
        input.focus();
        input.addEventListener('keydown', function(e) { if (e.key === 'Enter') check(); });
      }

      function check() {
        var val = (input ? input.value : '').trim();
        if (!val) { if (input) input.focus(); return; }
        var ok = isCorrect(val, item.word);
        if (ok) {
          score++;
          idx++;
          renderVal({ cls: 'game-val-feedback--ok', html: '✓ Correct ! <strong>' + esc(item.word) + '</strong>' });
        } else {
          mistakes.push({ word: item.word, typed: val, def: item.definition });
          // Levenshtein-inspired: close? (≤2 chars off on normalized)
          var d = levenshtein(norm(val), norm(item.word));
          var close = d <= 2 && norm(val).length >= 2;
          if (close) {
            // Give one more chance
            renderVal({ cls: 'game-val-feedback--close', html: '↗ Presque ! Essayez encore… <em>(faute de frappe ?)</em>' });
          } else {
            idx++;
            renderVal({ cls: 'game-val-feedback--err', html: '✗ La réponse était : <strong>' + esc(item.word) + '</strong> — ' + esc(item.definition) });
          }
        }
      }

      if (submitBtn) submitBtn.addEventListener('click', check);

      if (hintBtn) hintBtn.addEventListener('click', function() {
        hintShown++;
        var w = item.word;
        var hint = '';
        if (hintShown === 1) {
          // First letter + dashes
          hint = w[0] + w.slice(1).replace(/[a-zA-ZÀ-ÿ]/g, '·');
        } else if (hintShown === 2) {
          // First + last letter visible
          hint = w.split('').map(function(c,i){
            return (i===0||i===w.length-1||c===' '||c==='-'||c==='\''||c==='’') ? c : '·';
          }).join('');
        } else {
          hint = w; // reveal
        }
        if (hintEl) hintEl.innerHTML = '💡 <span class="game-val-hint-text">' + esc(hint) + '</span>';
        if (input) input.focus();
      });

      if (skipBtn) skipBtn.addEventListener('click', function() {
        mistakes.push({ word: item.word, typed: '—', def: item.definition });
        idx++;
        renderVal({ cls: 'game-val-feedback--err', html: 'Réponse : <strong>' + esc(item.word) + '</strong>' });
      });
    }

    function showScore() {
      var pct = Math.round(score / items.length * 100);
      var emoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 50 ? '👍' : '💪';
      var mistakesHtml = '';
      if (mistakes.length) {
        mistakesHtml = '<div class="game-val-mistakes">'
          + '<p class="game-val-mistakes-title">📝 Mots à revoir (' + mistakes.length + ')</p>'
          + '<table class="game-val-mistakes-table">'
          + '<tr><th>Mot</th><th>Votre réponse</th><th>Définition</th></tr>'
          + mistakes.map(function(m) {
              return '<tr><td><strong>' + esc(m.word) + '</strong></td><td class="game-val-wrong">' + esc(m.typed) + '</td><td>' + esc(m.def) + '</td></tr>';
            }).join('')
          + '</table></div>';
      }
      wrap.innerHTML = '<div class="game-score-screen">'
        + '<div class="game-score-emoji">' + emoji + '</div>'
        + '<div class="game-score-num">' + score + '<span>/' + items.length + '</span></div>'
        + '<div class="game-score-label">' + (pct===100?'Parfait, tout est maîtrisé !':pct>=80?'Très bien !':pct>=50?'Continuez !':'À retravailler !') + '</div>'
        + '<div class="game-score-bar"><div class="game-score-bar-fill" style="width:' + pct + '%"></div></div>'
        + '<div class="game-score-actions">'
        + '<button class="game-btn game-btn--secondary" id="gReplay">🔄 Recommencer</button>'
        + hubBtn()
        + (entry ? '<a class="game-btn game-btn--primary" href="' + entry.href + '">📖 Leçon</a>' : '')
        + '</div></div>'
        + mistakesHtml;
      var rb = wrap.querySelector('#gReplay');
      if (rb) rb.addEventListener('click', function() {
        idx = 0; score = 0; mistakes = [];
        items = shuffle(items);
        renderVal(null);
      });
    }

    renderVal(null);
  }

  /* ── Levenshtein distance (simple) ── */
  function levenshtein(a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var m = [];
    for (var i = 0; i <= a.length; i++) m[i] = [i];
    for (var j = 0; j <= b.length; j++) m[0][j] = j;
    for (var i = 1; i <= a.length; i++) {
      for (var j = 1; j <= b.length; j++) {
        m[i][j] = a[i-1] === b[j-1] ? m[i-1][j-1]
          : 1 + Math.min(m[i-1][j], m[i][j-1], m[i-1][j-1]);
      }
    }
    return m[a.length][b.length];
  }

  /* ══════════════════════════════════════════════
     DISPATCH — choisir le bon jeu selon pageId
  ══════════════════════════════════════════════ */
  var heroTitle = document.querySelector('.unite-hero-title');
  var heroSub   = document.querySelector('.unite-hero-sub');

  if (pageId === 'entrainement-a1') {
    renderHub();
  } else if (pageId === 'entrainement-a1-vrai-faux') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'vraiFaux'], 'Vrai ou Faux'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderVraiFaux();
  } else if (pageId === 'entrainement-a1-apparier') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'apparier'], 'Associer'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderApparier();
  } else if (pageId === 'entrainement-a1-completer') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'completer'], 'Compléter'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderCompleter();
  } else if (pageId === 'entrainement-a1-ecouter') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'ecouter'], 'Écouter'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderEcouter();
  } else if (pageId === 'entrainement-conjugaison-quiz') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'quiz'], 'Quiz'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderQuiz();
  } else if (pageId === 'entrainement-conjugaison-a1') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'conjugaison'], 'Conjugaison'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderConjugaison();
  } else if (pageId === 'entrainement-conjugaison-apparier') {
    if (heroTitle) heroTitle.textContent = t(['titles', 'apparierConjugaison'], 'Associer — Conjugaison');
    renderApparier();
  } else if (pageId === 'entrainement-conjugaison-completer') {
    if (heroTitle) heroTitle.textContent = t(['titles', 'completerConjugaison'], 'Compléter — Conjugaison');
    renderCompleter();
  } else if (pageId === 'entrainement-conjugaison-vrai-faux') {
    if (heroTitle) heroTitle.textContent = t(['titles', 'vraiFauxConjugaison'], 'Vrai / Faux — Conjugaison');
    renderVraiFaux();
  } else if (pageId === 'entrainement-a1-mots-meles') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'motsMeles'], 'Mots mêlés'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderMotsMeles();
  } else if (pageId === 'entrainement-a1-anagrammes') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'anagrammes'], 'Anagrammes'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderAnagrammes();
  } else if (pageId === 'entrainement-a1-flashcards') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'flashcards'], 'Flashcards'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderFlashcards();
  } else if (pageId === 'entrainement-a1-dialogue') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'dialogue'], 'Dialogue'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderDialogue();
  } else if (pageId === 'entrainement-a1-construire') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'construire'], 'Construire une phrase'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderConstruire();
  } else if (pageId === 'entrainement-a1-validation') {
    if (heroTitle) heroTitle.textContent = titleWithEntry(t(['titles', 'valider'], 'Valider le vocabulaire'));
    if (heroSub)   heroSub.textContent   = entry ? entry.level + ' · Unité ' + badge : 'A1';
    renderValidation();
  }
}());
