'use strict';

(function initCourseAi() {
  var ef                   = window._ef;
  var pageId               = ef.pageId;
  var sections             = ef.sections;
  var orderedPages         = ef.orderedPages;
  var entryByPage          = ef.entryByPage;
  var UNIT_BOT             = ef.UNIT_BOT;
  var UNIT_PROG            = ef.UNIT_PROG;
  var resolveUrl           = ef.resolveUrl;
  var pageKeyFromHref      = ef.pageKeyFromHref;
  var readProgress         = ef.readProgress;
  var readExerciseProgress = ef.readExerciseProgress;
  var getProgressState     = ef.getProgressState;
  var updateProgress       = ef.updateProgress;
  var getUnitContent       = ef.getUnitContent;
  var getVerbData          = ef.getVerbData;
  var conjugateVerb        = ef.conjugateVerb;
  var getTrainingCards     = ef.getTrainingCards;

  function renderCourseChatbot() {
    if (document.getElementById('courseChatbot')) return;

    function escapeHtml(value) {
      return String(value || '').replace(/[&<>"']/g, function(ch) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
      });
    }

    function stripHtml(value) {
      return String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function normalize(value) {
      return String(value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s'-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function tokens(value) {
      return normalize(value).split(' ').filter(function(token) {
        return token.length > 2 && ['les','des','une','dans','avec','pour','sur','est','sont','que','qui','quoi','comment'].indexOf(token) === -1;
      });
    }

    function buildKnowledge() {
      return sections.reduce(function(items, section) {
        return items.concat(section.entries.map(function(entry) {
          var content = getUnitContent(entry);
          var verbs = getVerbData(entry);
          var vocab = content.vocabulary || [];
          var grammar = (content.grammarRules || []).map(stripHtml).join(' ');
          var conjugations = (verbs.conjugations || []).map(stripHtml).join(' ');
          var text = [
            entry.level, entry.label, entry.summary, entry.focus, entry.task, entry.swissContext,
            (entry.themes || []).join(' '),
            (entry.expressions || []).join(' '),
            vocab.map(function(item) { return item.word + ' ' + item.definition; }).join(' '),
            content.grammarTitle, grammar, conjugations
          ].join(' ');
          return {
            entry: entry,
            content: content,
            verbs: verbs,
            text: normalize(text),
            vocab: vocab
          };
        }));
      }, []);
    }

    var knowledge = buildKnowledge();

    function findVocabulary(queryTokens, rawQuery) {
      var q = normalize(rawQuery);
      var hits = [];
      knowledge.forEach(function(item) {
        item.vocab.forEach(function(vocabItem) {
          var hay = normalize(vocabItem.word + ' ' + vocabItem.definition);
          var exact = hay.indexOf(q) !== -1 || q.indexOf(normalize(vocabItem.word)) !== -1;
          var score = queryTokens.reduce(function(sum, token) {
            return sum + (hay.indexOf(token) !== -1 ? 1 : 0);
          }, exact ? 4 : 0);
          if (score > 0) hits.push({ score: score, item: item, vocab: vocabItem });
        });
      });
      return hits.sort(function(a, b) { return b.score - a.score; }).slice(0, 5);
    }

    function findVerb(rawQuery) {
      var q = normalize(rawQuery);
      var hits = [];
      knowledge.forEach(function(item) {
        (item.verbs.verbs || []).forEach(function(verb) {
          var nv = normalize(verb);
          if (q.indexOf(nv) !== -1 || normalize('conjugaison ' + verb).indexOf(q) !== -1) {
            hits.push({ item: item, verb: verb, forms: conjugateVerb(verb) });
          }
        });
      });
      return hits.slice(0, 3);
    }

    function findUnits(queryTokens) {
      return knowledge.map(function(item) {
        var score = queryTokens.reduce(function(sum, token) {
          return sum + (item.text.indexOf(token) !== -1 ? 1 : 0);
        }, 0);
        return { score: score, item: item };
      }).filter(function(hit) {
        return hit.score > 0;
      }).sort(function(a, b) {
        return b.score - a.score;
      }).slice(0, 4);
    }

    function linkTo(entry, panelId) {
      return '<a href="' + resolveUrl(entry.href) + (panelId ? '#' + panelId : '') + '">' + escapeHtml(entry.level + ' · ' + entry.label) + '</a>';
    }

    function answerQuestion(rawQuery) {
      var q = normalize(rawQuery);
      var queryTokens = tokens(rawQuery);
      if (!q) return 'Je suis là. Pose-moi une question sur un mot, une règle, une conjugaison ou une unité.';
      if (/^(bonjour|salut|hello|coucou|bonsoir)/.test(q)) {
        return 'Bonjour, ravi de t’aider. Dis-moi ce que tu veux travailler: vocabulaire, grammaire, conjugaison, phonétique, jeux ou progression.';
      }

      var wantsVerb = q.indexOf('conjug') !== -1 || q.indexOf('verbe') !== -1;
      var verbHits = wantsVerb ? findVerb(rawQuery) : [];
      if (verbHits.length) {
        var first = verbHits[0];
        return [
          '<strong>Conjugaison de "' + escapeHtml(first.verb) + '"</strong>',
          '<p>' + escapeHtml(first.forms.join(', ')) + '.</p>',
          '<p>Tu peux le retravailler ici: ' + linkTo(first.item.entry, 'tab-conjugaison') + '.</p>',
          '<p>Petit pas, bonne direction: répète les formes à voix haute, puis fais une phrase simple.</p>'
        ].join('');
      }

      var wantsVocab = q.indexOf('vocab') !== -1 || q.indexOf('glossaire') !== -1 || q.indexOf('mot') !== -1 || q.indexOf('definition') !== -1 || q.indexOf('signifie') !== -1;
      var vocabHits = findVocabulary(queryTokens, rawQuery);
      if (wantsVocab && vocabHits.length) {
        return '<strong>Voici ce que j’ai trouvé dans le vocabulaire :</strong><ul>' + vocabHits.map(function(hit) {
          return '<li><strong>' + escapeHtml(hit.vocab.word) + '</strong> : ' + escapeHtml(hit.vocab.definition) + '<br><small>' + linkTo(hit.item.entry, 'tab-vocabulaire') + '</small></li>';
        }).join('') + '</ul><p>Tu avances bien: choisis un mot et essaie de faire une phrase avec.</p>';
      }

      var unitHits = findUnits(queryTokens);
      if (q.indexOf('grammaire') !== -1 && unitHits.length) {
        return '<strong>Pour la grammaire, je te conseille :</strong><ul>' + unitHits.map(function(hit) {
          var rules = (hit.item.content.grammarRules || []).slice(0, 2).map(stripHtml).join(' ');
          return '<li>' + linkTo(hit.item.entry, 'tab-grammaire') + '<br><small>' + escapeHtml(rules) + '</small></li>';
        }).join('') + '</ul>';
      }

      if ((q.indexOf('progression') !== -1 || q.indexOf('objectif') !== -1 || q.indexOf('commencer') !== -1) && unitHits.length) {
        return '<strong>Bonne idée. Voici un chemin simple :</strong><ol>' + unitHits.slice(0, 3).map(function(hit) {
          return '<li>Ouvre ' + linkTo(hit.item.entry, 'tab-objectifs') + ', puis fais Communication → Vocabulaire → Jeux → Progression.</li>';
        }).join('') + '</ol><p>Un niveau se construit petit à petit. Tu n’as pas besoin de tout réussir du premier coup.</p>';
      }

      if (unitHits.length) {
        return '<strong>J’ai trouvé des unités utiles :</strong><ul>' + unitHits.map(function(hit) {
          return '<li>' + linkTo(hit.item.entry, 'tab-objectifs') + '<br><small>' + escapeHtml(hit.item.entry.summary || hit.item.entry.focus || '') + '</small></li>';
        }).join('') + '</ul><p>Choisis une unité, puis commence par Objectifs. Je reste avec toi.</p>';
      }

      return 'Je n’ai pas trouvé de correspondance précise, mais on peut y arriver. Essaie avec un mot-clé comme “logement”, “emploi”, “conjugaison être”, “grammaire”, “phonétique” ou “A1”.';
    }

    function platformStats() {
      var vocabCount = 0;
      var grammarCount = 0;
      var verbs = {};
      knowledge.forEach(function(item) {
        vocabCount += (item.vocab || []).length;
        grammarCount += (item.content.grammarRules || []).length;
        (item.verbs.verbs || []).forEach(function(verb) { verbs[verb] = true; });
      });
      return {
        units: knowledge.length,
        vocab: vocabCount,
        grammar: grammarCount,
        verbs: Object.keys(verbs).length
      };
    }

    function currentKnowledgeItem() {
      return knowledge.find(function(item) { return pageKeyFromHref(item.entry.href) === pageId; }) || knowledge[0];
    }

    function sampleList(items, count) {
      return (items || []).filter(Boolean).slice(0, count || 5);
    }

    function currentUnitProgress(entry) {
      var unitKey = pageKeyFromHref(entry.href);
      var unitProgress = readExerciseProgress()[unitKey] || {};
      var cards = getTrainingCards(entry);
      var done = cards.filter(function(card) {
        return unitProgress[card.id] && unitProgress[card.id].status === 'completed';
      }).length;
      var started = cards.filter(function(card) {
        return unitProgress[card.id] && unitProgress[card.id].status === 'started';
      }).length;
      return { cards: cards, done: done, started: started };
    }

    function botMemoryKey() {
      return 'ef:emmanuelle:memory:v1';
    }

    function readBotMemory() {
      try { return JSON.parse(localStorage.getItem(botMemoryKey()) || '{}'); } catch(e) { return {}; }
    }

    function writeBotMemory(memory) {
      try { localStorage.setItem(botMemoryKey(), JSON.stringify(memory)); } catch(e) {}
    }

    function rememberBotAction(action, entry) {
      var memory = readBotMemory();
      memory.lastAction = action;
      memory.lastPage = pageKeyFromHref(entry.href);
      memory.lastUnitLabel = entry.level + ' · ' + entry.label;
      memory.counts = memory.counts || {};
      memory.counts[action] = (memory.counts[action] || 0) + 1;
      if (action === 'vocab') {
        memory.lastFocus = 'vocabulaire';
        memory.difficult = sampleList((getUnitContent(entry).vocabulary || []).map(function(item) { return item.word; }), 4);
      }
      if (action === 'grammar') memory.lastFocus = 'grammaire';
      if (action === 'verbs') memory.lastFocus = 'conjugaison';
      writeBotMemory(memory);
    }

    function nextCourseEntry() {
      var progress = readProgress();
      var page = orderedPages.find(function(key) {
        return !progress[key] || progress[key].status !== 'completed';
      });
      return page ? entryByPage[page] : currentKnowledgeItem().entry;
    }

    function findKnowledgeByTheme(theme) {
      var q = normalize(theme);
      return knowledge.filter(function(item) {
        return item.text.indexOf(q) !== -1;
      }).slice(0, 5);
    }

    function answerAuto(action) {
      var current = currentKnowledgeItem();
      var entry = current.entry;
      var content = current.content || {};
      var stats = platformStats();
      var progressInfo = currentUnitProgress(entry);
      var examples = sampleList(content.examples && content.examples.length ? content.examples : entry.expressions || [], 6);
      var memory = readBotMemory();
      var nextEntry = nextCourseEntry();

      if (action === 'start') {
        return '<strong>Emmanuelle</strong><p>Je connais les contenus chargés du site : ' + stats.units + ' unités, ' + stats.vocab + ' mots de vocabulaire, ' + stats.grammar + ' points de grammaire et ' + stats.verbs + ' verbes.</p>'
          + (memory.lastUnitLabel ? '<p><strong>Mémoire :</strong> la dernière fois, vous étiez sur ' + escapeHtml(memory.lastUnitLabel) + (memory.lastFocus ? ' avec un focus ' + escapeHtml(memory.lastFocus) : '') + '.</p>' : '')
          + '<p>Je peux guider sans zone de texte : cliquez sur une question, puis je propose une réponse, un exemple et une prochaine action.</p>';
      }

      if (action === 'current') {
        var currentHint = progressInfo.done
          ? 'Vous avez déjà commencé les entraînements : continuez avec le prochain jeu non terminé.'
          : 'Vous êtes au début : commencez par comprendre le support avant les jeux.';
        return '<strong>Unité actuelle : ' + escapeHtml(entry.level + ' · ' + entry.label) + '</strong><p>' + escapeHtml(entry.summary || entry.focus || '') + '</p><ul>'
          + '<li><strong>Objectif :</strong> ' + escapeHtml(entry.focus || 'travailler la communication') + '</li>'
          + '<li><strong>Contexte :</strong> ' + escapeHtml(entry.swissContext || 'situation pratique') + '</li>'
          + '<li><strong>À faire :</strong> ' + escapeHtml(entry.task || 'réviser puis pratiquer') + '</li>'
          + '</ul><p><strong>Diagnostic :</strong> ' + currentHint + '</p><p>' + linkTo(entry, 'tab-objectifs') + '</p>';
      }

      if (action === 'vocab') {
        var vocab = (content.vocabulary || current.vocab || []).slice(0, 8);
        if (!vocab.length) return '<strong>Vocabulaire</strong><p>Cette unité n’a pas encore de liste dédiée. Ouvrez le mémo et les exemples.</p>';
        return '<strong>Vocabulaire utile</strong><ul>' + vocab.map(function(item) {
          return '<li><strong>' + escapeHtml(item.word) + '</strong> : ' + escapeHtml(item.definition) + '</li>';
        }).join('') + '</ul><p><strong>Mini-tâche :</strong> choisissez 3 mots et faites une phrase avec chacun.</p><p>' + linkTo(entry, 'tab-vocabulaire') + '</p>';
      }

      if (action === 'grammar') {
        var rules = (content.grammarRules || []).slice(0, 4);
        if (!rules.length) return '<strong>Grammaire</strong><p>Commencez par observer les exemples de l’unité puis faites les exercices.</p>';
        return '<strong>' + escapeHtml(content.grammarTitle || 'Grammaire') + '</strong><ul>' + rules.map(function(rule) {
          return '<li>' + stripHtml(rule) + '</li>';
        }).join('') + '</ul>' + (content.grammarError ? '<p><strong>Attention :</strong> ' + stripHtml(content.grammarError) + '</p>' : '') + '<p>' + linkTo(entry, 'tab-grammaire') + '</p>';
      }

      if (action === 'verbs') {
        var verbs = (current.verbs.verbs || []).slice(0, 5);
        if (!verbs.length) return '<strong>Conjugaison</strong><p>Aucun verbe spécifique n’est associé à cette unité.</p>';
        return '<strong>Conjugaisons utiles</strong><ul>' + verbs.map(function(verb) {
          return '<li><strong>' + escapeHtml(verb) + '</strong> : ' + escapeHtml(conjugateVerb(verb).join(', ')) + '</li>';
        }).join('') + '</ul><p>' + linkTo(entry, 'tab-conjugaison') + '</p>';
      }

      if (action === 'phrases') {
        return '<strong>Phrases modèles</strong><ul>' + examples.map(function(phrase) {
          return '<li>' + escapeHtml(phrase) + '</li>';
        }).join('') + '</ul><p><strong>Méthode :</strong> répétez, remplacez un mot, puis dites une phrase personnelle.</p>';
      }

      if (action === 'understand') {
        return '<strong>Comment comprendre cette unité ?</strong><ol><li>Regardez le support et dites ce que vous voyez.</li><li>Repérez les mots fréquents : ' + escapeHtml((entry.themes || []).slice(0, 4).join(', ') || entry.label) + '.</li><li>Lisez ou écoutez une fois sans répondre.</li><li>Répondez ensuite avec des phrases courtes.</li></ol><p>' + linkTo(entry, 'tab-communication') + '</p>';
      }

      if (action === 'produce') {
        return '<strong>Que puis-je dire ou écrire ?</strong><p>Préparez une réponse en 3 étapes : situation, information principale, phrase personnelle.</p><ul>' + examples.slice(0, 3).map(function(phrase) {
          return '<li>' + escapeHtml(phrase) + '</li>';
        }).join('') + '</ul><p><strong>Défi :</strong> faites 5 phrases, puis relisez à voix haute.</p>';
      }

      if (action === 'games') {
        var cards = getTrainingCards(entry).slice(0, 6);
        if (!cards.length) return '<strong>Jeux</strong><p>Les entraînements automatiques sont surtout disponibles dans le parcours A1.</p>';
        var suggested = progressInfo.cards.find(function(card) {
          var unitProgress = readExerciseProgress()[pageKeyFromHref(entry.href)] || {};
          return !unitProgress[card.id] || unitProgress[card.id].status !== 'completed';
        }) || cards[0];
        return '<strong>Jeux conseillés</strong><ul>' + cards.map(function(card) {
          return '<li><a href="' + resolveUrl(card.href) + '">' + card.icon + ' ' + escapeHtml(card.label) + '</a></li>';
        }).join('') + '</ul><p>Progression de cette unité : ' + progressInfo.done + ' terminé(s), ' + progressInfo.started + ' en cours.</p><p><strong>Je choisirais maintenant :</strong> <a href="' + resolveUrl(suggested.href) + '">' + escapeHtml(suggested.label) + '</a>.</p>';
      }

      if (action === 'progress') {
        var progress = readProgress();
        var completed = orderedPages.filter(function(page) { return progress[page] && progress[page].status === 'completed'; }).length;
        var started = orderedPages.filter(function(page) { return progress[page] && progress[page].status === 'started'; }).length;
        var nextGame = progressInfo.cards.find(function(card) {
          var unitProgress = readExerciseProgress()[pageKeyFromHref(entry.href)] || {};
          return !unitProgress[card.id] || unitProgress[card.id].status !== 'completed';
        });
        return '<strong>Progression</strong><p>Unités terminées : ' + completed + ' / ' + orderedPages.length + '. En cours : ' + started + '.</p><p>Dans cette unité : ' + progressInfo.done + ' / ' + progressInfo.cards.length + ' jeux terminés.</p>'
          + (nextGame ? '<p><strong>Prochaine action :</strong> ouvrir <a href="' + resolveUrl(nextGame.href) + '">' + escapeHtml(nextGame.label) + '</a>.</p>' : '<p><strong>Prochaine action :</strong> faire le test final de l’unité.</p>');
      }

      if (action === 'diagnostic') {
        var unitState = getProgressState(pageKeyFromHref(entry.href));
        var diag = 'Commencez par Communication, puis faites un jeu.';
        if (unitState === 'completed') diag = 'Cette unité est terminée : passez à la suite.';
        else if (progressInfo.done >= 3) diag = 'Bonne base : faites le test final ou complétez les jeux restants.';
        else if (progressInfo.started || progressInfo.done) diag = 'Vous avez commencé : terminez un jeu court avant de changer d’unité.';
        return '<strong>Diagnostic automatique</strong><p>' + diag + '</p><p><strong>Unité conseillée :</strong> <a href="' + resolveUrl(nextEntry.href) + '">' + escapeHtml(nextEntry.level + ' · ' + nextEntry.label) + '</a>.</p>';
      }

      if (action === 'five') {
        var quickVocab = sampleList(content.vocabulary || current.vocab || [], 3);
        var unitProgressForFive = readExerciseProgress()[pageKeyFromHref(entry.href)] || {};
        var nextQuickGame = progressInfo.cards.find(function(card) {
          return !unitProgressForFive[card.id] || unitProgressForFive[card.id].status !== 'completed';
        }) || progressInfo.cards[0];
        var focusOrder = ['vocabulaire', 'grammaire', 'production', 'jeu', 'ecoute'];
        var lastFive = memory.lastFiveFocus || '';
        var focusIndex = Math.max(0, focusOrder.indexOf(lastFive) + 1) % focusOrder.length;
        if (memory.lastFocus === 'vocabulaire') focusIndex = 1;
        if (memory.lastFocus === 'grammaire') focusIndex = 2;
        if (progressInfo.done === 0 && progressInfo.started === 0) focusIndex = 0;
        var focus = focusOrder[focusIndex];
        memory.lastFiveFocus = focus;
        writeBotMemory(memory);
        var plans = {
          vocabulaire: '<ol><li>Réviser 3 mots : ' + escapeHtml(quickVocab.map(function(v) { return v.word; }).join(', ') || (entry.themes || []).join(', ')) + '.</li><li>Choisir 1 mot difficile.</li><li>Dire une phrase avec ce mot.</li><li>Comparer avec une phrase modèle.</li><li>' + (nextQuickGame ? 'Faire <a href="' + resolveUrl(nextQuickGame.href) + '">' + escapeHtml(nextQuickGame.label) + '</a>.' : 'Faire un exercice court.') + '</li></ol>',
          grammaire: '<ol><li>Observer la règle : ' + escapeHtml(content.grammarTitle || 'repère de langue') + '.</li><li>Lire un exemple.</li><li>Transformer l’exemple avec une autre ville ou un autre pays.</li><li>Dire la phrase à voix haute.</li><li>Ouvrir ' + linkTo(entry, 'tab-grammaire') + '.</li></ol>',
          production: '<ol><li>Lire l’objectif : ' + escapeHtml(entry.focus || entry.summary || entry.label) + '.</li><li>Préparer 3 phrases courtes.</li><li>Utiliser cette phrase : ' + escapeHtml(examples[0] || 'Je fais une phrase simple.') + '</li><li>Changer un mot.</li><li>Relire à voix haute.</li></ol>',
          jeu: '<ol><li>Regarder votre progression : ' + progressInfo.done + ' / ' + progressInfo.cards.length + ' jeux terminés.</li><li>Choisir un jeu non terminé.</li><li>' + (nextQuickGame ? 'Ouvrir <a href="' + resolveUrl(nextQuickGame.href) + '">' + escapeHtml(nextQuickGame.label) + '</a>.' : 'Faire le test final.') + '</li><li>Noter une erreur.</li><li>Revenir demander “Révision rapide”.</li></ol>',
          ecoute: '<ol><li>Ouvrir Communication.</li><li>Lire une phrase lentement.</li><li>Écouter ou prononcer 3 mots.</li><li>Répéter la meilleure phrase.</li><li>Faire une réponse courte à l’oral.</li></ol>'
        };
        return '<strong>Parcours 5 minutes · ' + escapeHtml(focus) + '</strong>' + plans[focus];
      }

      if (action === 'memory') {
        return '<strong>Mémoire locale</strong>' + (memory.lastUnitLabel
          ? '<p>Dernière unité : ' + escapeHtml(memory.lastUnitLabel) + '.</p><p>Dernier focus : ' + escapeHtml(memory.lastFocus || memory.lastAction || 'parcours') + '.</p>' + ((memory.difficult || []).length ? '<p>Mots à revoir : ' + escapeHtml(memory.difficult.join(', ')) + '.</p>' : '')
          : '<p>Je n’ai pas encore assez d’historique. Cliquez sur vocabulaire, grammaire ou jeux et je mémoriserai le dernier focus.</p>');
      }

      if (action === 'search') {
        return '<strong>Recherche interne sans écrire</strong><p>Choisissez un thème : je cherche dans les unités, le vocabulaire et les règles.</p><div class="course-chatbot-menu">'
          + '<button type="button" data-bot-action="search_geo">Pays / villes</button>'
          + '<button type="button" data-bot-action="search_work">Travail</button>'
          + '<button type="button" data-bot-action="search_home">Logement</button>'
          + '<button type="button" data-bot-action="search_health">Santé</button>'
          + '<button type="button" data-bot-action="search_admin">Administration</button>'
          + '</div>';
      }

      if (action.indexOf('search_') === 0) {
        var labels = {
          search_geo: 'pays ville langue origine suisse',
          search_work: 'travail métier emploi projet',
          search_home: 'logement maison appartement voisin',
          search_health: 'santé médecin rendez-vous urgence',
          search_admin: 'administration commune formulaire canton'
        };
        var hits = findKnowledgeByTheme(labels[action] || '');
        return '<strong>Résultats de recherche</strong>' + (hits.length
          ? '<ul>' + hits.map(function(hit) {
              return '<li>' + linkTo(hit.entry, 'tab-objectifs') + '<br><small>' + escapeHtml(hit.entry.summary || hit.entry.focus || '') + '</small></li>';
            }).join('') + '</ul>'
          : '<p>Je n’ai pas trouvé de résultat précis pour ce thème.</p>');
      }

      if (action === 'levels') {
        return '<strong>Parcours disponibles</strong><ul>' + sections.map(function(section) {
          return '<li><strong>' + escapeHtml(section.title) + '</strong> : ' + escapeHtml(section.description || '') + '</li>';
        }).join('') + '</ul>';
      }

      if (action === 'review') {
        var reviewVocab = sampleList(content.vocabulary || current.vocab || [], 4);
        return '<strong>Révision rapide</strong><ol><li>Relisez l’objectif : ' + escapeHtml(entry.focus || entry.summary || entry.label) + '.</li><li>Révisez ces mots : ' + escapeHtml(reviewVocab.map(function(v) { return v.word; }).join(', ') || (entry.themes || []).join(', ')) + '.</li><li>Dites une phrase modèle.</li><li>Faites un jeu non terminé.</li></ol>';
      }

      return answerAuto('start');
    }

    function botFollowupsHtml(action) {
      var sets = {
        start: [
          ['diagnostic', 'Diagnostic automatique'],
          ['five', 'J’ai 5 minutes'],
          ['search', 'Chercher dans le site'],
          ['current', 'Que dois-je faire ici ?'],
          ['memory', 'Ce que je dois revoir']
        ],
        current: [
          ['understand', 'Comment comprendre ?'],
          ['produce', 'Que dire / écrire ?'],
          ['games', 'Quel jeu faire ?'],
          ['progress', 'Où j’en suis ?']
        ],
        understand: [
          ['vocab', 'Quels mots repérer ?'],
          ['phrases', 'Voir des phrases'],
          ['games', 'Je vérifie avec un jeu'],
          ['produce', 'Je réponds comment ?']
        ],
        produce: [
          ['phrases', 'Phrases modèles'],
          ['vocab', 'Mots utiles'],
          ['grammar', 'Règle utile'],
          ['review', 'Révision rapide']
        ],
        vocab: [
          ['phrases', 'Utiliser ces mots'],
          ['games', 'Jeu de vocabulaire'],
          ['review', 'Réviser encore'],
          ['grammar', 'Lien avec la règle']
        ],
        grammar: [
          ['phrases', 'Exemples de phrases'],
          ['verbs', 'Verbes liés'],
          ['produce', 'Faire une phrase'],
          ['games', 'S’entraîner']
        ],
        verbs: [
          ['phrases', 'Phrases avec verbes'],
          ['grammar', 'Voir la règle'],
          ['games', 'Jeu conjugaison'],
          ['review', 'Révision rapide']
        ],
        games: [
          ['progress', 'Voir ma progression'],
          ['review', 'Préparer le jeu'],
          ['vocab', 'Revoir les mots'],
          ['current', 'Retour unité']
        ],
        progress: [
          ['games', 'Prochain jeu'],
          ['five', 'J’ai 5 minutes'],
          ['review', 'Révision rapide'],
          ['current', 'Objectif actuel'],
          ['levels', 'Niveaux']
        ],
        diagnostic: [
          ['five', 'J’ai 5 minutes'],
          ['games', 'Quel jeu faire ?'],
          ['current', 'Voir l’objectif'],
          ['search', 'Chercher un thème']
        ],
        five: [
          ['games', 'Lancer un jeu'],
          ['vocab', 'Voir les mots'],
          ['phrases', 'Phrase modèle'],
          ['memory', 'Mémoriser ma révision']
        ],
        search: [
          ['search_geo', 'Pays / villes'],
          ['search_work', 'Travail'],
          ['search_home', 'Logement'],
          ['search_admin', 'Administration']
        ],
        memory: [
          ['review', 'Révision rapide'],
          ['five', 'J’ai 5 minutes'],
          ['vocab', 'Revoir les mots'],
          ['progress', 'Progression']
        ]
      };
      var followups = sets[action] || [
        ['current', 'Que dois-je faire ici ?'],
        ['understand', 'Comment comprendre ?'],
        ['produce', 'Que dire / écrire ?'],
        ['vocab', 'Quels mots réviser ?'],
        ['progress', 'Où j’en suis ?']
      ];
      return '<div class="course-chatbot-followups"><span>Questions possibles</span>'
        + followups.map(function(item) {
          return '<button type="button" data-bot-action="' + item[0] + '">' + item[1] + '</button>';
        }).join('')
        + '</div>';
    }

    var wrap = document.createElement('section');
    wrap.className = 'course-chatbot';
    wrap.id = 'courseChatbot';
    wrap.innerHTML = [
      '<button class="course-chatbot-toggle" type="button" aria-expanded="false" aria-controls="courseChatbotPanel">💬</button>',
      '<div class="course-chatbot-panel" id="courseChatbotPanel" hidden>',
      '  <div class="course-chatbot-head">',
      '    <img class="course-chatbot-avatar" src="' + (window.EF_ROOT || '../') + 'assets/emanuelle.jpg" alt="Emmanuelle">',
      '    <span class="course-chatbot-title"><strong>Emmanuelle</strong><span>Assistante IA · réponses par boutons</span></span>',
      '  </div>',
      '  <div class="course-chatbot-log" aria-live="polite">',
      '    <div class="course-chatbot-msg bot">' + answerAuto('start') + botFollowupsHtml('start') + '</div>',
      '  </div>',
      '  <div class="course-chatbot-choices" aria-label="Questions automatiques">',
      '    <button type="button" data-bot-action="diagnostic">Diagnostic</button>',
      '    <button type="button" data-bot-action="five">J’ai 5 minutes</button>',
      '    <button type="button" data-bot-action="search">Chercher</button>',
      '    <button type="button" data-bot-action="current">Que dois-je faire ici ?</button>',
      '    <button type="button" data-bot-action="understand">Comment comprendre ?</button>',
      '    <button type="button" data-bot-action="produce">Que dire / écrire ?</button>',
      '    <button type="button" data-bot-action="vocab">Quels mots réviser ?</button>',
      '    <button type="button" data-bot-action="grammar">Quelle règle ?</button>',
      '    <button type="button" data-bot-action="verbs">Quels verbes ?</button>',
      '    <button type="button" data-bot-action="phrases">Phrases modèles</button>',
      '    <button type="button" data-bot-action="games">Quel jeu faire ?</button>',
      '    <button type="button" data-bot-action="progress">Où j’en suis ?</button>',
      '    <button type="button" data-bot-action="review">Révision rapide</button>',
      '    <button type="button" data-bot-action="memory">Mémoire</button>',
      '    <button type="button" data-bot-action="levels">Niveaux</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(wrap);

    var toggle = wrap.querySelector('.course-chatbot-toggle');
    var panel = wrap.querySelector('.course-chatbot-panel');
    var choices = wrap.querySelector('.course-chatbot-choices');
    var log = wrap.querySelector('.course-chatbot-log');

    function addMessage(kind, html, action) {
      var msg = document.createElement('div');
      msg.className = 'course-chatbot-msg ' + kind;
      msg.innerHTML = kind === 'bot' ? html + botFollowupsHtml(action) : html;
      log.appendChild(msg);
      log.scrollTop = log.scrollHeight;
      return msg;
    }

    function addTyping() {
      var msg = document.createElement('div');
      msg.className = 'course-chatbot-msg bot course-chatbot-typing';
      msg.innerHTML = '<span></span><span></span><span></span>';
      log.appendChild(msg);
      log.scrollTop = log.scrollHeight;
      return msg;
    }

    function runBotAction(btn) {
      if (!btn) return;
      var action = btn.dataset.botAction;
      rememberBotAction(action, currentKnowledgeItem().entry);
      addMessage('user', escapeHtml(btn.textContent.trim()));
      var typing = addTyping();
      window.setTimeout(function() {
        typing.remove();
        addMessage('bot', answerAuto(action), action);
      }, 360);
    }

    toggle.addEventListener('click', function() {
      var open = panel.hasAttribute('hidden');
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (open) {
        var firstChoice = choices.querySelector('button');
        if (firstChoice) firstChoice.focus();
      }
    });

    choices.addEventListener('click', function(event) {
      var btn = event.target.closest('[data-bot-action]');
      if (!btn) return;
      runBotAction(btn);
    });

    log.addEventListener('click', function(event) {
      var btn = event.target.closest('[data-bot-action]');
      if (!btn) return;
      runBotAction(btn);
    });
  }

  renderCourseChatbot();
}());
