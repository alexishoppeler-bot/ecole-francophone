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
    documentTitle: 'École Francophone | Plateforme de français prête à déployer',
    metaDescription: 'Plateforme pédagogique de français adaptable aux vocabulaires, scénarios et contextes de chaque établissement, avec parcours CECRL A1 à C2 et version locale possible.',
    ogTitle: 'École Francophone | Plateforme de français prête à déployer',
    ogDescription: 'Solution pédagogique de français adaptable aux vocabulaires, scénarios et contextes de chaque établissement, avec version locale possible sans internet.',
    schemaName: 'École Francophone',
    schemaDescription: 'Plateforme pédagogique de français adaptable aux vocabulaires, scénarios et contextes de chaque établissement, avec cours CECRL et version locale possible.',
    heroLabel: 'Solution pédagogique prête à déployer',
    heroTitleBlueHtml: 'école-',
    heroTitlePurpleHtml: 'francophone',
    heroBody: 'Une plateforme de français claire, progressive et immédiatement utilisable, adaptable au vocabulaire, aux scénarios et aux contextes de chaque établissement. Elle peut aussi fonctionner en version locale, sans connexion internet.',
    primaryAction: 'Voir la démo',
    secondaryAction: 'Auto-évaluation CECRL',
    panelTitle: 'Arguments forts',
    panelItems: [
      'Parcours complet de A1 à C2',
      'Vocabulaire, situations et scénarios adaptés à votre public',
      'Utilisable en autonomie, en classe ou en ateliers accompagnés',
      'Version locale possible sans connexion internet'
    ],
    cards: [
      {
        title: 'Produit démontrable',
        body: 'Plus de 80 pages de cours, entraînements et annexes déjà consultables pour convaincre rapidement un décideur.',
        badge: 'A1 → C2'
      },
      {
        title: 'Adaptable au terrain',
        body: 'Lexique métier, dialogues, démarches, consignes et situations peuvent être ajustés aux besoins réels de chaque établissement.',
        badge: 'Sur mesure'
      },
      {
        title: 'Mode local possible',
        body: 'La plateforme peut être installée localement pour fonctionner dans une salle, une structure ou un réseau avec peu ou pas d\'internet.',
        badge: 'Hors ligne'
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
