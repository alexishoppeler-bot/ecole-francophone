'use strict';

(function() {
  var part = {
  "title": "A2",
  "units": {
    "a2-unite-1": {
      "entry": {
        "href": "a2-unite-1.html",
        "label": "À la rencontre des autres",
        "badge": "1",
        "level": "A2",
        "summary": "Créer du lien et entrer en relation",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 0,
        "training": [
          {
            "href": "../games/simulations-dialogues.html",
            "label": "Dialogues",
            "note": "faire connaissance selon le contexte"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz relationnel",
            "note": "vocabulaire de contact"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "réutiliser les formules d'échange"
          }
        ],
        "assessment": [
          {
            "prompt": "À A2, pour entrer en relation, il faut surtout…",
            "choices": [
              "enchaîner des phrases sans contexte",
              "adapter son ton à la situation",
              "utiliser uniquement le tutoiement"
            ],
            "answer": 1
          },
          {
            "prompt": "Une association locale est…",
            "choices": [
              "un type de transport",
              "un lieu possible de rencontre",
              "une conjugaison"
            ],
            "answer": 1
          },
          {
            "prompt": "Faire connaissance signifie…",
            "choices": [
              "acheter un produit",
              "rencontrer et découvrir quelqu'un",
              "corriger un texte"
            ],
            "answer": 1
          }
        ],
        "expressions": [
          "Depuis combien de temps êtes-vous ici ?",
          "Qu'est-ce que vous faites dans la vie ?",
          "On peut se tutoyer ?",
          "Ravi(e) de faire votre connaissance.",
          "On se revoit quand ?"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "un échange : interaction entre deux ou plusieurs personnes",
          "correct": true
        },
        {
          "phrase": "un échange : emploi de “vous” dans un cadre formel",
          "correct": false
        },
        {
          "phrase": "le vouvoiement : emploi de “vous” dans un cadre formel",
          "correct": true
        },
        {
          "phrase": "le vouvoiement : interaction entre deux ou plusieurs personnes",
          "correct": false
        },
        {
          "phrase": "une rencontre : moment où des personnes font connaissance",
          "correct": true
        },
        {
          "phrase": "une rencontre : interaction entre deux ou plusieurs personnes",
          "correct": false
        },
        {
          "phrase": "un contact : lien ou relation créée avec quelqu'un",
          "correct": true
        },
        {
          "phrase": "un contact : interaction entre deux ou plusieurs personnes",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "À A2, pour entrer en relation, il faut surtout…",
          "choices": [
            "enchaîner des phrases sans contexte",
            "adapter son ton à la situation",
            "utiliser uniquement le tutoiement"
          ],
          "answer": 1
        },
        {
          "prompt": "Une association locale est…",
          "choices": [
            "un type de transport",
            "un lieu possible de rencontre",
            "une conjugaison"
          ],
          "answer": 1
        },
        {
          "prompt": "Faire connaissance signifie…",
          "choices": [
            "acheter un produit",
            "rencontrer et découvrir quelqu'un",
            "corriger un texte"
          ],
          "answer": 1
        }
      ],
      "apparier": [
        {
          "word": "un échange",
          "definition": "interaction entre deux ou plusieurs personnes"
        },
        {
          "word": "le vouvoiement",
          "definition": "emploi de “vous” dans un cadre formel"
        },
        {
          "word": "une rencontre",
          "definition": "moment où des personnes font connaissance"
        },
        {
          "word": "un contact",
          "definition": "lien ou relation créée avec quelqu'un"
        },
        {
          "word": "une association",
          "definition": "groupe de personnes réunies autour d'un projet ou d'une activité commune"
        },
        {
          "word": "un échange formel/informel",
          "definition": "conversation selon le contexte (officiel ou détendu)"
        }
      ],
      "completer": [
        {
          "display": "Depuis ___ de temps vivez-vous ici ?",
          "answer": "combien",
          "full": "Depuis combien de temps vivez-vous ici ?"
        },
        {
          "display": "Je ___ à une activité de quartier",
          "answer": "participe",
          "full": "Je participe à une activité de quartier."
        },
        {
          "display": "Nous ___ échangé après le cours",
          "answer": "avons",
          "full": "Nous avons échangé après le cours."
        },
        {
          "display": "On ___ rester en contact ?",
          "answer": "peut",
          "full": "On peut rester en contact ?"
        },
        {
          "display": "Qu'est-ce qui ___ a amené(e) à Lausanne ?",
          "answer": "vous",
          "full": "Qu'est-ce qui vous a amené(e) à Lausanne ?"
        },
        {
          "display": "Depuis ___ de temps habitez-vous ici ?",
          "answer": "combien",
          "full": "Depuis combien de temps habitez-vous ici ?"
        }
      ],
      "ecouter": [
        {
          "prompt": "À A2, pour entrer en relation, il faut surtout…",
          "choices": [
            "enchaîner des phrases sans contexte",
            "adapter son ton à la situation",
            "utiliser uniquement le tutoiement"
          ],
          "answer": 1
        },
        {
          "prompt": "Une association locale est…",
          "choices": [
            "un type de transport",
            "un lieu possible de rencontre",
            "une conjugaison"
          ],
          "answer": 1
        },
        {
          "prompt": "Faire connaissance signifie…",
          "choices": [
            "acheter un produit",
            "rencontrer et découvrir quelqu'un",
            "corriger un texte"
          ],
          "answer": 1
        }
      ],
      "conjugaison": {
        "verbs": [
          "rencontrer",
          "présenter",
          "échanger",
          "demander",
          "répondre",
          "saluer",
          "parler",
          "comprendre"
        ],
        "conjugations": [
          "<strong>rencontrer</strong> : je rencontre, tu rencontres, il/elle rencontre, nous rencontrons, vous rencontrez, ils/elles rencontrent",
          "<strong>répondre</strong> : je réponds, tu réponds, il/elle répond, nous répondons, vous répondez, ils/elles répondent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "CONTACT",
        "ECHANGE",
        "VOISIN",
        "CURIOSITE",
        "BENEVOLE"
      ],
      "flashcards": [
        {
          "word": "un échange",
          "definition": "interaction entre deux ou plusieurs personnes"
        },
        {
          "word": "le vouvoiement",
          "definition": "emploi de “vous” dans un cadre formel"
        },
        {
          "word": "une rencontre",
          "definition": "moment où des personnes font connaissance"
        },
        {
          "word": "un contact",
          "definition": "lien ou relation créée avec quelqu'un"
        },
        {
          "word": "une association",
          "definition": "groupe de personnes réunies autour d'un projet ou d'une activité commune"
        },
        {
          "word": "un échange formel/informel",
          "definition": "conversation selon le contexte (officiel ou détendu)"
        },
        {
          "word": "contact",
          "definition": "lien établi avec une personne"
        },
        {
          "word": "présentation",
          "definition": "fait de se faire connaître auprès de nouvelles personnes"
        },
        {
          "word": "échange",
          "definition": "conversation ou partage entre deux personnes"
        },
        {
          "word": "association",
          "definition": "groupe de personnes réunies autour d'un objectif commun"
        },
        {
          "word": "voisin",
          "definition": "personne qui habite près de chez soi"
        },
        {
          "word": "curiosité",
          "definition": "désir de connaître ou de découvrir quelque chose"
        },
        {
          "word": "bénévole",
          "definition": "personne qui travaille sans être payée, pour aider les autres"
        },
        {
          "word": "intégration",
          "definition": "processus par lequel on s'insère dans une nouvelle société"
        }
      ],
      "anagrammes": [
        {
          "word": "contact",
          "definition": "lien établi avec une personne"
        },
        {
          "word": "présentation",
          "definition": "fait de se faire connaître auprès de nouvelles personnes"
        },
        {
          "word": "échange",
          "definition": "conversation ou partage entre deux personnes"
        },
        {
          "word": "association",
          "definition": "groupe de personnes réunies autour d'un objectif commun"
        },
        {
          "word": "voisin",
          "definition": "personne qui habite près de chez soi"
        },
        {
          "word": "curiosité",
          "definition": "désir de connaître ou de découvrir quelque chose"
        },
        {
          "word": "bénévole",
          "definition": "personne qui travaille sans être payée, pour aider les autres"
        },
        {
          "word": "intégration",
          "definition": "processus par lequel on s'insère dans une nouvelle société"
        }
      ],
      "dialogue": [],
      "construire": [
        "Depuis combien de temps vivez-vous ici ?",
        "Je participe à une activité de quartier.",
        "Nous avons échangé après le cours.",
        "On peut rester en contact ?",
        "Qu'est-ce qui vous a amené(e) à Lausanne ?",
        "Depuis combien de temps habitez-vous ici ?"
      ],
      "validation": [
        {
          "word": "un échange",
          "definition": "interaction entre deux ou plusieurs personnes"
        },
        {
          "word": "le vouvoiement",
          "definition": "emploi de “vous” dans un cadre formel"
        },
        {
          "word": "une rencontre",
          "definition": "moment où des personnes font connaissance"
        },
        {
          "word": "un contact",
          "definition": "lien ou relation créée avec quelqu'un"
        },
        {
          "word": "une association",
          "definition": "groupe de personnes réunies autour d'un projet ou d'une activité commune"
        },
        {
          "word": "un échange formel/informel",
          "definition": "conversation selon le contexte (officiel ou détendu)"
        },
        {
          "word": "contact",
          "definition": "lien établi avec une personne"
        },
        {
          "word": "présentation",
          "definition": "fait de se faire connaître auprès de nouvelles personnes"
        },
        {
          "word": "échange",
          "definition": "conversation ou partage entre deux personnes"
        },
        {
          "word": "association",
          "definition": "groupe de personnes réunies autour d'un objectif commun"
        },
        {
          "word": "voisin",
          "definition": "personne qui habite près de chez soi"
        },
        {
          "word": "curiosité",
          "definition": "désir de connaître ou de découvrir quelque chose"
        },
        {
          "word": "bénévole",
          "definition": "personne qui travaille sans être payée, pour aider les autres"
        },
        {
          "word": "intégration",
          "definition": "processus par lequel on s'insère dans une nouvelle société"
        }
      ],
      "vocabulary": [
        {
          "word": "un échange",
          "definition": "interaction entre deux ou plusieurs personnes"
        },
        {
          "word": "le vouvoiement",
          "definition": "emploi de “vous” dans un cadre formel"
        },
        {
          "word": "une rencontre",
          "definition": "moment où des personnes font connaissance"
        },
        {
          "word": "un contact",
          "definition": "lien ou relation créée avec quelqu'un"
        },
        {
          "word": "une association",
          "definition": "groupe de personnes réunies autour d'un projet ou d'une activité commune"
        },
        {
          "word": "un échange formel/informel",
          "definition": "conversation selon le contexte (officiel ou détendu)"
        },
        {
          "word": "contact",
          "definition": "lien établi avec une personne"
        },
        {
          "word": "présentation",
          "definition": "fait de se faire connaître auprès de nouvelles personnes"
        },
        {
          "word": "échange",
          "definition": "conversation ou partage entre deux personnes"
        },
        {
          "word": "association",
          "definition": "groupe de personnes réunies autour d'un objectif commun"
        },
        {
          "word": "voisin",
          "definition": "personne qui habite près de chez soi"
        },
        {
          "word": "curiosité",
          "definition": "désir de connaître ou de découvrir quelque chose"
        },
        {
          "word": "bénévole",
          "definition": "personne qui travaille sans être payée, pour aider les autres"
        },
        {
          "word": "intégration",
          "definition": "processus par lequel on s'insère dans une nouvelle société"
        }
      ],
      "examples": [
        "Depuis combien de temps vivez-vous ici ?",
        "Je participe à une activité de quartier.",
        "Nous avons échangé après le cours.",
        "On peut rester en contact ?",
        "Qu'est-ce qui vous a amené(e) à Lausanne ?",
        "Depuis combien de temps habitez-vous ici ?",
        "Ravi de faire votre connaissance.",
        "Je participe à une association de quartier.",
        "On peut se tutoyer si tu veux.",
        "Elle a rencontré ses voisins hier.",
        "Ils organisent une fête pour se retrouver.",
        "Je cherche à m'intégrer dans mon nouveau quartier.",
        "Nous aimons échanger sur nos cultures."
      ],
      "expressionsPlus": [
        {
          "text": "Depuis combien de temps êtes-vous ici ?",
          "register": "formel"
        },
        {
          "text": "Tu es là depuis quand ?",
          "register": "familier"
        },
        {
          "text": "Qu'est-ce que vous faites dans la vie ?",
          "register": "formel"
        },
        {
          "text": "Tu fais quoi comme travail ?",
          "register": "familier"
        },
        {
          "text": "On peut se tutoyer ?",
          "register": "courant"
        },
        {
          "text": "Ravi(e) de faire votre connaissance.",
          "register": "formel"
        },
        {
          "text": "On se revoit quand ?",
          "register": "familier"
        },
        {
          "text": "Je suis content(e) d'avoir fait votre connaissance.",
          "register": "formel"
        },
        {
          "text": "On est du même quartier ?",
          "register": "familier"
        }
      ],
      "verbs": [
        "rencontrer",
        "présenter",
        "échanger",
        "demander",
        "répondre",
        "saluer",
        "parler",
        "comprendre"
      ],
      "conjugations": [
        "<strong>rencontrer</strong> : je rencontre, tu rencontres, il/elle rencontre, nous rencontrons, vous rencontrez, ils/elles rencontrent",
        "<strong>répondre</strong> : je réponds, tu réponds, il/elle répond, nous répondons, vous répondez, ils/elles répondent"
      ],
      "dialogues": null
    },
    "a2-unite-2": {
      "entry": {
        "href": "a2-unite-2.html",
        "label": "Au fil des jours",
        "badge": "2",
        "level": "A2",
        "summary": "Raconter la routine et les habitudes",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 1,
        "training": [
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "connecteurs du quotidien"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz rythme",
            "note": "décrire la semaine"
          },
          {
            "href": "../games/cliquer.html",
            "label": "Cliquer",
            "note": "identifier l'ordre des actions"
          }
        ],
        "assessment": [
          {
            "prompt": "“D'habitude” sert à parler…",
            "choices": [
              "d'une habitude",
              "d'un prix",
              "d'une recette"
            ],
            "answer": 0
          },
          {
            "prompt": "Pour raconter une journée claire, il faut…",
            "choices": [
              "mélanger tous les temps",
              "ordonner les actions",
              "supprimer les horaires"
            ],
            "answer": 1
          },
          {
            "prompt": "Un horaire fixe correspond à…",
            "choices": [
              "une règle stable",
              "une impression vague",
              "une opinion"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "En général, je…",
          "D'habitude, je prends…",
          "Une fois par semaine…",
          "Ça dépend des jours.",
          "Je m'organise comme ça…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une habitude : action faite régulièrement",
          "correct": true
        },
        {
          "phrase": "une habitude : nombre de fois où une action se répète",
          "correct": false
        },
        {
          "phrase": "la fréquence : nombre de fois où une action se répète",
          "correct": true
        },
        {
          "phrase": "la fréquence : action faite régulièrement",
          "correct": false
        },
        {
          "phrase": "une exception : cas qui ne suit pas l'habitude générale",
          "correct": true
        },
        {
          "phrase": "une exception : action faite régulièrement",
          "correct": false
        },
        {
          "phrase": "une organisation : manière de répartir son temps ou ses tâches",
          "correct": true
        },
        {
          "phrase": "une organisation : action faite régulièrement",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "“D'habitude” sert à parler…",
          "choices": [
            "d'une habitude",
            "d'un prix",
            "d'une recette"
          ],
          "answer": 0
        },
        {
          "prompt": "Pour raconter une journée claire, il faut…",
          "choices": [
            "mélanger tous les temps",
            "ordonner les actions",
            "supprimer les horaires"
          ],
          "answer": 1
        },
        {
          "prompt": "Un horaire fixe correspond à…",
          "choices": [
            "une règle stable",
            "une impression vague",
            "une opinion"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une habitude",
          "definition": "action faite régulièrement"
        },
        {
          "word": "la fréquence",
          "definition": "nombre de fois où une action se répète"
        },
        {
          "word": "une exception",
          "definition": "cas qui ne suit pas l'habitude générale"
        },
        {
          "word": "une organisation",
          "definition": "manière de répartir son temps ou ses tâches"
        },
        {
          "word": "en général",
          "definition": "dans la plupart des cas, d'ordinaire"
        },
        {
          "word": "sauf quand",
          "definition": "connecteur pour introduire une exception"
        }
      ],
      "completer": [
        {
          "display": "D'habitude, je ___ tôt",
          "answer": "pars",
          "full": "D'habitude, je pars tôt."
        },
        {
          "display": "Une ___ par semaine, je vais au marché",
          "answer": "fois",
          "full": "Une fois par semaine, je vais au marché."
        },
        {
          "display": "Le ___ j'ai une exception",
          "answer": "mardi",
          "full": "Le mardi, j'ai une exception."
        },
        {
          "display": "Je ___ selon mes horaires",
          "answer": "morganise",
          "full": "Je m'organise selon mes horaires."
        },
        {
          "display": "Parfois, je ___ à la maison",
          "answer": "reste",
          "full": "Parfois, je reste à la maison."
        },
        {
          "display": "D'habitude, je ___ le bus de sept heures",
          "answer": "prends",
          "full": "D'habitude, je prends le bus de sept heures."
        }
      ],
      "ecouter": [
        {
          "prompt": "“D'habitude” sert à parler…",
          "choices": [
            "d'une habitude",
            "d'un prix",
            "d'une recette"
          ],
          "answer": 0
        },
        {
          "prompt": "Pour raconter une journée claire, il faut…",
          "choices": [
            "mélanger tous les temps",
            "ordonner les actions",
            "supprimer les horaires"
          ],
          "answer": 1
        },
        {
          "prompt": "Un horaire fixe correspond à…",
          "choices": [
            "une règle stable",
            "une impression vague",
            "une opinion"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "commencer",
          "sortir",
          "revenir",
          "prévoir",
          "s'organiser",
          "planifier",
          "finir",
          "aller"
        ],
        "conjugations": [
          "<strong>sortir</strong> : je sors, tu sors, il/elle sort, nous sortons, vous sortez, ils/elles sortent",
          "<strong>prévoir</strong> : je prévois, tu prévois, il/elle prévoit, nous prévoyons, vous prévoyez, ils/elles prévoient"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "UNE",
        "SAUF",
        "HABITUDE",
        "AGENDA",
        "TRANSPORT",
        "PLANNING"
      ],
      "flashcards": [
        {
          "word": "une habitude",
          "definition": "action faite régulièrement"
        },
        {
          "word": "la fréquence",
          "definition": "nombre de fois où une action se répète"
        },
        {
          "word": "une exception",
          "definition": "cas qui ne suit pas l'habitude générale"
        },
        {
          "word": "une organisation",
          "definition": "manière de répartir son temps ou ses tâches"
        },
        {
          "word": "en général",
          "definition": "dans la plupart des cas, d'ordinaire"
        },
        {
          "word": "sauf quand",
          "definition": "connecteur pour introduire une exception"
        },
        {
          "word": "habitude",
          "definition": "action que l'on répète régulièrement"
        },
        {
          "word": "organisation",
          "definition": "manière de planifier et gérer ses activités"
        },
        {
          "word": "agenda",
          "definition": "carnet ou application pour noter ses rendez-vous"
        },
        {
          "word": "hebdomadaire",
          "definition": "qui a lieu chaque semaine"
        },
        {
          "word": "transport",
          "definition": "moyen de se déplacer : bus, vélo, voiture"
        },
        {
          "word": "planning",
          "definition": "programme de la semaine avec toutes les activités prévues"
        },
        {
          "word": "flexibilité",
          "definition": "capacité à s'adapter aux changements d'horaire"
        },
        {
          "word": "priorité",
          "definition": "tâche la plus importante à faire en premier"
        }
      ],
      "anagrammes": [
        {
          "word": "habitude",
          "definition": "action que l'on répète régulièrement"
        },
        {
          "word": "organisation",
          "definition": "manière de planifier et gérer ses activités"
        },
        {
          "word": "agenda",
          "definition": "carnet ou application pour noter ses rendez-vous"
        },
        {
          "word": "hebdomadaire",
          "definition": "qui a lieu chaque semaine"
        },
        {
          "word": "transport",
          "definition": "moyen de se déplacer : bus, vélo, voiture"
        },
        {
          "word": "planning",
          "definition": "programme de la semaine avec toutes les activités prévues"
        },
        {
          "word": "flexibilité",
          "definition": "capacité à s'adapter aux changements d'horaire"
        },
        {
          "word": "priorité",
          "definition": "tâche la plus importante à faire en premier"
        }
      ],
      "dialogue": [],
      "construire": [
        "D'habitude, je pars tôt.",
        "Une fois par semaine, je vais au marché.",
        "Le mardi, j'ai une exception.",
        "Je m'organise selon mes horaires.",
        "Parfois, je reste à la maison.",
        "D'habitude, je prends le bus de sept heures."
      ],
      "validation": [
        {
          "word": "une habitude",
          "definition": "action faite régulièrement"
        },
        {
          "word": "la fréquence",
          "definition": "nombre de fois où une action se répète"
        },
        {
          "word": "une exception",
          "definition": "cas qui ne suit pas l'habitude générale"
        },
        {
          "word": "une organisation",
          "definition": "manière de répartir son temps ou ses tâches"
        },
        {
          "word": "en général",
          "definition": "dans la plupart des cas, d'ordinaire"
        },
        {
          "word": "sauf quand",
          "definition": "connecteur pour introduire une exception"
        },
        {
          "word": "habitude",
          "definition": "action que l'on répète régulièrement"
        },
        {
          "word": "organisation",
          "definition": "manière de planifier et gérer ses activités"
        },
        {
          "word": "agenda",
          "definition": "carnet ou application pour noter ses rendez-vous"
        },
        {
          "word": "hebdomadaire",
          "definition": "qui a lieu chaque semaine"
        },
        {
          "word": "transport",
          "definition": "moyen de se déplacer : bus, vélo, voiture"
        },
        {
          "word": "planning",
          "definition": "programme de la semaine avec toutes les activités prévues"
        },
        {
          "word": "flexibilité",
          "definition": "capacité à s'adapter aux changements d'horaire"
        },
        {
          "word": "priorité",
          "definition": "tâche la plus importante à faire en premier"
        }
      ],
      "vocabulary": [
        {
          "word": "une habitude",
          "definition": "action faite régulièrement"
        },
        {
          "word": "la fréquence",
          "definition": "nombre de fois où une action se répète"
        },
        {
          "word": "une exception",
          "definition": "cas qui ne suit pas l'habitude générale"
        },
        {
          "word": "une organisation",
          "definition": "manière de répartir son temps ou ses tâches"
        },
        {
          "word": "en général",
          "definition": "dans la plupart des cas, d'ordinaire"
        },
        {
          "word": "sauf quand",
          "definition": "connecteur pour introduire une exception"
        },
        {
          "word": "habitude",
          "definition": "action que l'on répète régulièrement"
        },
        {
          "word": "organisation",
          "definition": "manière de planifier et gérer ses activités"
        },
        {
          "word": "agenda",
          "definition": "carnet ou application pour noter ses rendez-vous"
        },
        {
          "word": "hebdomadaire",
          "definition": "qui a lieu chaque semaine"
        },
        {
          "word": "transport",
          "definition": "moyen de se déplacer : bus, vélo, voiture"
        },
        {
          "word": "planning",
          "definition": "programme de la semaine avec toutes les activités prévues"
        },
        {
          "word": "flexibilité",
          "definition": "capacité à s'adapter aux changements d'horaire"
        },
        {
          "word": "priorité",
          "definition": "tâche la plus importante à faire en premier"
        }
      ],
      "examples": [
        "D'habitude, je pars tôt.",
        "Une fois par semaine, je vais au marché.",
        "Le mardi, j'ai une exception.",
        "Je m'organise selon mes horaires.",
        "Parfois, je reste à la maison.",
        "D'habitude, je prends le bus de sept heures.",
        "En général, je fais mes courses le samedi.",
        "Une fois par semaine, j'ai cours de natation.",
        "Ça dépend des jours, parfois je rentre tard.",
        "Je m'organise avec un agenda numérique.",
        "Le lundi matin est toujours chargé.",
        "Mon planning change souvent le week-end.",
        "Je donne la priorité aux enfants le soir."
      ],
      "expressionsPlus": [
        {
          "text": "En général, je…",
          "register": "courant"
        },
        {
          "text": "D'habitude, je prends…",
          "register": "courant"
        },
        {
          "text": "Une fois par semaine…",
          "register": "courant"
        },
        {
          "text": "Ça dépend des jours.",
          "register": "familier"
        },
        {
          "text": "Je m'organise comme ça…",
          "register": "familier"
        },
        {
          "text": "Sauf le mercredi, je…",
          "register": "courant"
        },
        {
          "text": "Mon emploi du temps cette semaine…",
          "register": "courant"
        },
        {
          "text": "Je consacre environ… heures à…",
          "register": "formel"
        },
        {
          "text": "Il m'arrive de…",
          "register": "courant"
        }
      ],
      "verbs": [
        "commencer",
        "sortir",
        "revenir",
        "prévoir",
        "s'organiser",
        "planifier",
        "finir",
        "aller"
      ],
      "conjugations": [
        "<strong>sortir</strong> : je sors, tu sors, il/elle sort, nous sortons, vous sortez, ils/elles sortent",
        "<strong>prévoir</strong> : je prévois, tu prévois, il/elle prévoit, nous prévoyons, vous prévoyez, ils/elles prévoient"
      ],
      "dialogues": null
    },
    "a2-unite-3": {
      "entry": {
        "href": "a2-unite-3.html",
        "label": "Raconter une histoire",
        "badge": "3",
        "level": "A2",
        "summary": "Organiser un récit simple et clair",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 2,
        "training": [
          {
            "href": "../games/histoires-vaud.html",
            "label": "Histoires",
            "note": "suivre la chronologie"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "connecteurs de récit"
          },
          {
            "href": "../games/vrai-faux.html",
            "label": "Vrai / Faux",
            "note": "comprendre les étapes d'une histoire"
          }
        ],
        "assessment": [
          {
            "prompt": "Le mot “ensuite” sert à…",
            "choices": [
              "indiquer un prix",
              "enchaîner les événements",
              "nier une phrase"
            ],
            "answer": 1
          },
          {
            "prompt": "Pour raconter, on choisit surtout…",
            "choices": [
              "une chronologie claire",
              "des listes sans lien",
              "des mots isolés"
            ],
            "answer": 0
          },
          {
            "prompt": "Une journée de stage est…",
            "choices": [
              "un contexte réaliste de récit",
              "une conjugaison",
              "une commune"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "D'abord…",
          "Ensuite…",
          "Tout à coup…",
          "À la fin…",
          "Heureusement…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "un événement : fait qui se produit à un moment donné",
          "correct": true
        },
        {
          "phrase": "un événement : ordre des événements dans le temps",
          "correct": false
        },
        {
          "phrase": "la chronologie : ordre des événements dans le temps",
          "correct": true
        },
        {
          "phrase": "la chronologie : fait qui se produit à un moment donné",
          "correct": false
        },
        {
          "phrase": "un incident : petit problème ou imprévu",
          "correct": true
        },
        {
          "phrase": "un incident : fait qui se produit à un moment donné",
          "correct": false
        },
        {
          "phrase": "un souvenir : trace laissée par une expérience passée",
          "correct": true
        },
        {
          "phrase": "un souvenir : fait qui se produit à un moment donné",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Le mot “ensuite” sert à…",
          "choices": [
            "indiquer un prix",
            "enchaîner les événements",
            "nier une phrase"
          ],
          "answer": 1
        },
        {
          "prompt": "Pour raconter, on choisit surtout…",
          "choices": [
            "une chronologie claire",
            "des listes sans lien",
            "des mots isolés"
          ],
          "answer": 0
        },
        {
          "prompt": "Une journée de stage est…",
          "choices": [
            "un contexte réaliste de récit",
            "une conjugaison",
            "une commune"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "un événement",
          "definition": "fait qui se produit à un moment donné"
        },
        {
          "word": "la chronologie",
          "definition": "ordre des événements dans le temps"
        },
        {
          "word": "un incident",
          "definition": "petit problème ou imprévu"
        },
        {
          "word": "un souvenir",
          "definition": "trace laissée par une expérience passée"
        },
        {
          "word": "tout à coup",
          "definition": "soudainement, de façon inattendue"
        },
        {
          "word": "heureusement / malheureusement",
          "definition": "adverbes pour commenter un événement positif ou négatif"
        }
      ],
      "completer": [
        {
          "display": "D'abord, je ___ monté dans le train",
          "answer": "suis",
          "full": "D'abord, je suis monté dans le train."
        },
        {
          "display": "Ensuite, j'ai ___ ma place",
          "answer": "cherché",
          "full": "Ensuite, j'ai cherché ma place."
        },
        {
          "display": "Tout à ___ il y a eu un problème",
          "answer": "coup",
          "full": "Tout à coup, il y a eu un problème."
        },
        {
          "display": "À la fin, ___ s'est bien passé",
          "answer": "tout",
          "full": "À la fin, tout s'est bien passé."
        },
        {
          "display": "Heureusement, ___ m'a aidé",
          "answer": "quelquun",
          "full": "Heureusement, quelqu'un m'a aidé."
        },
        {
          "display": "D'abord, je ___ arrivé à la gare",
          "answer": "suis",
          "full": "D'abord, je suis arrivé à la gare."
        }
      ],
      "ecouter": [
        {
          "prompt": "Le mot “ensuite” sert à…",
          "choices": [
            "indiquer un prix",
            "enchaîner les événements",
            "nier une phrase"
          ],
          "answer": 1
        },
        {
          "prompt": "Pour raconter, on choisit surtout…",
          "choices": [
            "une chronologie claire",
            "des listes sans lien",
            "des mots isolés"
          ],
          "answer": 0
        },
        {
          "prompt": "Une journée de stage est…",
          "choices": [
            "un contexte réaliste de récit",
            "une conjugaison",
            "une commune"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "raconter",
          "arriver",
          "comprendre",
          "expliquer",
          "continuer",
          "passer",
          "se souvenir",
          "dire"
        ],
        "conjugations": [
          "<strong>raconter</strong> : je raconte, tu racontes, il/elle raconte, nous racontons, vous racontez, ils/elles racontent",
          "<strong>comprendre</strong> : je comprends, tu comprends, il/elle comprend, nous comprenons, vous comprenez, ils/elles comprennent"
        ]
      },
      "motsMeles": [
        "TOUT",
        "RECIT",
        "INCIDENT",
        "TEMOIN",
        "SOUVENIR",
        "ANECDOTE",
        "SITUATION"
      ],
      "flashcards": [
        {
          "word": "un événement",
          "definition": "fait qui se produit à un moment donné"
        },
        {
          "word": "la chronologie",
          "definition": "ordre des événements dans le temps"
        },
        {
          "word": "un incident",
          "definition": "petit problème ou imprévu"
        },
        {
          "word": "un souvenir",
          "definition": "trace laissée par une expérience passée"
        },
        {
          "word": "tout à coup",
          "definition": "soudainement, de façon inattendue"
        },
        {
          "word": "heureusement / malheureusement",
          "definition": "adverbes pour commenter un événement positif ou négatif"
        },
        {
          "word": "chronologie",
          "definition": "ordre dans lequel les événements se produisent"
        },
        {
          "word": "récit",
          "definition": "raconter une histoire ou une série d'événements"
        },
        {
          "word": "connecteur",
          "definition": "mot qui relie deux phrases ou deux idées (d'abord, ensuite...)"
        },
        {
          "word": "incident",
          "definition": "événement imprévu, souvent petit problème"
        },
        {
          "word": "témoin",
          "definition": "personne présente lors d'un événement"
        },
        {
          "word": "souvenir",
          "definition": "image ou sentiment gardé d'un événement passé"
        },
        {
          "word": "anecdote",
          "definition": "petite histoire amusante ou intéressante tirée de la vie réelle"
        },
        {
          "word": "situation",
          "definition": "ensemble des circonstances dans lesquelles on se trouve"
        }
      ],
      "anagrammes": [
        {
          "word": "chronologie",
          "definition": "ordre dans lequel les événements se produisent"
        },
        {
          "word": "récit",
          "definition": "raconter une histoire ou une série d'événements"
        },
        {
          "word": "connecteur",
          "definition": "mot qui relie deux phrases ou deux idées (d'abord, ensuite...)"
        },
        {
          "word": "incident",
          "definition": "événement imprévu, souvent petit problème"
        },
        {
          "word": "témoin",
          "definition": "personne présente lors d'un événement"
        },
        {
          "word": "souvenir",
          "definition": "image ou sentiment gardé d'un événement passé"
        },
        {
          "word": "anecdote",
          "definition": "petite histoire amusante ou intéressante tirée de la vie réelle"
        },
        {
          "word": "situation",
          "definition": "ensemble des circonstances dans lesquelles on se trouve"
        }
      ],
      "dialogue": [],
      "construire": [
        "D'abord, je suis monté dans le train.",
        "Ensuite, j'ai cherché ma place.",
        "Tout à coup, il y a eu un problème.",
        "À la fin, tout s'est bien passé.",
        "Heureusement, quelqu'un m'a aidé.",
        "D'abord, je suis arrivé à la gare."
      ],
      "validation": [
        {
          "word": "un événement",
          "definition": "fait qui se produit à un moment donné"
        },
        {
          "word": "la chronologie",
          "definition": "ordre des événements dans le temps"
        },
        {
          "word": "un incident",
          "definition": "petit problème ou imprévu"
        },
        {
          "word": "un souvenir",
          "definition": "trace laissée par une expérience passée"
        },
        {
          "word": "tout à coup",
          "definition": "soudainement, de façon inattendue"
        },
        {
          "word": "heureusement / malheureusement",
          "definition": "adverbes pour commenter un événement positif ou négatif"
        },
        {
          "word": "chronologie",
          "definition": "ordre dans lequel les événements se produisent"
        },
        {
          "word": "récit",
          "definition": "raconter une histoire ou une série d'événements"
        },
        {
          "word": "connecteur",
          "definition": "mot qui relie deux phrases ou deux idées (d'abord, ensuite...)"
        },
        {
          "word": "incident",
          "definition": "événement imprévu, souvent petit problème"
        },
        {
          "word": "témoin",
          "definition": "personne présente lors d'un événement"
        },
        {
          "word": "souvenir",
          "definition": "image ou sentiment gardé d'un événement passé"
        },
        {
          "word": "anecdote",
          "definition": "petite histoire amusante ou intéressante tirée de la vie réelle"
        },
        {
          "word": "situation",
          "definition": "ensemble des circonstances dans lesquelles on se trouve"
        }
      ],
      "vocabulary": [
        {
          "word": "un événement",
          "definition": "fait qui se produit à un moment donné"
        },
        {
          "word": "la chronologie",
          "definition": "ordre des événements dans le temps"
        },
        {
          "word": "un incident",
          "definition": "petit problème ou imprévu"
        },
        {
          "word": "un souvenir",
          "definition": "trace laissée par une expérience passée"
        },
        {
          "word": "tout à coup",
          "definition": "soudainement, de façon inattendue"
        },
        {
          "word": "heureusement / malheureusement",
          "definition": "adverbes pour commenter un événement positif ou négatif"
        },
        {
          "word": "chronologie",
          "definition": "ordre dans lequel les événements se produisent"
        },
        {
          "word": "récit",
          "definition": "raconter une histoire ou une série d'événements"
        },
        {
          "word": "connecteur",
          "definition": "mot qui relie deux phrases ou deux idées (d'abord, ensuite...)"
        },
        {
          "word": "incident",
          "definition": "événement imprévu, souvent petit problème"
        },
        {
          "word": "témoin",
          "definition": "personne présente lors d'un événement"
        },
        {
          "word": "souvenir",
          "definition": "image ou sentiment gardé d'un événement passé"
        },
        {
          "word": "anecdote",
          "definition": "petite histoire amusante ou intéressante tirée de la vie réelle"
        },
        {
          "word": "situation",
          "definition": "ensemble des circonstances dans lesquelles on se trouve"
        }
      ],
      "examples": [
        "D'abord, je suis monté dans le train.",
        "Ensuite, j'ai cherché ma place.",
        "Tout à coup, il y a eu un problème.",
        "À la fin, tout s'est bien passé.",
        "Heureusement, quelqu'un m'a aidé.",
        "D'abord, je suis arrivé à la gare.",
        "Ensuite, j'ai attendu vingt minutes.",
        "Tout à coup, le train est reparti.",
        "Heureusement, j'avais mon abonnement.",
        "À la fin, j'ai pris le bus de remplacement.",
        "C'était une expérience un peu stressante.",
        "Mon collègue a assisté à toute la scène.",
        "Je me souviendrai longtemps de ce jour."
      ],
      "expressionsPlus": [
        {
          "text": "D'abord…",
          "register": "courant"
        },
        {
          "text": "Ensuite…",
          "register": "courant"
        },
        {
          "text": "Tout à coup…",
          "register": "courant"
        },
        {
          "text": "À la fin…",
          "register": "courant"
        },
        {
          "text": "Heureusement…",
          "register": "courant"
        },
        {
          "text": "C'est arrivé un jour où…",
          "register": "courant"
        },
        {
          "text": "Je n'oublierai jamais ce moment.",
          "register": "courant"
        },
        {
          "text": "Pour résumer ce qui s'est passé…",
          "register": "formel"
        },
        {
          "text": "Et vous, que feriez-vous ?",
          "register": "courant"
        }
      ],
      "verbs": [
        "raconter",
        "arriver",
        "comprendre",
        "expliquer",
        "continuer",
        "passer",
        "se souvenir",
        "dire"
      ],
      "conjugations": [
        "<strong>raconter</strong> : je raconte, tu racontes, il/elle raconte, nous racontons, vous racontez, ils/elles racontent",
        "<strong>comprendre</strong> : je comprends, tu comprends, il/elle comprend, nous comprenons, vous comprenez, ils/elles comprennent"
      ],
      "dialogues": null
    },
    "a2-unite-4": {
      "entry": {
        "href": "a2-unite-4.html",
        "label": "Reflets de soi",
        "badge": "4",
        "level": "A2",
        "summary": "Décrire une personne, une image, une impression",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 3,
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz portrait",
            "note": "décrire sans juger"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "adjectifs et impressions"
          },
          {
            "href": "../games/cherche-clique.html",
            "label": "Cherche-clique",
            "note": "observer des détails visuels"
          }
        ],
        "assessment": [
          {
            "prompt": "Décrire sans juger signifie…",
            "choices": [
              "séparer faits et opinions",
              "critiquer librement",
              "parler seulement du passé"
            ],
            "answer": 0
          },
          {
            "prompt": "Une photo d'identité sert surtout à…",
            "choices": [
              "une recette",
              "une présentation officielle",
              "un trajet"
            ],
            "answer": 1
          },
          {
            "prompt": "“On dirait que…” exprime…",
            "choices": [
              "une impression",
              "une quantité",
              "une interdiction"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "Il/Elle a l'air…",
          "On dirait que…",
          "Je me vois comme…",
          "Cette image donne une impression de…",
          "Je me sens plus…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "l'apparence : ce qu'on voit d'une personne",
          "correct": true
        },
        {
          "phrase": "l'apparence : caractéristique positive d'une personne",
          "correct": false
        },
        {
          "phrase": "une qualité : caractéristique positive d'une personne",
          "correct": true
        },
        {
          "phrase": "une qualité : ce qu'on voit d'une personne",
          "correct": false
        },
        {
          "phrase": "une impression : sentiment ressenti face à une personne ou une image",
          "correct": true
        },
        {
          "phrase": "une impression : ce qu'on voit d'une personne",
          "correct": false
        },
        {
          "phrase": "un portrait : description d'une personne",
          "correct": true
        },
        {
          "phrase": "un portrait : ce qu'on voit d'une personne",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Décrire sans juger signifie…",
          "choices": [
            "séparer faits et opinions",
            "critiquer librement",
            "parler seulement du passé"
          ],
          "answer": 0
        },
        {
          "prompt": "Une photo d'identité sert surtout à…",
          "choices": [
            "une recette",
            "une présentation officielle",
            "un trajet"
          ],
          "answer": 1
        },
        {
          "prompt": "“On dirait que…” exprime…",
          "choices": [
            "une impression",
            "une quantité",
            "une interdiction"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "l'apparence",
          "definition": "ce qu'on voit d'une personne"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique positive d'une personne"
        },
        {
          "word": "une impression",
          "definition": "sentiment ressenti face à une personne ou une image"
        },
        {
          "word": "un portrait",
          "definition": "description d'une personne"
        },
        {
          "word": "sembler / paraître",
          "definition": "verbes pour exprimer une impression sans certitude"
        },
        {
          "word": "une photo d'identité",
          "definition": "photo officielle utilisée pour les documents administratifs"
        }
      ],
      "completer": [
        {
          "display": "Il a ___ sérieux",
          "answer": "lair",
          "full": "Il a l'air sérieux."
        },
        {
          "display": "Cette ___ donne une impression calme",
          "answer": "image",
          "full": "Cette image donne une impression calme."
        },
        {
          "display": "Elle ___ une tenue simple et professionnelle",
          "answer": "porte",
          "full": "Elle porte une tenue simple et professionnelle."
        },
        {
          "display": "On ___ une photo officielle",
          "answer": "dirait",
          "full": "On dirait une photo officielle."
        },
        {
          "display": "Elle ___ concentrée sur son travail",
          "answer": "semble",
          "full": "Elle semble concentrée sur son travail."
        },
        {
          "display": "Elle a ___ très dynamique",
          "answer": "lair",
          "full": "Elle a l'air très dynamique."
        }
      ],
      "ecouter": [
        {
          "prompt": "Décrire sans juger signifie…",
          "choices": [
            "séparer faits et opinions",
            "critiquer librement",
            "parler seulement du passé"
          ],
          "answer": 0
        },
        {
          "prompt": "Une photo d'identité sert surtout à…",
          "choices": [
            "une recette",
            "une présentation officielle",
            "un trajet"
          ],
          "answer": 1
        },
        {
          "prompt": "“On dirait que…” exprime…",
          "choices": [
            "une impression",
            "une quantité",
            "une interdiction"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "décrire",
          "sembler",
          "paraître",
          "ressentir",
          "observer",
          "voir",
          "trouver",
          "exprimer"
        ],
        "conjugations": [
          "<strong>décrire</strong> : je décris, tu décris, il/elle décrit, nous décrivons, vous décrivez, ils/elles décrivent",
          "<strong>paraître</strong> : je parais, tu parais, il/elle paraît, nous paraissons, vous paraissez, ils/elles paraissent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "SEMBLER",
        "UNE",
        "PORTRAIT",
        "APPARENCE",
        "IMAGE",
        "TENUE"
      ],
      "flashcards": [
        {
          "word": "l'apparence",
          "definition": "ce qu'on voit d'une personne"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique positive d'une personne"
        },
        {
          "word": "une impression",
          "definition": "sentiment ressenti face à une personne ou une image"
        },
        {
          "word": "un portrait",
          "definition": "description d'une personne"
        },
        {
          "word": "sembler / paraître",
          "definition": "verbes pour exprimer une impression sans certitude"
        },
        {
          "word": "une photo d'identité",
          "definition": "photo officielle utilisée pour les documents administratifs"
        },
        {
          "word": "portrait",
          "definition": "description d'une personne, de son apparence et de sa personnalité"
        },
        {
          "word": "apparence",
          "definition": "aspect extérieur visible d'une personne"
        },
        {
          "word": "personnalité",
          "definition": "ensemble des traits de caractère d'une personne"
        },
        {
          "word": "image",
          "definition": "impression que l'on donne aux autres"
        },
        {
          "word": "ressemblance",
          "definition": "similarité entre deux personnes ou choses"
        },
        {
          "word": "tenue",
          "definition": "ensemble des vêtements portés dans une situation donnée"
        },
        {
          "word": "sourire",
          "definition": "expression du visage qui montre la joie ou la bienveillance"
        },
        {
          "word": "impression",
          "definition": "sentiment ou avis formé rapidement à propos de quelque chose"
        }
      ],
      "anagrammes": [
        {
          "word": "l'apparence",
          "definition": "ce qu'on voit d'une personne"
        },
        {
          "word": "portrait",
          "definition": "description d'une personne, de son apparence et de sa personnalité"
        },
        {
          "word": "apparence",
          "definition": "aspect extérieur visible d'une personne"
        },
        {
          "word": "personnalité",
          "definition": "ensemble des traits de caractère d'une personne"
        },
        {
          "word": "image",
          "definition": "impression que l'on donne aux autres"
        },
        {
          "word": "ressemblance",
          "definition": "similarité entre deux personnes ou choses"
        },
        {
          "word": "tenue",
          "definition": "ensemble des vêtements portés dans une situation donnée"
        },
        {
          "word": "sourire",
          "definition": "expression du visage qui montre la joie ou la bienveillance"
        }
      ],
      "dialogue": [],
      "construire": [
        "Il a l'air sérieux.",
        "Cette image donne une impression calme.",
        "Elle porte une tenue simple et professionnelle.",
        "On dirait une photo officielle.",
        "Elle semble concentrée sur son travail.",
        "Elle a l'air très dynamique."
      ],
      "validation": [
        {
          "word": "l'apparence",
          "definition": "ce qu'on voit d'une personne"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique positive d'une personne"
        },
        {
          "word": "une impression",
          "definition": "sentiment ressenti face à une personne ou une image"
        },
        {
          "word": "un portrait",
          "definition": "description d'une personne"
        },
        {
          "word": "sembler / paraître",
          "definition": "verbes pour exprimer une impression sans certitude"
        },
        {
          "word": "une photo d'identité",
          "definition": "photo officielle utilisée pour les documents administratifs"
        },
        {
          "word": "portrait",
          "definition": "description d'une personne, de son apparence et de sa personnalité"
        },
        {
          "word": "apparence",
          "definition": "aspect extérieur visible d'une personne"
        },
        {
          "word": "personnalité",
          "definition": "ensemble des traits de caractère d'une personne"
        },
        {
          "word": "image",
          "definition": "impression que l'on donne aux autres"
        },
        {
          "word": "ressemblance",
          "definition": "similarité entre deux personnes ou choses"
        },
        {
          "word": "tenue",
          "definition": "ensemble des vêtements portés dans une situation donnée"
        },
        {
          "word": "sourire",
          "definition": "expression du visage qui montre la joie ou la bienveillance"
        },
        {
          "word": "impression",
          "definition": "sentiment ou avis formé rapidement à propos de quelque chose"
        }
      ],
      "vocabulary": [
        {
          "word": "l'apparence",
          "definition": "ce qu'on voit d'une personne"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique positive d'une personne"
        },
        {
          "word": "une impression",
          "definition": "sentiment ressenti face à une personne ou une image"
        },
        {
          "word": "un portrait",
          "definition": "description d'une personne"
        },
        {
          "word": "sembler / paraître",
          "definition": "verbes pour exprimer une impression sans certitude"
        },
        {
          "word": "une photo d'identité",
          "definition": "photo officielle utilisée pour les documents administratifs"
        },
        {
          "word": "portrait",
          "definition": "description d'une personne, de son apparence et de sa personnalité"
        },
        {
          "word": "apparence",
          "definition": "aspect extérieur visible d'une personne"
        },
        {
          "word": "personnalité",
          "definition": "ensemble des traits de caractère d'une personne"
        },
        {
          "word": "image",
          "definition": "impression que l'on donne aux autres"
        },
        {
          "word": "ressemblance",
          "definition": "similarité entre deux personnes ou choses"
        },
        {
          "word": "tenue",
          "definition": "ensemble des vêtements portés dans une situation donnée"
        },
        {
          "word": "sourire",
          "definition": "expression du visage qui montre la joie ou la bienveillance"
        },
        {
          "word": "impression",
          "definition": "sentiment ou avis formé rapidement à propos de quelque chose"
        }
      ],
      "examples": [
        "Il a l'air sérieux.",
        "Cette image donne une impression calme.",
        "Elle porte une tenue simple et professionnelle.",
        "On dirait une photo officielle.",
        "Elle semble concentrée sur son travail.",
        "Elle a l'air très dynamique.",
        "On dirait qu'il est concentré.",
        "Je me vois comme une personne ouverte.",
        "Cette photo donne une impression sérieuse.",
        "Il porte toujours une tenue soignée.",
        "Je me sens plus à l'aise en tenue décontractée.",
        "Son sourire met les gens à l'aise.",
        "On peut observer sa générosité dans ses actes."
      ],
      "expressionsPlus": [
        {
          "text": "Il/Elle a l'air…",
          "register": "courant"
        },
        {
          "text": "On dirait que…",
          "register": "courant"
        },
        {
          "text": "Je me vois comme…",
          "register": "courant"
        },
        {
          "text": "Cette image donne une impression de…",
          "register": "courant"
        },
        {
          "text": "Je me sens plus…",
          "register": "courant"
        },
        {
          "text": "D'après moi, cette personne semble…",
          "register": "courant"
        },
        {
          "text": "Ce qui me frappe, c'est…",
          "register": "courant"
        },
        {
          "text": "Il est difficile de dire si…",
          "register": "formel"
        },
        {
          "text": "C'est mon impression, mais je peux me tromper.",
          "register": "courant"
        }
      ],
      "verbs": [
        "décrire",
        "sembler",
        "paraître",
        "ressentir",
        "observer",
        "voir",
        "trouver",
        "exprimer"
      ],
      "conjugations": [
        "<strong>décrire</strong> : je décris, tu décris, il/elle décrit, nous décrivons, vous décrivez, ils/elles décrivent",
        "<strong>paraître</strong> : je parais, tu parais, il/elle paraît, nous paraissons, vous paraissez, ils/elles paraissent"
      ],
      "dialogues": null
    },
    "a2-unite-5": {
      "entry": {
        "href": "a2-unite-5.html",
        "label": "La folie des achats",
        "badge": "5",
        "level": "A2",
        "summary": "Comparer, choisir, expliquer un achat",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 4,
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz budget",
            "note": "acheter avec des critères"
          },
          {
            "href": "../games/apparier.html",
            "label": "Associer",
            "note": "lier besoin et achat"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "comparatifs et justification"
          }
        ],
        "assessment": [
          {
            "prompt": "Comparer deux produits demande de regarder…",
            "choices": [
              "seulement la couleur",
              "prix, qualité et usage",
              "uniquement la marque"
            ],
            "answer": 1
          },
          {
            "prompt": "“Meilleur” sert à…",
            "choices": [
              "comparer",
              "nier",
              "saluer"
            ],
            "answer": 0
          },
          {
            "prompt": "Un budget aide à…",
            "choices": [
              "organiser ses dépenses",
              "prendre le train",
              "apprendre une capitale"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "C'est plus pratique que…",
          "Ça coûte moins cher.",
          "J'en ai vraiment besoin.",
          "La qualité est meilleure.",
          "Je préfère celui-ci parce que…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "un budget : somme disponible pour une dépense",
          "correct": true
        },
        {
          "phrase": "un budget : ce qui est nécessaire",
          "correct": false
        },
        {
          "phrase": "un besoin : ce qui est nécessaire",
          "correct": true
        },
        {
          "phrase": "un besoin : somme disponible pour une dépense",
          "correct": false
        },
        {
          "phrase": "une comparaison : mise en relation entre deux éléments",
          "correct": true
        },
        {
          "phrase": "une comparaison : somme disponible pour une dépense",
          "correct": false
        },
        {
          "phrase": "un choix : décision prise entre plusieurs possibilités",
          "correct": true
        },
        {
          "phrase": "un choix : somme disponible pour une dépense",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Comparer deux produits demande de regarder…",
          "choices": [
            "seulement la couleur",
            "prix, qualité et usage",
            "uniquement la marque"
          ],
          "answer": 1
        },
        {
          "prompt": "“Meilleur” sert à…",
          "choices": [
            "comparer",
            "nier",
            "saluer"
          ],
          "answer": 0
        },
        {
          "prompt": "Un budget aide à…",
          "choices": [
            "organiser ses dépenses",
            "prendre le train",
            "apprendre une capitale"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "un budget",
          "definition": "somme disponible pour une dépense"
        },
        {
          "word": "un besoin",
          "definition": "ce qui est nécessaire"
        },
        {
          "word": "une comparaison",
          "definition": "mise en relation entre deux éléments"
        },
        {
          "word": "un choix",
          "definition": "décision prise entre plusieurs possibilités"
        },
        {
          "word": "la durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "un critère",
          "definition": "élément pris en compte pour faire un choix"
        }
      ],
      "completer": [
        {
          "display": "Ce ___ est moins cher",
          "answer": "produit",
          "full": "Ce produit est moins cher."
        },
        {
          "display": "Je ___ cette offre parce qu'elle dure plus longtemps",
          "answer": "préfère",
          "full": "Je préfère cette offre parce qu'elle dure plus longtemps."
        },
        {
          "display": "J'en ai ___ pour le travail",
          "answer": "besoin",
          "full": "J'en ai besoin pour le travail."
        },
        {
          "display": "Mon ___ est limité ce mois-ci",
          "answer": "budget",
          "full": "Mon budget est limité ce mois-ci."
        },
        {
          "display": "La ___ est meilleure ici",
          "answer": "qualité",
          "full": "La qualité est meilleure ici."
        },
        {
          "display": "C'est ___ pratique que l'ancien modèle",
          "answer": "plus",
          "full": "C'est plus pratique que l'ancien modèle."
        }
      ],
      "ecouter": [
        {
          "prompt": "Comparer deux produits demande de regarder…",
          "choices": [
            "seulement la couleur",
            "prix, qualité et usage",
            "uniquement la marque"
          ],
          "answer": 1
        },
        {
          "prompt": "“Meilleur” sert à…",
          "choices": [
            "comparer",
            "nier",
            "saluer"
          ],
          "answer": 0
        },
        {
          "prompt": "Un budget aide à…",
          "choices": [
            "organiser ses dépenses",
            "prendre le train",
            "apprendre une capitale"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "comparer",
          "choisir",
          "dépenser",
          "préférer",
          "économiser",
          "acheter",
          "coûter",
          "vouloir"
        ],
        "conjugations": [
          "<strong>préférer</strong> : je préfère, tu préfères, il/elle préfère, nous préférons, vous préférez, ils/elles préfèrent",
          "<strong>dépenser</strong> : je dépense, tu dépenses, il/elle dépense, nous dépensons, vous dépensez, ils/elles dépensent"
        ]
      },
      "motsMeles": [
        "UNE",
        "BUDGET",
        "QUALITE",
        "CRITERE",
        "MARQUE",
        "SOLDES"
      ],
      "flashcards": [
        {
          "word": "un budget",
          "definition": "somme disponible pour une dépense"
        },
        {
          "word": "un besoin",
          "definition": "ce qui est nécessaire"
        },
        {
          "word": "une comparaison",
          "definition": "mise en relation entre deux éléments"
        },
        {
          "word": "un choix",
          "definition": "décision prise entre plusieurs possibilités"
        },
        {
          "word": "la durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "un critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "comparaison",
          "definition": "action de regarder les ressemblances et les différences"
        },
        {
          "word": "budget",
          "definition": "somme d'argent disponible pour faire des achats"
        },
        {
          "word": "qualité",
          "definition": "niveau de valeur ou de perfection d'un produit"
        },
        {
          "word": "critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "consommation",
          "definition": "action d'acheter et d'utiliser des biens ou des services"
        },
        {
          "word": "marque",
          "definition": "nom commercial d'un produit ou d'une entreprise"
        },
        {
          "word": "soldes",
          "definition": "période où les magasins vendent à prix réduit"
        }
      ],
      "anagrammes": [
        {
          "word": "comparaison",
          "definition": "action de regarder les ressemblances et les différences"
        },
        {
          "word": "budget",
          "definition": "somme d'argent disponible pour faire des achats"
        },
        {
          "word": "qualité",
          "definition": "niveau de valeur ou de perfection d'un produit"
        },
        {
          "word": "critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "consommation",
          "definition": "action d'acheter et d'utiliser des biens ou des services"
        },
        {
          "word": "marque",
          "definition": "nom commercial d'un produit ou d'une entreprise"
        },
        {
          "word": "soldes",
          "definition": "période où les magasins vendent à prix réduit"
        }
      ],
      "dialogue": [],
      "construire": [
        "Ce produit est moins cher.",
        "Je préfère cette offre parce qu'elle dure plus longtemps.",
        "J'en ai besoin pour le travail.",
        "Mon budget est limité ce mois-ci.",
        "La qualité est meilleure ici.",
        "C'est plus pratique que l'ancien modèle."
      ],
      "validation": [
        {
          "word": "un budget",
          "definition": "somme disponible pour une dépense"
        },
        {
          "word": "un besoin",
          "definition": "ce qui est nécessaire"
        },
        {
          "word": "une comparaison",
          "definition": "mise en relation entre deux éléments"
        },
        {
          "word": "un choix",
          "definition": "décision prise entre plusieurs possibilités"
        },
        {
          "word": "la durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "un critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "comparaison",
          "definition": "action de regarder les ressemblances et les différences"
        },
        {
          "word": "budget",
          "definition": "somme d'argent disponible pour faire des achats"
        },
        {
          "word": "qualité",
          "definition": "niveau de valeur ou de perfection d'un produit"
        },
        {
          "word": "critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "consommation",
          "definition": "action d'acheter et d'utiliser des biens ou des services"
        },
        {
          "word": "marque",
          "definition": "nom commercial d'un produit ou d'une entreprise"
        },
        {
          "word": "soldes",
          "definition": "période où les magasins vendent à prix réduit"
        }
      ],
      "vocabulary": [
        {
          "word": "un budget",
          "definition": "somme disponible pour une dépense"
        },
        {
          "word": "un besoin",
          "definition": "ce qui est nécessaire"
        },
        {
          "word": "une comparaison",
          "definition": "mise en relation entre deux éléments"
        },
        {
          "word": "un choix",
          "definition": "décision prise entre plusieurs possibilités"
        },
        {
          "word": "la durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "un critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "comparaison",
          "definition": "action de regarder les ressemblances et les différences"
        },
        {
          "word": "budget",
          "definition": "somme d'argent disponible pour faire des achats"
        },
        {
          "word": "qualité",
          "definition": "niveau de valeur ou de perfection d'un produit"
        },
        {
          "word": "critère",
          "definition": "élément pris en compte pour faire un choix"
        },
        {
          "word": "durabilité",
          "definition": "capacité d'un produit à durer longtemps"
        },
        {
          "word": "consommation",
          "definition": "action d'acheter et d'utiliser des biens ou des services"
        },
        {
          "word": "marque",
          "definition": "nom commercial d'un produit ou d'une entreprise"
        },
        {
          "word": "soldes",
          "definition": "période où les magasins vendent à prix réduit"
        }
      ],
      "examples": [
        "Ce produit est moins cher.",
        "Je préfère cette offre parce qu'elle dure plus longtemps.",
        "J'en ai besoin pour le travail.",
        "Mon budget est limité ce mois-ci.",
        "La qualité est meilleure ici.",
        "C'est plus pratique que l'ancien modèle.",
        "Ce produit coûte moins cher à la Coop.",
        "J'en ai vraiment besoin pour le travail.",
        "La qualité est bien meilleure ici.",
        "Je préfère celui-ci parce qu'il dure longtemps.",
        "Les soldes commencent en janvier.",
        "Je compare toujours les prix avant d'acheter."
      ],
      "expressionsPlus": [
        {
          "text": "C'est plus pratique que…",
          "register": "courant"
        },
        {
          "text": "Ça coûte moins cher.",
          "register": "courant"
        },
        {
          "text": "J'en ai vraiment besoin.",
          "register": "courant"
        },
        {
          "text": "La qualité est meilleure.",
          "register": "courant"
        },
        {
          "text": "Je préfère celui-ci parce que…",
          "register": "courant"
        },
        {
          "text": "Mon budget ne me permet pas de…",
          "register": "courant"
        },
        {
          "text": "C'est un bon rapport qualité-prix.",
          "register": "courant"
        },
        {
          "text": "Je compare les offres avant de décider.",
          "register": "courant"
        },
        {
          "text": "En termes de durabilité, ce produit est…",
          "register": "formel"
        }
      ],
      "verbs": [
        "comparer",
        "choisir",
        "dépenser",
        "préférer",
        "économiser",
        "acheter",
        "coûter",
        "vouloir"
      ],
      "conjugations": [
        "<strong>préférer</strong> : je préfère, tu préfères, il/elle préfère, nous préférons, vous préférez, ils/elles préfèrent",
        "<strong>dépenser</strong> : je dépense, tu dépenses, il/elle dépense, nous dépensons, vous dépensez, ils/elles dépensent"
      ],
      "dialogues": null
    },
    "a2-unite-6": {
      "entry": {
        "href": "a2-unite-6.html",
        "label": "Un week-end en vue",
        "badge": "6",
        "level": "A2",
        "summary": "Planifier un projet court et réaliste",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 5,
        "training": [
          {
            "href": "../games/orientation.html",
            "label": "Orientation",
            "note": "déplacements et itinéraires"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz sortie",
            "note": "organiser un week-end"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "propositions et confirmations"
          }
        ],
        "assessment": [
          {
            "prompt": "Pour planifier clairement, il faut préciser…",
            "choices": [
              "lieu, heure, transport",
              "seulement la météo",
              "uniquement le prix"
            ],
            "answer": 0
          },
          {
            "prompt": "“On pourrait…” sert à…",
            "choices": [
              "proposer",
              "refuser définitivement",
              "raconter le passé"
            ],
            "answer": 0
          },
          {
            "prompt": "Une réservation sert à…",
            "choices": [
              "retenir une place",
              "décrire une photo",
              "parler d'un avis politique"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "On pourrait aller à…",
          "Ça te va samedi ?",
          "On part à quelle heure ?",
          "On prend le train de…",
          "Je confirme la réservation."
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une sortie : activité prévue hors du domicile",
          "correct": true
        },
        {
          "phrase": "une sortie : organisation d'activités à différents moments",
          "correct": false
        },
        {
          "phrase": "un programme : organisation d'activités à différents moments",
          "correct": true
        },
        {
          "phrase": "un programme : activité prévue hors du domicile",
          "correct": false
        },
        {
          "phrase": "une réservation : action de retenir quelque chose à l'avance",
          "correct": true
        },
        {
          "phrase": "une réservation : activité prévue hors du domicile",
          "correct": false
        },
        {
          "phrase": "un départ : moment où l'on part",
          "correct": true
        },
        {
          "phrase": "un départ : activité prévue hors du domicile",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Pour planifier clairement, il faut préciser…",
          "choices": [
            "lieu, heure, transport",
            "seulement la météo",
            "uniquement le prix"
          ],
          "answer": 0
        },
        {
          "prompt": "“On pourrait…” sert à…",
          "choices": [
            "proposer",
            "refuser définitivement",
            "raconter le passé"
          ],
          "answer": 0
        },
        {
          "prompt": "Une réservation sert à…",
          "choices": [
            "retenir une place",
            "décrire une photo",
            "parler d'un avis politique"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une sortie",
          "definition": "activité prévue hors du domicile"
        },
        {
          "word": "un programme",
          "definition": "organisation d'activités à différents moments"
        },
        {
          "word": "une réservation",
          "definition": "action de retenir quelque chose à l'avance"
        },
        {
          "word": "un départ",
          "definition": "moment où l'on part"
        },
        {
          "word": "confirmer",
          "definition": "dire officiellement que quelque chose est prévu et validé"
        },
        {
          "word": "annuler",
          "definition": "décider de ne pas faire ce qui était prévu"
        }
      ],
      "completer": [
        {
          "display": "On ___ partir samedi matin",
          "answer": "pourrait",
          "full": "On pourrait partir samedi matin."
        },
        {
          "display": "Je ___ une visite de Vevey",
          "answer": "propose",
          "full": "Je propose une visite de Vevey."
        },
        {
          "display": "Nous ___ deux places",
          "answer": "réservons",
          "full": "Nous réservons deux places."
        },
        {
          "display": "Le ___ est prévu en fin de journée",
          "answer": "retour",
          "full": "Le retour est prévu en fin de journée."
        },
        {
          "display": "Ça te va si on se ___ à 9h à la gare ?",
          "answer": "retrouve",
          "full": "Ça te va si on se retrouve à 9h à la gare ?"
        },
        {
          "display": "On ___ aller à Fribourg samedi",
          "answer": "pourrait",
          "full": "On pourrait aller à Fribourg samedi."
        }
      ],
      "ecouter": [
        {
          "prompt": "Pour planifier clairement, il faut préciser…",
          "choices": [
            "lieu, heure, transport",
            "seulement la météo",
            "uniquement le prix"
          ],
          "answer": 0
        },
        {
          "prompt": "“On pourrait…” sert à…",
          "choices": [
            "proposer",
            "refuser définitivement",
            "raconter le passé"
          ],
          "answer": 0
        },
        {
          "prompt": "Une réservation sert à…",
          "choices": [
            "retenir une place",
            "décrire une photo",
            "parler d'un avis politique"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "proposer",
          "organiser",
          "réserver",
          "partir",
          "confirmer",
          "inviter",
          "accepter",
          "prévoir"
        ],
        "conjugations": [
          "<strong>proposer</strong> : je propose, tu proposes, il/elle propose, nous proposons, vous proposez, ils/elles proposent",
          "<strong>confirmer</strong> : je confirme, tu confirmes, il/elle confirme, nous confirmons, vous confirmez, ils/elles confirment"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "CONFIRMER",
        "ANNULER",
        "PROGRAMME",
        "EXCURSION",
        "LOGEMENT",
        "METEO"
      ],
      "flashcards": [
        {
          "word": "une sortie",
          "definition": "activité prévue hors du domicile"
        },
        {
          "word": "un programme",
          "definition": "organisation d'activités à différents moments"
        },
        {
          "word": "une réservation",
          "definition": "action de retenir quelque chose à l'avance"
        },
        {
          "word": "un départ",
          "definition": "moment où l'on part"
        },
        {
          "word": "confirmer",
          "definition": "dire officiellement que quelque chose est prévu et validé"
        },
        {
          "word": "annuler",
          "definition": "décider de ne pas faire ce qui était prévu"
        },
        {
          "word": "programme",
          "definition": "liste des activités prévues pour un moment donné"
        },
        {
          "word": "excursion",
          "definition": "sortie d'une journée pour visiter un lieu"
        },
        {
          "word": "suggestion",
          "definition": "proposition faite à quelqu'un"
        },
        {
          "word": "confirmation",
          "definition": "fait de valider une décision ou une réservation"
        },
        {
          "word": "abonnement",
          "definition": "droit de voyager ou d'utiliser un service à un prix fixe"
        },
        {
          "word": "logement",
          "definition": "endroit où l'on dort : appartement, hôtel, auberge"
        },
        {
          "word": "déplacement",
          "definition": "voyage ou trajet entre deux lieux"
        },
        {
          "word": "météo",
          "definition": "prévision des conditions climatiques pour les prochains jours"
        }
      ],
      "anagrammes": [
        {
          "word": "confirmer",
          "definition": "dire officiellement que quelque chose est prévu et validé"
        },
        {
          "word": "annuler",
          "definition": "décider de ne pas faire ce qui était prévu"
        },
        {
          "word": "programme",
          "definition": "liste des activités prévues pour un moment donné"
        },
        {
          "word": "excursion",
          "definition": "sortie d'une journée pour visiter un lieu"
        },
        {
          "word": "suggestion",
          "definition": "proposition faite à quelqu'un"
        },
        {
          "word": "confirmation",
          "definition": "fait de valider une décision ou une réservation"
        },
        {
          "word": "abonnement",
          "definition": "droit de voyager ou d'utiliser un service à un prix fixe"
        },
        {
          "word": "logement",
          "definition": "endroit où l'on dort : appartement, hôtel, auberge"
        }
      ],
      "dialogue": [],
      "construire": [
        "On pourrait partir samedi matin.",
        "Je propose une visite de Vevey.",
        "Nous réservons deux places.",
        "Le retour est prévu en fin de journée.",
        "On pourrait aller à Fribourg samedi.",
        "Ça te va si on part à neuf heures ?"
      ],
      "validation": [
        {
          "word": "une sortie",
          "definition": "activité prévue hors du domicile"
        },
        {
          "word": "un programme",
          "definition": "organisation d'activités à différents moments"
        },
        {
          "word": "une réservation",
          "definition": "action de retenir quelque chose à l'avance"
        },
        {
          "word": "un départ",
          "definition": "moment où l'on part"
        },
        {
          "word": "confirmer",
          "definition": "dire officiellement que quelque chose est prévu et validé"
        },
        {
          "word": "annuler",
          "definition": "décider de ne pas faire ce qui était prévu"
        },
        {
          "word": "programme",
          "definition": "liste des activités prévues pour un moment donné"
        },
        {
          "word": "excursion",
          "definition": "sortie d'une journée pour visiter un lieu"
        },
        {
          "word": "suggestion",
          "definition": "proposition faite à quelqu'un"
        },
        {
          "word": "confirmation",
          "definition": "fait de valider une décision ou une réservation"
        },
        {
          "word": "abonnement",
          "definition": "droit de voyager ou d'utiliser un service à un prix fixe"
        },
        {
          "word": "logement",
          "definition": "endroit où l'on dort : appartement, hôtel, auberge"
        },
        {
          "word": "déplacement",
          "definition": "voyage ou trajet entre deux lieux"
        },
        {
          "word": "météo",
          "definition": "prévision des conditions climatiques pour les prochains jours"
        }
      ],
      "vocabulary": [
        {
          "word": "une sortie",
          "definition": "activité prévue hors du domicile"
        },
        {
          "word": "un programme",
          "definition": "organisation d'activités à différents moments"
        },
        {
          "word": "une réservation",
          "definition": "action de retenir quelque chose à l'avance"
        },
        {
          "word": "un départ",
          "definition": "moment où l'on part"
        },
        {
          "word": "confirmer",
          "definition": "dire officiellement que quelque chose est prévu et validé"
        },
        {
          "word": "annuler",
          "definition": "décider de ne pas faire ce qui était prévu"
        },
        {
          "word": "programme",
          "definition": "liste des activités prévues pour un moment donné"
        },
        {
          "word": "excursion",
          "definition": "sortie d'une journée pour visiter un lieu"
        },
        {
          "word": "suggestion",
          "definition": "proposition faite à quelqu'un"
        },
        {
          "word": "confirmation",
          "definition": "fait de valider une décision ou une réservation"
        },
        {
          "word": "abonnement",
          "definition": "droit de voyager ou d'utiliser un service à un prix fixe"
        },
        {
          "word": "logement",
          "definition": "endroit où l'on dort : appartement, hôtel, auberge"
        },
        {
          "word": "déplacement",
          "definition": "voyage ou trajet entre deux lieux"
        },
        {
          "word": "météo",
          "definition": "prévision des conditions climatiques pour les prochains jours"
        }
      ],
      "examples": [
        "On pourrait partir samedi matin.",
        "Je propose une visite de Vevey.",
        "Nous réservons deux places.",
        "Le retour est prévu en fin de journée.",
        "Ça te va si on se retrouve à 9h à la gare ?",
        "On pourrait aller à Fribourg samedi.",
        "Ça te va si on part à neuf heures ?",
        "Je confirme la réservation pour deux personnes.",
        "On prend le train de huit heures quarante.",
        "La météo sera belle ce week-end.",
        "J'ai trouvé un logement à bon prix.",
        "Tu veux qu'on visite le vieux-bourg ?",
        "On rentre dimanche soir avec le dernier train."
      ],
      "expressionsPlus": [
        {
          "text": "On pourrait aller à…",
          "register": "courant"
        },
        {
          "text": "Ça te va samedi ?",
          "register": "familier"
        },
        {
          "text": "On part à quelle heure ?",
          "register": "familier"
        },
        {
          "text": "On prend le train de…",
          "register": "courant"
        },
        {
          "text": "Je confirme la réservation.",
          "register": "courant"
        },
        {
          "text": "Serait-il possible de se retrouver à…",
          "register": "formel"
        },
        {
          "text": "Je suis disponible le…",
          "register": "courant"
        },
        {
          "text": "Désolé(e), je ne peux pas ce jour-là.",
          "register": "courant"
        },
        {
          "text": "On pourrait se partager les frais.",
          "register": "courant"
        }
      ],
      "verbs": [
        "proposer",
        "organiser",
        "réserver",
        "partir",
        "confirmer",
        "inviter",
        "accepter",
        "prévoir"
      ],
      "conjugations": [
        "<strong>proposer</strong> : je propose, tu proposes, il/elle propose, nous proposons, vous proposez, ils/elles proposent",
        "<strong>confirmer</strong> : je confirme, tu confirmes, il/elle confirme, nous confirmons, vous confirmez, ils/elles confirment"
      ],
      "dialogues": null
    },
    "a2-unite-7": {
      "entry": {
        "href": "a2-unite-7.html",
        "label": "Envie d'évasion",
        "badge": "7",
        "level": "A2",
        "summary": "Exprimer un désir de voyage ou de changement",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 6,
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz destinations",
            "note": "exprimer un projet de sortie"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "souhaits et possibilités"
          },
          {
            "href": "../games/vrai-faux.html",
            "label": "Vrai / Faux",
            "note": "comprendre un projet de voyage"
          }
        ],
        "assessment": [
          {
            "prompt": "“J'aimerais” exprime surtout…",
            "choices": [
              "un souhait",
              "une certitude absolue",
              "une règle"
            ],
            "answer": 0
          },
          {
            "prompt": "Une destination est…",
            "choices": [
              "un lieu où l'on veut aller",
              "un verbe",
              "un type de salaire"
            ],
            "answer": 0
          },
          {
            "prompt": "Dans un projet, il faut distinguer…",
            "choices": [
              "souhait et certitude",
              "nom et prénom",
              "gare et recette"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "J'aimerais découvrir…",
          "Ça me ferait du bien de…",
          "Je rêve d'aller à…",
          "Ce serait l'occasion de…",
          "Je pourrais visiter…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une destination : lieu où l'on souhaite aller",
          "correct": true
        },
        {
          "phrase": "une destination : idée que l'on souhaite réaliser",
          "correct": false
        },
        {
          "phrase": "un projet : idée que l'on souhaite réaliser",
          "correct": true
        },
        {
          "phrase": "un projet : lieu où l'on souhaite aller",
          "correct": false
        },
        {
          "phrase": "une découverte : fait de voir ou connaître quelque chose de nouveau",
          "correct": true
        },
        {
          "phrase": "une découverte : lieu où l'on souhaite aller",
          "correct": false
        },
        {
          "phrase": "un désir : envie forte de faire ou d'obtenir quelque chose",
          "correct": true
        },
        {
          "phrase": "un désir : lieu où l'on souhaite aller",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "“J'aimerais” exprime surtout…",
          "choices": [
            "un souhait",
            "une certitude absolue",
            "une règle"
          ],
          "answer": 0
        },
        {
          "prompt": "Une destination est…",
          "choices": [
            "un lieu où l'on veut aller",
            "un verbe",
            "un type de salaire"
          ],
          "answer": 0
        },
        {
          "prompt": "Dans un projet, il faut distinguer…",
          "choices": [
            "souhait et certitude",
            "nom et prénom",
            "gare et recette"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une destination",
          "definition": "lieu où l'on souhaite aller"
        },
        {
          "word": "un projet",
          "definition": "idée que l'on souhaite réaliser"
        },
        {
          "word": "une découverte",
          "definition": "fait de voir ou connaître quelque chose de nouveau"
        },
        {
          "word": "un désir",
          "definition": "envie forte de faire ou d'obtenir quelque chose"
        },
        {
          "word": "les paysages",
          "definition": "étendue naturelle visible depuis un endroit (montagne, lac, forêt…)"
        },
        {
          "word": "le dépaysement",
          "definition": "sentiment agréable d'être ailleurs, dans un autre cadre"
        }
      ],
      "completer": [
        {
          "display": "J'aimerais ___ le Tessin",
          "answer": "découvrir",
          "full": "J'aimerais découvrir le Tessin."
        },
        {
          "display": "Cette ___ me plaît pour les paysages",
          "answer": "destination",
          "full": "Cette destination me plaît pour les paysages."
        },
        {
          "display": "Je ___ partir au printemps",
          "answer": "pourrais",
          "full": "Je pourrais partir au printemps."
        },
        {
          "display": "Ce ___ une belle occasion de changer d'air",
          "answer": "serait",
          "full": "Ce serait une belle occasion de changer d'air."
        },
        {
          "display": "Je ___ de voir les Alpes de plus près",
          "answer": "rêve",
          "full": "Je rêve de voir les Alpes de plus près."
        },
        {
          "display": "J'aimerais ___ le Valais",
          "answer": "découvrir",
          "full": "J'aimerais découvrir le Valais."
        }
      ],
      "ecouter": [
        {
          "prompt": "“J'aimerais” exprime surtout…",
          "choices": [
            "un souhait",
            "une certitude absolue",
            "une règle"
          ],
          "answer": 0
        },
        {
          "prompt": "Une destination est…",
          "choices": [
            "un lieu où l'on veut aller",
            "un verbe",
            "un type de salaire"
          ],
          "answer": 0
        },
        {
          "prompt": "Dans un projet, il faut distinguer…",
          "choices": [
            "souhait et certitude",
            "nom et prénom",
            "gare et recette"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "voyager",
          "découvrir",
          "rêver",
          "espérer",
          "visiter",
          "partir",
          "arriver",
          "raconter"
        ],
        "conjugations": [
          "<strong>voyager</strong> : je voyage, tu voyages, il/elle voyage, nous voyageons, vous voyagez, ils/elles voyagent",
          "<strong>espérer</strong> : j'espère, tu espères, il/elle espère, nous espérons, vous espérez, ils/elles espèrent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "LES",
        "RANDONNEE",
        "CANTON",
        "PANORAMA"
      ],
      "flashcards": [
        {
          "word": "une destination",
          "definition": "lieu où l'on souhaite aller"
        },
        {
          "word": "un projet",
          "definition": "idée que l'on souhaite réaliser"
        },
        {
          "word": "une découverte",
          "definition": "fait de voir ou connaître quelque chose de nouveau"
        },
        {
          "word": "un désir",
          "definition": "envie forte de faire ou d'obtenir quelque chose"
        },
        {
          "word": "les paysages",
          "definition": "étendue naturelle visible depuis un endroit (montagne, lac, forêt…)"
        },
        {
          "word": "le dépaysement",
          "definition": "sentiment agréable d'être ailleurs, dans un autre cadre"
        },
        {
          "word": "destination",
          "definition": "endroit où l'on veut aller pendant un voyage"
        },
        {
          "word": "découverte",
          "definition": "action de voir ou de connaître quelque chose pour la première fois"
        },
        {
          "word": "dépaysement",
          "definition": "sentiment agréable causé par un environnement nouveau et différent"
        },
        {
          "word": "randonnée",
          "definition": "longue marche dans la nature, souvent en montagne"
        },
        {
          "word": "canton",
          "definition": "région administrative de la Suisse"
        },
        {
          "word": "itinéraire",
          "definition": "chemin prévu d'avance pour un voyage"
        },
        {
          "word": "hébergement",
          "definition": "endroit où l'on loge pendant un voyage"
        },
        {
          "word": "panorama",
          "definition": "vue très large sur un paysage naturel ou urbain"
        }
      ],
      "anagrammes": [
        {
          "word": "destination",
          "definition": "endroit où l'on veut aller pendant un voyage"
        },
        {
          "word": "découverte",
          "definition": "action de voir ou de connaître quelque chose pour la première fois"
        },
        {
          "word": "dépaysement",
          "definition": "sentiment agréable causé par un environnement nouveau et différent"
        },
        {
          "word": "randonnée",
          "definition": "longue marche dans la nature, souvent en montagne"
        },
        {
          "word": "canton",
          "definition": "région administrative de la Suisse"
        },
        {
          "word": "itinéraire",
          "definition": "chemin prévu d'avance pour un voyage"
        },
        {
          "word": "hébergement",
          "definition": "endroit où l'on loge pendant un voyage"
        },
        {
          "word": "panorama",
          "definition": "vue très large sur un paysage naturel ou urbain"
        }
      ],
      "dialogue": [],
      "construire": [
        "J'aimerais découvrir le Tessin.",
        "Cette destination me plaît pour les paysages.",
        "Je pourrais partir au printemps.",
        "Ce serait une belle occasion de changer d'air.",
        "Je rêve de voir les Alpes de plus près.",
        "J'aimerais découvrir le Valais."
      ],
      "validation": [
        {
          "word": "une destination",
          "definition": "lieu où l'on souhaite aller"
        },
        {
          "word": "un projet",
          "definition": "idée que l'on souhaite réaliser"
        },
        {
          "word": "une découverte",
          "definition": "fait de voir ou connaître quelque chose de nouveau"
        },
        {
          "word": "un désir",
          "definition": "envie forte de faire ou d'obtenir quelque chose"
        },
        {
          "word": "les paysages",
          "definition": "étendue naturelle visible depuis un endroit (montagne, lac, forêt…)"
        },
        {
          "word": "le dépaysement",
          "definition": "sentiment agréable d'être ailleurs, dans un autre cadre"
        },
        {
          "word": "destination",
          "definition": "endroit où l'on veut aller pendant un voyage"
        },
        {
          "word": "découverte",
          "definition": "action de voir ou de connaître quelque chose pour la première fois"
        },
        {
          "word": "dépaysement",
          "definition": "sentiment agréable causé par un environnement nouveau et différent"
        },
        {
          "word": "randonnée",
          "definition": "longue marche dans la nature, souvent en montagne"
        },
        {
          "word": "canton",
          "definition": "région administrative de la Suisse"
        },
        {
          "word": "itinéraire",
          "definition": "chemin prévu d'avance pour un voyage"
        },
        {
          "word": "hébergement",
          "definition": "endroit où l'on loge pendant un voyage"
        },
        {
          "word": "panorama",
          "definition": "vue très large sur un paysage naturel ou urbain"
        }
      ],
      "vocabulary": [
        {
          "word": "une destination",
          "definition": "lieu où l'on souhaite aller"
        },
        {
          "word": "un projet",
          "definition": "idée que l'on souhaite réaliser"
        },
        {
          "word": "une découverte",
          "definition": "fait de voir ou connaître quelque chose de nouveau"
        },
        {
          "word": "un désir",
          "definition": "envie forte de faire ou d'obtenir quelque chose"
        },
        {
          "word": "les paysages",
          "definition": "étendue naturelle visible depuis un endroit (montagne, lac, forêt…)"
        },
        {
          "word": "le dépaysement",
          "definition": "sentiment agréable d'être ailleurs, dans un autre cadre"
        },
        {
          "word": "destination",
          "definition": "endroit où l'on veut aller pendant un voyage"
        },
        {
          "word": "découverte",
          "definition": "action de voir ou de connaître quelque chose pour la première fois"
        },
        {
          "word": "dépaysement",
          "definition": "sentiment agréable causé par un environnement nouveau et différent"
        },
        {
          "word": "randonnée",
          "definition": "longue marche dans la nature, souvent en montagne"
        },
        {
          "word": "canton",
          "definition": "région administrative de la Suisse"
        },
        {
          "word": "itinéraire",
          "definition": "chemin prévu d'avance pour un voyage"
        },
        {
          "word": "hébergement",
          "definition": "endroit où l'on loge pendant un voyage"
        },
        {
          "word": "panorama",
          "definition": "vue très large sur un paysage naturel ou urbain"
        }
      ],
      "examples": [
        "J'aimerais découvrir le Tessin.",
        "Cette destination me plaît pour les paysages.",
        "Je pourrais partir au printemps.",
        "Ce serait une belle occasion de changer d'air.",
        "Je rêve de voir les Alpes de plus près.",
        "J'aimerais découvrir le Valais.",
        "Ça me ferait du bien de prendre l'air.",
        "Je rêve d'aller aux Grisons.",
        "Ce serait l'occasion de voir la montagne.",
        "Je pourrais visiter Verbier ou Zermatt.",
        "L'itinéraire passe par le col du Simplon.",
        "Le panorama depuis là-haut est magnifique.",
        "Nous cherchons un hébergement à la montagne."
      ],
      "expressionsPlus": [
        {
          "text": "J'aimerais découvrir…",
          "register": "courant"
        },
        {
          "text": "Ça me ferait du bien de…",
          "register": "courant"
        },
        {
          "text": "Je rêve d'aller à…",
          "register": "courant"
        },
        {
          "text": "Ce serait l'occasion de…",
          "register": "courant"
        },
        {
          "text": "Je pourrais visiter…",
          "register": "courant"
        },
        {
          "text": "Cette région m'attire parce que…",
          "register": "courant"
        },
        {
          "text": "Si j'avais le temps, je…",
          "register": "courant"
        },
        {
          "text": "J'envisage de partir en…",
          "register": "formel"
        },
        {
          "text": "Ce voyage me permettrait de…",
          "register": "formel"
        }
      ],
      "verbs": [
        "voyager",
        "découvrir",
        "rêver",
        "espérer",
        "visiter",
        "partir",
        "arriver",
        "raconter"
      ],
      "conjugations": [
        "<strong>voyager</strong> : je voyage, tu voyages, il/elle voyage, nous voyageons, vous voyagez, ils/elles voyagent",
        "<strong>espérer</strong> : j'espère, tu espères, il/elle espère, nous espérons, vous espérez, ils/elles espèrent"
      ],
      "dialogues": null
    },
    "a2-unite-8": {
      "entry": {
        "href": "a2-unite-8.html",
        "label": "Esprit de famille",
        "badge": "8",
        "level": "A2",
        "summary": "Parler de liens, d'entraide et de générations",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 7,
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz famille",
            "note": "vocabulaire et rôles"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "liens et organisation"
          },
          {
            "href": "../games/simulations-dialogues.html",
            "label": "Dialogues",
            "note": "parler de sa famille avec mesure"
          }
        ],
        "assessment": [
          {
            "prompt": "Parler de la famille demande souvent…",
            "choices": [
              "de la prudence",
              "des prix exacts",
              "des prépositions de pays"
            ],
            "answer": 0
          },
          {
            "prompt": "L'entraide correspond à…",
            "choices": [
              "se soutenir",
              "se perdre",
              "se taire"
            ],
            "answer": 0
          },
          {
            "prompt": "Se répartir les tâches signifie…",
            "choices": [
              "partager les responsabilités",
              "acheter des billets",
              "corriger un média"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "On s'aide pour…",
          "Chez nous, c'est souvent…",
          "Je m'occupe de…",
          "On se répartit les tâches.",
          "Ma famille compte beaucoup pour moi."
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une responsabilité : tâche ou devoir pris en charge par une personne",
          "correct": true
        },
        {
          "phrase": "une responsabilité : fait de s'aider mutuellement",
          "correct": false
        },
        {
          "phrase": "l'entraide : fait de s'aider mutuellement",
          "correct": true
        },
        {
          "phrase": "l'entraide : tâche ou devoir pris en charge par une personne",
          "correct": false
        },
        {
          "phrase": "une génération : groupe de personnes ayant un âge proche dans une famille",
          "correct": true
        },
        {
          "phrase": "une génération : tâche ou devoir pris en charge par une personne",
          "correct": false
        },
        {
          "phrase": "une garde : prise en charge d'un enfant ou d'une personne",
          "correct": true
        },
        {
          "phrase": "une garde : tâche ou devoir pris en charge par une personne",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Parler de la famille demande souvent…",
          "choices": [
            "de la prudence",
            "des prix exacts",
            "des prépositions de pays"
          ],
          "answer": 0
        },
        {
          "prompt": "L'entraide correspond à…",
          "choices": [
            "se soutenir",
            "se perdre",
            "se taire"
          ],
          "answer": 0
        },
        {
          "prompt": "Se répartir les tâches signifie…",
          "choices": [
            "partager les responsabilités",
            "acheter des billets",
            "corriger un média"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une responsabilité",
          "definition": "tâche ou devoir pris en charge par une personne"
        },
        {
          "word": "l'entraide",
          "definition": "fait de s'aider mutuellement"
        },
        {
          "word": "une génération",
          "definition": "groupe de personnes ayant un âge proche dans une famille"
        },
        {
          "word": "une garde",
          "definition": "prise en charge d'un enfant ou d'une personne"
        },
        {
          "word": "les tâches ménagères",
          "definition": "travaux du quotidien à la maison (ménage, cuisine, lessive…)"
        },
        {
          "word": "la crèche / la garderie",
          "definition": "structure qui accueille les jeunes enfants pendant la journée"
        }
      ],
      "completer": [
        {
          "display": "Nous ___ aidons pour les courses",
          "answer": "nous",
          "full": "Nous nous aidons pour les courses."
        },
        {
          "display": "Je ___ des enfants après l'école",
          "answer": "moccupe",
          "full": "Je m'occupe des enfants après l'école."
        },
        {
          "display": "Les ___ sont réparties à la maison",
          "answer": "tâches",
          "full": "Les tâches sont réparties à la maison."
        },
        {
          "display": "Ma ___ nous soutient souvent",
          "answer": "mère",
          "full": "Ma mère nous soutient souvent."
        },
        {
          "display": "Mon ___ prépare le dîner quand je travaille tard",
          "answer": "conjoint",
          "full": "Mon conjoint prépare le dîner quand je travaille tard."
        },
        {
          "display": "On se ___ les tâches à la maison",
          "answer": "partage",
          "full": "On se partage les tâches à la maison."
        }
      ],
      "ecouter": [
        {
          "prompt": "Parler de la famille demande souvent…",
          "choices": [
            "de la prudence",
            "des prix exacts",
            "des prépositions de pays"
          ],
          "answer": 0
        },
        {
          "prompt": "L'entraide correspond à…",
          "choices": [
            "se soutenir",
            "se perdre",
            "se taire"
          ],
          "answer": 0
        },
        {
          "prompt": "Se répartir les tâches signifie…",
          "choices": [
            "partager les responsabilités",
            "acheter des billets",
            "corriger un média"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "aider",
          "s'occuper",
          "partager",
          "élever",
          "soutenir",
          "protéger",
          "grandir",
          "comprendre"
        ],
        "conjugations": [
          "<strong>aider</strong> : j'aide, tu aides, il/elle aide, nous aidons, vous aidez, ils/elles aident",
          "<strong>s'occuper</strong> : je m'occupe, tu t'occupes, il/elle s'occupe, nous nous occupons, vous vous occupez, ils/elles s'occupent"
        ]
      },
      "motsMeles": [
        "UNE",
        "LENTRAIDE",
        "UNE",
        "UNE",
        "LES",
        "FAMILLE",
        "ENTRAIDE",
        "TACHE"
      ],
      "flashcards": [
        {
          "word": "une responsabilité",
          "definition": "tâche ou devoir pris en charge par une personne"
        },
        {
          "word": "l'entraide",
          "definition": "fait de s'aider mutuellement"
        },
        {
          "word": "une génération",
          "definition": "groupe de personnes ayant un âge proche dans une famille"
        },
        {
          "word": "une garde",
          "definition": "prise en charge d'un enfant ou d'une personne"
        },
        {
          "word": "les tâches ménagères",
          "definition": "travaux du quotidien à la maison (ménage, cuisine, lessive…)"
        },
        {
          "word": "la crèche / la garderie",
          "definition": "structure qui accueille les jeunes enfants pendant la journée"
        },
        {
          "word": "famille",
          "definition": "groupe de personnes liées par des liens de parenté"
        },
        {
          "word": "génération",
          "definition": "groupe de personnes nées à la même époque"
        },
        {
          "word": "entraide",
          "definition": "aide mutuelle entre membres d'un groupe ou d'une famille"
        },
        {
          "word": "tâche",
          "definition": "travail ou action à accomplir"
        },
        {
          "word": "responsabilité",
          "definition": "obligation d'assumer quelque chose"
        },
        {
          "word": "garde",
          "definition": "fait de s'occuper des enfants en l'absence des parents"
        },
        {
          "word": "quotidien",
          "definition": "ce qui se passe ou se fait chaque jour"
        },
        {
          "word": "lien",
          "definition": "relation entre deux personnes ou deux choses"
        }
      ],
      "anagrammes": [
        {
          "word": "l'entraide",
          "definition": "fait de s'aider mutuellement"
        },
        {
          "word": "famille",
          "definition": "groupe de personnes liées par des liens de parenté"
        },
        {
          "word": "génération",
          "definition": "groupe de personnes nées à la même époque"
        },
        {
          "word": "entraide",
          "definition": "aide mutuelle entre membres d'un groupe ou d'une famille"
        },
        {
          "word": "tâche",
          "definition": "travail ou action à accomplir"
        },
        {
          "word": "responsabilité",
          "definition": "obligation d'assumer quelque chose"
        },
        {
          "word": "garde",
          "definition": "fait de s'occuper des enfants en l'absence des parents"
        },
        {
          "word": "quotidien",
          "definition": "ce qui se passe ou se fait chaque jour"
        }
      ],
      "dialogue": [],
      "construire": [
        "Nous nous aidons pour les courses.",
        "Je m'occupe des enfants après l'école.",
        "Les tâches sont réparties à la maison.",
        "Ma mère nous soutient souvent.",
        "Mon conjoint prépare le dîner quand je travaille tard.",
        "On se partage les tâches à la maison."
      ],
      "validation": [
        {
          "word": "une responsabilité",
          "definition": "tâche ou devoir pris en charge par une personne"
        },
        {
          "word": "l'entraide",
          "definition": "fait de s'aider mutuellement"
        },
        {
          "word": "une génération",
          "definition": "groupe de personnes ayant un âge proche dans une famille"
        },
        {
          "word": "une garde",
          "definition": "prise en charge d'un enfant ou d'une personne"
        },
        {
          "word": "les tâches ménagères",
          "definition": "travaux du quotidien à la maison (ménage, cuisine, lessive…)"
        },
        {
          "word": "la crèche / la garderie",
          "definition": "structure qui accueille les jeunes enfants pendant la journée"
        },
        {
          "word": "famille",
          "definition": "groupe de personnes liées par des liens de parenté"
        },
        {
          "word": "génération",
          "definition": "groupe de personnes nées à la même époque"
        },
        {
          "word": "entraide",
          "definition": "aide mutuelle entre membres d'un groupe ou d'une famille"
        },
        {
          "word": "tâche",
          "definition": "travail ou action à accomplir"
        },
        {
          "word": "responsabilité",
          "definition": "obligation d'assumer quelque chose"
        },
        {
          "word": "garde",
          "definition": "fait de s'occuper des enfants en l'absence des parents"
        },
        {
          "word": "quotidien",
          "definition": "ce qui se passe ou se fait chaque jour"
        },
        {
          "word": "lien",
          "definition": "relation entre deux personnes ou deux choses"
        }
      ],
      "vocabulary": [
        {
          "word": "une responsabilité",
          "definition": "tâche ou devoir pris en charge par une personne"
        },
        {
          "word": "l'entraide",
          "definition": "fait de s'aider mutuellement"
        },
        {
          "word": "une génération",
          "definition": "groupe de personnes ayant un âge proche dans une famille"
        },
        {
          "word": "une garde",
          "definition": "prise en charge d'un enfant ou d'une personne"
        },
        {
          "word": "les tâches ménagères",
          "definition": "travaux du quotidien à la maison (ménage, cuisine, lessive…)"
        },
        {
          "word": "la crèche / la garderie",
          "definition": "structure qui accueille les jeunes enfants pendant la journée"
        },
        {
          "word": "famille",
          "definition": "groupe de personnes liées par des liens de parenté"
        },
        {
          "word": "génération",
          "definition": "groupe de personnes nées à la même époque"
        },
        {
          "word": "entraide",
          "definition": "aide mutuelle entre membres d'un groupe ou d'une famille"
        },
        {
          "word": "tâche",
          "definition": "travail ou action à accomplir"
        },
        {
          "word": "responsabilité",
          "definition": "obligation d'assumer quelque chose"
        },
        {
          "word": "garde",
          "definition": "fait de s'occuper des enfants en l'absence des parents"
        },
        {
          "word": "quotidien",
          "definition": "ce qui se passe ou se fait chaque jour"
        },
        {
          "word": "lien",
          "definition": "relation entre deux personnes ou deux choses"
        }
      ],
      "examples": [
        "Nous nous aidons pour les courses.",
        "Je m'occupe des enfants après l'école.",
        "Les tâches sont réparties à la maison.",
        "Ma mère nous soutient souvent.",
        "Mon conjoint prépare le dîner quand je travaille tard.",
        "On se partage les tâches à la maison.",
        "Chez nous, c'est souvent moi qui cuisine.",
        "Je m'occupe des enfants le mercredi.",
        "Ma famille compte beaucoup pour moi.",
        "On s'aide mutuellement pour les démarches.",
        "Les grands-parents gardent les petits.",
        "Nous dînons ensemble le dimanche.",
        "Il y a trois générations sous le même toit."
      ],
      "expressionsPlus": [
        {
          "text": "On s'aide pour…",
          "register": "courant"
        },
        {
          "text": "Chez nous, c'est souvent…",
          "register": "familier"
        },
        {
          "text": "Je m'occupe de…",
          "register": "courant"
        },
        {
          "text": "On se répartit les tâches.",
          "register": "courant"
        },
        {
          "text": "Ma famille compte beaucoup pour moi.",
          "register": "courant"
        },
        {
          "text": "Les enfants sont à la crèche jusqu'à…",
          "register": "courant"
        },
        {
          "text": "On essaie de trouver un équilibre.",
          "register": "courant"
        },
        {
          "text": "Il/elle prend en charge…",
          "register": "formel"
        },
        {
          "text": "C'est important de se soutenir.",
          "register": "courant"
        }
      ],
      "verbs": [
        "aider",
        "s'occuper",
        "partager",
        "élever",
        "soutenir",
        "protéger",
        "grandir",
        "comprendre"
      ],
      "conjugations": [
        "<strong>aider</strong> : j'aide, tu aides, il/elle aide, nous aidons, vous aidez, ils/elles aident",
        "<strong>s'occuper</strong> : je m'occupe, tu t'occupes, il/elle s'occupe, nous nous occupons, vous vous occupez, ils/elles s'occupent"
      ],
      "dialogues": null
    },
    "a2-unite-9": {
      "entry": {
        "href": "a2-unite-9.html",
        "label": "Saveurs du monde",
        "badge": "9",
        "level": "A2",
        "summary": "Parler de goûts, de cuisine et d'habitudes alimentaires",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 8,
        "training": [
          {
            "href": "../games/mots-meles.html",
            "label": "Mots mêlés",
            "note": "vocabulaire de cuisine"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz saveurs",
            "note": "goûts et habitudes"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "décrire une recette"
          }
        ],
        "assessment": [
          {
            "prompt": "Pour décrire un plat clairement, il faut parler…",
            "choices": [
              "des ingrédients et du goût",
              "seulement du prix",
              "uniquement de la météo"
            ],
            "answer": 0
          },
          {
            "prompt": "Une tradition culinaire est…",
            "choices": [
              "une habitude transmise",
              "une gare importante",
              "un contrat"
            ],
            "answer": 0
          },
          {
            "prompt": "“Je préfère” sert à…",
            "choices": [
              "exprimer une préférence",
              "raconter un droit",
              "saluer formellement"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "Ça se mange avec…",
          "Je préfère les plats…",
          "On prépare ce repas pour…",
          "Le goût est plutôt…",
          "Cette recette vient de…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une saveur : goût particulier d'un aliment",
          "correct": true
        },
        {
          "phrase": "une saveur : préparation détaillée d'un plat",
          "correct": false
        },
        {
          "phrase": "une recette : préparation détaillée d'un plat",
          "correct": true
        },
        {
          "phrase": "une recette : goût particulier d'un aliment",
          "correct": false
        },
        {
          "phrase": "une préférence : choix personnel entre plusieurs possibilités",
          "correct": true
        },
        {
          "phrase": "une préférence : goût particulier d'un aliment",
          "correct": false
        },
        {
          "phrase": "un repas partagé : moment où plusieurs personnes mangent ensemble",
          "correct": true
        },
        {
          "phrase": "un repas partagé : goût particulier d'un aliment",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Pour décrire un plat clairement, il faut parler…",
          "choices": [
            "des ingrédients et du goût",
            "seulement du prix",
            "uniquement de la météo"
          ],
          "answer": 0
        },
        {
          "prompt": "Une tradition culinaire est…",
          "choices": [
            "une habitude transmise",
            "une gare importante",
            "un contrat"
          ],
          "answer": 0
        },
        {
          "prompt": "“Je préfère” sert à…",
          "choices": [
            "exprimer une préférence",
            "raconter un droit",
            "saluer formellement"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une saveur",
          "definition": "goût particulier d'un aliment"
        },
        {
          "word": "une recette",
          "definition": "préparation détaillée d'un plat"
        },
        {
          "word": "une préférence",
          "definition": "choix personnel entre plusieurs possibilités"
        },
        {
          "word": "un repas partagé",
          "definition": "moment où plusieurs personnes mangent ensemble"
        },
        {
          "word": "une tradition culinaire",
          "definition": "habitude de cuisine transmise d'une génération à l'autre"
        },
        {
          "word": "végétarien / halal / kasher",
          "definition": "régimes alimentaires liés à des choix ou des pratiques religieuses"
        }
      ],
      "completer": [
        {
          "display": "Je ___ les plats épicés",
          "answer": "préfère",
          "full": "Je préfère les plats épicés."
        },
        {
          "display": "Cette ___ se prépare avec du riz",
          "answer": "recette",
          "full": "Cette recette se prépare avec du riz."
        },
        {
          "display": "Nous ___ ce repas le dimanche",
          "answer": "partageons",
          "full": "Nous partageons ce repas le dimanche."
        },
        {
          "display": "Le ___ est doux et parfumé",
          "answer": "goût",
          "full": "Le goût est doux et parfumé."
        },
        {
          "display": "Ce ___ me rappelle les repas de fête chez moi",
          "answer": "plat",
          "full": "Ce plat me rappelle les repas de fête chez moi."
        },
        {
          "display": "Ce ___ se mange avec du pain de seigle",
          "answer": "plat",
          "full": "Ce plat se mange avec du pain de seigle."
        }
      ],
      "ecouter": [
        {
          "prompt": "Pour décrire un plat clairement, il faut parler…",
          "choices": [
            "des ingrédients et du goût",
            "seulement du prix",
            "uniquement de la météo"
          ],
          "answer": 0
        },
        {
          "prompt": "Une tradition culinaire est…",
          "choices": [
            "une habitude transmise",
            "une gare importante",
            "un contrat"
          ],
          "answer": 0
        },
        {
          "prompt": "“Je préfère” sert à…",
          "choices": [
            "exprimer une préférence",
            "raconter un droit",
            "saluer formellement"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "cuisiner",
          "servir",
          "partager",
          "préférer",
          "goûter",
          "manger",
          "préparer",
          "choisir"
        ],
        "conjugations": [
          "<strong>servir</strong> : je sers, tu sers, il/elle sert, nous servons, vous servez, ils/elles servent",
          "<strong>goûter</strong> : je goûte, tu goûtes, il/elle goûte, nous goûtons, vous goûtez, ils/elles goûtent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "UNE",
        "UNE",
        "SAVEUR",
        "TRADITION",
        "PARTAGE",
        "FESTIN"
      ],
      "flashcards": [
        {
          "word": "une saveur",
          "definition": "goût particulier d'un aliment"
        },
        {
          "word": "une recette",
          "definition": "préparation détaillée d'un plat"
        },
        {
          "word": "une préférence",
          "definition": "choix personnel entre plusieurs possibilités"
        },
        {
          "word": "un repas partagé",
          "definition": "moment où plusieurs personnes mangent ensemble"
        },
        {
          "word": "une tradition culinaire",
          "definition": "habitude de cuisine transmise d'une génération à l'autre"
        },
        {
          "word": "végétarien / halal / kasher",
          "definition": "régimes alimentaires liés à des choix ou des pratiques religieuses"
        },
        {
          "word": "saveur",
          "definition": "goût particulier d'un aliment : sucré, salé, acide, épicé"
        },
        {
          "word": "tradition",
          "definition": "habitude transmise de génération en génération"
        },
        {
          "word": "ingrédient",
          "definition": "aliment entrant dans la préparation d'un plat"
        },
        {
          "word": "préparation",
          "definition": "ensemble des étapes pour cuisiner un plat"
        },
        {
          "word": "partage",
          "definition": "fait de donner ou de vivre quelque chose avec d'autres"
        },
        {
          "word": "festin",
          "definition": "repas abondant préparé pour une occasion spéciale"
        },
        {
          "word": "marché",
          "definition": "lieu où l'on achète des fruits, légumes et produits frais"
        },
        {
          "word": "aromate",
          "definition": "herbe ou épice qui donne du goût aux plats"
        }
      ],
      "anagrammes": [
        {
          "word": "saveur",
          "definition": "goût particulier d'un aliment : sucré, salé, acide, épicé"
        },
        {
          "word": "tradition",
          "definition": "habitude transmise de génération en génération"
        },
        {
          "word": "ingrédient",
          "definition": "aliment entrant dans la préparation d'un plat"
        },
        {
          "word": "préparation",
          "definition": "ensemble des étapes pour cuisiner un plat"
        },
        {
          "word": "partage",
          "definition": "fait de donner ou de vivre quelque chose avec d'autres"
        },
        {
          "word": "festin",
          "definition": "repas abondant préparé pour une occasion spéciale"
        },
        {
          "word": "marché",
          "definition": "lieu où l'on achète des fruits, légumes et produits frais"
        },
        {
          "word": "aromate",
          "definition": "herbe ou épice qui donne du goût aux plats"
        }
      ],
      "dialogue": [],
      "construire": [
        "Je préfère les plats épicés.",
        "Cette recette se prépare avec du riz.",
        "Nous partageons ce repas le dimanche.",
        "Le goût est doux et parfumé.",
        "Ce plat me rappelle les repas de fête chez moi.",
        "Ce plat se mange avec du pain de seigle."
      ],
      "validation": [
        {
          "word": "une saveur",
          "definition": "goût particulier d'un aliment"
        },
        {
          "word": "une recette",
          "definition": "préparation détaillée d'un plat"
        },
        {
          "word": "une préférence",
          "definition": "choix personnel entre plusieurs possibilités"
        },
        {
          "word": "un repas partagé",
          "definition": "moment où plusieurs personnes mangent ensemble"
        },
        {
          "word": "une tradition culinaire",
          "definition": "habitude de cuisine transmise d'une génération à l'autre"
        },
        {
          "word": "végétarien / halal / kasher",
          "definition": "régimes alimentaires liés à des choix ou des pratiques religieuses"
        },
        {
          "word": "saveur",
          "definition": "goût particulier d'un aliment : sucré, salé, acide, épicé"
        },
        {
          "word": "tradition",
          "definition": "habitude transmise de génération en génération"
        },
        {
          "word": "ingrédient",
          "definition": "aliment entrant dans la préparation d'un plat"
        },
        {
          "word": "préparation",
          "definition": "ensemble des étapes pour cuisiner un plat"
        },
        {
          "word": "partage",
          "definition": "fait de donner ou de vivre quelque chose avec d'autres"
        },
        {
          "word": "festin",
          "definition": "repas abondant préparé pour une occasion spéciale"
        },
        {
          "word": "marché",
          "definition": "lieu où l'on achète des fruits, légumes et produits frais"
        },
        {
          "word": "aromate",
          "definition": "herbe ou épice qui donne du goût aux plats"
        }
      ],
      "vocabulary": [
        {
          "word": "une saveur",
          "definition": "goût particulier d'un aliment"
        },
        {
          "word": "une recette",
          "definition": "préparation détaillée d'un plat"
        },
        {
          "word": "une préférence",
          "definition": "choix personnel entre plusieurs possibilités"
        },
        {
          "word": "un repas partagé",
          "definition": "moment où plusieurs personnes mangent ensemble"
        },
        {
          "word": "une tradition culinaire",
          "definition": "habitude de cuisine transmise d'une génération à l'autre"
        },
        {
          "word": "végétarien / halal / kasher",
          "definition": "régimes alimentaires liés à des choix ou des pratiques religieuses"
        },
        {
          "word": "saveur",
          "definition": "goût particulier d'un aliment : sucré, salé, acide, épicé"
        },
        {
          "word": "tradition",
          "definition": "habitude transmise de génération en génération"
        },
        {
          "word": "ingrédient",
          "definition": "aliment entrant dans la préparation d'un plat"
        },
        {
          "word": "préparation",
          "definition": "ensemble des étapes pour cuisiner un plat"
        },
        {
          "word": "partage",
          "definition": "fait de donner ou de vivre quelque chose avec d'autres"
        },
        {
          "word": "festin",
          "definition": "repas abondant préparé pour une occasion spéciale"
        },
        {
          "word": "marché",
          "definition": "lieu où l'on achète des fruits, légumes et produits frais"
        },
        {
          "word": "aromate",
          "definition": "herbe ou épice qui donne du goût aux plats"
        }
      ],
      "examples": [
        "Je préfère les plats épicés.",
        "Cette recette se prépare avec du riz.",
        "Nous partageons ce repas le dimanche.",
        "Le goût est doux et parfumé.",
        "Ce plat me rappelle les repas de fête chez moi.",
        "Ce plat se mange avec du pain de seigle.",
        "Je préfère les plats épicés et parfumés.",
        "On prépare ce repas pour les fêtes.",
        "Le goût est plutôt doux et légèrement sucré.",
        "Cette recette vient de ma grand-mère.",
        "On ajoute des aromates à la fin.",
        "Le marché est ouvert le mardi et le vendredi.",
        "Nous partageons ce plat en famille."
      ],
      "expressionsPlus": [
        {
          "text": "Ça se mange avec…",
          "register": "courant"
        },
        {
          "text": "Je préfère les plats…",
          "register": "courant"
        },
        {
          "text": "On prépare ce repas pour…",
          "register": "courant"
        },
        {
          "text": "Le goût est plutôt…",
          "register": "courant"
        },
        {
          "text": "Cette recette vient de…",
          "register": "courant"
        },
        {
          "text": "Je ne mange pas de…",
          "register": "courant"
        },
        {
          "text": "C'est un plat que je mange souvent.",
          "register": "courant"
        },
        {
          "text": "Ce plat a une signification particulière dans ma culture.",
          "register": "formel"
        },
        {
          "text": "Ça fait du bien de manger comme à la maison.",
          "register": "familier"
        }
      ],
      "verbs": [
        "cuisiner",
        "servir",
        "partager",
        "préférer",
        "goûter",
        "manger",
        "préparer",
        "choisir"
      ],
      "conjugations": [
        "<strong>servir</strong> : je sers, tu sers, il/elle sert, nous servons, vous servez, ils/elles servent",
        "<strong>goûter</strong> : je goûte, tu goûtes, il/elle goûte, nous goûtons, vous goûtez, ils/elles goûtent"
      ],
      "dialogues": null
    },
    "a2-unite-10": {
      "entry": {
        "href": "a2-unite-10.html",
        "label": "Parcours de vie",
        "badge": "10",
        "level": "A2",
        "summary": "Présenter son itinéraire personnel avec simplicité",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 9,
        "training": [
          {
            "href": "../games/profil.html",
            "label": "Profil",
            "note": "présenter un parcours"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "relier les étapes d'un itinéraire"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz parcours",
            "note": "formation et expérience"
          }
        ],
        "assessment": [
          {
            "prompt": "Un parcours clair suit souvent…",
            "choices": [
              "avant, changement, maintenant",
              "couleur, prix, météo",
              "droite, gauche, tout droit"
            ],
            "answer": 0
          },
          {
            "prompt": "Une étape clé est…",
            "choices": [
              "un moment important",
              "une quantité de farine",
              "une marque de magasin"
            ],
            "answer": 0
          },
          {
            "prompt": "Un entretien peut demander de…",
            "choices": [
              "résumer son parcours",
              "décrire une carte routière uniquement",
              "citer des capitales"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "Au début…",
          "Puis…",
          "Après ça…",
          "Aujourd'hui…",
          "Mon objectif maintenant, c'est…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une étape : moment important dans un parcours",
          "correct": true
        },
        {
          "phrase": "une étape : modification marquante dans une situation",
          "correct": false
        },
        {
          "phrase": "un changement : modification marquante dans une situation",
          "correct": true
        },
        {
          "phrase": "un changement : moment important dans un parcours",
          "correct": false
        },
        {
          "phrase": "une expérience : situation vécue et retenue",
          "correct": true
        },
        {
          "phrase": "une expérience : moment important dans un parcours",
          "correct": false
        },
        {
          "phrase": "un objectif : but à atteindre",
          "correct": true
        },
        {
          "phrase": "un objectif : moment important dans un parcours",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Un parcours clair suit souvent…",
          "choices": [
            "avant, changement, maintenant",
            "couleur, prix, météo",
            "droite, gauche, tout droit"
          ],
          "answer": 0
        },
        {
          "prompt": "Une étape clé est…",
          "choices": [
            "un moment important",
            "une quantité de farine",
            "une marque de magasin"
          ],
          "answer": 0
        },
        {
          "prompt": "Un entretien peut demander de…",
          "choices": [
            "résumer son parcours",
            "décrire une carte routière uniquement",
            "citer des capitales"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une étape",
          "definition": "moment important dans un parcours"
        },
        {
          "word": "un changement",
          "definition": "modification marquante dans une situation"
        },
        {
          "word": "une expérience",
          "definition": "situation vécue et retenue"
        },
        {
          "word": "un objectif",
          "definition": "but à atteindre"
        },
        {
          "word": "un parcours de vie",
          "definition": "ensemble des expériences et étapes qui ont formé une personne"
        },
        {
          "word": "une reconversion",
          "definition": "changement de domaine professionnel ou de formation"
        }
      ],
      "completer": [
        {
          "display": "J'ai ___ à l'étranger",
          "answer": "grandi",
          "full": "J'ai grandi à l'étranger."
        },
        {
          "display": "Ensuite, j'ai ___ une formation",
          "answer": "suivi",
          "full": "Ensuite, j'ai suivi une formation."
        },
        {
          "display": "Puis j'ai ___ de domaine",
          "answer": "changé",
          "full": "Puis j'ai changé de domaine."
        },
        {
          "display": "Aujourd'hui, mon ___ est plus clair",
          "answer": "objectif",
          "full": "Aujourd'hui, mon objectif est plus clair."
        },
        {
          "display": "Ce ___ a tout changé pour moi",
          "answer": "tournant",
          "full": "Ce tournant a tout changé pour moi."
        },
        {
          "display": "Au ___ j'habitais en Espagne",
          "answer": "début",
          "full": "Au début, j'habitais en Espagne."
        }
      ],
      "ecouter": [
        {
          "prompt": "Un parcours clair suit souvent…",
          "choices": [
            "avant, changement, maintenant",
            "couleur, prix, météo",
            "droite, gauche, tout droit"
          ],
          "answer": 0
        },
        {
          "prompt": "Une étape clé est…",
          "choices": [
            "un moment important",
            "une quantité de farine",
            "une marque de magasin"
          ],
          "answer": 0
        },
        {
          "prompt": "Un entretien peut demander de…",
          "choices": [
            "résumer son parcours",
            "décrire une carte routière uniquement",
            "citer des capitales"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "grandir",
          "changer",
          "apprendre",
          "travailler",
          "devenir",
          "évoluer",
          "réussir",
          "se former"
        ],
        "conjugations": [
          "<strong>grandir</strong> : je grandis, tu grandis, il/elle grandit, nous grandissons, vous grandissez, ils/elles grandissent",
          "<strong>devenir</strong> : je deviens, tu deviens, il/elle devient, nous devenons, vous devenez, ils/elles deviennent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "UNE",
        "PARCOURS",
        "ETAPE",
        "MIGRATION",
        "OBJECTIF",
        "EVOLUTION"
      ],
      "flashcards": [
        {
          "word": "une étape",
          "definition": "moment important dans un parcours"
        },
        {
          "word": "un changement",
          "definition": "modification marquante dans une situation"
        },
        {
          "word": "une expérience",
          "definition": "situation vécue et retenue"
        },
        {
          "word": "un objectif",
          "definition": "but à atteindre"
        },
        {
          "word": "un parcours de vie",
          "definition": "ensemble des expériences et étapes qui ont formé une personne"
        },
        {
          "word": "une reconversion",
          "definition": "changement de domaine professionnel ou de formation"
        },
        {
          "word": "parcours",
          "definition": "chemin de vie incluant formations, expériences et changements"
        },
        {
          "word": "étape",
          "definition": "moment important dans une progression ou un voyage"
        },
        {
          "word": "migration",
          "definition": "fait de quitter son pays pour s'installer ailleurs"
        },
        {
          "word": "objectif",
          "definition": "but ou résultat que l'on veut atteindre"
        },
        {
          "word": "expérience",
          "definition": "connaissance acquise par la pratique ou des événements vécus"
        },
        {
          "word": "évolution",
          "definition": "changement progressif dans le temps"
        },
        {
          "word": "candidature",
          "definition": "démarche officielle pour obtenir un poste ou une formation"
        },
        {
          "word": "diplôme",
          "definition": "certificat qui reconnaît qu'on a suivi et réussi une formation"
        }
      ],
      "anagrammes": [
        {
          "word": "parcours",
          "definition": "chemin de vie incluant formations, expériences et changements"
        },
        {
          "word": "étape",
          "definition": "moment important dans une progression ou un voyage"
        },
        {
          "word": "migration",
          "definition": "fait de quitter son pays pour s'installer ailleurs"
        },
        {
          "word": "objectif",
          "definition": "but ou résultat que l'on veut atteindre"
        },
        {
          "word": "expérience",
          "definition": "connaissance acquise par la pratique ou des événements vécus"
        },
        {
          "word": "évolution",
          "definition": "changement progressif dans le temps"
        },
        {
          "word": "candidature",
          "definition": "démarche officielle pour obtenir un poste ou une formation"
        },
        {
          "word": "diplôme",
          "definition": "certificat qui reconnaît qu'on a suivi et réussi une formation"
        }
      ],
      "dialogue": [],
      "construire": [
        "J'ai grandi à l'étranger.",
        "Ensuite, j'ai suivi une formation.",
        "Puis j'ai changé de domaine.",
        "Aujourd'hui, mon objectif est plus clair.",
        "Ce tournant a tout changé pour moi.",
        "Au début, j'habitais en Espagne."
      ],
      "validation": [
        {
          "word": "une étape",
          "definition": "moment important dans un parcours"
        },
        {
          "word": "un changement",
          "definition": "modification marquante dans une situation"
        },
        {
          "word": "une expérience",
          "definition": "situation vécue et retenue"
        },
        {
          "word": "un objectif",
          "definition": "but à atteindre"
        },
        {
          "word": "un parcours de vie",
          "definition": "ensemble des expériences et étapes qui ont formé une personne"
        },
        {
          "word": "une reconversion",
          "definition": "changement de domaine professionnel ou de formation"
        },
        {
          "word": "parcours",
          "definition": "chemin de vie incluant formations, expériences et changements"
        },
        {
          "word": "étape",
          "definition": "moment important dans une progression ou un voyage"
        },
        {
          "word": "migration",
          "definition": "fait de quitter son pays pour s'installer ailleurs"
        },
        {
          "word": "objectif",
          "definition": "but ou résultat que l'on veut atteindre"
        },
        {
          "word": "expérience",
          "definition": "connaissance acquise par la pratique ou des événements vécus"
        },
        {
          "word": "évolution",
          "definition": "changement progressif dans le temps"
        },
        {
          "word": "candidature",
          "definition": "démarche officielle pour obtenir un poste ou une formation"
        },
        {
          "word": "diplôme",
          "definition": "certificat qui reconnaît qu'on a suivi et réussi une formation"
        }
      ],
      "vocabulary": [
        {
          "word": "une étape",
          "definition": "moment important dans un parcours"
        },
        {
          "word": "un changement",
          "definition": "modification marquante dans une situation"
        },
        {
          "word": "une expérience",
          "definition": "situation vécue et retenue"
        },
        {
          "word": "un objectif",
          "definition": "but à atteindre"
        },
        {
          "word": "un parcours de vie",
          "definition": "ensemble des expériences et étapes qui ont formé une personne"
        },
        {
          "word": "une reconversion",
          "definition": "changement de domaine professionnel ou de formation"
        },
        {
          "word": "parcours",
          "definition": "chemin de vie incluant formations, expériences et changements"
        },
        {
          "word": "étape",
          "definition": "moment important dans une progression ou un voyage"
        },
        {
          "word": "migration",
          "definition": "fait de quitter son pays pour s'installer ailleurs"
        },
        {
          "word": "objectif",
          "definition": "but ou résultat que l'on veut atteindre"
        },
        {
          "word": "expérience",
          "definition": "connaissance acquise par la pratique ou des événements vécus"
        },
        {
          "word": "évolution",
          "definition": "changement progressif dans le temps"
        },
        {
          "word": "candidature",
          "definition": "démarche officielle pour obtenir un poste ou une formation"
        },
        {
          "word": "diplôme",
          "definition": "certificat qui reconnaît qu'on a suivi et réussi une formation"
        }
      ],
      "examples": [
        "J'ai grandi à l'étranger.",
        "Ensuite, j'ai suivi une formation.",
        "Puis j'ai changé de domaine.",
        "Aujourd'hui, mon objectif est plus clair.",
        "Ce tournant a tout changé pour moi.",
        "Au début, j'habitais en Espagne.",
        "Puis j'ai déménagé en Suisse en 2018.",
        "Après ça, j'ai commencé une formation.",
        "Aujourd'hui, je travaille dans ce domaine.",
        "Mon objectif est d'obtenir un diplôme reconnu.",
        "J'ai beaucoup évolué depuis mon arrivée.",
        "J'ai envoyé ma candidature hier.",
        "Chaque étape m'a appris quelque chose."
      ],
      "expressionsPlus": [
        {
          "text": "Au début…",
          "register": "courant"
        },
        {
          "text": "Puis…",
          "register": "courant"
        },
        {
          "text": "Après ça…",
          "register": "courant"
        },
        {
          "text": "Aujourd'hui…",
          "register": "courant"
        },
        {
          "text": "Mon objectif maintenant, c'est…",
          "register": "courant"
        },
        {
          "text": "C'est à ce moment-là que tout a changé.",
          "register": "courant"
        },
        {
          "text": "Cette expérience m'a beaucoup appris.",
          "register": "courant"
        },
        {
          "text": "Je suis en train de me reconvertir dans…",
          "register": "courant"
        },
        {
          "text": "Mon parcours m'a conduit à…",
          "register": "formel"
        }
      ],
      "verbs": [
        "grandir",
        "changer",
        "apprendre",
        "travailler",
        "devenir",
        "évoluer",
        "réussir",
        "se former"
      ],
      "conjugations": [
        "<strong>grandir</strong> : je grandis, tu grandis, il/elle grandit, nous grandissons, vous grandissez, ils/elles grandissent",
        "<strong>devenir</strong> : je deviens, tu deviens, il/elle devient, nous devenons, vous devenez, ils/elles deviennent"
      ],
      "dialogues": null
    },
    "a2-unite-11": {
      "entry": {
        "href": "a2-unite-11.html",
        "label": "Révéler ses talents",
        "badge": "11",
        "level": "A2",
        "summary": "Mettre en valeur ce que l'on sait faire",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 10,
        "training": [
          {
            "href": "../games/cv-competences.html",
            "label": "CV compétences",
            "note": "mettre en valeur ses atouts"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz talents",
            "note": "compétences et qualités"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "phrases pour se valoriser"
          }
        ],
        "assessment": [
          {
            "prompt": "Pour valoriser un talent, il vaut mieux…",
            "choices": [
              "donner un exemple concret",
              "rester très vague",
              "changer de sujet"
            ],
            "answer": 0
          },
          {
            "prompt": "Une compétence correspond à…",
            "choices": [
              "ce qu'on sait faire",
              "une ville",
              "un billet de train"
            ],
            "answer": 0
          },
          {
            "prompt": "L'ORP est lié surtout…",
            "choices": [
              "à l'emploi",
              "à la cuisine",
              "à l'histoire ancienne"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "Je suis capable de…",
          "Je me débrouille bien pour…",
          "On peut compter sur moi pour…",
          "J'ai réussi à…",
          "Une de mes forces, c'est…"
        ]
      },
      "vraiFaux": [
        {
          "phrase": "une compétence : savoir-faire acquis dans un domaine",
          "correct": true
        },
        {
          "phrase": "une compétence : caractéristique personnelle positive",
          "correct": false
        },
        {
          "phrase": "une qualité : caractéristique personnelle positive",
          "correct": true
        },
        {
          "phrase": "une qualité : savoir-faire acquis dans un domaine",
          "correct": false
        },
        {
          "phrase": "une réussite : résultat positif obtenu grâce à un effort",
          "correct": true
        },
        {
          "phrase": "une réussite : savoir-faire acquis dans un domaine",
          "correct": false
        },
        {
          "phrase": "un talent : aptitude particulière dans un domaine",
          "correct": true
        },
        {
          "phrase": "un talent : savoir-faire acquis dans un domaine",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Pour valoriser un talent, il vaut mieux…",
          "choices": [
            "donner un exemple concret",
            "rester très vague",
            "changer de sujet"
          ],
          "answer": 0
        },
        {
          "prompt": "Une compétence correspond à…",
          "choices": [
            "ce qu'on sait faire",
            "une ville",
            "un billet de train"
          ],
          "answer": 0
        },
        {
          "prompt": "L'ORP est lié surtout…",
          "choices": [
            "à l'emploi",
            "à la cuisine",
            "à l'histoire ancienne"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "une compétence",
          "definition": "savoir-faire acquis dans un domaine"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique personnelle positive"
        },
        {
          "word": "une réussite",
          "definition": "résultat positif obtenu grâce à un effort"
        },
        {
          "word": "un talent",
          "definition": "aptitude particulière dans un domaine"
        },
        {
          "word": "un point fort",
          "definition": "ce dans quoi on est particulièrement bon"
        },
        {
          "word": "illustrer",
          "definition": "montrer quelque chose par un exemple concret"
        }
      ],
      "completer": [
        {
          "display": "Je ___ organiser mon travail",
          "answer": "sais",
          "full": "Je sais organiser mon travail."
        },
        {
          "display": "Je ___ bien dans les tâches précises",
          "answer": "réussis",
          "full": "Je réussis bien dans les tâches précises."
        },
        {
          "display": "Une de mes ___ est la patience",
          "answer": "qualités",
          "full": "Une de mes qualités est la patience."
        },
        {
          "display": "J'ai ___ cette compétence pendant un stage",
          "answer": "montré",
          "full": "J'ai montré cette compétence pendant un stage."
        },
        {
          "display": "Par ___ lors de mon dernier emploi, j'ai…",
          "answer": "exemple",
          "full": "Par exemple, lors de mon dernier emploi, j'ai…"
        },
        {
          "display": "Je ___ capable d'organiser un événement",
          "answer": "suis",
          "full": "Je suis capable d'organiser un événement."
        }
      ],
      "ecouter": [
        {
          "prompt": "Pour valoriser un talent, il vaut mieux…",
          "choices": [
            "donner un exemple concret",
            "rester très vague",
            "changer de sujet"
          ],
          "answer": 0
        },
        {
          "prompt": "Une compétence correspond à…",
          "choices": [
            "ce qu'on sait faire",
            "une ville",
            "un billet de train"
          ],
          "answer": 0
        },
        {
          "prompt": "L'ORP est lié surtout…",
          "choices": [
            "à l'emploi",
            "à la cuisine",
            "à l'histoire ancienne"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "réussir",
          "savoir",
          "pouvoir",
          "améliorer",
          "montrer",
          "apprendre",
          "progresser",
          "comprendre"
        ],
        "conjugations": [
          "<strong>réussir</strong> : je réussis, tu réussis, il/elle réussit, nous réussissons, vous réussissez, ils/elles réussissent",
          "<strong>savoir</strong> : je sais, tu sais, il/elle sait, nous savons, vous savez, ils/elles savent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "UNE",
        "ILLUSTRER",
        "TALENT",
        "FORCE",
        "ATOUT",
        "REUSSITE"
      ],
      "flashcards": [
        {
          "word": "une compétence",
          "definition": "savoir-faire acquis dans un domaine"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique personnelle positive"
        },
        {
          "word": "une réussite",
          "definition": "résultat positif obtenu grâce à un effort"
        },
        {
          "word": "un talent",
          "definition": "aptitude particulière dans un domaine"
        },
        {
          "word": "un point fort",
          "definition": "ce dans quoi on est particulièrement bon"
        },
        {
          "word": "illustrer",
          "definition": "montrer quelque chose par un exemple concret"
        },
        {
          "word": "compétence",
          "definition": "capacité à réaliser une tâche avec efficacité"
        },
        {
          "word": "talent",
          "definition": "aptitude naturelle ou développée dans un domaine"
        },
        {
          "word": "force",
          "definition": "point positif et solide dans le profil d'une personne"
        },
        {
          "word": "atout",
          "definition": "avantage que l'on possède par rapport aux autres"
        },
        {
          "word": "réussite",
          "definition": "fait d'obtenir un bon résultat dans une activité"
        },
        {
          "word": "autonomie",
          "definition": "capacité à agir et décider sans aide extérieure"
        },
        {
          "word": "initiative",
          "definition": "action faite de soi-même, sans attendre d'ordre"
        },
        {
          "word": "fiabilité",
          "definition": "qualité d'une personne ou d'une chose sur laquelle on peut compter"
        }
      ],
      "anagrammes": [
        {
          "word": "illustrer",
          "definition": "montrer quelque chose par un exemple concret"
        },
        {
          "word": "compétence",
          "definition": "capacité à réaliser une tâche avec efficacité"
        },
        {
          "word": "talent",
          "definition": "aptitude naturelle ou développée dans un domaine"
        },
        {
          "word": "force",
          "definition": "point positif et solide dans le profil d'une personne"
        },
        {
          "word": "atout",
          "definition": "avantage que l'on possède par rapport aux autres"
        },
        {
          "word": "réussite",
          "definition": "fait d'obtenir un bon résultat dans une activité"
        },
        {
          "word": "autonomie",
          "definition": "capacité à agir et décider sans aide extérieure"
        },
        {
          "word": "initiative",
          "definition": "action faite de soi-même, sans attendre d'ordre"
        }
      ],
      "dialogue": [],
      "construire": [
        "Je sais organiser mon travail.",
        "Je réussis bien dans les tâches précises.",
        "Une de mes qualités est la patience.",
        "J'ai montré cette compétence pendant un stage.",
        "Par exemple, lors de mon dernier emploi, j'ai…",
        "Je suis capable d'organiser un événement."
      ],
      "validation": [
        {
          "word": "une compétence",
          "definition": "savoir-faire acquis dans un domaine"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique personnelle positive"
        },
        {
          "word": "une réussite",
          "definition": "résultat positif obtenu grâce à un effort"
        },
        {
          "word": "un talent",
          "definition": "aptitude particulière dans un domaine"
        },
        {
          "word": "un point fort",
          "definition": "ce dans quoi on est particulièrement bon"
        },
        {
          "word": "illustrer",
          "definition": "montrer quelque chose par un exemple concret"
        },
        {
          "word": "compétence",
          "definition": "capacité à réaliser une tâche avec efficacité"
        },
        {
          "word": "talent",
          "definition": "aptitude naturelle ou développée dans un domaine"
        },
        {
          "word": "force",
          "definition": "point positif et solide dans le profil d'une personne"
        },
        {
          "word": "atout",
          "definition": "avantage que l'on possède par rapport aux autres"
        },
        {
          "word": "réussite",
          "definition": "fait d'obtenir un bon résultat dans une activité"
        },
        {
          "word": "autonomie",
          "definition": "capacité à agir et décider sans aide extérieure"
        },
        {
          "word": "initiative",
          "definition": "action faite de soi-même, sans attendre d'ordre"
        },
        {
          "word": "fiabilité",
          "definition": "qualité d'une personne ou d'une chose sur laquelle on peut compter"
        }
      ],
      "vocabulary": [
        {
          "word": "une compétence",
          "definition": "savoir-faire acquis dans un domaine"
        },
        {
          "word": "une qualité",
          "definition": "caractéristique personnelle positive"
        },
        {
          "word": "une réussite",
          "definition": "résultat positif obtenu grâce à un effort"
        },
        {
          "word": "un talent",
          "definition": "aptitude particulière dans un domaine"
        },
        {
          "word": "un point fort",
          "definition": "ce dans quoi on est particulièrement bon"
        },
        {
          "word": "illustrer",
          "definition": "montrer quelque chose par un exemple concret"
        },
        {
          "word": "compétence",
          "definition": "capacité à réaliser une tâche avec efficacité"
        },
        {
          "word": "talent",
          "definition": "aptitude naturelle ou développée dans un domaine"
        },
        {
          "word": "force",
          "definition": "point positif et solide dans le profil d'une personne"
        },
        {
          "word": "atout",
          "definition": "avantage que l'on possède par rapport aux autres"
        },
        {
          "word": "réussite",
          "definition": "fait d'obtenir un bon résultat dans une activité"
        },
        {
          "word": "autonomie",
          "definition": "capacité à agir et décider sans aide extérieure"
        },
        {
          "word": "initiative",
          "definition": "action faite de soi-même, sans attendre d'ordre"
        },
        {
          "word": "fiabilité",
          "definition": "qualité d'une personne ou d'une chose sur laquelle on peut compter"
        }
      ],
      "examples": [
        "Je sais organiser mon travail.",
        "Je réussis bien dans les tâches précises.",
        "Une de mes qualités est la patience.",
        "J'ai montré cette compétence pendant un stage.",
        "Par exemple, lors de mon dernier emploi, j'ai…",
        "Je suis capable d'organiser un événement.",
        "Je me débrouille bien avec les clients.",
        "On peut compter sur moi pour les délais.",
        "J'ai réussi à apprendre le français en deux ans.",
        "Une de mes forces, c'est la rigueur.",
        "Je travaille de façon autonome.",
        "J'ai pris l'initiative d'améliorer le processus.",
        "Je suis fiable et ponctuel dans mon travail."
      ],
      "expressionsPlus": [
        {
          "text": "Je suis capable de…",
          "register": "courant"
        },
        {
          "text": "Je me débrouille bien pour…",
          "register": "courant"
        },
        {
          "text": "On peut compter sur moi pour…",
          "register": "courant"
        },
        {
          "text": "J'ai réussi à…",
          "register": "courant"
        },
        {
          "text": "Une de mes forces, c'est…",
          "register": "courant"
        },
        {
          "text": "Par exemple, lors de mon stage…",
          "register": "courant"
        },
        {
          "text": "J'ai acquis cette compétence en…",
          "register": "formel"
        },
        {
          "text": "Je m'adapte facilement à…",
          "register": "courant"
        },
        {
          "text": "Mon point fort est sans doute…",
          "register": "formel"
        }
      ],
      "verbs": [
        "réussir",
        "savoir",
        "pouvoir",
        "améliorer",
        "montrer",
        "apprendre",
        "progresser",
        "comprendre"
      ],
      "conjugations": [
        "<strong>réussir</strong> : je réussis, tu réussis, il/elle réussit, nous réussissons, vous réussissez, ils/elles réussissent",
        "<strong>savoir</strong> : je sais, tu sais, il/elle sait, nous savons, vous savez, ils/elles savent"
      ],
      "dialogues": null
    },
    "a2-unite-12": {
      "entry": {
        "href": "a2-unite-12.html",
        "label": "À votre manière",
        "badge": "12",
        "level": "A2",
        "summary": "Choisir son style d'expression avec plus d'aisance",
        "sectionTitle": "A2",
        "sectionDescription": "Gagner en autonomie dans la vie sociale, les démarches et les échanges du quotidien.",
        "sectionIndex": 11,
        "training": [
          {
            "href": "../games/simulateur-email.html",
            "label": "Simulateur email",
            "note": "adapter un message écrit"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz registre",
            "note": "choisir le bon ton"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "transformer une phrase selon le contexte"
          }
        ],
        "assessment": [
          {
            "prompt": "Le registre formel est utile pour…",
            "choices": [
              "la commune ou un employeur",
              "un message très familier",
              "un menu de restaurant"
            ],
            "answer": 0
          },
          {
            "prompt": "Adapter son style, c'est…",
            "choices": [
              "parler pareil partout",
              "changer selon la situation",
              "supprimer les salutations"
            ],
            "answer": 1
          },
          {
            "prompt": "“Je vous écris pour…” appartient plutôt à…",
            "choices": [
              "un échange formel",
              "un jeu de piste",
              "une recette"
            ],
            "answer": 0
          }
        ],
        "expressions": [
          "Salut, ça joue ?",
          "Bonjour Madame, Monsieur,",
          "Je vous écris pour…",
          "Merci d'avance pour votre réponse.",
          "À bientôt / Avec mes salutations."
        ]
      },
      "vraiFaux": [
        {
          "phrase": "un registre : niveau de langue adapté à une situation",
          "correct": true
        },
        {
          "phrase": "un registre : fait de redire autrement",
          "correct": false
        },
        {
          "phrase": "une reformulation : fait de redire autrement",
          "correct": true
        },
        {
          "phrase": "une reformulation : niveau de langue adapté à une situation",
          "correct": false
        },
        {
          "phrase": "une salutation : formule utilisée au début ou à la fin d'un message",
          "correct": true
        },
        {
          "phrase": "une salutation : niveau de langue adapté à une situation",
          "correct": false
        },
        {
          "phrase": "un ton : manière générale de s'exprimer",
          "correct": true
        },
        {
          "phrase": "un ton : niveau de langue adapté à une situation",
          "correct": false
        }
      ],
      "quiz": [
        {
          "prompt": "Le registre formel est utile pour…",
          "choices": [
            "la commune ou un employeur",
            "un message très familier",
            "un menu de restaurant"
          ],
          "answer": 0
        },
        {
          "prompt": "Adapter son style, c'est…",
          "choices": [
            "parler pareil partout",
            "changer selon la situation",
            "supprimer les salutations"
          ],
          "answer": 1
        },
        {
          "prompt": "“Je vous écris pour…” appartient plutôt à…",
          "choices": [
            "un échange formel",
            "un jeu de piste",
            "une recette"
          ],
          "answer": 0
        }
      ],
      "apparier": [
        {
          "word": "un registre",
          "definition": "niveau de langue adapté à une situation"
        },
        {
          "word": "une reformulation",
          "definition": "fait de redire autrement"
        },
        {
          "word": "une salutation",
          "definition": "formule utilisée au début ou à la fin d'un message"
        },
        {
          "word": "un ton",
          "definition": "manière générale de s'exprimer"
        },
        {
          "word": "vouvoyer / tutoyer",
          "definition": "utiliser \"vous\" ou \"tu\" selon le degré de formalité"
        },
        {
          "word": "une formule de politesse",
          "definition": "phrase standard de clôture dans un email ou courrier formel"
        }
      ],
      "completer": [
        {
          "display": "Salut, tu ___ demain ?",
          "answer": "viens",
          "full": "Salut, tu viens demain ?"
        },
        {
          "display": "Bonjour ___ je vous écris pour…",
          "answer": "madame",
          "full": "Bonjour Madame, je vous écris pour…"
        },
        {
          "display": "Merci ___ pour votre réponse",
          "answer": "davance",
          "full": "Merci d'avance pour votre réponse."
        },
        {
          "display": "À ___ / Avec mes salutations",
          "answer": "bientôt",
          "full": "À bientôt / Avec mes salutations."
        },
        {
          "display": "Je me ___ de vous contacter au sujet de…",
          "answer": "permets",
          "full": "Je me permets de vous contacter au sujet de…"
        },
        {
          "display": "Bonjour ___ je vous écris pour..",
          "answer": "madame",
          "full": "Bonjour Madame, je vous écris pour..."
        }
      ],
      "ecouter": [
        {
          "prompt": "Le registre formel est utile pour…",
          "choices": [
            "la commune ou un employeur",
            "un message très familier",
            "un menu de restaurant"
          ],
          "answer": 0
        },
        {
          "prompt": "Adapter son style, c'est…",
          "choices": [
            "parler pareil partout",
            "changer selon la situation",
            "supprimer les salutations"
          ],
          "answer": 1
        },
        {
          "prompt": "“Je vous écris pour…” appartient plutôt à…",
          "choices": [
            "un échange formel",
            "un jeu de piste",
            "une recette"
          ],
          "answer": 0
        }
      ],
      "conjugaison": {
        "verbs": [
          "écrire",
          "adapter",
          "reformuler",
          "corriger",
          "nuancer",
          "lire",
          "rédiger",
          "relire"
        ],
        "conjugations": [
          "<strong>écrire</strong> : j'écris, tu écris, il/elle écrit, nous écrivons, vous écrivez, ils/elles écrivent",
          "<strong>corriger</strong> : je corrige, tu corriges, il/elle corrige, nous corrigeons, vous corrigez, ils/elles corrigent"
        ]
      },
      "motsMeles": [
        "UNE",
        "UNE",
        "VOUVOYER",
        "UNE",
        "REGISTRE",
        "FORMALITE",
        "COURRIEL",
        "TON"
      ],
      "flashcards": [
        {
          "word": "un registre",
          "definition": "niveau de langue adapté à une situation"
        },
        {
          "word": "une reformulation",
          "definition": "fait de redire autrement"
        },
        {
          "word": "une salutation",
          "definition": "formule utilisée au début ou à la fin d'un message"
        },
        {
          "word": "un ton",
          "definition": "manière générale de s'exprimer"
        },
        {
          "word": "vouvoyer / tutoyer",
          "definition": "utiliser \"vous\" ou \"tu\" selon le degré de formalité"
        },
        {
          "word": "une formule de politesse",
          "definition": "phrase standard de clôture dans un email ou courrier formel"
        },
        {
          "word": "registre",
          "definition": "niveau de langue utilisé selon la situation : formel ou familier"
        },
        {
          "word": "adaptation",
          "definition": "fait de modifier son comportement ou son discours selon la situation"
        },
        {
          "word": "destinataire",
          "definition": "personne à qui s'adresse un message ou une lettre"
        },
        {
          "word": "vouvoiement",
          "definition": "utilisation du \"vous\" pour marquer le respect ou la distance"
        },
        {
          "word": "salutation",
          "definition": "formule de début ou de fin d'un message ou d'une lettre"
        },
        {
          "word": "formalité",
          "definition": "règle ou procédure imposée dans un contexte officiel"
        },
        {
          "word": "courriel",
          "definition": "message envoyé par voie électronique (email)"
        },
        {
          "word": "ton",
          "definition": "manière de s'exprimer qui reflète une attitude ou une intention"
        }
      ],
      "anagrammes": [
        {
          "word": "registre",
          "definition": "niveau de langue utilisé selon la situation : formel ou familier"
        },
        {
          "word": "adaptation",
          "definition": "fait de modifier son comportement ou son discours selon la situation"
        },
        {
          "word": "destinataire",
          "definition": "personne à qui s'adresse un message ou une lettre"
        },
        {
          "word": "vouvoiement",
          "definition": "utilisation du \"vous\" pour marquer le respect ou la distance"
        },
        {
          "word": "salutation",
          "definition": "formule de début ou de fin d'un message ou d'une lettre"
        },
        {
          "word": "formalité",
          "definition": "règle ou procédure imposée dans un contexte officiel"
        },
        {
          "word": "courriel",
          "definition": "message envoyé par voie électronique (email)"
        },
        {
          "word": "ton",
          "definition": "manière de s'exprimer qui reflète une attitude ou une intention"
        }
      ],
      "dialogue": [],
      "construire": [
        "Salut, tu viens demain ?",
        "Bonjour Madame, je vous écris pour…",
        "Merci d'avance pour votre réponse.",
        "À bientôt / Avec mes salutations.",
        "Je me permets de vous contacter au sujet de…",
        "Bonjour Madame, je vous écris pour..."
      ],
      "validation": [
        {
          "word": "un registre",
          "definition": "niveau de langue adapté à une situation"
        },
        {
          "word": "une reformulation",
          "definition": "fait de redire autrement"
        },
        {
          "word": "une salutation",
          "definition": "formule utilisée au début ou à la fin d'un message"
        },
        {
          "word": "un ton",
          "definition": "manière générale de s'exprimer"
        },
        {
          "word": "vouvoyer / tutoyer",
          "definition": "utiliser \"vous\" ou \"tu\" selon le degré de formalité"
        },
        {
          "word": "une formule de politesse",
          "definition": "phrase standard de clôture dans un email ou courrier formel"
        },
        {
          "word": "registre",
          "definition": "niveau de langue utilisé selon la situation : formel ou familier"
        },
        {
          "word": "adaptation",
          "definition": "fait de modifier son comportement ou son discours selon la situation"
        },
        {
          "word": "destinataire",
          "definition": "personne à qui s'adresse un message ou une lettre"
        },
        {
          "word": "vouvoiement",
          "definition": "utilisation du \"vous\" pour marquer le respect ou la distance"
        },
        {
          "word": "salutation",
          "definition": "formule de début ou de fin d'un message ou d'une lettre"
        },
        {
          "word": "formalité",
          "definition": "règle ou procédure imposée dans un contexte officiel"
        },
        {
          "word": "courriel",
          "definition": "message envoyé par voie électronique (email)"
        },
        {
          "word": "ton",
          "definition": "manière de s'exprimer qui reflète une attitude ou une intention"
        }
      ],
      "vocabulary": [
        {
          "word": "un registre",
          "definition": "niveau de langue adapté à une situation"
        },
        {
          "word": "une reformulation",
          "definition": "fait de redire autrement"
        },
        {
          "word": "une salutation",
          "definition": "formule utilisée au début ou à la fin d'un message"
        },
        {
          "word": "un ton",
          "definition": "manière générale de s'exprimer"
        },
        {
          "word": "vouvoyer / tutoyer",
          "definition": "utiliser \"vous\" ou \"tu\" selon le degré de formalité"
        },
        {
          "word": "une formule de politesse",
          "definition": "phrase standard de clôture dans un email ou courrier formel"
        },
        {
          "word": "registre",
          "definition": "niveau de langue utilisé selon la situation : formel ou familier"
        },
        {
          "word": "adaptation",
          "definition": "fait de modifier son comportement ou son discours selon la situation"
        },
        {
          "word": "destinataire",
          "definition": "personne à qui s'adresse un message ou une lettre"
        },
        {
          "word": "vouvoiement",
          "definition": "utilisation du \"vous\" pour marquer le respect ou la distance"
        },
        {
          "word": "salutation",
          "definition": "formule de début ou de fin d'un message ou d'une lettre"
        },
        {
          "word": "formalité",
          "definition": "règle ou procédure imposée dans un contexte officiel"
        },
        {
          "word": "courriel",
          "definition": "message envoyé par voie électronique (email)"
        },
        {
          "word": "ton",
          "definition": "manière de s'exprimer qui reflète une attitude ou une intention"
        }
      ],
      "examples": [
        "Salut, tu viens demain ?",
        "Bonjour Madame, je vous écris pour…",
        "Merci d'avance pour votre réponse.",
        "À bientôt / Avec mes salutations.",
        "Je me permets de vous contacter au sujet de…",
        "Bonjour Madame, je vous écris pour...",
        "Salut, ça joue pour samedi ?",
        "Je vous remercie de votre réponse.",
        "Je t'envoie les infos ce soir.",
        "Veuillez agréer mes salutations distinguées.",
        "À bientôt, bises !",
        "Suite à notre entretien, je vous confirme...",
        "Mon courriel est adapté au contexte professionnel."
      ],
      "expressionsPlus": [
        {
          "text": "Salut, ça joue ?",
          "register": "familier"
        },
        {
          "text": "Bonjour Madame, Monsieur,",
          "register": "formel"
        },
        {
          "text": "Je vous écris pour…",
          "register": "formel"
        },
        {
          "text": "Merci d'avance pour votre réponse.",
          "register": "formel"
        },
        {
          "text": "À bientôt !",
          "register": "familier"
        },
        {
          "text": "Avec mes meilleures salutations.",
          "register": "formel"
        },
        {
          "text": "Tu peux me rappeler ?",
          "register": "familier"
        },
        {
          "text": "Pourriez-vous me confirmer… ?",
          "register": "formel"
        },
        {
          "text": "Je me permets de vous contacter…",
          "register": "formel"
        }
      ],
      "verbs": [
        "écrire",
        "adapter",
        "reformuler",
        "corriger",
        "nuancer",
        "lire",
        "rédiger",
        "relire"
      ],
      "conjugations": [
        "<strong>écrire</strong> : j'écris, tu écris, il/elle écrit, nous écrivons, vous écrivez, ils/elles écrivent",
        "<strong>corriger</strong> : je corrige, tu corriges, il/elle corrige, nous corrigeons, vous corrigez, ils/elles corrigent"
      ],
      "dialogues": null
    }
  }

  };
  var ec = window.EXERCISE_CONTENT = window.EXERCISE_CONTENT || { byUnit: {}, parts: {} };
  if (part && part.units) {
    Object.assign(ec.byUnit, part.units);
    ec.parts["a2"] = part;
  }
}());
