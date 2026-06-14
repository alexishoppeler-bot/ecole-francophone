'use strict';

// Textes communs du site.
// Modifier ce fichier pour changer l'accueil, les libelles partages
// et les textes de navigation sans parcourir plusieurs pages HTML.
window.SITE_TEXT = {
  brand: {
    alt: 'École Francophone',
    homeHref: '../index.html',
    blueHtml: 'école-',
    purpleHtml: 'francophone',
    courseTitlePrefix: 'École Francophone'
  },

  home: {
    documentTitle: 'École Francophone | Exercices gratuits',
    metaDescription: 'Exercices gratuits et progressifs pour apprendre le numérique, la bureautique, le français pratique, les e-mails, le CV et les démarches d\'emploi.',
    ogTitle: 'École Francophone | Exercices gratuits',
    ogDescription: 'Exercices gratuits et progressifs pour apprendre le numérique, la bureautique, le français pratique, les e-mails, le CV et les démarches d\'emploi.',
    schemaName: 'École Francophone',
    schemaDescription: 'Exercices progressifs pour apprendre le numérique, la bureautique, le français pratique et les démarches d\'emploi.',
    heroLabel: 'Plateforme d\'exercices',
    heroTitleBlueHtml: 'école-',
    heroTitlePurpleHtml: 'francophone',
    heroBody: 'Des cours gratuits et progressifs pour apprendre le français — de A1 à C2 — avec des leçons, des exercices d\'entraînement et des évaluations.',
    primaryAction: 'Cours',
    secondaryAction: '🎯 Auto-évaluation CECRL',
    panelTitle: 'Parcours utiles',
    panelItems: [
      'Cours progressifs de A1 à C2',
      'Grammaire, conjugaison et vocabulaire',
      'Compréhension orale et écrite',
      'Exercices d\'entraînement et préparation au DELF'
    ],
    cards: [
      {
        title: 'Cours par niveaux',
        body: 'Des unités thématiques progressives de A1 à C2, avec leçons et points de langue.',
        badge: 'A1 → C2'
      },
      {
        title: 'Grammaire et conjugaison',
        body: 'Fiches de grammaire, tableaux de conjugaison et exercices d\'orthographe.',
        badge: 'Langue'
      },
      {
        title: 'Entraînement et DELF',
        body: 'Exercices de compréhension orale, entraînements par compétence et blancs d\'examen.',
        badge: 'Examen'
      }
    ]
  },

  course: {
    nav: {
      ariaLabel: 'Navigation principale',
      home: 'Accueil',
      course: 'Cours',
      autoeval: 'Auto-évaluation'
    },
    sidebar: {
      title: 'Sommaire'
    },
    back: {
      index: '← Accueil',
      unit: '← Cours'
    },
    index: {
      documentTitle: 'École Francophone | Cours',
      backLabel: '← Accueil',
      titleBlueHtml: 'Cours',
      titlePurpleHtml: 'de français',
      subtitle: 'Choisissez une unité dans le sommaire pour accéder aux leçons, exercices et points de langue.',
      progressLinkLabel: '📊 Voir mon tableau de progression →'
    },
    footer: [
      'École Francophone · cours et repères pratiques',
      'Progression et contenus pensés pour la Suisse romande'
    ]
  },

  exercises: {
    headerAriaLabel: 'Accueil et suivi',
    sidebarHeadingTitle: 'Activités',
    sidebarHeadingSubtitle: 'Choisissez un exercice',
    appsTitle: 'Applications',
    footer: [
      'Plateforme simple pour apprendre pas a pas',
      'Vos résultats restent sur cet appareil'
    ],
    toggleLabel: 'Ouvrir les activités',
    toggleTitle: 'Activités'
  }
};
