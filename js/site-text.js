'use strict';

// Textes communs du site.
// Modifier ce fichier pour changer l'accueil, les libelles partages
// et les textes de navigation sans parcourir plusieurs pages HTML.
window.SITE_TEXT = {
  brand: {
    alt: 'learning progress',
    homeHref: '../index.html',
    blueHtml: 'learning',
    purpleHtml: 'progress',
    courseTitlePrefix: 'learning progress'
  },

  home: {
    documentTitle: 'learning progress | Plateforme de français prête à déployer',
    metaDescription: 'Plateforme pédagogique de français adaptable aux vocabulaires, scénarios et contextes de chaque établissement, avec parcours CECRL A1 à C2 et version locale possible.',
    ogTitle: 'learning progress | Plateforme de français prête à déployer',
    ogDescription: 'Solution pédagogique de français adaptable aux vocabulaires, scénarios et contextes de chaque établissement, avec version locale possible sans internet.',
    schemaName: 'learning progress',
    schemaDescription: 'Plateforme pédagogique de français adaptable aux vocabulaires, scénarios et contextes de chaque établissement, avec cours CECRL et version locale possible.',
    heroLabel: 'Solution pédagogique prête à déployer',
    heroTitleBlueHtml: 'learning',
    heroTitlePurpleHtml: 'progress',
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
      documentTitle: 'learning progress | Cours',
      backLabel: '← Accueil',
      titleBlueHtml: 'Cours',
      titlePurpleHtml: 'de français',
      subtitle: 'Choisissez une unité dans le sommaire pour accéder aux leçons, exercices et points de langue.',
      progressLinkLabel: ''
    },
    footer: [
      'learning progress · cours et repères pratiques',
      'Progression et contenus pensés pour la Suisse romande'
    ]
  },

  unit: {
    status: {
      completed: 'Terminée',
      started:   'En cours',
      idle:      'À faire',
      cardCompleted: 'Terminé',
      cardStarted:   'En cours',
      cardIdle:      'À faire'
    },
    nav: {
      prev:        'Unité précédente',
      next:        'Unité suivante',
      courseStart: 'Début du parcours',
      courseEnd:   'Fin du parcours',
      courseEndMsg:'Bravo'
    },
    progress: {
      sectionKicker:   'Statut actuel',
      sectionBody:     'Votre parcours dans cette unité.',
      markStarted:     'Marquer en cours',
      markCompleted:   'Terminée ✓',
      gamesKicker:     'Entraînements',
      gamesLabel:      'Tous les jeux',
      gamesDone:       'jeux terminés',
      hubComprehension:'🧩 Compréhension',
      hubProduction:   '✍️ Production & entraînement'
    },
    bot: {
      idle:    'Je suis là. Pose-moi une question sur un mot, une règle, une conjugaison ou une unité.',
      greet:   'Bonjour, ravi de t\'aider. Dis-moi ce que tu veux travailler: vocabulaire, grammaire, conjugaison, phonétique, jeux ou progression.',
      diagDefault: 'Commencez par Communication, puis faites un jeu.',
      diagDone:    'Cette unité est terminée : passez à la suite.',
      diagGood:    'Bonne base : faites le test final ou complétez les jeux restants.',
      diagStarted: 'Vous avez commencé : terminez un jeu court avant de changer d\'unité.'
    }
  },

};
