'use strict';

// Textes d'interface pour tous les exercices d'entraînement.
// Le contenu pedagogique des unites reste dans js/content.js.
window.GAME_TEXT = {
  hubUnitButton: '← Jeux de l\'unité',
  lessonButton: '📖 Leçon',
  replayButton: '🔄 Rejouer',
  restartButton: '🔄 Recommencer',
  nextButton: 'Suivant →',
  returnButton: '← Retour',
  returnToLesson: 'Retour à la leçon',
  returnToCourses: '← Cours',

  hub: {
    heroPrefix: 'Entraînement — ',
    chooseGame: 'Choisissez un jeu',
    games: {
      vraiFaux: { label: 'Vrai ou Faux', desc: 'Évaluer des affirmations sur le thème' },
      apparier: { label: 'Associer', desc: 'Relier chaque mot à sa définition' },
      completer: { label: 'Compléter', desc: 'Retrouver les mots manquants' },
      ecouter: { label: 'Écouter', desc: 'Comprendre un document oral' },
      quiz: { label: 'Quiz', desc: 'Vérifier sa compréhension de l\'unité' },
      conjugaison: { label: 'Conjugaison', desc: 'S\'entraîner sur les verbes clés' },
      motsMeles: { label: 'Mots mêlés', desc: 'Retrouver les mots cachés dans la grille' },
      anagrammes: { label: 'Anagrammes', desc: 'Reconstituer les mots à partir des lettres' },
      flashcards: { label: 'Flashcards', desc: 'Mémoriser le vocabulaire avec des cartes' },
      dialogue: { label: 'Dialogue', desc: 'Simuler une situation de communication' },
      construire: { label: 'Construire', desc: 'Remettre les mots d\'une phrase en ordre' },
      valider: { label: 'Valider', desc: 'Tapez le mot correspondant à la définition' }
    }
  },

  score: {
    perfect: 'Parfait !',
    great: 'Très bien !',
    good: 'Bien !',
    keepGoing: 'Continuez !',
    mastery: 'Parfait, tout est maîtrisé !',
    keepWorking: 'À retravailler !'
  },

  empty: {
    unitNotFound: 'Unité introuvable.',
    noQuestions: 'Pas de questions pour cette unité.',
    noGameData: 'Pas de données pour ce jeu.',
    notEnoughVocabulary: 'Pas assez de vocabulaire.',
    notEnoughVocabularyForGame: 'Pas assez de vocabulaire pour ce jeu.',
    notEnoughExamples: 'Pas assez d\'exemples pour ce jeu.',
    noDialogue: 'Pas de dialogue pour cette unité.',
    notEnoughSentences: 'Pas assez de phrases pour ce jeu.'
  },

  feedback: {
    correct: '✓ Correct !',
    incorrectPrefix: '✗ La réponse était : ',
    tryAgain: '✗ Réessayez !',
    bravoPrefix: '✓ Bravo ! ',
    almost: '↗ Presque ! Essayez encore… <em>(faute de frappe ?)</em>',
    answerPrefix: 'Réponse : ',
    validationCorrectPrefix: '✓ Correct ! ',
    reviewWords: '📝 Mots à revoir'
  },

  vraiFaux: {
    trueLabel: '✓ Vrai',
    falseLabel: '✗ Faux'
  },

  ecouter: {
    questionPrefix: '🎧 Question ',
    questionMiddle: ' sur ',
    playAriaLabel: 'Écouter la question',
    nextQuestion: 'Question suivante →',
    seeScore: 'Voir mon score →',
    correctHtml: '✅ Correct !'
  },

  dialogue: {
    start: 'Commencer le dialogue →'
  },

  validation: {
    placeholder: 'Tapez le mot en français…',
    submit: 'Vérifier',
    hint: '💡 Indice',
    skip: 'Passer →',
    hintPrefix: '💡 ',
    mistakesTitleSuffix: 'Mots à revoir',
    tableWord: 'Mot',
    tableYourAnswer: 'Votre réponse',
    tableDefinition: 'Définition'
  },

  titles: {
    vraiFaux: 'Vrai ou Faux',
    apparier: 'Associer',
    completer: 'Compléter',
    ecouter: 'Écouter',
    quiz: 'Quiz',
    conjugaison: 'Conjugaison',
    apparierConjugaison: 'Associer — Conjugaison',
    completerConjugaison: 'Compléter — Conjugaison',
    vraiFauxConjugaison: 'Vrai / Faux — Conjugaison',
    motsMeles: 'Mots mêlés',
    anagrammes: 'Anagrammes',
    flashcards: 'Flashcards',
    dialogue: 'Dialogue',
    construire: 'Construire une phrase',
    valider: 'Valider le vocabulaire'
  }
};
