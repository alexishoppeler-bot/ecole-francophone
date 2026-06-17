'use strict';

(function initCourseUnit() {
  var ef                 = window._ef;
  var pageId             = ef.pageId;
  var UNIT_STATUS        = ef.UNIT_STATUS;
  var UNIT_NAV           = ef.UNIT_NAV;
  var UNIT_PROG          = ef.UNIT_PROG;
  var resolveUrl         = ef.resolveUrl;
  var pageKeyFromHref    = ef.pageKeyFromHref;
  var readProgress       = ef.readProgress;
  var updateProgress     = ef.updateProgress;
  var getProgressState   = ef.getProgressState;
  var getPrevNext        = ef.getPrevNext;
  var getStatusLabel     = ef.getStatusLabel;
  var entryByPage        = ef.entryByPage;
  var sections           = ef.sections;
  var BRAND              = ef.BRAND;
  var COURSE_BACK        = ef.COURSE_BACK;
  var slotSidebar        = ef.slotSidebar;

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
    const neighbors = getPrevNext(pageKeyFromHref(entry.href));
    return [
      '<section class="unite-section">',
      '  <div class="course-nav-links">',
      neighbors.prev
        ? '    <a class="course-nav-link course-nav-link--prev" href="' + resolveUrl(neighbors.prev.href) + '"><span>' + UNIT_NAV.prev + '</span><strong>' + neighbors.prev.label + '</strong></a>'
        : '    <span class="course-nav-link course-nav-link--ghost"><span>' + UNIT_NAV.courseStart + '</span><strong>' + entry.sectionTitle + '</strong></span>',
      neighbors.next
        ? '    <a class="course-nav-link course-nav-link--next" href="' + resolveUrl(neighbors.next.href) + '"><span>' + UNIT_NAV.next + '</span><strong>' + neighbors.next.label + '</strong></a>'
        : '    <span class="course-nav-link course-nav-link--ghost"><span>' + UNIT_NAV.courseEnd + '</span><strong>' + UNIT_NAV.courseEndMsg + '</strong></span>',
      '  </div>',
      '</section>'
    ].join('');
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function(ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function buildSmartObjectives(entry, unitContent, verbData) {
    if (unitContent.objectives && unitContent.objectives.length) {
      return unitContent.objectives;
    }

    var themes = (entry.themes || []).slice(0, 3).join(', ');
    var vocabWords = (unitContent.vocabulary || []).slice(0, 4).map(function(item) {
      return item.word;
    }).join(', ');
    var verbs = (verbData.verbs || []).slice(0, 3).join(', ');
    var focus = entry.focus || entry.summary || entry.label;
    var grammar = unitContent.grammarTitle || 'les structures utiles';
    var objectives = [
      'Comprendre le thème de l\'unité : ' + entry.label + '.',
      themes
        ? 'Repérer les idées et mots-clés liés à : ' + themes + '.'
        : 'Repérer les idées principales et les mots importants de l\'unité.',
      vocabWords
        ? 'Utiliser le vocabulaire essentiel : ' + vocabWords + '.'
        : 'Réutiliser le vocabulaire essentiel dans des phrases simples.',
      'Communiquer pour ' + focus + '.',
      'Observer et réutiliser : ' + grammar + '.'
    ];

    if (verbs) {
      objectives.push('Conjuguer et employer les verbes utiles : ' + verbs + '.');
    }

    return objectives;
  }

  function normalizeFinalChoices(choices, answer, index) {
    var clean = [];
    (choices || []).forEach(function(choice, choiceIndex) {
      var text = String(choice || '').trim();
      if (!text || clean.some(function(item) { return item.text === text; })) return;
      clean.push({ text: text, correct: choiceIndex === answer });
    });
    if (!clean.some(function(item) { return item.correct; }) && clean.length) {
      clean[0].correct = true;
    }
    if (clean.length > 1) {
      var offset = index % clean.length;
      clean = clean.slice(offset).concat(clean.slice(0, offset));
    }
    return {
      choices: clean.map(function(item) { return item.text; }),
      answer: clean.findIndex(function(item) { return item.correct; })
    };
  }

  function buildFinalTestItems(entry, unitContent, verbData) {
    if (unitContent.finalTest && unitContent.finalTest.length) {
      return unitContent.finalTest.map(function(question, index) {
        var normalized = normalizeFinalChoices(question.choices, question.answer, index);
        return { prompt: question.prompt, choices: normalized.choices, answer: normalized.answer };
      }).filter(function(item) { return item.choices.length > 1 && item.answer >= 0; });
    }

    var items = [];
    (entry.assessment || []).slice(0, 4).forEach(function(question) {
      var normalized = normalizeFinalChoices(question.choices, question.answer, items.length);
      if (normalized.choices.length > 1 && normalized.answer >= 0) {
        items.push({
          prompt: question.prompt,
          choices: normalized.choices,
          answer: normalized.answer
        });
      }
    });

    var vocab = unitContent.vocabulary || [];
    vocab.slice(0, 3).forEach(function(item) {
      var distractors = vocab.filter(function(other) { return other.word !== item.word; }).slice(0, 2).map(function(other) {
        return other.definition;
      });
      if (distractors.length < 2) distractors = distractors.concat(['une autre idée du thème', 'une réponse sans rapport']);
      var normalized = normalizeFinalChoices([item.definition].concat(distractors), 0, items.length);
      if (item.word && normalized.choices.length > 1 && normalized.answer >= 0) {
        items.push({
          prompt: 'Que signifie "' + item.word + '" ?',
          choices: normalized.choices,
          answer: normalized.answer
        });
      }
    });

    (verbData.verbs || []).slice(0, 2).forEach(function(verb) {
      var forms = conjugateVerb(verb);
      var normalized = normalizeFinalChoices([forms[0], forms[1], forms[3]], 0, items.length);
      if (verb && normalized.choices.length > 1 && normalized.answer >= 0) {
        items.push({
          prompt: 'Quelle forme est correcte pour "' + verb + '" avec "je" ?',
          choices: normalized.choices,
          answer: normalized.answer
        });
      }
    });

    return items.slice(0, 10);
  }

  function buildFinalTest(entry, unitContent, verbData, objectives) {
    var items = buildFinalTestItems(entry, unitContent, verbData);
    if (!items.length) {
      return '<div class="final-unit-test"><h4>Test final</h4><p>Le test final sera disponible dès que l\'unité contient des questions d\'évaluation.</p></div>';
    }

    var objectiveCount = objectives && objectives.length ? objectives.length : items.length;
    var objectivePreview = '<div class="final-objective-progress" id="finalObjectiveProgress">'
      + '<div class="final-objective-progress-head"><strong>Objectifs à valider</strong><span id="finalObjectiveProgressText">0 / ' + objectiveCount + ' validés</span></div>'
      + '<div class="final-objective-progress-bar"><span id="finalObjectiveProgressFill" style="width:0%"></span></div>'
      + '<ul class="final-objective-list" id="finalObjectiveList">'
      + (objectives || []).map(function(objective, index) {
        return '<li data-final-objective="' + index + '"><span class="final-objective-check">✓</span><span>' + objective + '</span></li>';
      }).join('')
      + '</ul>'
      + '</div>';

    return '<form class="final-unit-test" id="finalUnitTest" data-total="' + items.length + '">'
      + '<h4>Validation finale des objectifs</h4>'
      + '<p>Répondez aux questions après les entraînements. À chaque bonne réponse, vos objectifs se remplissent. Objectif final : 80% ou plus.</p>'
      + objectivePreview
      + items.map(function(item, index) {
        return '<fieldset class="course-check-item final-test-item" data-answer="' + item.answer + '">'
          + '<legend>' + (index + 1) + '. ' + escapeHtml(item.prompt) + '</legend>'
          + item.choices.map(function(choice, choiceIndex) {
            return '<label class="course-check-choice"><input type="radio" name="final-test-' + index + '" value="' + choiceIndex + '"><span>' + escapeHtml(choice) + '</span></label>';
          }).join('')
          + '</fieldset>';
      }).join('')
      + '<div class="course-check-actions">'
      + '<button class="game-btn game-btn--primary" type="submit">Corriger le test final</button>'
      + '<span class="course-check-result" id="finalUnitResult"></span>'
      + '</div>'
      + '</form>';
  }

  function buildCommunicationCascade(entry, unitContent, chipsHtml) {
    var key = pageKeyFromHref(entry.href);
    var dialogues = (DIALOGUES && DIALOGUES[key]) || [];
    var firstDialogue = dialogues[0] || null;
    var theme = (entry.themes || [entry.label])[0] || entry.label;
    var SUPPORT_CARDS = (window.COMM_SUPPORTS && window.COMM_SUPPORTS[key]) || [];

    function buildSupportCarousel(cards) {
      if (!cards.length) return '<div class="support-card"><div class="support-card-body"><h4 class="support-card-title">' + escapeHtml(entry.label) + '</h4><p class="support-card-desc">' + escapeHtml(entry.summary || entry.focus || '') + '</p></div></div>';
      var html = '<div class="comm-carousel">'
        + '<div class="comm-carousel-track">'
        + cards.map(function(s, i) {
          return '<div class="comm-carousel-slide' + (i === 0 ? ' active' : '') + '" data-slide="' + i + '">'
            + '<div class="support-card">'
            + '<div class="support-card-img-wrap">'
            + '<img class="support-card-img" src="' + escapeHtml(s.img) + '" alt="' + escapeHtml(s.title) + '" tabindex="0" role="button" aria-label="Agrandir l\'image">'
            + '</div>'
            + '<div class="support-card-body">'
            + '<h4 class="support-card-title">' + escapeHtml(s.title) + '</h4>'
            + (s.consigne ? '<p class="support-card-desc">' + escapeHtml(s.consigne) + '</p>' : '')
            + '</div>'
            + '</div>'
            + '</div>';
        }).join('')
        + '</div>'
        + (cards.length > 1
          ? '<div class="comm-carousel-nav">'
            + '<button type="button" class="comm-carousel-prev" aria-label="Précédent">‹</button>'
            + '<span class="comm-carousel-counter">1 / ' + cards.length + '</span>'
            + '<button type="button" class="comm-carousel-next" aria-label="Suivant">›</button>'
            + '</div>'
          : '')
        + '</div>'
        + '<div class="support-lightbox" hidden>'
        + '<div class="support-lightbox-backdrop"></div>'
        + '<div class="support-lightbox-content">'
        + '<img class="support-lightbox-img" src="" alt="">'
        + '<button class="support-lightbox-close" type="button" aria-label="Fermer">✕</button>'
        + '</div>'
        + '</div>';
      return html;
    }

    var supportHtml = buildSupportCarousel(SUPPORT_CARDS);

    var reading = unitContent.textAuth
      ? '<div class="textauth-box"><p class="textauth-source">' + escapeHtml(unitContent.textAuth.source || 'Texte') + '</p><blockquote class="textauth-text">' + unitContent.textAuth.text + '</blockquote>'
        + ((unitContent.textAuth.questions || []).length ? '<ol class="textauth-questions">' + unitContent.textAuth.questions.map(function(q) {
          return '<li class="textauth-q"><span class="textauth-q-text">' + q.question + '</span><span class="textauth-a">' + q.answer + '</span></li>';
        }).join('') + '</ol>' : '')
        + '</div>'
      : '<div class="comm-mini-text"><strong>' + escapeHtml(entry.label) + '</strong><p>' + escapeHtml(entry.summary || entry.focus || '') + '</p><p>Je lis le texte, je repère les mots importants, puis je réponds avec une phrase courte.</p></div>';

    var readingMcqHtml = '';
    if (unitContent.textAuth && (unitContent.textAuth.mcq || []).length) {
      readingMcqHtml = '<form class="comp-mcq-form" data-comp-form="ecrite">'
        + '<h5 class="comp-mcq-title">Questions de compréhension</h5>'
        + unitContent.textAuth.mcq.map(function(item, index) {
          return '<fieldset class="course-check-item" data-answer="' + item.answer + '" data-explain="' + escapeHtml(item.explanation || '') + '">'
            + '<legend>' + (index + 1) + '. ' + escapeHtml(item.prompt) + '</legend>'
            + item.choices.map(function(choice, ci) {
              return '<label class="course-check-choice"><input type="radio" name="comp-ecrite-' + index + '" value="' + ci + '"><span>' + escapeHtml(choice) + '</span></label>';
            }).join('')
            + '<p class="comp-question-feedback"></p>'
            + '</fieldset>';
        }).join('')
        + '<div class="course-check-actions">'
        + '<button type="submit" class="game-btn game-btn--primary">Corriger</button>'
        + '<button type="button" class="game-btn game-btn--secondary" data-comp-reset="ecrite">Réinitialiser</button>'
        + '<span class="course-check-result"></span>'
        + '</div>'
        + '</form>';
    }

    var oralText = firstDialogue
      ? '<div class="comm-dialogue-box"><strong>' + escapeHtml(firstDialogue.title || 'Dialogue') + '</strong><p>' + escapeHtml(firstDialogue.context || '') + '</p>'
        + '<ol>' + (firstDialogue.steps || []).map(function(step) {
          if (step.text) return '<li>' + escapeHtml(step.text) + '</li>';
          if (step.options && step.options.length) return '<li>' + escapeHtml((step.options.find(function(opt) { return opt.ok; }) || step.options[0]).text) + '</li>';
          return '';
        }).join('') + '</ol></div>'
      : '<div class="comm-dialogue-box"><strong>Dialogue modèle</strong><ol><li>Bonjour, je voudrais parler de ' + escapeHtml(theme) + '.</li><li>D’accord. Qu’est-ce qui est important ?</li><li>Je pense que ' + escapeHtml(entry.focus || entry.summary || theme) + '.</li></ol></div>';

    var listeningHtml = '';
    if (unitContent.listeningMcq) {
      var lm = unitContent.listeningMcq;
      listeningHtml = '<div class="comp-tts-box">'
        + '<div class="comp-tts-header">'
        + '<div class="comp-tts-header-icon" aria-hidden="true">🔊</div>'
        + '<div class="comp-tts-header-text">'
        + '<strong>' + escapeHtml(lm.title || 'Texte audio') + '</strong>'
        + (lm.context ? '<p class="comp-tts-context">' + escapeHtml(lm.context) + '</p>' : '')
        + '</div>'
        + '</div>'
        + '<div class="comp-tts-controls">'
        + '<button class="game-btn game-btn--primary comp-tts-play" data-comp-play="orale" type="button">▶ Écouter</button>'
        + '<button class="game-btn game-btn--secondary comp-tts-stop" data-comp-stop="orale" type="button" disabled>■ Arrêter</button>'
        + '<span class="comp-tts-rates">'
        + '<button class="comp-rate-btn" data-comp-rate="orale" data-rate="0.7" type="button">Lent</button>'
        + '<button class="comp-rate-btn comp-rate-btn--active" data-comp-rate="orale" data-rate="0.9" type="button">Normal</button>'
        + '<button class="comp-rate-btn" data-comp-rate="orale" data-rate="1.2" type="button">Rapide</button>'
        + '</span>'
        + '</div>'
        + '<ol class="comp-dialogue comp-dialogue--audio-only" aria-hidden="true">'
        + (lm.script || []).map(function(line, i) {
          return '<li data-comp-i="' + i + '"><span class="comp-txt">' + escapeHtml(line.text) + '</span></li>';
        }).join('')
        + '</ol>'
        + '</div>'
        + ((lm.mcq || []).length ? '<form class="comp-mcq-form" data-comp-form="orale">'
          + '<h5 class="comp-mcq-title">Questions de compréhension</h5>'
          + lm.mcq.map(function(item, index) {
            return '<fieldset class="course-check-item" data-answer="' + item.answer + '" data-explain="' + escapeHtml(item.explanation || '') + '">'
              + '<legend>' + (index + 1) + '. ' + escapeHtml(item.prompt) + '</legend>'
              + item.choices.map(function(choice, ci) {
                return '<label class="course-check-choice"><input type="radio" name="comp-orale-' + index + '" value="' + ci + '"><span>' + escapeHtml(choice) + '</span></label>';
              }).join('')
              + '<p class="comp-question-feedback"></p>'
              + '</fieldset>';
          }).join('')
          + '<div class="course-check-actions">'
          + '<button type="submit" class="game-btn game-btn--primary">Corriger</button>'
          + '<button type="button" class="game-btn game-btn--secondary" data-comp-reset="orale">Réinitialiser</button>'
          + '<span class="course-check-result"></span>'
          + '</div>'
          + '</form>' : '');
    }

    var oralScenarios = (unitContent.oralProduction && unitContent.oralProduction.scenarios) || [
      { situation: 'Présentez-vous : dites votre nom, d\'où vous venez et quelle langue vous parlez.', consigne: 'Dites : « Je m\'appelle…, je viens de…, je parle… »' },
      { situation: 'Décrivez un pays francophone : où il se trouve, quelle est sa capitale, quelle langue on y parle.', consigne: 'Dites : « C\'est en…, la capitale est…, on parle… »' },
      { situation: 'Expliquez où se trouve la Suisse romande et citez des villes que vous connaissez.', consigne: 'Dites : « La Suisse romande se trouve…, il y a…, à Genève on parle… »' }
    ];
    var oralProduction = '<div class="unit-practice-box"><strong>🗣️ Production orale</strong>'
      + '<p>Choisissez un scénario, cliquez sur 🎙️ et parlez. Le site écoute votre voix et vous aide à corriger.</p>'
      + '</div>'
      + '<div class="oral-scenarios">'
      + oralScenarios.map(function(s, i) {
        return '<div class="oral-scenario-card" data-scenario="' + i + '">'
          + '<div class="oral-scenario-num">Scénario ' + (i + 1) + '</div>'
          + '<p class="oral-scenario-situation">' + escapeHtml(s.situation) + '</p>'
          + '<p class="oral-scenario-consigne">💡 ' + escapeHtml(s.consigne) + '</p>'
          + '<div class="oral-recorder">'
          + '<button type="button" class="oral-rec-btn" data-rec-start><span class="oral-rec-icon">🎙️</span> Enregistrer ma voix</button>'
          + '<button type="button" class="oral-rec-btn oral-rec-btn--stop" data-rec-stop hidden><span class="oral-rec-icon oral-rec-pulse">⏺</span> Arrêter</button>'
          + '<div class="oral-transcript" data-rec-transcript hidden>'
          + '<div class="oral-transcript-label">Ce que vous avez dit :</div>'
          + '<p class="oral-transcript-text"></p>'
          + '<div class="oral-correction" data-rec-correction></div>'
          + '</div>'
          + '</div>'
          + '</div>';
      }).join('')
      + '</div>';

    var writtenScenarios = (unitContent.writtenProduction && unitContent.writtenProduction.scenarios) || [
      { task: 'Présentez votre pays d\'origine en 5 phrases. Où est-il ? Quelle langue parle-t-on ? Comment s\'appelle la capitale ?', consigne: 'Utilisez : en, au, à, c\'est un pays…' },
      { task: 'Écrivez un petit texte pour expliquer pourquoi vous apprenez le français en Suisse.', consigne: 'Utilisez : j\'apprends, j\'habite à, je veux…' },
      { task: 'Décrivez la Suisse romande en quelques phrases : où est-elle, quelles villes connaissez-vous, quelle langue parle-t-on ?', consigne: 'Utilisez le vocabulaire de l\'unité.' }
    ];
    var writtenProduction = '<div class="unit-practice-box"><strong>✍️ Production écrite</strong>'
      + '<p>Écrivez votre texte dans la zone sous chaque sujet.</p>'
      + '</div>'
      + '<div class="written-scenarios">'
      + writtenScenarios.map(function(s, i) {
        return '<div class="written-scenario-card">'
          + '<div class="written-scenario-num">Sujet ' + (i + 1) + '</div>'
          + '<p class="written-scenario-task">' + escapeHtml(s.task) + '</p>'
          + '<p class="written-scenario-consigne">💡 ' + escapeHtml(s.consigne) + '</p>'
          + '<div class="written-editor">'
          + '<textarea class="written-editor-textarea" data-written-idx="' + i + '" rows="6" placeholder="Écrivez ici…" spellcheck="true" lang="fr"></textarea>'
          + '<div class="written-editor-footer">'
          + '<span class="written-editor-count">0 mot(s)</span>'
          + '<button type="button" class="game-btn game-btn--primary written-check-btn" data-check-idx="' + i + '">Corriger mon texte</button>'
          + '</div>'
          + '<div class="written-correction" data-correction-idx="' + i + '"></div>'
          + '</div>'
          + '</div>';
      }).join('')
      + '</div>';
    var MEMO_KEY = 'ef:memo:' + key;
    var savedMemo = '';
    try { savedMemo = localStorage.getItem(MEMO_KEY) || ''; } catch(e) {}

    var memo = '<div class="memo-notepad">'
      + '<div class="memo-notepad-header">'
      + '<span class="memo-notepad-title">📝 Mes notes</span>'
      + '<span class="memo-notepad-hint">Vos notes sont enregistrées automatiquement sur cet appareil.</span>'
      + '</div>'
      + '<textarea class="memo-notepad-textarea" id="memoText" rows="10" placeholder="Écrivez vos notes ici : mots importants, règles à retenir, phrases utiles…">' + escapeHtml(savedMemo) + '</textarea>'
      + '<div class="memo-notepad-footer">'
      + '<button type="button" class="game-btn game-btn--secondary" id="memoDownload">⬇ Télécharger mes notes</button>'
      + '</div>'
      + '</div>';

    var readingTextOnly = unitContent.textAuth
      ? '<div class="textauth-box"><p class="textauth-source">' + escapeHtml(unitContent.textAuth.source || '') + '</p><blockquote class="textauth-text">' + unitContent.textAuth.text + '</blockquote></div>'
      : '';

    var compSteps = [];

    if (readingMcqHtml) {
      compSteps.push({ title: '📖 Compréhension écrite', body: readingTextOnly + readingMcqHtml });
    }
    if (listeningHtml) {
      compSteps.push({ title: '🔊 Compréhension orale', body: listeningHtml });
    }
    if (!compSteps.length) {
      compSteps.push({ title: '📖 Compréhension', body: reading });
      compSteps.push({ title: '🔊 Compréhension orale', body: oralText });
    }

    var extra = unitContent.comprehensionExtra;
    if (extra) {
      if (extra.vraiFaux && extra.vraiFaux.length) {
        compSteps.push({ title: '✅ Vrai ou Faux', body:
          '<form class="comp-vf-form" data-comp-form="vf">'
          + extra.vraiFaux.map(function(item, i) {
            return '<div class="comp-vf-item" data-vf-answer="' + (item.answer ? 'true' : 'false') + '" data-vf-correction="' + escapeHtml(item.correction || '') + '">'
              + '<p class="comp-vf-statement">' + (i + 1) + '. ' + escapeHtml(item.statement) + '</p>'
              + '<div class="comp-vf-buttons">'
              + '<button type="button" class="comp-vf-btn" data-vf-choice="true">Vrai</button>'
              + '<button type="button" class="comp-vf-btn" data-vf-choice="false">Faux</button>'
              + '</div>'
              + '<p class="comp-vf-feedback"></p>'
              + '</div>';
          }).join('')
          + '</form>'
        });
      }
      if (extra.completer && extra.completer.length) {
        compSteps.push({ title: '✏️ Complétez les phrases', body:
          '<form class="comp-fill-form" data-comp-form="fill">'
          + extra.completer.map(function(item, i) {
            var parts = item.phrase.split('___');
            return '<div class="comp-fill-item" data-fill-answer="' + escapeHtml(item.answer.toLowerCase()) + '">'
              + '<label>' + (i + 1) + '. ' + escapeHtml(parts[0]) + '<input type="text" class="comp-fill-input" placeholder="…" autocomplete="off">' + escapeHtml(parts[1] || '') + '</label>'
              + '<p class="comp-fill-feedback"></p>'
              + '</div>';
          }).join('')
          + '<div class="course-check-actions"><button type="submit" class="game-btn game-btn--primary">Corriger</button></div>'
          + '</form>'
        });
      }
      if (extra.associer && extra.associer.length) {
        var shuffled = extra.associer.slice().sort(function() { return Math.random() - 0.5; });
        compSteps.push({ title: '🔗 Associez', body:
          '<div class="comp-match-grid">'
          + '<div class="comp-match-col">' + extra.associer.map(function(item, i) {
            return '<div class="comp-match-left" data-match-idx="' + i + '">' + escapeHtml(item.left) + '</div>';
          }).join('') + '</div>'
          + '<div class="comp-match-col">' + shuffled.map(function(item) {
            var origIdx = extra.associer.indexOf(item);
            return '<div class="comp-match-right" data-match-idx="' + origIdx + '">' + escapeHtml(item.right) + '</div>';
          }).join('') + '</div>'
          + '</div>'
        });
      }
    }

    var comprehensionHtml = '<div class="comp-steps" data-comp-total="' + compSteps.length + '">'
      + '<div class="comp-steps-progress"><span class="comp-steps-counter">Exercice 1 / ' + compSteps.length + '</span></div>'
      + compSteps.map(function(step, i) {
        return '<div class="comp-step' + (i === 0 ? ' active' : '') + '" data-comp-step="' + i + '"' + (i === 0 ? '' : ' hidden') + '>'
          + '<h4>' + step.title + '</h4>'
          + step.body
          + '</div>';
      }).join('')
      + '<div class="comp-steps-nav">'
      + '<button type="button" class="game-btn game-btn--secondary comp-step-prev" disabled>← Précédent</button>'
      + '<button type="button" class="game-btn game-btn--primary comp-step-next">Suivant →</button>'
      + '</div>'
      + '</div>';

    var panels = [
      ['support', '1. Support', supportHtml],
      ['comprehension', '2. Compréhension', comprehensionHtml],
      ['oral', '3. Production orale', oralProduction],
      ['ecrit', '4. Production écrite', writtenProduction],
      ['memo', '5. Mémo', memo]
    ];

    return '<div class="comm-cascade">'
      + '<div class="comm-cascade-tabs" role="tablist" aria-label="Communication">'
      + panels.map(function(panel, index) {
        return '<button class="comm-cascade-btn' + (index === 0 ? ' active' : '') + '" type="button" data-comm-tab="' + panel[0] + '">' + panel[1] + '</button>';
      }).join('')
      + '</div>'
      + panels.map(function(panel, index) {
        return '<div class="comm-cascade-panel' + (index === 0 ? ' active' : '') + '" data-comm-panel="' + panel[0] + '"' + (index === 0 ? '' : ' hidden') + '>' + panel[2] + '</div>';
      }).join('')
      + '</div>';
  }

  function buildUnitMarkup(entry) {
    const unitContent = getUnitContent(entry);
    const verbData = getVerbData(entry);
    var currentStatus = getProgressState(pageKeyFromHref(entry.href));

    function tabButton(id, icon, label, active) {
      return '<button class="unit-tab-btn' + (active ? ' active' : '') + '" type="button" role="tab" aria-selected="' + (active ? 'true' : 'false') + '" aria-controls="tab-' + id + '" data-tab="' + id + '">'
        + '<span aria-hidden="true">' + icon + '</span><span>' + label + '</span>'
        + '</button>';
    }

    function tabPanel(id, title, body, active, index) {
      return '<section class="unite-section unit-tab-panel' + (active ? ' active' : '') + '" id="tab-' + id + '" role="tabpanel" data-tab-panel="' + id + '" style="--section-i:' + index + '"' + (active ? '' : ' hidden') + '>'
        + '<h3 class="unite-section-title">' + title + '</h3>'
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
    var tabs = [
      ['objectifs', '🎯', 'Objectifs'],
      ['communication', '💬', 'Communication'],
      ['grammaire', '📐', 'Grammaire'],
      ['conjugaison', '🔄', 'Conjugaison'],
      ['vocabulaire', '📖', 'Vocabulaire'],
      ['phonetique', '🔊', 'Phonétique'],
      ['progression', '📊', 'Progression']
    ];

    var smartObjectives = buildSmartObjectives(entry, unitContent, verbData);
    var objCount = smartObjectives.length;
    var objectivesBody = '<div class="obj-progress-bar-wrap" id="objProgressWrap" aria-hidden="true">'
      + '<div class="obj-progress-bar-track"><span class="obj-progress-bar-fill" id="objProgressFill" style="width:0%"></span></div>'
      + '<span class="obj-progress-bar-label" id="objProgressLabel">0 / ' + objCount + ' validés</span>'
      + '</div>'
      + '<ul class="unite-obj-list">'
      + smartObjectives.map(function(obj, i) { return '<li data-final-objective="' + i + '">' + obj + '</li>'; }).join('')
      + '</ul>';

    var communicationBody = '<div class="comm-presential-notice">🏫 Cette partie se fait exclusivement en cours, avec votre enseignant·e.</div>'
      + buildCommunicationCascade(entry, unitContent, chipsHtml);

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

    var conjCards = verbData.verbs.map(function(v) {
      var forms = conjugateVerb(v);
      var rows = forms.map(function(f) {
        return '<div class="conj-row">'
          + '<button class="chip-listen" aria-label="Écouter" data-word="' + f.replace(/"/g, '&quot;') + '">🔊</button>'
          + '<span class="conj-form">' + f + '</span>'
          + '</div>';
      }).join('');
      return '<div class="conj-card">'
        + '<div class="conj-card-head">' + v + '</div>'
        + '<div class="conj-card-body">' + rows + '</div>'
        + '</div>';
    }).join('');
    var conjugaisonBody = '<div class="conj-controls">'
      + '<button class="game-btn game-btn--secondary conj-toggle-reveal" type="button" data-revealed="true">🙈 Masquer les formes</button>'
      + '</div>'
      + '<div class="conj-grid" id="conjGrid">' + conjCards + '</div>'
      + '<div class="unit-practice-box"><strong>Exercice conjugaison</strong><p>Masquez les formes, puis cliquez sur 🔊 pour entendre — dites la forme avant d\'écouter. Ensuite révélez pour vérifier.</p></div>';

    // Vocabulaire : groupes thématiques si disponibles, sinon grille normale
    var vocabBody;
    if (unitContent.vocabGroups && unitContent.vocabGroups.length) {
      var vocabByWord = {};
      unitContent.vocabulary.forEach(function(item) { vocabByWord[item.word] = item; });
      var groupsHtml = unitContent.vocabGroups.map(function(grp) {
        var cards = grp.words.map(function(w) {
          var item = vocabByWord[w];
          if (!item) return '';
          return '<div class="vocab-card" data-vocab-word="' + escapeHtml(item.word) + '" data-vocab-def="' + escapeHtml(item.definition) + '">'
            + '<button class="vocab-listen" aria-label="Écouter" data-word="' + item.word.replace(/"/g, '&quot;') + '">🔊</button>'
            + '<span class="vocab-word">' + item.word + '</span>'
            + '<span class="vocab-def vocab-def--quiz-target">' + item.definition + '</span>'
            + '</div>';
        }).join('');
        return '<div class="vocab-group">'
          + '<div class="vocab-group-label">' + escapeHtml(grp.label) + '</div>'
          + '<div class="vocab-grid">' + cards + '</div>'
          + '</div>';
      }).join('');
      vocabBody = '<div class="vocab-controls">'
        + '<button class="game-btn game-btn--secondary vocab-quiz-toggle" type="button" data-quiz="false">🧠 Mode quiz — masquer définitions</button>'
        + '</div>'
        + '<div class="vocab-groups" id="vocabGroups">' + groupsHtml + '</div>'
        + '<div class="unit-practice-box"><strong>Exercice vocabulaire</strong><p>Activez le mode quiz : masquez les définitions, regardez le mot, devinez — puis cliquez sur la carte pour révéler.</p></div>';
    } else {
      vocabBody = '<div class="vocab-grid">' + vocab + '</div>'
        + '<div class="unit-practice-box"><strong>Exercice vocabulaire</strong><p>Choisissez cinq mots, écoutez-les, puis associez chaque mot à une situation réelle.</p></div>';
    }

    // Phonétique : sons cibles + paires minimales si données disponibles, sinon mots cliquables
    var phonetiqueBody;
    if (unitContent.phonetique) {
      var ph = unitContent.phonetique;
      var soundsHtml = (ph.targetSounds || []).map(function(s) {
        return '<div class="phon-sound-card">'
          + '<div class="phon-sound-symbol">' + s.sound + '</div>'
          + '<div class="phon-sound-label">' + escapeHtml(s.label) + '</div>'
          + '<div class="phon-sound-examples">'
          + s.examples.map(function(ex) {
            return '<button class="phon-chip chip-listen" type="button" data-word="' + ex.replace(/"/g, '&quot;') + '">' + escapeHtml(ex) + '</button>';
          }).join('')
          + '</div></div>';
      }).join('');
      var pairsHtml = (ph.minimalPairs || []).map(function(pair) {
        return '<div class="phon-pair-card">'
          + '<div class="phon-pair-words">'
          + '<button class="phon-pair-word chip-listen" data-word="' + pair.a.replace(/"/g, '&quot;') + '">'
          + escapeHtml(pair.a) + '<span class="phon-ipa">' + escapeHtml(pair.ipa_a) + '</span></button>'
          + '<span class="phon-pair-vs">≠</span>'
          + '<button class="phon-pair-word chip-listen" data-word="' + pair.b.replace(/"/g, '&quot;') + '">'
          + escapeHtml(pair.b) + '<span class="phon-ipa">' + escapeHtml(pair.ipa_b) + '</span></button>'
          + '</div>'
          + '<p class="phon-pair-note">' + escapeHtml(pair.note) + '</p>'
          + '</div>';
      }).join('');
      var syllabesHtml = (ph.syllabes || []).map(function(s) {
        return '<div class="phon-syllabe-card">'
          + '<button class="phon-syllabe-word chip-listen" type="button" data-word="' + s.word.replace(/"/g, '&quot;') + '">'
          + '<span class="phon-syllabe-original">' + escapeHtml(s.word) + '</span>'
          + '<span class="phon-syllabe-split">' + escapeHtml(s.split) + '</span>'
          + '<span class="phon-syllabe-ipa">' + escapeHtml(s.ipa) + '</span>'
          + '</button>'
          + '</div>';
      }).join('');

      phonetiqueBody = '<div class="unit-practice-box"><strong>Écoute et répétition</strong><p>Cliquez sur les mots pour entendre, puis répétez syllabe par syllabe. Faites attention aux sons nasals et au « r » français.</p></div>'
        + (syllabesHtml ? '<h4 class="phon-section-title">Prononciation par syllabes</h4><div class="phon-syllabes-grid">' + syllabesHtml + '</div>' : '')
        + (soundsHtml ? '<h4 class="phon-section-title">Sons ciblés</h4><div class="phon-sounds-grid">' + soundsHtml + '</div>' : '')
        + (pairsHtml ? '<h4 class="phon-section-title">Paires minimales</h4><div class="phon-pairs-grid">' + pairsHtml + '</div>' : '');
    } else {
      var phonWords = unitContent.vocabulary.slice(0, 8).map(function(item) {
        return '<button class="phon-chip chip-listen" type="button" data-word="' + item.word.replace(/"/g, '&quot;') + '">' + item.word + '</button>';
      }).join('');
      phonetiqueBody = '<div class="unit-practice-box"><strong>Écoute et répétition</strong><p>Cliquez sur les mots, écoutez, puis répétez lentement. Faites attention aux sons, au rythme et aux liaisons possibles.</p></div>'
        + '<div class="phon-chip-grid">' + phonWords + '</div>';
    }


    var progressLabel = getStatusLabel(currentStatus, entry.level);
    var finalTestBody = buildFinalTest(entry, unitContent, verbData, smartObjectives);
    var progressionBody = '<div class="unit-progress-animated-grid">'
      + '<div class="unit-progress-animated-card unit-progress-animated-card--status" data-current-status="' + currentStatus + '" style="--progress-i:0">'
      + '<span class="unit-progress-kicker">' + UNIT_PROG.sectionKicker + '</span><strong id="unitProgressStatus">' + progressLabel + '</strong><p>' + UNIT_PROG.sectionBody + '</p>'
      + '<button class="game-btn game-btn--secondary" type="button" data-progress-action="started">' + UNIT_PROG.markStarted + '</button>'
      + '</div>'
      + '<a class="unit-progress-animated-card unit-progress-animated-card--final" href="#finalUnitTest" style="--progress-i:2">'
      + '<span class="unit-progress-kicker">Validation</span><strong>Test final</strong><p>Répondez aux questions pour remplir les objectifs.</p>'
      + '</a>'
      + '</div>'
      + finalTestBody
      + buildNavigation(entry);

    return '<nav class="unit-tabs" role="tablist" aria-label="Menu de l\'unité">'
      + tabs.map(function(tab, index) { return tabButton(tab[0], tab[1], tab[2], index === 0); }).join('')
      + '</nav>'
      + tabPanel('objectifs', '<span class="unite-section-icon" aria-hidden="true">🎯</span>Objectifs', objectivesBody, true, 0)
      + tabPanel('communication', '<span class="unite-section-icon" aria-hidden="true">💬</span>Communication', communicationBody, false, 1)
      + tabPanel('grammaire', '<span class="unite-section-icon" aria-hidden="true">📐</span>Grammaire', grammarBody, false, 2)
      + tabPanel('conjugaison', '<span class="unite-section-icon" aria-hidden="true">🔄</span>Conjugaison', conjugaisonBody, false, 3)
      + tabPanel('vocabulaire', '<span class="unite-section-icon" aria-hidden="true">📖</span>Vocabulaire', vocabBody, false, 4)
      + tabPanel('phonetique', '<span class="unite-section-icon" aria-hidden="true">🔊</span>Phonétique', phonetiqueBody, false, 5)
      + tabPanel('progression', '<span class="unite-section-icon" aria-hidden="true">📊</span>Progression', progressionBody, false, 6);
  }

  function getUnitContent(entry) {
    const byPage = UNIT_CONTENT;
        const key = pageKeyFromHref(entry.href);
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
      'sous-entendre':['sous-entends','sous-entends','sous-entend','sous-entendons','sous-entendez','sous-entendent'],
      'découvrir':    ['découvre','découvres','découvre','découvrons','découvrez','découvrent'],
      'couvrir':      ['couvre','couvres','couvre','couvrons','couvrez','couvrent'],
      'offrir':       ['offre','offres','offre','offrons','offrez','offrent'],
      'ouvrir':       ['ouvre','ouvres','ouvre','ouvrons','ouvrez','ouvrent'],
      'situer':       ['situe','situes','situe','situons','situez','situent']
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
        const key = pageKeyFromHref(entry.href);
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
    if (form && result) {
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
  }

  function bindFinalUnitTest(entry) {
    const form = document.getElementById('finalUnitTest');
    const result = document.getElementById('finalUnitResult');
    if (!form || !result || !entry) return;
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const fields = Array.from(form.querySelectorAll('.final-test-item'));
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
        result.textContent = 'Répondez aux ' + fields.length + ' questions pour corriger le test.';
        return;
      }

      var pct = fields.length ? Math.round(score / fields.length * 100) : 0;
      var objectives = Array.from(document.querySelectorAll('[data-final-objective]'));
      var objectiveTotal = objectives.length || fields.length;
      var objectiveDone = Math.min(objectiveTotal, Math.round(objectiveTotal * pct / 100));
      objectives.forEach(function(item, index) {
        item.classList.toggle('is-done', index < objectiveDone);
      });
      var objectiveText = document.getElementById('finalObjectiveProgressText');
      var objectiveFill = document.getElementById('finalObjectiveProgressFill');
      if (objectiveText) objectiveText.textContent = objectiveDone + ' / ' + objectiveTotal + ' validés';
      if (objectiveFill) objectiveFill.style.width = pct + '%';
      // Sync barre de progression dans l'onglet Objectifs
      var objLabel = document.getElementById('objProgressLabel');
      var objFill = document.getElementById('objProgressFill');
      if (objLabel) objLabel.textContent = objectiveDone + ' / ' + objectiveTotal + ' validés';
      if (objFill) objFill.style.width = pct + '%';

      if (pct < 80) {
        result.textContent = 'Score : ' + score + ' / ' + fields.length + ' (' + pct + '%). Vous avancez : ' + objectiveDone + ' objectif(s) se remplissent déjà. Reprenez les onglets et les jeux, puis réessayez.';
        updateProgress(pageKeyFromHref(entry.href), 'started');
        var startedLabel = document.getElementById('unitProgressStatus');
        if (startedLabel) startedLabel.textContent = getStatusLabel('started', entry.level);
        syncStatusDecorations();
        return;
      }

      updateProgress(pageKeyFromHref(entry.href), 'completed');
      result.textContent = 'Score : ' + score + ' / ' + fields.length + ' (' + pct + '%). Bravo, les objectifs sont validés. Unité terminée.';
      var completedLabel = document.getElementById('unitProgressStatus');
      if (completedLabel) completedLabel.textContent = getStatusLabel('completed', entry.level);
      syncStatusDecorations();
    });
  }

  function enhanceUnitPage(entry) {
    if (!entry) return;
    const hero = document.querySelector('.unite-hero');
    const title = document.querySelector('.unite-hero-title');
    const sectionsWrap = document.querySelector('.unite-sections');
    const back = document.querySelector('.cours-back');
    if (!hero || !title || !sectionsWrap) return;
    var pageWrap = document.querySelector('.page-wrap');
    if (pageWrap) pageWrap.classList.add('page-wrap--no-sidebar');
    if (slotSidebar) slotSidebar.remove();
    if (back && !back.dataset.keepLabel) back.textContent = COURSE_BACK.unit;
    document.title = BRAND.courseTitlePrefix + ' | Unité ' + entry.badge + ' — ' + entry.label;

    // Remplir le hero depuis les données (permet un template HTML générique)
    hero.className = 'unite-hero ' + (entry.tone || '');
    var badgeNum = hero.querySelector('.unite-hero-badge-num');
    if (badgeNum) badgeNum.textContent = entry.badge;
    var heroTag = hero.querySelector('.unite-hero-tag');
    if (heroTag) heroTag.textContent = (entry.level || '') + ' · ' + (entry.kind || 'Unité');
    title.textContent = entry.label;
    var heroIcon = hero.querySelector('.unite-hero-icon');
    if (heroIcon) heroIcon.textContent = entry.iconSymbol || '📘';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.name = 'description'; document.head.appendChild(metaDesc); }
    metaDesc.content = entry.level + ' · ' + entry.label + ' — ' + (entry.summary || entry.focus || entry.description || '');

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

    function imageSlotStorageKey(slot) {
      return 'ef_support_image_' + pageId + '_' + (slot.dataset.imageSlot || '');
    }

    function setImageSlot(slot, dataUrl) {
      if (!slot || !dataUrl) return;
      var frame = slot.querySelector('.comm-image-search-frame');
      if (!frame) return;
      frame.innerHTML = '<img src="' + dataUrl + '" alt="">';
      slot.classList.add('has-image');
      try { localStorage.setItem(imageSlotStorageKey(slot), dataUrl); } catch(e) {}
    }

    function restoreImageSlots() {
      sectionsWrap.querySelectorAll('[data-image-slot]').forEach(function(slot) {
        try {
          var dataUrl = localStorage.getItem(imageSlotStorageKey(slot));
          if (dataUrl) setImageSlot(slot, dataUrl);
        } catch(e) {}
      });
    }

    function openSupportImagePreview(src, label) {
      if (!src) return;
      var old = document.getElementById('supportImagePreview');
      if (old) old.remove();
      var overlay = document.createElement('div');
      overlay.id = 'supportImagePreview';
      overlay.className = 'support-image-preview';
      overlay.innerHTML = '<button class="support-image-preview-close" type="button" aria-label="Fermer">Fermer</button>'
        + '<figure><img src="' + src + '" alt=""><figcaption>' + escapeHtml(label || 'Support visuel') + '</figcaption></figure>';
      document.body.appendChild(overlay);
      function close() {
        overlay.remove();
        document.removeEventListener('keydown', onKeydown);
      }
      function onKeydown(event) {
        if (event.key === 'Escape') close();
      }
      overlay.addEventListener('click', function(event) {
        if (event.target === overlay || event.target.closest('.support-image-preview-close')) close();
      });
      document.addEventListener('keydown', onKeydown);
    }

    var activeImageSlot = null;
    function selectImageSlot(slot) {
      if (!slot) return;
      sectionsWrap.querySelectorAll('[data-image-slot]').forEach(function(item) {
        item.classList.toggle('is-selected', item === slot);
      });
      activeImageSlot = slot;
      slot.focus();
    }

    function imageFileFromClipboard(event) {
      var items = event.clipboardData && event.clipboardData.items;
      if (!items) return null;
      for (var i = 0; i < items.length; i++) {
        if (items[i].type && items[i].type.indexOf('image/') === 0) {
          return items[i].getAsFile();
        }
      }
      return null;
    }

    document.addEventListener('paste', function(event) {
      if (!activeImageSlot || !sectionsWrap.contains(activeImageSlot)) return;
      var file = imageFileFromClipboard(event);
      if (!file) return;
      event.preventDefault();
      var reader = new FileReader();
      reader.onload = function() {
        setImageSlot(activeImageSlot, reader.result);
      };
      reader.readAsDataURL(file);
    });

    restoreImageSlots();

    var _compTtsState = { playing: false, idx: 0, rate: 0.9, box: null };

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
      var clearImageBtn = e.target.closest('[data-clear-image]');
      if (clearImageBtn) {
        var clearSlot = clearImageBtn.closest('[data-image-slot]');
        var clearFrame = clearSlot && clearSlot.querySelector('.comm-image-search-frame');
        if (clearFrame) clearFrame.innerHTML = '';
        if (clearSlot) {
          clearSlot.classList.remove('has-image');
          try { localStorage.removeItem(imageSlotStorageKey(clearSlot)); } catch(err) {}
          selectImageSlot(clearSlot);
        }
        return;
      }

      var imageSlot = e.target.closest('[data-image-slot]');
      if (imageSlot && !e.target.closest('a')) {
        var pastedImage = e.target.closest('.comm-image-search-frame img');
        if (pastedImage) {
          openSupportImagePreview(pastedImage.src, decodeURIComponent(imageSlot.dataset.imageSlot || 'Support visuel'));
          return;
        }
        selectImageSlot(imageSlot);
        return;
      }

      var commTab = e.target.closest('[data-comm-tab]');
      if (commTab) {
        var commTarget = commTab.dataset.commTab;
        var cascade = commTab.closest('.comm-cascade');
        if (!cascade) return;
        cascade.querySelectorAll('[data-comm-tab]').forEach(function(btn) {
          btn.classList.toggle('active', btn.dataset.commTab === commTarget);
        });
        cascade.querySelectorAll('[data-comm-panel]').forEach(function(panel) {
          var active = panel.dataset.commPanel === commTarget;
          panel.classList.toggle('active', active);
          panel.hidden = !active;
        });
        return;
      }

      var tab = e.target.closest('[data-tab]');
      if (tab) {
        var target = tab.dataset.tab;
        sectionsWrap.querySelectorAll('[data-tab]').forEach(function(btn) {
          var active = btn.dataset.tab === target;
          btn.classList.toggle('active', active);
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        sectionsWrap.querySelectorAll('[data-tab-panel]').forEach(function(panel) {
          var active = panel.dataset.tabPanel === target;
          panel.classList.toggle('active', active);
          panel.hidden = !active;
        });
        return;
      }

      var progressBtn = e.target.closest('[data-progress-action]');
      if (progressBtn) {
        var status = progressBtn.dataset.progressAction;
        updateProgress(pageId, status);
        var label = document.getElementById('unitProgressStatus');
        if (label) label.textContent = getStatusLabel(status, entry.level);
        syncStatusDecorations();
        return;
      }

      // Conjugaison masquer/révéler
      var conjToggle = e.target.closest('.conj-toggle-reveal');
      if (conjToggle) {
        var grid = document.getElementById('conjGrid');
        var revealed = conjToggle.dataset.revealed === 'true';
        if (revealed) {
          conjToggle.dataset.revealed = 'false';
          conjToggle.textContent = '👁 Révéler les formes';
          if (grid) grid.classList.add('conj-hidden');
        } else {
          conjToggle.dataset.revealed = 'true';
          conjToggle.textContent = '🙈 Masquer les formes';
          if (grid) grid.classList.remove('conj-hidden');
        }
        return;
      }

      // Vocabulaire quiz mode toggle
      var quizToggle = e.target.closest('.vocab-quiz-toggle');
      if (quizToggle) {
        var quiz = quizToggle.dataset.quiz === 'true';
        var groups = document.getElementById('vocabGroups');
        if (quiz) {
          quizToggle.dataset.quiz = 'false';
          quizToggle.textContent = '🧠 Mode quiz — masquer définitions';
          if (groups) groups.classList.remove('vocab-quiz-mode');
        } else {
          quizToggle.dataset.quiz = 'true';
          quizToggle.textContent = '✓ Quitter le mode quiz';
          if (groups) groups.classList.add('vocab-quiz-mode');
        }
        return;
      }

      // Vocabulaire quiz mode : clic sur carte pour révéler la définition
      var vocabCard = e.target.closest('.vocab-card');
      if (vocabCard && document.getElementById('vocabGroups') && document.getElementById('vocabGroups').classList.contains('vocab-quiz-mode')) {
        vocabCard.classList.toggle('vocab-card--revealed');
        return;
      }

      // Mémo — Écouter tout
      var listenAll = e.target.closest('.memo-listen-all');
      if (listenAll) {
        if (!window.speechSynthesis) return;
        var chips = Array.from(listenAll.closest('.comm-cascade-panel') ? listenAll.closest('.comm-cascade-panel').querySelectorAll('.chip-listen[data-word]') : []);
        if (!chips.length) return;
        window.speechSynthesis.cancel();
        var qi = 0;
        var speakNext = function() {
          if (qi >= chips.length) return;
          var w = chips[qi++].dataset.word;
          var u2 = new SpeechSynthesisUtterance(w);
          var v2 = _getBestFrVoice();
          if (v2) { u2.voice = v2; u2.lang = v2.lang; } else { u2.lang = 'fr-CH'; }
          u2.rate = 0.85;
          u2.onend = u2.onerror = speakNext;
          window.speechSynthesis.speak(u2);
        };
        speakNext();
        return;
      }

      // Compréhension MCQ — réinitialiser
      var compReset = e.target.closest('[data-comp-reset]');
      if (compReset) {
        var resetForm = compReset.closest('.comp-mcq-form');
        if (resetForm) {
          Array.from(resetForm.querySelectorAll('.course-check-item')).forEach(function(field) {
            field.classList.remove('is-correct', 'is-wrong');
          });
          resetForm.reset();
          var resetResult = resetForm.querySelector('.course-check-result');
          if (resetResult) resetResult.textContent = '';
        }
        return;
      }

      // Compréhension TTS — play/pause
      var compPlay = e.target.closest('[data-comp-play]');
      if (compPlay) {
        if (!window.speechSynthesis) return;
        var ttsBox = compPlay.closest('.comp-tts-box');
        if (!ttsBox) return;
        if (_compTtsState.playing && _compTtsState.box === ttsBox) {
          window.speechSynthesis.cancel();
          _compTtsState.playing = false;
          compPlay.textContent = '▶ Écouter';
          var stopBtnToggle = ttsBox.querySelector('[data-comp-stop]');
          if (stopBtnToggle) stopBtnToggle.disabled = true;
          return;
        }
        var ttsLines = Array.from(ttsBox.querySelectorAll('[data-comp-i]'));
        _compTtsState.playing = true;
        _compTtsState.idx = 0;
        _compTtsState.box = ttsBox;
        compPlay.textContent = '⏸ Pause';
        var stopBtnPlay = ttsBox.querySelector('[data-comp-stop]');
        if (stopBtnPlay) stopBtnPlay.disabled = false;
        function playNextCompLine() {
          if (!_compTtsState.playing || _compTtsState.idx >= ttsLines.length) {
            _compTtsState.playing = false;
            compPlay.textContent = '▶ Écouter';
            if (stopBtnPlay) stopBtnPlay.disabled = true;
            ttsLines.forEach(function(li) { li.classList.remove('comp-dline--active'); });
            return;
          }
          ttsLines.forEach(function(li) { li.classList.remove('comp-dline--active'); });
          var li = ttsLines[_compTtsState.idx];
          if (li) li.classList.add('comp-dline--active');
          var txt = li ? (li.querySelector('.comp-txt') || {}).textContent || '' : '';
          _compTtsState.idx++;
          var utt = new SpeechSynthesisUtterance(txt);
          var v = _getBestFrVoice();
          if (v) { utt.voice = v; utt.lang = v.lang; } else { utt.lang = 'fr-FR'; }
          utt.rate = _compTtsState.rate;
          utt.onend = utt.onerror = playNextCompLine;
          window.speechSynthesis.speak(utt);
        }
        window.speechSynthesis.cancel();
        playNextCompLine();
        return;
      }

      // Compréhension TTS — arrêter
      var compStop = e.target.closest('[data-comp-stop]');
      if (compStop) {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        _compTtsState.playing = false;
        _compTtsState.idx = 0;
        var stopBox = compStop.closest('.comp-tts-box');
        if (stopBox) {
          stopBox.querySelectorAll('[data-comp-i]').forEach(function(li) { li.classList.remove('comp-dline--active'); });
          var playBtnAfterStop = stopBox.querySelector('[data-comp-play]');
          if (playBtnAfterStop) playBtnAfterStop.textContent = '▶ Écouter';
          compStop.disabled = true;
        }
        return;
      }

      // Compréhension TTS — vitesse
      var compRateBtn = e.target.closest('[data-comp-rate]');
      if (compRateBtn) {
        _compTtsState.rate = parseFloat(compRateBtn.dataset.rate) || 0.9;
        var rateControls = compRateBtn.closest('.comp-tts-controls');
        if (rateControls) rateControls.querySelectorAll('[data-comp-rate]').forEach(function(btn) {
          btn.classList.toggle('comp-rate-btn--active', btn === compRateBtn);
        });
        return;
      }

      // Compréhension — écouter une réplique
      var compLineBtn = e.target.closest('[data-comp-line]');
      if (compLineBtn) {
        var lineIdx = parseInt(compLineBtn.dataset.compLine, 10);
        var lineBox = compLineBtn.closest('.comp-tts-box');
        if (!lineBox || !window.speechSynthesis) return;
        var allLines = Array.from(lineBox.querySelectorAll('[data-comp-i]'));
        var targetLi = allLines[lineIdx];
        if (!targetLi) return;
        var lineTxt = (targetLi.querySelector('.comp-txt') || {}).textContent || '';
        window.speechSynthesis.cancel();
        _compTtsState.playing = false;
        _compTtsState.idx = 0;
        var playBtnLine = lineBox.querySelector('[data-comp-play]');
        if (playBtnLine) playBtnLine.textContent = '▶ Écouter';
        var stopBtnLine = lineBox.querySelector('[data-comp-stop]');
        if (stopBtnLine) stopBtnLine.disabled = true;
        allLines.forEach(function(li) { li.classList.remove('comp-dline--active'); });
        targetLi.classList.add('comp-dline--active');
        var lineUtt = new SpeechSynthesisUtterance(lineTxt);
        var lv = _getBestFrVoice();
        if (lv) { lineUtt.voice = lv; lineUtt.lang = lv.lang; } else { lineUtt.lang = 'fr-FR'; }
        lineUtt.rate = _compTtsState.rate;
        lineUtt.onend = lineUtt.onerror = function() { targetLi.classList.remove('comp-dline--active'); };
        window.speechSynthesis.speak(lineUtt);
        return;
      }

      // Grammaire fill-in — bouton corriger
      var fillInBtn = e.target.closest('.gram-fillin-submit');
      if (fillInBtn) {
        var box = fillInBtn.closest('.gram-fillin-box');
        if (!box) return;
        var items = Array.from(box.querySelectorAll('.gram-fillin-item'));
        var score = 0;
        items.forEach(function(item) {
          var expected = Number(item.getAttribute('data-answer'));
          var checked = item.querySelector('input:checked');
          item.classList.remove('is-correct', 'is-wrong');
          if (!checked) return;
          if (Number(checked.value) === expected) { score++; item.classList.add('is-correct'); }
          else { item.classList.add('is-wrong'); }
        });
        var res = box.querySelector('.gram-fillin-result');
        if (res) res.textContent = score + ' / ' + items.length + (score === items.length ? ' — Parfait !' : ' — Réessayez !');
        return;
      }

      var btn = e.target.closest('.vocab-listen, .chip-listen, .phon-pair-word');
      if (!btn) return;
      var word = btn.dataset.word;
      if (!word || !window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      var utt = new SpeechSynthesisUtterance(word);
      var voice = _getBestFrVoice();
      if (voice) { utt.voice = voice; utt.lang = voice.lang; }
      else { utt.lang = 'fr-CH'; }
      utt.rate = 0.9;
      var speakingClass = btn.classList.contains('chip-listen') || btn.classList.contains('phon-pair-word') ? 'chip-listen--speaking' : 'vocab-listen--speaking';
      btn.classList.add(speakingClass);
      utt.onend = utt.onerror = function() { btn.classList.remove(speakingClass); };
      window.speechSynthesis.speak(utt);
    });

    sectionsWrap.addEventListener('submit', function(e) {
      var form = e.target.closest('.comp-mcq-form');
      if (!form) return;
      e.preventDefault();
      var fields = Array.from(form.querySelectorAll('.course-check-item'));
      var score = 0;
      var answered = 0;
      fields.forEach(function(field) {
        var expected = Number(field.getAttribute('data-answer'));
        var checked = field.querySelector('input:checked');
        var feedback = field.querySelector('.comp-question-feedback');
        var correctChoice = field.querySelector('input[value="' + expected + '"]');
        var correctText = correctChoice && correctChoice.closest('label') ? correctChoice.closest('label').textContent.trim() : '';
        var explain = field.getAttribute('data-explain') || '';
        field.classList.remove('is-correct', 'is-wrong');
        if (feedback) feedback.textContent = '';
        if (!checked) {
          if (feedback) feedback.textContent = 'Réponse attendue : ' + correctText + '.';
          return;
        }
        answered++;
        if (Number(checked.value) === expected) {
          score++;
          field.classList.add('is-correct');
          if (feedback) feedback.textContent = 'Correct : ' + (explain || correctText);
        }
        else {
          field.classList.add('is-wrong');
          if (feedback) feedback.textContent = 'À revoir. Réponse correcte : ' + correctText + (explain ? ' — ' + explain : '') + '.';
        }
      });
      var result = form.querySelector('.course-check-result');
      if (!result) return;
      if (answered !== fields.length) {
        result.textContent = 'Répondez aux ' + fields.length + ' questions pour obtenir un score.';
        return;
      }
      var pct = Math.round(score / fields.length * 100);
      result.textContent = 'Score : ' + score + ' / ' + fields.length + ' (' + pct + ' %)' + (pct >= 80 ? ' — Excellent !' : pct >= 60 ? ' — Bien !' : ' — Réessayez !');
    });

    // Enregistrement vocal + autocorrection
    (function initVoiceRecorder() {
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        sectionsWrap.querySelectorAll('.oral-recorder').forEach(function(r) {
          r.innerHTML = '<p class="oral-correction-tip">⚠️ La reconnaissance vocale n\'est pas disponible sur ce navigateur. Utilisez Chrome ou Edge.</p>';
        });
        return;
      }

      var uc = getUnitContent(entry);
      var expectedWords = uc.vocabulary.map(function(v) { return v.word.toLowerCase(); })
        .concat(uc.examples.map(function(e) { return e.toLowerCase(); }));

      sectionsWrap.addEventListener('click', function(e) {
        var startBtn = e.target.closest('[data-rec-start]');
        var stopBtn = e.target.closest('[data-rec-stop]');

        if (startBtn) {
          var card = startBtn.closest('.oral-scenario-card');
          var stopEl = card.querySelector('[data-rec-stop]');
          var transcriptWrap = card.querySelector('[data-rec-transcript]');
          var transcriptText = card.querySelector('.oral-transcript-text');
          var correctionEl = card.querySelector('[data-rec-correction]');

          var recognition = new SpeechRecognition();
          recognition.lang = 'fr-FR';
          recognition.continuous = true;
          recognition.interimResults = true;

          startBtn.hidden = true;
          stopEl.hidden = false;
          transcriptWrap.hidden = true;
          correctionEl.innerHTML = '';
          transcriptText.textContent = '';

          var finalText = '';

          recognition.onresult = function(ev) {
            var text = '';
            for (var i = 0; i < ev.results.length; i++) {
              text += ev.results[i][0].transcript;
            }
            transcriptText.textContent = text;
            transcriptWrap.hidden = false;
            finalText = text;
          };

          recognition.onerror = function(ev) {
            startBtn.hidden = false;
            stopEl.hidden = true;
            transcriptWrap.hidden = false;
            if (ev.error === 'not-allowed') {
              transcriptText.textContent = '⚠️ Autorisez l\'accès au microphone dans votre navigateur.';
            } else if (ev.error === 'no-speech') {
              transcriptText.textContent = 'Aucune voix détectée. Parlez plus fort et réessayez.';
            } else {
              transcriptText.textContent = 'Erreur : ' + ev.error + '. Réessayez.';
            }
          };

          recognition.onend = function() {
            startBtn.hidden = false;
            stopEl.hidden = true;
            if (finalText) analyzeOral(finalText, correctionEl, expectedWords);
          };

          card._recognition = recognition;
          recognition.start();
        }

        if (stopBtn) {
          var card2 = stopBtn.closest('.oral-scenario-card');
          if (card2._recognition) card2._recognition.stop();
        }
      });

      function analyzeOral(text, el, words) {
        var spoken = text.toLowerCase().replace(/[.,!?;:]/g, '');
        var spokenWords = spoken.split(/\s+/);

        var found = [];
        var suggestions = [];

        words.forEach(function(w) {
          if (spoken.indexOf(w) !== -1) {
            found.push(w);
          }
        });

        var commonErrors = [
          { wrong: /\bje suis viens\b/i, fix: 'je viens de…' },
          { wrong: /\bje habite\b/i, fix: 'j\'habite à…' },
          { wrong: /\ben le\b/i, fix: 'au (en + le = au)' },
          { wrong: /\bde le\b/i, fix: 'du (de + le = du)' },
          { wrong: /\bà le\b/i, fix: 'au (à + le = au)' }
        ];

        commonErrors.forEach(function(err) {
          if (err.wrong.test(spoken)) {
            suggestions.push('💡 Correction : « ' + err.fix + ' »');
          }
        });

        var html = '';
        if (found.length) {
          html += '<div class="oral-correction-good">✅ Mots et expressions reconnus (' + found.length + ') : <strong>' + found.join(', ') + '</strong></div>';
        }
        if (suggestions.length) {
          html += '<div class="oral-correction-fix">' + suggestions.join('<br>') + '</div>';
        }
        if (spokenWords.length < 4) {
          html += '<div class="oral-correction-tip">💬 Essayez de faire des phrases plus longues.</div>';
        } else if (!suggestions.length && found.length >= 2) {
          html += '<div class="oral-correction-good">👏 Très bien ! Vous utilisez le vocabulaire de l\'unité.</div>';
        }
        if (!found.length) {
          html += '<div class="oral-correction-tip">💬 Essayez d\'utiliser les mots de l\'unité : ' + words.slice(0, 5).join(', ') + '…</div>';
        }
        el.innerHTML = html;
      }
    })();

    // Sauvegarde auto + téléchargement du mémo
    var memoTextarea = sectionsWrap.querySelector('#memoText');
    var memoDownload = sectionsWrap.querySelector('#memoDownload');
    if (memoTextarea) {
      var memoKey = 'ef:memo:' + pageKeyFromHref(entry.href);
      memoTextarea.addEventListener('input', function() {
        try { localStorage.setItem(memoKey, memoTextarea.value); } catch(e) {}
      });
      if (memoDownload) {
        memoDownload.addEventListener('click', function() {
          var text = memoTextarea.value || '(aucune note)';
          var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
          var a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'notes-' + pageKeyFromHref(entry.href) + '.txt';
          a.click();
          URL.revokeObjectURL(a.href);
        });
      }
    }

    // Correction production écrite (LanguageTool + vocabulaire)
    (function initWrittenCorrection() {
      var uc = getUnitContent(entry);
      var expectedWords = uc.vocabulary.map(function(v) { return v.word.toLowerCase(); });

      sectionsWrap.addEventListener('click', function(e) {
        var btn = e.target.closest('.written-check-btn');
        if (!btn) return;
        var idx = btn.getAttribute('data-check-idx');
        var textarea = sectionsWrap.querySelector('[data-written-idx="' + idx + '"]');
        var correctionEl = sectionsWrap.querySelector('[data-correction-idx="' + idx + '"]');
        var text = textarea.value.trim();

        if (!text) {
          correctionEl.innerHTML = '<p class="written-corr-tip">Écrivez quelques phrases avant de corriger.</p>';
          return;
        }

        btn.disabled = true;
        btn.textContent = 'Analyse en cours…';
        correctionEl.innerHTML = '';

        // Analyse locale vocabulaire
        var spoken = text.toLowerCase();
        var foundWords = expectedWords.filter(function(w) { return spoken.indexOf(w) !== -1; });

        // LanguageTool API
        fetch('https://api.languagetool.org/v2/check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'text=' + encodeURIComponent(text) + '&language=fr&enabledOnly=false'
        })
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var html = '';
          var matches = data.matches || [];

          // Erreurs LanguageTool
          if (matches.length) {
            html += '<div class="written-corr-section">'
              + '<div class="written-corr-heading">🔍 ' + matches.length + ' point' + (matches.length > 1 ? 's' : '') + ' à vérifier</div>';
            matches.forEach(function(m, i) {
              var context = m.context || {};
              var original = text.substring(m.offset, m.offset + m.length);
              var suggestion = (m.replacements && m.replacements.length) ? m.replacements[0].value : '';
              html += '<div class="written-corr-item">'
                + '<span class="written-corr-num">' + (i + 1) + '</span>'
                + '<div class="written-corr-detail">'
                + '<p class="written-corr-msg">' + escapeHtml(m.message) + '</p>'
                + (original ? '<span class="written-corr-wrong">« ' + escapeHtml(original) + ' »</span>' : '')
                + (suggestion ? ' → <span class="written-corr-fix">« ' + escapeHtml(suggestion) + ' »</span>' : '')
                + '</div></div>';
            });
            html += '</div>';
          } else {
            html += '<div class="written-corr-good">✅ Pas d\'erreur détectée. Bravo !</div>';
          }

          // Vocabulaire
          html += '<div class="written-corr-section">';
          if (foundWords.length) {
            html += '<div class="written-corr-good">📖 Mots de l\'unité utilisés (' + foundWords.length + ') : <strong>' + foundWords.join(', ') + '</strong></div>';
          } else {
            html += '<div class="written-corr-tip">💬 Essayez d\'utiliser le vocabulaire de l\'unité : ' + expectedWords.slice(0, 5).join(', ') + '…</div>';
          }

          // Longueur
          var wordCount = text.split(/\s+/).filter(Boolean).length;
          if (wordCount < 5) {
            html += '<div class="written-corr-tip">📝 Votre texte est court. Essayez d\'écrire au moins 5 phrases.</div>';
          } else if (wordCount >= 20) {
            html += '<div class="written-corr-good">👏 Bon travail, votre texte est bien développé (' + wordCount + ' mots).</div>';
          }
          html += '</div>';

          correctionEl.innerHTML = html;
        })
        .catch(function() {
          // Fallback si pas d'internet : analyse locale uniquement
          var html = '<div class="written-corr-tip">⚠️ Correction en ligne indisponible. Analyse locale :</div>';
          if (foundWords.length) {
            html += '<div class="written-corr-good">📖 Mots de l\'unité utilisés : <strong>' + foundWords.join(', ') + '</strong></div>';
          } else {
            html += '<div class="written-corr-tip">💬 Utilisez le vocabulaire de l\'unité : ' + expectedWords.slice(0, 5).join(', ') + '…</div>';
          }
          correctionEl.innerHTML = html;
        })
        .finally(function() {
          btn.disabled = false;
          btn.textContent = 'Corriger mon texte';
        });
      });
    })();

    // Compteur de mots production écrite
    sectionsWrap.addEventListener('input', function(e) {
      var ta = e.target.closest('.written-editor-textarea');
      if (!ta) return;
      var counter = ta.closest('.written-editor').querySelector('.written-editor-count');
      if (counter) {
        var words = ta.value.trim().split(/\s+/).filter(Boolean).length;
        counter.textContent = words + ' mot(s)';
      }
    });

    // Navigation étapes compréhension
    (function initCompSteps() {
      var wrap = sectionsWrap.querySelector('.comp-steps');
      if (!wrap) return;
      var steps = wrap.querySelectorAll('.comp-step');
      var counter = wrap.querySelector('.comp-steps-counter');
      var prevBtn = wrap.querySelector('.comp-step-prev');
      var nextBtn = wrap.querySelector('.comp-step-next');
      var cur = 0;
      function show(i) {
        steps.forEach(function(s) { s.classList.remove('active'); s.hidden = true; });
        steps[i].classList.add('active'); steps[i].hidden = false;
        cur = i;
        counter.textContent = 'Exercice ' + (i + 1) + ' / ' + steps.length;
        prevBtn.disabled = i === 0;
        nextBtn.textContent = i === steps.length - 1 ? 'Terminé ✓' : 'Suivant →';
      }
      prevBtn.addEventListener('click', function() { if (cur > 0) show(cur - 1); });
      nextBtn.addEventListener('click', function() { if (cur < steps.length - 1) show(cur + 1); });
    })();

    // Vrai/Faux
    sectionsWrap.addEventListener('click', function(e) {
      var btn = e.target.closest('.comp-vf-btn');
      if (!btn) return;
      var item = btn.closest('.comp-vf-item');
      var answer = item.getAttribute('data-vf-answer');
      var correction = item.getAttribute('data-vf-correction');
      var feedback = item.querySelector('.comp-vf-feedback');
      var chosen = btn.getAttribute('data-vf-choice');
      item.querySelectorAll('.comp-vf-btn').forEach(function(b) { b.classList.remove('selected', 'correct', 'wrong'); });
      btn.classList.add('selected');
      if (chosen === answer) {
        btn.classList.add('correct');
        item.classList.add('is-correct');
        item.classList.remove('is-wrong');
        feedback.textContent = '✓ Correct !';
      } else {
        btn.classList.add('wrong');
        item.classList.add('is-wrong');
        item.classList.remove('is-correct');
        feedback.textContent = '✗ ' + (correction || (answer === 'true' ? 'C\'est vrai.' : 'C\'est faux.'));
      }
    });

    // Compléter
    sectionsWrap.addEventListener('submit', function(e) {
      var form = e.target.closest('.comp-fill-form');
      if (!form) return;
      e.preventDefault();
      form.querySelectorAll('.comp-fill-item').forEach(function(item) {
        var input = item.querySelector('.comp-fill-input');
        var expected = item.getAttribute('data-fill-answer');
        var feedback = item.querySelector('.comp-fill-feedback');
        var val = input.value.trim().toLowerCase();
        item.classList.remove('is-correct', 'is-wrong');
        if (val === expected) {
          item.classList.add('is-correct');
          feedback.textContent = '✓ Correct !';
        } else {
          item.classList.add('is-wrong');
          feedback.textContent = '✗ Réponse attendue : ' + expected;
        }
      });
    });

    // Associer
    (function initMatch() {
      var grid = sectionsWrap.querySelector('.comp-match-grid');
      if (!grid) return;
      var selectedLeft = null;
      grid.addEventListener('click', function(e) {
        var left = e.target.closest('.comp-match-left');
        var right = e.target.closest('.comp-match-right');
        if (left) {
          grid.querySelectorAll('.comp-match-left').forEach(function(l) { l.classList.remove('selected'); });
          left.classList.add('selected');
          selectedLeft = left;
        }
        if (right && selectedLeft) {
          var leftIdx = selectedLeft.getAttribute('data-match-idx');
          var rightIdx = right.getAttribute('data-match-idx');
          if (leftIdx === rightIdx) {
            selectedLeft.classList.add('matched');
            right.classList.add('matched');
            selectedLeft.classList.remove('selected');
          } else {
            selectedLeft.classList.add('wrong');
            right.classList.add('wrong');
            setTimeout(function() { selectedLeft.classList.remove('wrong', 'selected'); right.classList.remove('wrong'); }, 800);
          }
          selectedLeft = null;
        }
      });
    })();

    bindAssessment();
    bindFinalUnitTest(entry);
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

  ef.getUnitContent    = getUnitContent;
  ef.getVerbData       = getVerbData;
  ef.conjugateVerb     = conjugateVerb;
  ef.getTrainingCards  = function() { return []; };
  ef.syncStatusDecorations = syncStatusDecorations;

  renderProgressPanel();
  enhanceIndexCards();
  enhanceUnitPage(ef.entryByPage[ef.pageId]);

  /* ── Carrousel supports + lightbox ── */
  (function initCarousels() {
    document.querySelectorAll('.comm-carousel').forEach(function(carousel) {
      var slides = carousel.querySelectorAll('.comm-carousel-slide');
      var counter = carousel.querySelector('.comm-carousel-counter');
      var current = 0;

      function showSlide(i) {
        if (i < 0) i = slides.length - 1;
        if (i >= slides.length) i = 0;
        slides.forEach(function(s) { s.classList.remove('active'); });
        slides[i].classList.add('active');
        current = i;
        if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
      }

      var prevBtn = carousel.querySelector('.comm-carousel-prev');
      var nextBtn = carousel.querySelector('.comm-carousel-next');
      if (prevBtn) prevBtn.addEventListener('click', function() { showSlide(current - 1); });
      if (nextBtn) nextBtn.addEventListener('click', function() { showSlide(current + 1); });

      var lightbox = carousel.parentElement.querySelector('.support-lightbox');
      if (lightbox) {
        var lbImg = lightbox.querySelector('.support-lightbox-img');
        carousel.addEventListener('click', function(e) {
          var img = e.target.closest('.support-card-img');
          if (!img) return;
          lbImg.src = img.src;
          lbImg.alt = img.alt;
          lightbox.hidden = false;
        });
        lightbox.querySelector('.support-lightbox-close').addEventListener('click', function() { lightbox.hidden = true; });
        lightbox.querySelector('.support-lightbox-backdrop').addEventListener('click', function() { lightbox.hidden = true; });
      }
    });
  })();
}());
