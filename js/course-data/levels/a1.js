'use strict';

window.COURSE_DATA_PARTS = window.COURSE_DATA_PARTS || {};

window.COURSE_DATA_PARTS.a1 = {
  "section": {
    "title": "A1",
    "cls": "a1",
    "idxLabel": "Parcours débutant",
    "prefix": "",
    "idxItemCls": "blue",
    "icon": "🌱",
    "description": "Premiers repères pour vivre et communiquer au quotidien en Suisse romande.",
    "entries": [
      {
        "href": "unite-0.html",
        "label": "Se repérer dans le monde francophone",
        "tone": "blue",
        "kind": "Unité",
        "badge": "0",
        "level": "A1",
        "summary": "Francophonie et repères de base",
        "iconSymbol": "🌍",
        "focus": "identifier des pays, des langues et des repères essentiels",
        "swissContext": "Situer la Suisse romande dans l'espace francophone et reconnaître quelques villes comme Genève, Lausanne ou Fribourg.",
        "themes": [
          "pays",
          "ville",
          "langue",
          "origine"
        ],
        "expressions": [
          "Je viens de…",
          "J'habite à…",
          "En Suisse, on parle…",
          "La capitale est…",
          "C'est en Europe."
        ],
        "warning": "Il faut distinguer un pays, une langue, une nationalité et une région.",
        "task": "Présentez un pays francophone, puis expliquez où se trouve la Suisse romande sur une carte simple.",
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz repères",
            "note": "retrouver pays, villes et langues"
          },
          {
            "href": "../games/apparier.html",
            "label": "Associer",
            "note": "lier pays et capitale"
          },
          {
            "href": "../games/vrai-faux.html",
            "label": "Vrai / Faux",
            "note": "vérifier les idées clés"
          }
        ],
        "assessment": [
          {
            "prompt": "La francophonie, c'est :",
            "choices": [
              "Une ville",
              "Les pays et les personnes qui utilisent le français",
              "Une organisation"
            ],
            "answer": 1
          },
          {
            "prompt": "Une capitale est :",
            "choices": [
              "Une langue",
              "Une région",
              "La ville principale d'un pays"
            ],
            "answer": 2
          },
          {
            "prompt": "Un canton est :",
            "choices": [
              "Une division administrative de la Suisse",
              "Une capitale",
              "Un continent"
            ],
            "answer": 0
          },
          {
            "prompt": "Une personne qui parle une langue est :",
            "choices": [
              "Un locuteur",
              "Un voisin",
              "Un habitant"
            ],
            "answer": 0
          },
          {
            "prompt": "Une personne bilingue parle :",
            "choices": [
              "Une langue",
              "Deux langues",
              "Quatre langues"
            ],
            "answer": 1
          },
          {
            "prompt": "Une frontière sépare :",
            "choices": [
              "Deux villes",
              "Deux pays",
              "Deux langues"
            ],
            "answer": 1
          },
          {
            "prompt": "Le romanche est :",
            "choices": [
              "Une ville",
              "Une langue nationale suisse",
              "Un canton"
            ],
            "answer": 1
          },
          {
            "prompt": "Francophone signifie :",
            "choices": [
              "Qui parle français",
              "Qui parle allemand",
              "Qui parle anglais"
            ],
            "answer": 0
          },
          {
            "prompt": "Une région est :",
            "choices": [
              "Une partie d'un pays",
              "Une capitale",
              "Une langue"
            ],
            "answer": 0
          },
          {
            "prompt": "Un habitant est :",
            "choices": [
              "Une personne qui vit dans un lieu",
              "Une langue",
              "Un pays"
            ],
            "answer": 0
          }
        ]
      },
      {
        "href": "unite-1.html",
        "label": "Se présenter et saluer",
        "tone": "purple",
        "kind": "Unité",
        "badge": "1",
        "level": "A1",
        "summary": "Parler de soi simplement",
        "iconSymbol": "👋",
        "focus": "se présenter avec des phrases courtes et polies",
        "swissContext": "Se présenter au secrétariat d'un cours, à une nouvelle voisine ou lors d'un rendez-vous à la commune.",
        "themes": [
          "nom",
          "prénom",
          "origine",
          "politesse"
        ],
        "expressions": [
          "Bonjour, je m'appelle…",
          "J'habite à…",
          "Je viens de…",
          "Enchanté(e).",
          "Vous allez bien ?"
        ],
        "warning": "En Suisse romande, le vouvoiement est souvent préféré au début d'un échange formel.",
        "task": "Préparez une mini présentation avec votre nom, votre origine, votre lieu de vie et une formule de politesse.",
        "training": [
          {
            "href": "../games/simulations-dialogues.html",
            "label": "Dialogues",
            "note": "jouer une première rencontre"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "retrouver les formules utiles"
          },
          {
            "href": "../games/copier-mots.html",
            "label": "Copier les mots",
            "note": "mémoriser les expressions"
          }
        ],
        "assessment": [
          {
            "prompt": "Dans un contexte formel, on utilise surtout…",
            "choices": [
              "tu",
              "vous",
              "toi"
            ],
            "answer": 1
          },
          {
            "prompt": "La bonne phrase est…",
            "choices": [
              "Je m'appelle Sofia.",
              "Je appelle Sofia.",
              "Je suis appelle Sofia."
            ],
            "answer": 0
          },
          {
            "prompt": "“Enchanté(e)” sert à…",
            "choices": [
              "dire au revoir",
              "se présenter poliment",
              "parler de sa ville"
            ],
            "answer": 1
          }
        ]
      },
      {
        "href": "unite-2.html",
        "label": "Parler de son travail et de ses envies",
        "tone": "blue",
        "kind": "Unité",
        "badge": "2",
        "level": "A1",
        "summary": "Travail, goûts et projets",
        "iconSymbol": "💼",
        "focus": "nommer une activité professionnelle et exprimer un souhait simple",
        "swissContext": "Parler de son métier, d'une formation ou d'un projet professionnel dans un cadre local comme l'ORP ou un cours d'insertion.",
        "themes": [
          "métier",
          "travail",
          "envie",
          "projet"
        ],
        "expressions": [
          "Je travaille dans…",
          "Je suis…",
          "J'aime…",
          "Je voudrais…",
          "Plus tard, je veux…"
        ],
        "warning": "Pour parler d'un projet, il vaut mieux rester simple: maintenant, plus tard, pourquoi.",
        "task": "Dites ce que vous faites aujourd'hui et ce que vous aimeriez faire dans les prochains mois.",
        "training": [
          {
            "href": "../games/competences-cv.html",
            "label": "Compétences",
            "note": "lier métier et savoir-faire"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz métiers",
            "note": "vérifier le vocabulaire"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "construire des phrases avec vouloir"
          }
        ],
        "assessment": [
          {
            "prompt": "Pour exprimer un souhait, on utilise souvent…",
            "choices": [
              "vouloir",
              "être",
              "avoir"
            ],
            "answer": 0
          },
          {
            "prompt": "“Je voudrais travailler…” parle de…",
            "choices": [
              "passé",
              "souhait",
              "interdiction"
            ],
            "answer": 1
          },
          {
            "prompt": "À temps partiel signifie…",
            "choices": [
              "moins qu'un plein temps",
              "la nuit seulement",
              "sans salaire"
            ],
            "answer": 0
          }
        ]
      },
      {
        "href": "unite-3.html",
        "label": "Décrire sa ville et se déplacer",
        "tone": "purple",
        "kind": "Unité",
        "badge": "3",
        "level": "A1",
        "summary": "Ville, trajets et orientation",
        "iconSymbol": "🗺️",
        "focus": "décrire un lieu et demander un chemin",
        "swissContext": "Donner un trajet entre la gare, un arrêt de bus, la commune et un quartier en Suisse romande.",
        "themes": [
          "gare",
          "arrêt",
          "quartier",
          "trajet"
        ],
        "expressions": [
          "Où est la gare ?",
          "C'est à droite.",
          "Continuez tout droit.",
          "Je prends le bus.",
          "Je descends ici."
        ],
        "warning": "Un itinéraire devient compréhensible si les étapes sont données dans l'ordre.",
        "task": "Expliquez comment aller de chez vous à un lieu utile en utilisant au moins trois indications de direction.",
        "training": [
          {
            "href": "../games/orientation.html",
            "label": "Orientation",
            "note": "se repérer dans l'espace"
          },
          {
            "href": "../games/cherche-clique.html",
            "label": "Cherche-clique",
            "note": "retrouver les lieux utiles"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz trajets",
            "note": "vocabulaire de déplacement"
          }
        ],
        "assessment": [
          {
            "prompt": "Pour donner un ordre simple, on peut dire…",
            "choices": [
              "Tournez à gauche.",
              "Tu tourne gauche.",
              "Vous tourner gauche."
            ],
            "answer": 0
          },
          {
            "prompt": "La gare est liée surtout…",
            "choices": [
              "aux trains",
              "aux médecins",
              "aux écoles"
            ],
            "answer": 0
          },
          {
            "prompt": "“Tout droit” indique…",
            "choices": [
              "un prix",
              "une direction",
              "un horaire"
            ],
            "answer": 1
          }
        ]
      },
      {
        "href": "unite-4.html",
        "label": "Vivre en société, exprimer ses opinions",
        "tone": "blue",
        "kind": "Unité",
        "badge": "4",
        "level": "A1",
        "summary": "Vie collective et avis simples",
        "iconSymbol": "🧭",
        "focus": "exprimer un avis simple et comprendre des règles de vie",
        "swissContext": "Réagir à une règle dans l'immeuble, à la commune ou dans une classe de français en Suisse romande.",
        "themes": [
          "règle",
          "avis",
          "droit",
          "devoir"
        ],
        "expressions": [
          "À mon avis…",
          "Je pense que…",
          "Je suis d'accord.",
          "Je ne suis pas d'accord.",
          "C'est important."
        ],
        "warning": "À ce niveau, une opinion claire avec une raison simple est plus efficace qu'un long discours.",
        "task": "Donnez votre avis sur une règle de la vie quotidienne et ajoutez une courte justification.",
        "training": [
          {
            "href": "../games/vrai-faux.html",
            "label": "Vrai / Faux",
            "note": "distinguer règles et opinions"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz société",
            "note": "mots de la vie collective"
          },
          {
            "href": "../games/simulations-dialogues.html",
            "label": "Dialogues",
            "note": "exprimer son avis calmement"
          }
        ],
        "assessment": [
          {
            "prompt": "Pour donner son opinion, on peut dire…",
            "choices": [
              "À mon avis…",
              "J'ai faim avis…",
              "Opinion moi…"
            ],
            "answer": 0
          },
          {
            "prompt": "Un devoir correspond à…",
            "choices": [
              "ce qu'on aime",
              "ce qu'on doit faire",
              "ce qu'on achète"
            ],
            "answer": 1
          },
          {
            "prompt": "“Je ne suis pas d'accord” sert à…",
            "choices": [
              "dire son opposition",
              "demander son chemin",
              "acheter un billet"
            ],
            "answer": 0
          }
        ]
      },
      {
        "href": "unite-5.html",
        "label": "Organiser son quotidien et ses loisirs",
        "tone": "purple",
        "kind": "Unité",
        "badge": "5",
        "level": "A1",
        "summary": "Routine, temps libre, rythme",
        "iconSymbol": "🕒",
        "focus": "parler de sa journée et de ses habitudes",
        "swissContext": "Décrire une semaine entre travail, transports, rendez-vous et loisirs dans une ville romande.",
        "themes": [
          "routine",
          "horaire",
          "rendez-vous",
          "loisir"
        ],
        "expressions": [
          "Je me lève à…",
          "Le matin, je…",
          "Ensuite, je…",
          "Le soir, je…",
          "Le week-end, je…"
        ],
        "warning": "Quand vous parlez de votre journée, gardez des repères de temps clairs: matin, après-midi, soir.",
        "task": "Présentez votre journée type avec trois moments obligatoires et une activité de loisir.",
        "training": [
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "verbes du quotidien"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz routine",
            "note": "horaires et habitudes"
          },
          {
            "href": "../games/cliquer.html",
            "label": "Cliquer",
            "note": "repérer les bons moments de la journée"
          }
        ],
        "assessment": [
          {
            "prompt": "“Je me lève” est…",
            "choices": [
              "un verbe pronominal",
              "un nom",
              "une préposition"
            ],
            "answer": 0
          },
          {
            "prompt": "Le mot “tôt” parle de…",
            "choices": [
              "l'heure",
              "la couleur",
              "le transport"
            ],
            "answer": 0
          },
          {
            "prompt": "Une routine est…",
            "choices": [
              "une habitude répétée",
              "un voyage court",
              "une règle de droit"
            ],
            "answer": 0
          }
        ]
      },
      {
        "href": "unite-6.html",
        "label": "Faire ses achats et négocier",
        "tone": "blue",
        "kind": "Unité",
        "badge": "6",
        "level": "A1",
        "summary": "Achats, prix et demandes",
        "iconSymbol": "🛒",
        "focus": "demander un prix, une quantité ou une information en magasin",
        "swissContext": "Faire des achats à la Migros, à la Coop, au marché ou dans un petit commerce de quartier.",
        "themes": [
          "prix",
          "quantité",
          "magasin",
          "paiement"
        ],
        "expressions": [
          "C'est combien ?",
          "Je voudrais…",
          "Je prends…",
          "Vous acceptez la carte ?",
          "Avez-vous une autre taille ?"
        ],
        "warning": "Pour acheter clairement, il faut préciser le produit, la quantité et la question posée.",
        "task": "Jouez une petite scène d'achat avec un produit, un prix et une demande d'information.",
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz achats",
            "note": "prix, tailles et quantités"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "dialogue en magasin"
          },
          {
            "href": "../games/apparier.html",
            "label": "Associer",
            "note": "lier produit et quantité"
          }
        ],
        "assessment": [
          {
            "prompt": "Après une quantité précise, on dit souvent…",
            "choices": [
              "de",
              "du",
              "des"
            ],
            "answer": 0
          },
          {
            "prompt": "La caisse est…",
            "choices": [
              "un moyen de transport",
              "l'endroit où on paie",
              "une boisson"
            ],
            "answer": 1
          },
          {
            "prompt": "“Je voudrais un kilo de pommes” sert à…",
            "choices": [
              "décrire une ville",
              "acheter un produit",
              "parler de son travail"
            ],
            "answer": 1
          }
        ]
      },
      {
        "href": "unite-7.html",
        "label": "Découvrir les cultures et les cuisines",
        "tone": "purple",
        "kind": "Unité",
        "badge": "7",
        "level": "A1",
        "summary": "Cuisine, goûts et cultures",
        "iconSymbol": "🍲",
        "focus": "présenter un plat, un goût ou une habitude culturelle simple",
        "swissContext": "Parler d'un repas partagé, d'un marché local ou d'une spécialité découverte en Suisse romande.",
        "themes": [
          "plat",
          "ingrédient",
          "goût",
          "tradition"
        ],
        "expressions": [
          "J'aime ce plat.",
          "Il y a…",
          "C'est sucré.",
          "On mange ça pour…",
          "Voici la recette."
        ],
        "warning": "Pour décrire un plat, il est utile de parler des ingrédients avant de parler de son avis.",
        "task": "Présentez un plat que vous aimez avec ses ingrédients principaux et dites quand vous le partagez.",
        "training": [
          {
            "href": "../games/quiz.html",
            "label": "Quiz cuisine",
            "note": "ingrédients et goûts"
          },
          {
            "href": "../games/mots-meles.html",
            "label": "Mots mêlés",
            "note": "vocabulaire culinaire"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "étapes d'une recette simple"
          }
        ],
        "assessment": [
          {
            "prompt": "Une recette contient surtout…",
            "choices": [
              "des ingrédients et des étapes",
              "des adresses",
              "des horaires de train"
            ],
            "answer": 0
          },
          {
            "prompt": "“Épicé” décrit…",
            "choices": [
              "un prix",
              "un goût",
              "un lieu"
            ],
            "answer": 1
          },
          {
            "prompt": "L'impératif sert ici à…",
            "choices": [
              "donner des consignes",
              "raconter le passé",
              "poser une identité"
            ],
            "answer": 0
          }
        ]
      },
      {
        "href": "unite-8.html",
        "label": "Préparer un voyage, raconter ses expériences",
        "tone": "blue",
        "kind": "Unité",
        "badge": "8",
        "level": "A1",
        "summary": "Voyager et raconter simplement",
        "iconSymbol": "✈️",
        "focus": "préparer un déplacement et raconter une expérience passée courte",
        "swissContext": "Organiser une sortie en train en Suisse et raconter ensuite ce qui s'est passé simplement.",
        "themes": [
          "voyage",
          "billet",
          "séjour",
          "expérience"
        ],
        "expressions": [
          "Je pars à…",
          "J'ai réservé…",
          "Je suis allé(e) à…",
          "C'était…",
          "J'ai aimé…"
        ],
        "warning": "Quand vous racontez une expérience, choisissez quelques actions clés au lieu de tout dire.",
        "task": "Expliquez un petit voyage ou une sortie passée avec le lieu, le transport et un souvenir important.",
        "training": [
          {
            "href": "../games/histoires-vaud.html",
            "label": "Histoires Vaud",
            "note": "lire et raconter une sortie"
          },
          {
            "href": "../games/quiz.html",
            "label": "Quiz voyage",
            "note": "billets, trajet, séjour"
          },
          {
            "href": "../games/completer.html",
            "label": "Compléter",
            "note": "passé composé simple"
          }
        ],
        "assessment": [
          {
            "prompt": "Le passé composé sert ici à…",
            "choices": [
              "raconter une action passée",
              "donner une adresse",
              "faire une liste de courses"
            ],
            "answer": 0
          },
          {
            "prompt": "Un billet correspond à…",
            "choices": [
              "un titre de transport",
              "une recette",
              "une règle de commune"
            ],
            "answer": 0
          },
          {
            "prompt": "Avec être, on accorde souvent le participe passé avec…",
            "choices": [
              "le sujet",
              "le magasin",
              "la quantité"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  "units": {
    "unite-0": {
      "swissContextHtml": "<p class=\"unite-info-text\">La Suisse possède quatre langues nationales : le français, l'allemand, l'italien et le romanche.</p><p class=\"unite-info-text\">La région où l'on parle principalement français s'appelle la <strong>Suisse romande</strong>. Elle comprend notamment les cantons de Vaud, Genève, Neuchâtel et Jura.</p><p class=\"unite-info-text\">En Suisse romande, le français est utilisé dans la vie quotidienne, à l'école, au travail et dans les administrations.</p><p class=\"unite-info-text\">La Suisse romande fait partie de la <strong>francophonie</strong>, c'est-à-dire l'ensemble des pays et des régions où le français est utilisé.</p>",
      "objectives": [
        "💬 <strong>Communication</strong> — Dire d'où on vient et où on habite (<em>Je viens de…, J'habite à…</em>)",
        "📐 <strong>Grammaire</strong> — Utiliser les prépositions avec les pays (<em>en, au, aux, à</em>)",
        "🔄 <strong>Conjugaison</strong> — Conjuguer <em>être</em> et <em>parler</em> au présent",
        "📖 <strong>Vocabulaire</strong> — Comprendre les mots essentiels de la francophonie (<em>pays, capitale, canton, francophone…</em>)",
        "🔊 <strong>Phonétique</strong> — Prononcer les noms de pays et de villes francophones"
      ],
      "vocabulary": [
        {
          "word": "la francophonie",
          "definition": "ensemble des pays et des personnes qui utilisent le français"
        },
        {
          "word": "un pays",
          "definition": "territoire organisé comme la Suisse, la Belgique ou le Canada"
        },
        {
          "word": "une ville",
          "definition": "agglomération où vivent des habitants"
        },
        {
          "word": "une capitale",
          "definition": "ville principale d'un pays"
        },
        {
          "word": "une langue officielle",
          "definition": "langue utilisée dans les institutions et l'administration"
        },
        {
          "word": "la Suisse romande",
          "definition": "région de Suisse où le français est la langue principale"
        },
        {
          "word": "un canton",
          "definition": "division administrative de la Suisse"
        },
        {
          "word": "un locuteur",
          "definition": "personne qui parle une langue"
        },
        {
          "word": "bilingue",
          "definition": "qui utilise deux langues"
        },
        {
          "word": "une région",
          "definition": "partie d'un pays ou d'un territoire"
        },
        {
          "word": "continent",
          "definition": "grande étendue de terre : Europe, Afrique, Amériques, Asie, Océanie"
        },
        {
          "word": "frontière",
          "definition": "limite qui sépare deux pays"
        },
        {
          "word": "langue",
          "definition": "système de communication parlé ou écrit"
        },
        {
          "word": "nationalité",
          "definition": "appartenance à un pays (ex. suisse, français)"
        },
        {
          "word": "habitant",
          "definition": "personne qui vit dans un lieu"
        },
        {
          "word": "francophone",
          "definition": "qui parle ou utilise le français"
        },
        {
          "word": "romanche",
          "definition": "langue nationale parlée dans les Grisons en Suisse"
        },
        {
          "word": "alémanique",
          "definition": "qui concerne la partie germanophone de la Suisse"
        },
        {
          "word": "plurilingue",
          "definition": "qui utilise plusieurs langues"
        },
        {
          "word": "officiel",
          "definition": "reconnu par les institutions d'un pays ou d'une région"
        }
      ],
      "examples": [
        "La Suisse est en Europe.",
        "À Genève, on parle français.",
        "Berne est la capitale de la Suisse.",
        "Le Canada est un pays francophone en partie.",
        "Je vis en Suisse romande.",
        "Elle habite à Lausanne.",
        "Nous allons au Maroc.",
        "Ils voyagent aux États-Unis.",
        "La Suisse a quatre langues nationales.",
        "Fribourg est une ville bilingue.",
        "Je parle français et portugais.",
        "Genève se trouve au bord du lac Léman.",
        "La Belgique est aussi un pays francophone.",
        "Vaud est un canton de Suisse romande.",
        "Il vient d'Afrique francophone.",
        "La France est voisine de la Suisse.",
        "Neuchâtel est une ville romande.",
        "On parle romanche dans les Grisons."
      ],
      "grammarTitle": "Les prépositions avec les pays",
      "grammarRules": [
        "<em>en</em> + pays féminin : en Suisse, en Belgique, en France",
        "<em>au</em> + pays masculin : au Canada, au Maroc, au Portugal",
        "<em>aux</em> + pays pluriel : aux États-Unis, aux Pays-Bas",
        "<em>à</em> + ville : à Lausanne, à Genève, à Paris",
        "<em>de / du / des</em> pour l'origine : de Suisse, du Canada, des États-Unis"
      ],
      "grammarExtra": "<div class=\"gram-country-table\"><div class=\"gram-country-col\"><div class=\"gram-country-head fem\">🔵 Féminin — <em>en</em></div><ul><li>en Suisse</li><li>en Belgique</li><li>en France</li><li>en Espagne</li><li>en Italie</li><li>en Allemagne</li><li>en Chine</li><li>en Tunisie</li></ul></div><div class=\"gram-country-col\"><div class=\"gram-country-head masc\">🟠 Masculin — <em>au</em></div><ul><li>au Canada</li><li>au Maroc</li><li>au Portugal</li><li>au Japon</li><li>au Brésil</li><li>au Mexique</li><li>au Sénégal</li><li>au Cameroun</li></ul></div><div class=\"gram-country-col\"><div class=\"gram-country-head plur\">🟢 Pluriel — <em>aux</em></div><ul><li>aux États-Unis</li><li>aux Pays-Bas</li><li>aux Philippines</li></ul></div></div>",
      "grammarError": "<span class=\"gram-wrong\">Je vais au Suisse.</span> → <span class=\"gram-right\">Je vais en Suisse.</span> — La Suisse est féminin, on utilise <em>en</em>, pas <em>au</em>.",
      "expressionsPlus": [
        {
          "text": "Je viens de…",
          "register": "courant"
        },
        {
          "text": "J'habite à…",
          "register": "courant"
        },
        {
          "text": "En Suisse, on parle…",
          "register": "courant"
        },
        {
          "text": "La capitale est…",
          "register": "courant"
        },
        {
          "text": "C'est en Europe.",
          "register": "courant"
        },
        {
          "text": "Il y a quatre langues nationales.",
          "register": "courant"
        },
        {
          "text": "La Suisse romande correspond à…",
          "register": "formel"
        },
        {
          "text": "On y parle français.",
          "register": "courant"
        },
        {
          "text": "Ce pays est situé…",
          "register": "formel"
        }
      ],
      "textAuth": {
        "source": "Panneau d'information — Genève Tourisme",
        "text": "Genève est une ville internationale située en Suisse romande, au bord du lac Léman. C'est le siège de nombreuses organisations internationales comme la Croix-Rouge et l'ONU. La langue officielle est le français. La ville accueille chaque année des milliers de visiteurs et de travailleurs du monde entier.",
        "questions": [
          {
            "question": "Dans quelle partie de la Suisse se trouve Genève ?",
            "answer": "En Suisse romande."
          },
          {
            "question": "Quelle est la langue officielle à Genève ?",
            "answer": "Le français."
          },
          {
            "question": "Citez une organisation internationale présente à Genève.",
            "answer": "La Croix-Rouge ou l'ONU."
          }
        ]
      },
      "finalTest": [
        {
          "prompt": "💬 Communication — Comment dit-on où l'on habite ?",
          "choices": ["J'habite à…", "Je suis à…", "Je reste à…"],
          "answer": 0
        },
        {
          "prompt": "📐 Grammaire — Quelle préposition utilise-t-on avec un pays féminin comme la Suisse ?",
          "choices": ["en", "au", "à"],
          "answer": 0
        },
        {
          "prompt": "🔄 Conjugaison — Quelle est la forme correcte de « être » avec « je » ?",
          "choices": ["je suis", "je es", "je est"],
          "answer": 0
        },
        {
          "prompt": "📖 Vocabulaire — Que signifie « francophone » ?",
          "choices": ["qui parle ou utilise le français", "qui vit en France", "qui apprend le français"],
          "answer": 0
        },
        {
          "prompt": "🔊 Phonétique — Dans quel mot entend-on le son [ɔ̃] comme dans « bon » ?",
          "choices": ["francophone", "Suisse", "pays"],
          "answer": 0
        }
      ]
    },
    "unite-1": {
      "objectives": [
        "se présenter avec des informations simples",
        "saluer selon le contexte",
        "poser des questions courtes sur une personne"
      ],
      "vocabulary": [
        {
          "word": "le prénom",
          "definition": "premier nom d'une personne"
        },
        {
          "word": "le nom de famille",
          "definition": "nom transmis dans la famille"
        },
        {
          "word": "l'origine",
          "definition": "pays ou ville d'où vient une personne"
        },
        {
          "word": "la politesse",
          "definition": "manière respectueuse de parler aux autres"
        },
        {
          "word": "le vouvoiement",
          "definition": "utiliser \"vous\" pour marquer le respect"
        },
        {
          "word": "une formule de salutation",
          "definition": "phrase standard pour commencer un échange"
        },
        {
          "word": "bonjour",
          "definition": "formule de salutation utilisée pendant la journée"
        },
        {
          "word": "bonsoir",
          "definition": "formule de salutation utilisée le soir"
        },
        {
          "word": "prénom",
          "definition": "premier nom d'une personne, ex. Sofia ou Marco"
        },
        {
          "word": "adresse",
          "definition": "lieu où habite une personne, avec rue et numéro"
        },
        {
          "word": "enchanté",
          "definition": "expression polie pour dire qu'on est content de rencontrer quelqu'un"
        },
        {
          "word": "tutoiement",
          "definition": "fait d'utiliser \"tu\" pour parler à quelqu'un"
        },
        {
          "word": "formel",
          "definition": "registre poli et officiel, utilisé avec des inconnus ou en milieu professionnel"
        },
        {
          "word": "familier",
          "definition": "registre détendu, utilisé entre amis ou proches"
        },
        {
          "word": "formule",
          "definition": "expression toute faite utilisée dans une situation précise"
        },
        {
          "word": "rencontre",
          "definition": "moment où l'on voit et parle à quelqu'un pour la première fois"
        }
      ],
      "examples": [
        "Bonjour, je m'appelle Nadia.",
        "J'habite à Lausanne.",
        "Je viens du Portugal.",
        "Comment vous appelez-vous ?",
        "Enchanté(e) de vous rencontrer.",
        "Bonsoir, comment allez-vous ?",
        "Je suis originaire du Sénégal.",
        "Mon prénom est Ayşe.",
        "J'habite à Renens depuis deux ans.",
        "Vous voulez bien vous asseoir ?",
        "Nous nous appelons par notre prénom ici.",
        "Elle est enchantée de vous connaître.",
        "Il habite dans le quartier de la Pontaise.",
        "On peut se tutoyer si vous voulez.",
        "Comment vous appelez-vous, s'il vous plaît ?"
      ],
      "grammarTitle": "Être, s'appeler et les questions simples",
      "grammarRules": [
        "<em>je suis</em>, <em>tu es</em>, <em>il/elle est</em>",
        "Question simple : <em>Comment vous appelez-vous ?</em>",
        "Pour se présenter : nom, origine, lieu de vie",
        "Attention à l'accord : <em>enchanté</em> (homme) / <em>enchantée</em> (femme)"
      ],
      "grammarError": "<span class=\"gram-wrong\">Je m'appelle de Sofia.</span> → <span class=\"gram-right\">Je m'appelle Sofia.</span> — Le verbe <em>s'appeler</em> ne prend pas de préposition.",
      "expressionsPlus": [
        {
          "text": "Bonjour, je m'appelle…",
          "register": "courant"
        },
        {
          "text": "J'habite à…",
          "register": "courant"
        },
        {
          "text": "Je viens de…",
          "register": "courant"
        },
        {
          "text": "Enchanté(e).",
          "register": "formel"
        },
        {
          "text": "Vous allez bien ?",
          "register": "formel"
        },
        {
          "text": "Salut, ça va ?",
          "register": "familier"
        },
        {
          "text": "Comment vous appelez-vous ?",
          "register": "formel"
        },
        {
          "text": "Tu t'appelles comment ?",
          "register": "familier"
        },
        {
          "text": "Je suis originaire de…",
          "register": "formel"
        }
      ],
      "textAuth": {
        "source": "Formulaire d'inscription — Cours de français, commune de Renens",
        "text": "Prénom : Sofia. Nom : Almeida. Pays d'origine : Portugal. Langue maternelle : portugais. Adresse en Suisse : rue de Lausanne 12, Renens. Date d'arrivée en Suisse : 14 mars. Objectif : améliorer le français pour trouver un emploi.",
        "questions": [
          {
            "question": "D'où vient Sofia ?",
            "answer": "Du Portugal."
          },
          {
            "question": "Pourquoi veut-elle améliorer son français ?",
            "answer": "Pour trouver un emploi."
          },
          {
            "question": "Dans quelle ville habite-t-elle ?",
            "answer": "À Renens."
          }
        ]
      }
    },
    "unite-2": {
      "objectives": [
        "nommer un métier ou une activité",
        "exprimer un goût ou un projet simple",
        "décrire une envie professionnelle"
      ],
      "vocabulary": [
        {
          "word": "un métier",
          "definition": "travail exercé de façon régulière"
        },
        {
          "word": "une formation",
          "definition": "apprentissage pour obtenir des compétences"
        },
        {
          "word": "un projet",
          "definition": "objectif que l'on veut réaliser"
        },
        {
          "word": "le temps partiel",
          "definition": "travail inférieur à un plein temps"
        },
        {
          "word": "l'ORP",
          "definition": "Office Régional de Placement, aide à trouver un emploi en Suisse"
        },
        {
          "word": "un secteur",
          "definition": "domaine d'activité économique (santé, construction, etc.)"
        },
        {
          "word": "métier",
          "definition": "activité professionnelle régulière"
        },
        {
          "word": "emploi",
          "definition": "travail rémunéré dans une entreprise ou organisation"
        },
        {
          "word": "formation",
          "definition": "apprentissage pour acquérir des compétences professionnelles"
        },
        {
          "word": "salaire",
          "definition": "argent reçu chaque mois en échange d'un travail"
        },
        {
          "word": "temps-partiel",
          "definition": "travail moins de quarante heures par semaine"
        },
        {
          "word": "chômage",
          "definition": "situation d'une personne sans emploi qui en cherche un"
        },
        {
          "word": "apprentissage",
          "definition": "formation professionnelle qui mêle travail et cours"
        },
        {
          "word": "employeur",
          "definition": "personne ou entreprise qui engage des travailleurs"
        },
        {
          "word": "collègue",
          "definition": "personne qui travaille au même endroit que soi"
        },
        {
          "word": "entretien",
          "definition": "réunion entre un candidat et un employeur pour un poste"
        }
      ],
      "examples": [
        "Je travaille dans la restauration.",
        "J'aime aider les autres.",
        "Je voudrais changer de métier.",
        "Je cherche une formation courte.",
        "Plus tard, je veux travailler avec des enfants.",
        "Je suis cuisinière dans un restaurant.",
        "Elle cherche un emploi à temps partiel.",
        "Il fait une formation d'aide-soignant.",
        "Je voudrais travailler dans une crèche.",
        "Mon employeur s'appelle Monsieur Dupont.",
        "Je parle avec mes collègues en français.",
        "Elle a un entretien demain matin.",
        "Nous voulons apprendre un nouveau métier.",
        "Plus tard, je veux ouvrir un salon.",
        "L'ORP m'aide à trouver un emploi."
      ],
      "grammarTitle": "Aimer, vouloir et parler de son activité",
      "grammarRules": [
        "<em>j'aime</em> + nom ou infinitif",
        "<em>je voudrais</em> + infinitif pour exprimer un souhait",
        "Phrase simple : sujet + verbe + complément",
        "<em>je travaille dans</em> + domaine / <em>je suis</em> + métier"
      ],
      "grammarError": "<span class=\"gram-wrong\">Je voudrais être un cuisinier.</span> → <span class=\"gram-right\">Je voudrais être cuisinier.</span> — En français, on n'utilise pas l'article avec les métiers après <em>être</em>.",
      "expressionsPlus": [
        {
          "text": "Je travaille dans…",
          "register": "courant"
        },
        {
          "text": "Je suis cuisinier / aide-soignante…",
          "register": "courant"
        },
        {
          "text": "J'aime travailler avec…",
          "register": "courant"
        },
        {
          "text": "Je voudrais changer de métier.",
          "register": "courant"
        },
        {
          "text": "Plus tard, je veux…",
          "register": "courant"
        },
        {
          "text": "Je cherche une formation dans…",
          "register": "courant"
        },
        {
          "text": "J'ai de l'expérience en…",
          "register": "formel"
        },
        {
          "text": "Mon objectif professionnel est de…",
          "register": "formel"
        },
        {
          "text": "Je suis en recherche d'emploi.",
          "register": "formel"
        }
      ],
      "textAuth": {
        "source": "Annonce — Offre d'emploi, site cantonal vaudois",
        "text": "Nous recherchons un(e) aide de cuisine à temps partiel (60%). Poste à Lausanne. Expérience souhaitée mais pas obligatoire. Travail du lundi au vendredi, 10h–15h. Bonne connaissance du français indispensable. Intégration dans une équipe sympathique. Candidature à envoyer par email.",
        "questions": [
          {
            "question": "Quel est le pourcentage de travail proposé ?",
            "answer": "60%, c'est un temps partiel."
          },
          {
            "question": "Quels horaires sont mentionnés ?",
            "answer": "Du lundi au vendredi, de 10h à 15h."
          },
          {
            "question": "Quelle condition linguistique est exigée ?",
            "answer": "Bonne connaissance du français."
          }
        ]
      }
    },
    "unite-3": {
      "objectives": [
        "nommer les lieux utiles d'une ville",
        "demander un chemin",
        "comprendre un trajet simple"
      ],
      "vocabulary": [
        {
          "word": "la gare",
          "definition": "lieu où arrivent et partent les trains"
        },
        {
          "word": "un arrêt",
          "definition": "endroit où s'arrête un bus ou un tram"
        },
        {
          "word": "un quartier",
          "definition": "partie d'une ville"
        },
        {
          "word": "un trajet",
          "definition": "chemin entre un point de départ et un point d'arrivée"
        },
        {
          "word": "tout droit",
          "definition": "sans tourner, dans la même direction"
        },
        {
          "word": "à droite / à gauche",
          "definition": "indications de direction pour se repérer"
        },
        {
          "word": "gare",
          "definition": "lieu où s'arrêtent les trains"
        },
        {
          "word": "arrêt",
          "definition": "point où s'arrête un bus ou un tram"
        },
        {
          "word": "direction",
          "definition": "sens dans lequel on va : gauche, droite, tout droit"
        },
        {
          "word": "carrefour",
          "definition": "croisement de plusieurs rues"
        },
        {
          "word": "quartier",
          "definition": "partie d'une ville avec ses habitants et ses commerces"
        },
        {
          "word": "transports",
          "definition": "moyens de se déplacer : bus, train, vélo"
        },
        {
          "word": "billet",
          "definition": "titre de transport acheté pour voyager"
        },
        {
          "word": "correspondance",
          "definition": "changement de bus ou de train en cours de trajet"
        },
        {
          "word": "piéton",
          "definition": "personne qui se déplace à pied"
        },
        {
          "word": "itinéraire",
          "definition": "chemin prévu pour aller d'un lieu à un autre"
        }
      ],
      "examples": [
        "La gare est à gauche.",
        "Prenez le bus 6.",
        "Continuez tout droit.",
        "Je descends au prochain arrêt.",
        "C'est en face de la poste.",
        "Tournez à gauche après le carrefour.",
        "Le bus numéro sept s'arrête ici.",
        "Je prends le métro à la gare de Lausanne.",
        "Continue tout droit jusqu'à la poste.",
        "L'arrêt de tram est devant la commune.",
        "Traversez le pont et tournez à droite.",
        "C'est à dix minutes à pied.",
        "Prenez la correspondance à Renens.",
        "Le quartier de la Sallaz est proche."
      ],
      "grammarTitle": "L'impératif pour donner une direction",
      "grammarRules": [
        "<em>Tournez à droite.</em> / <em>Allez tout droit.</em>",
        "<em>Prenez</em> le bus, le tram, le train.",
        "On donne les étapes dans l'ordre : départ, trajet, arrivée",
        "Pour indiquer la distance : <em>c'est à 5 minutes à pied</em>"
      ],
      "grammarError": "<span class=\"gram-wrong\">Vous tournez à droite, après vous allez tout droit.</span> → <span class=\"gram-right\">Tournez à droite, puis allez tout droit.</span> — À l'impératif, on n'utilise pas le sujet.",
      "expressionsPlus": [
        {
          "text": "Où est la gare, s'il vous plaît ?",
          "register": "courant"
        },
        {
          "text": "C'est à droite.",
          "register": "courant"
        },
        {
          "text": "Continuez tout droit.",
          "register": "courant"
        },
        {
          "text": "Je prends le bus.",
          "register": "courant"
        },
        {
          "text": "Je descends ici.",
          "register": "courant"
        },
        {
          "text": "C'est loin d'ici ?",
          "register": "courant"
        },
        {
          "text": "Pourriez-vous m'indiquer le chemin ?",
          "register": "formel"
        },
        {
          "text": "C'est au bout de la rue.",
          "register": "courant"
        },
        {
          "text": "Prenez la première à gauche.",
          "register": "courant"
        }
      ],
      "textAuth": {
        "source": "Plan de quartier — Ville de Lausanne",
        "text": "Pour aller de la gare de Lausanne à la Place de la Palud : sortez de la gare par la sortie principale. Prenez le métro M2 en direction de Ouchy, descendez à Bessières. Tournez à gauche et continuez tout droit. La Place de la Palud est à deux minutes à pied. Durée totale : environ 8 minutes.",
        "questions": [
          {
            "question": "Quel moyen de transport est conseillé ?",
            "answer": "Le métro M2."
          },
          {
            "question": "À quel arrêt faut-il descendre ?",
            "answer": "À Bessières."
          },
          {
            "question": "Combien de temps dure le trajet au total ?",
            "answer": "Environ 8 minutes."
          }
        ]
      }
    },
    "unite-4": {
      "objectives": [
        "exprimer un avis simple",
        "parler de règles de vie",
        "comprendre droits et devoirs du quotidien"
      ],
      "vocabulary": [
        {
          "word": "une règle",
          "definition": "consigne à respecter dans un lieu ou un groupe"
        },
        {
          "word": "un droit",
          "definition": "ce qu'une personne peut faire légalement"
        },
        {
          "word": "un devoir",
          "definition": "ce qu'une personne doit faire"
        },
        {
          "word": "un avis",
          "definition": "opinion personnelle sur un sujet"
        },
        {
          "word": "le règlement",
          "definition": "ensemble des règles d'un lieu comme un immeuble ou une école"
        },
        {
          "word": "un voisin / une voisine",
          "definition": "personne qui habite près de chez vous"
        },
        {
          "word": "règle",
          "definition": "ce qu'on doit faire ou ne pas faire dans un lieu ou une situation"
        },
        {
          "word": "droit",
          "definition": "ce qu'on est autorisé à faire selon la loi"
        },
        {
          "word": "devoir",
          "definition": "obligation morale ou légale"
        },
        {
          "word": "avis",
          "definition": "opinion personnelle sur un sujet"
        },
        {
          "word": "opinion",
          "definition": "point de vue que l'on défend"
        },
        {
          "word": "société",
          "definition": "groupe organisé de personnes vivant ensemble"
        },
        {
          "word": "citoyen",
          "definition": "membre reconnu d'un pays ou d'une commune"
        },
        {
          "word": "responsabilité",
          "definition": "obligation d'assumer ses actes et leurs conséquences"
        },
        {
          "word": "accord",
          "definition": "situation où deux personnes pensent la même chose"
        },
        {
          "word": "interdit",
          "definition": "ce qui n'est pas permis"
        }
      ],
      "examples": [
        "À mon avis, cette règle est utile.",
        "Je suis d'accord avec cette idée.",
        "Il faut respecter les voisins.",
        "On doit payer ses impôts.",
        "Je ne suis pas d'accord, parce que…",
        "À mon avis, c'est une bonne règle.",
        "Je pense que c'est important de voter.",
        "Elle n'est pas d'accord avec cette loi.",
        "On a le droit de donner son opinion.",
        "En Suisse, on vote régulièrement.",
        "Le bruit est interdit après vingt-deux heures.",
        "Je dois respecter les règles de l'immeuble.",
        "Il pense que la solidarité est importante.",
        "Nous sommes responsables de nos actes.",
        "Cette règle protège les voisins."
      ],
      "grammarTitle": "Exprimer l'opinion",
      "grammarRules": [
        "Formules utiles : <em>je pense que</em>, <em>à mon avis</em>",
        "Accord ou désaccord : <em>je suis d'accord</em> / <em>je ne suis pas d'accord</em>",
        "Une opinion peut être suivie d'une raison simple",
        "<em>Il faut</em> + infinitif pour exprimer une obligation"
      ],
      "grammarError": "<span class=\"gram-wrong\">Je suis d'accord avec ça règle.</span> → <span class=\"gram-right\">Je suis d'accord avec cette règle.</span> — On utilise l'adjectif démonstratif <em>cette</em>, pas <em>ça</em>.",
      "expressionsPlus": [
        {
          "text": "À mon avis…",
          "register": "courant"
        },
        {
          "text": "Je pense que…",
          "register": "courant"
        },
        {
          "text": "Je suis d'accord.",
          "register": "courant"
        },
        {
          "text": "Je ne suis pas d'accord.",
          "register": "courant"
        },
        {
          "text": "C'est important.",
          "register": "courant"
        },
        {
          "text": "Il faut respecter…",
          "register": "courant"
        },
        {
          "text": "Selon moi, cette règle est…",
          "register": "formel"
        },
        {
          "text": "On n'a pas le droit de…",
          "register": "courant"
        },
        {
          "text": "Je comprends cette règle, mais…",
          "register": "courant"
        }
      ],
      "textAuth": {
        "source": "Règlement d'immeuble — Régie Miremont, Lausanne",
        "text": "Chers locataires, nous vous rappelons les règles principales de l'immeuble : le silence est obligatoire après 22h et le dimanche toute la journée. Les poubelles doivent être déposées dans le local prévu à cet effet. Il est interdit de fumer dans les parties communes. Le respect de ces règles garantit une bonne entente entre voisins. Merci de votre collaboration.",
        "questions": [
          {
            "question": "Jusqu'à quelle heure peut-on faire du bruit ?",
            "answer": "Jusqu'à 22h."
          },
          {
            "question": "Où faut-il mettre les poubelles ?",
            "answer": "Dans le local prévu à cet effet."
          },
          {
            "question": "Qu'est-il interdit de faire dans les parties communes ?",
            "answer": "Fumer."
          }
        ]
      }
    },
    "unite-5": {
      "objectives": [
        "décrire une journée type",
        "parler de ses habitudes",
        "organiser quelques activités de loisir"
      ],
      "vocabulary": [
        {
          "word": "la routine",
          "definition": "ensemble des habitudes du quotidien"
        },
        {
          "word": "un rendez-vous",
          "definition": "rencontre fixée à une heure précise"
        },
        {
          "word": "un loisir",
          "definition": "activité faite pendant le temps libre"
        },
        {
          "word": "un horaire",
          "definition": "heure à laquelle une activité a lieu"
        },
        {
          "word": "tôt / tard",
          "definition": "de bonne heure / à une heure avancée"
        },
        {
          "word": "ensuite",
          "definition": "connecteur pour indiquer la prochaine action"
        },
        {
          "word": "routine",
          "definition": "ensemble d'activités que l'on répète régulièrement"
        },
        {
          "word": "horaire",
          "definition": "liste des heures auxquelles se font des activités"
        },
        {
          "word": "loisir",
          "definition": "activité pratiquée pour le plaisir pendant le temps libre"
        },
        {
          "word": "rendez-vous",
          "definition": "moment prévu pour rencontrer quelqu'un ou faire quelque chose"
        },
        {
          "word": "matin",
          "definition": "période de la journée entre le lever et midi"
        },
        {
          "word": "quotidien",
          "definition": "ce qui se passe ou se fait chaque jour"
        },
        {
          "word": "semaine",
          "definition": "période de sept jours"
        },
        {
          "word": "repos",
          "definition": "moment où l'on ne travaille pas et où l'on récupère"
        },
        {
          "word": "activité",
          "definition": "chose que l'on fait, comme le sport ou la cuisine"
        },
        {
          "word": "réveil",
          "definition": "moment où l'on se réveille le matin"
        }
      ],
      "examples": [
        "Je me lève à 6 heures.",
        "Le matin, je prends le train.",
        "Le soir, je fais du sport.",
        "Le week-end, je vois mes amis.",
        "D'abord je prépare le petit-déjeuner, ensuite je pars.",
        "Je me lève à six heures trente.",
        "Le matin, je prépare les enfants.",
        "Ensuite, je prends le bus pour le travail.",
        "Le midi, je mange à la cafétéria.",
        "L'après-midi, j'ai un cours de français.",
        "Le soir, je cuisine pour ma famille.",
        "Le samedi, je vais à la piscine.",
        "Le dimanche, je me repose.",
        "J'ai un rendez-vous à l'hôpital vendredi.",
        "Mon loisir préféré est la randonnée."
      ],
      "grammarTitle": "Les verbes pronominaux au présent",
      "grammarRules": [
        "<em>je me lève</em>, <em>tu te couches</em>, <em>nous nous préparons</em>",
        "Le pronom change selon le sujet",
        "On utilise ces verbes pour parler des habitudes du quotidien",
        "Pour l'heure exacte : <em>à 7h30</em> / pour une période : <em>le matin</em>"
      ],
      "grammarError": "<span class=\"gram-wrong\">Je me lève à le matin 7h.</span> → <span class=\"gram-right\">Je me lève à 7h le matin.</span> — L'heure vient avant le moment de la journée.",
      "expressionsPlus": [
        {
          "text": "Je me lève à…",
          "register": "courant"
        },
        {
          "text": "Le matin, je…",
          "register": "courant"
        },
        {
          "text": "Ensuite, je…",
          "register": "courant"
        },
        {
          "text": "Le soir, je…",
          "register": "courant"
        },
        {
          "text": "Le week-end, je…",
          "register": "courant"
        },
        {
          "text": "Je rentre chez moi vers…",
          "register": "courant"
        },
        {
          "text": "J'ai un rendez-vous à…",
          "register": "courant"
        },
        {
          "text": "Je consacre du temps à…",
          "register": "formel"
        },
        {
          "text": "D'habitude, ma journée commence par…",
          "register": "courant"
        }
      ],
      "textAuth": {
        "source": "Témoignage — Programme FAIT, Vaud",
        "text": "Je m'appelle Amara. Je me lève à 6h30 pour préparer mes enfants. À 8h15, je les accompagne à l'école. Ensuite, je vais à mon cours de français jusqu'à midi. L'après-midi, je fais des démarches ou je lis. Le mercredi, je n'ai pas cours, alors je vois ma voisine. Le soir, je prépare le repas en famille.",
        "questions": [
          {
            "question": "À quelle heure Amara se lève-t-elle ?",
            "answer": "À 6h30."
          },
          {
            "question": "Que fait-elle l'après-midi ?",
            "answer": "Elle fait des démarches ou elle lit."
          },
          {
            "question": "Quel jour n'a-t-elle pas cours ?",
            "answer": "Le mercredi."
          }
        ]
      }
    },
    "unite-6": {
      "objectives": [
        "demander un prix ou une quantité",
        "faire un achat simple",
        "comparer deux produits"
      ],
      "vocabulary": [
        {
          "word": "la caisse",
          "definition": "endroit où l'on paie dans un magasin"
        },
        {
          "word": "la monnaie",
          "definition": "argent rendu après un paiement"
        },
        {
          "word": "une taille",
          "definition": "mesure d'un vêtement"
        },
        {
          "word": "un reçu",
          "definition": "document qui prouve un achat"
        },
        {
          "word": "en promotion",
          "definition": "vendu à un prix réduit temporairement"
        },
        {
          "word": "le rayon",
          "definition": "zone d'un magasin dédiée à un type de produit"
        },
        {
          "word": "prix",
          "definition": "somme d'argent que coûte un produit ou un service"
        },
        {
          "word": "caisse",
          "definition": "endroit dans un magasin où l'on paie"
        },
        {
          "word": "monnaie",
          "definition": "pièces ou billets rendus lors d'un paiement"
        },
        {
          "word": "taille",
          "definition": "mesure d'un vêtement : S, M, L ou 36, 38..."
        },
        {
          "word": "promotion",
          "definition": "réduction de prix sur un produit pendant une période limitée"
        },
        {
          "word": "rayon",
          "definition": "zone d'un magasin dédiée à un type de produits"
        },
        {
          "word": "panier",
          "definition": "récipient utilisé pour transporter les achats dans un magasin"
        },
        {
          "word": "marché",
          "definition": "lieu où des vendeurs proposent des produits frais en plein air"
        },
        {
          "word": "facture",
          "definition": "document qui indique ce qu'on a acheté et le montant à payer"
        },
        {
          "word": "cher",
          "definition": "qui coûte beaucoup d'argent"
        }
      ],
      "examples": [
        "C'est combien ?",
        "Je voudrais un kilo de tomates.",
        "Avez-vous une autre taille ?",
        "Je paie par carte.",
        "Ce produit est en promotion cette semaine.",
        "C'est combien, s'il vous plaît ?",
        "Avez-vous cette veste en taille quarante ?",
        "Je paye par carte bancaire.",
        "La Migros est moins chère aujourd'hui.",
        "Je prends deux bouteilles d'eau.",
        "Vous avez la monnaie de vingt francs ?",
        "Le marché de Lausanne est très animé.",
        "Je cherche le rayon des légumes."
      ],
      "grammarTitle": "Les quantités et les articles partitifs",
      "grammarRules": [
        "<em>du</em>, <em>de la</em>, <em>des</em> pour des quantités non précisées",
        "<em>un kilo de</em>, <em>une bouteille de</em> pour une quantité précise",
        "Après une quantité, on utilise souvent <em>de</em>",
        "Après une négation : <em>je n'ai pas de lait</em> (pas <em>du</em>)"
      ],
      "grammarError": "<span class=\"gram-wrong\">Je voudrais du un kilo de pommes.</span> → <span class=\"gram-right\">Je voudrais un kilo de pommes.</span> — Avec une quantité précise, on n'utilise pas l'article partitif.",
      "expressionsPlus": [
        {
          "text": "C'est combien ?",
          "register": "courant"
        },
        {
          "text": "Je voudrais…",
          "register": "courant"
        },
        {
          "text": "Je prends…",
          "register": "courant"
        },
        {
          "text": "Vous acceptez la carte ?",
          "register": "courant"
        },
        {
          "text": "Avez-vous une autre taille ?",
          "register": "courant"
        },
        {
          "text": "C'est trop cher pour moi.",
          "register": "familier"
        },
        {
          "text": "Où se trouve le rayon… ?",
          "register": "courant"
        },
        {
          "text": "Je cherche quelque chose pour…",
          "register": "courant"
        },
        {
          "text": "Pourriez-vous me montrer… ?",
          "register": "formel"
        }
      ],
      "textAuth": {
        "source": "Ticket de caisse — Migros Lausanne",
        "text": "Migros, Avenue du Sévelin 20, Lausanne. Date : mardi 10h12. Tomates cerises 250g : CHF 2.50. Pain complet : CHF 3.20. Lait demi-écrémé 1L : CHF 1.45. Yaourts nature x4 : CHF 2.80. Total : CHF 9.95. Payé par carte. Merci de votre visite.",
        "questions": [
          {
            "question": "Combien coûte le lait ?",
            "answer": "CHF 1.45."
          },
          {
            "question": "Comment le client a-t-il payé ?",
            "answer": "Par carte."
          },
          {
            "question": "Quel est le montant total des achats ?",
            "answer": "CHF 9.95."
          }
        ]
      }
    },
    "unite-7": {
      "objectives": [
        "présenter un plat ou une tradition",
        "décrire des goûts",
        "comprendre une recette simple"
      ],
      "vocabulary": [
        {
          "word": "un ingrédient",
          "definition": "produit utilisé pour préparer un plat"
        },
        {
          "word": "une recette",
          "definition": "suite d'étapes pour cuisiner"
        },
        {
          "word": "un marché",
          "definition": "lieu où l'on achète souvent des produits frais"
        },
        {
          "word": "un goût",
          "definition": "impression laissée par un aliment"
        },
        {
          "word": "épicé / doux / sucré / salé",
          "definition": "adjectifs pour décrire les saveurs d'un plat"
        },
        {
          "word": "une spécialité",
          "definition": "plat typique d'une région ou d'un pays"
        },
        {
          "word": "recette",
          "definition": "liste d'ingrédients et d'étapes pour préparer un plat"
        },
        {
          "word": "ingrédient",
          "definition": "aliment ou produit qui entre dans la préparation d'un plat"
        },
        {
          "word": "goût",
          "definition": "sensation produite par un aliment : sucré, salé, amer, épicé"
        },
        {
          "word": "plat",
          "definition": "mets préparé et servi lors d'un repas"
        },
        {
          "word": "cuisine",
          "definition": "art de préparer des aliments ; aussi la pièce où l'on cuisine"
        },
        {
          "word": "fondue",
          "definition": "plat traditionnel suisse à base de fromage fondu"
        },
        {
          "word": "épicé",
          "definition": "qui contient des épices et a un goût fort et piquant"
        },
        {
          "word": "sucré",
          "definition": "qui a le goût du sucre"
        },
        {
          "word": "salé",
          "definition": "qui a le goût du sel"
        },
        {
          "word": "repas",
          "definition": "ensemble de plats servis et mangés à une heure précise"
        }
      ],
      "examples": [
        "Il faut couper les légumes.",
        "Ce plat est épicé.",
        "On prépare cette recette en famille.",
        "J'aime goûter de nouveaux plats.",
        "La fondue est une spécialité suisse.",
        "J'aime la fondue, c'est un plat suisse.",
        "Cette recette contient des herbes aromatiques.",
        "Le rösti est fait avec des pommes de terre.",
        "Je préfère les plats peu épicés.",
        "On mange ce dessert pour Noël.",
        "La raclette se partage entre amis.",
        "Ce gâteau est très sucré.",
        "Voici les ingrédients pour la soupe.",
        "On mélange ensuite la farine et les œufs.",
        "Ce plat vient du canton du Valais."
      ],
      "grammarTitle": "L'impératif dans une recette",
      "grammarRules": [
        "<em>Coupez</em>, <em>ajoutez</em>, <em>mélangez</em>",
        "Les consignes de cuisine utilisent souvent l'impératif",
        "On peut ajouter des quantités : <em>un peu de</em>, <em>beaucoup de</em>",
        "Pour la séquence : <em>d'abord</em>, <em>ensuite</em>, <em>enfin</em>"
      ],
      "grammarError": "<span class=\"gram-wrong\">Vous coupez les oignons, après vous ajoutez le sel.</span> → <span class=\"gram-right\">Coupez les oignons, puis ajoutez le sel.</span> — Dans une recette, on préfère l'impératif au présent avec <em>vous</em>.",
      "expressionsPlus": [
        {
          "text": "J'aime ce plat.",
          "register": "courant"
        },
        {
          "text": "Il y a…",
          "register": "courant"
        },
        {
          "text": "C'est sucré / épicé / doux.",
          "register": "courant"
        },
        {
          "text": "On mange ça pour…",
          "register": "courant"
        },
        {
          "text": "Voici les ingrédients.",
          "register": "courant"
        },
        {
          "text": "Je ne mange pas de…",
          "register": "courant"
        },
        {
          "text": "C'est un plat traditionnel de…",
          "register": "courant"
        },
        {
          "text": "Cela se prépare avec…",
          "register": "formel"
        },
        {
          "text": "Ce plat me rappelle…",
          "register": "courant"
        }
      ],
      "textAuth": {
        "source": "Recette — Cahier de cuisine interculturel, Lausanne",
        "text": "Soupe de lentilles : ingrédients pour 4 personnes : 300g de lentilles rouges, 1 oignon, 2 gousses d'ail, 1 cuillère de cumin, 1 litre d'eau, sel et poivre. Préparation : faites revenir l'oignon et l'ail. Ajoutez les lentilles et l'eau. Laissez cuire 20 minutes. Ajoutez le cumin. Servez chaud.",
        "questions": [
          {
            "question": "Pour combien de personnes est cette recette ?",
            "answer": "Pour 4 personnes."
          },
          {
            "question": "Quelle épice est utilisée dans cette recette ?",
            "answer": "Le cumin."
          },
          {
            "question": "Combien de minutes faut-il laisser cuire ?",
            "answer": "20 minutes."
          }
        ]
      }
    },
    "unite-8": {
      "objectives": [
        "préparer un déplacement simple",
        "raconter une expérience passée",
        "nommer les étapes d'un voyage"
      ],
      "vocabulary": [
        {
          "word": "une réservation",
          "definition": "action de retenir une place ou une chambre"
        },
        {
          "word": "un billet",
          "definition": "titre de transport"
        },
        {
          "word": "un séjour",
          "definition": "temps passé dans un lieu"
        },
        {
          "word": "un souvenir",
          "definition": "élément retenu d'une expérience passée"
        },
        {
          "word": "l'aller-retour",
          "definition": "billet qui comprend le voyage aller et le voyage retour"
        },
        {
          "word": "une excursion",
          "definition": "sortie courte d'une journée ou d'un week-end"
        },
        {
          "word": "voyage",
          "definition": "déplacement vers un lieu différent de chez soi"
        },
        {
          "word": "billet",
          "definition": "titre de transport acheté pour un trajet en train, bus ou avion"
        },
        {
          "word": "séjour",
          "definition": "période passée dans un lieu autre que son domicile"
        },
        {
          "word": "réservation",
          "definition": "action de retenir une place ou un hébergement à l'avance"
        },
        {
          "word": "souvenir",
          "definition": "objet ou image qu'on garde pour se rappeler un moment"
        },
        {
          "word": "excursion",
          "definition": "sortie courte dans la nature ou vers un lieu d'intérêt"
        },
        {
          "word": "hébergement",
          "definition": "endroit où l'on dort pendant un voyage : hôtel, auberge..."
        },
        {
          "word": "départ",
          "definition": "moment où l'on commence un voyage"
        },
        {
          "word": "retour",
          "definition": "moment où l'on revient chez soi après un voyage"
        },
        {
          "word": "paysage",
          "definition": "ce qu'on voit autour de soi dans la nature ou dans une ville"
        }
      ],
      "examples": [
        "J'ai réservé un billet de train.",
        "Nous sommes arrivés à Genève le soir.",
        "Le séjour était court mais agréable.",
        "J'ai visité le musée olympique.",
        "C'était une belle expérience.",
        "J'ai réservé un billet pour Genève.",
        "Nous sommes partis samedi matin.",
        "Le voyage en train a duré deux heures.",
        "C'était magnifique au bord du lac.",
        "J'ai visité le château de Chillon.",
        "On a mangé une fondue dans une auberge.",
        "Il a pris beaucoup de photos.",
        "Nous sommes rentrés dimanche soir.",
        "J'ai acheté un souvenir pour ma famille.",
        "L'excursion à Gruyères était très belle."
      ],
      "grammarTitle": "Le passé composé",
      "grammarRules": [
        "Avec <em>avoir</em> : <em>j'ai pris</em>, <em>nous avons visité</em>",
        "Avec <em>être</em> : <em>je suis parti(e)</em>, <em>ils sont arrivés</em>",
        "Le passé composé sert à raconter une action terminée",
        "Liste des verbes avec <em>être</em> : aller, venir, partir, arriver, naître, mourir, monter, descendre…"
      ],
      "grammarError": "<span class=\"gram-wrong\">J'ai arrivé à Lausanne.</span> → <span class=\"gram-right\">Je suis arrivé(e) à Lausanne.</span> — Le verbe <em>arriver</em> se conjugue avec <em>être</em>, pas <em>avoir</em>.",
      "expressionsPlus": [
        {
          "text": "Je pars à…",
          "register": "courant"
        },
        {
          "text": "J'ai réservé…",
          "register": "courant"
        },
        {
          "text": "Je suis allé(e) à…",
          "register": "courant"
        },
        {
          "text": "C'était…",
          "register": "courant"
        },
        {
          "text": "J'ai aimé…",
          "register": "courant"
        },
        {
          "text": "Le trajet a duré…",
          "register": "courant"
        },
        {
          "text": "J'ai pris le train de…",
          "register": "courant"
        },
        {
          "text": "Je voudrais réserver un billet pour…",
          "register": "formel"
        },
        {
          "text": "Le séjour était mémorable.",
          "register": "courant"
        }
      ],
      "textAuth": {
        "source": "Message dans un groupe WhatsApp de cours",
        "text": "Hier, j'ai fait une excursion avec ma famille ! On est partis de Lausanne en train à 9h. On est arrivés à Montreux à 9h30. On a visité le Château de Chillon, c'était vraiment beau. On a déjeuné au bord du lac. On est rentrés à 17h. Je suis fatiguée mais très contente !",
        "questions": [
          {
            "question": "À quelle heure sont-ils partis de Lausanne ?",
            "answer": "À 9h."
          },
          {
            "question": "Qu'ont-ils visité à Montreux ?",
            "answer": "Le Château de Chillon."
          },
          {
            "question": "Comment la personne se sent-elle à la fin ?",
            "answer": "Fatiguée mais très contente."
          }
        ]
      }
    }
  },
  "verbs": {
    "unite-0": {
      "verbs": [
        "être",
        "parler",
        "venir",
        "situer",
        "habiter",
        "comprendre",
        "apprendre",
        "découvrir"
      ],
      "conjugations": [
        "<strong>être</strong> : je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont",
        "<strong>parler</strong> : je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent"
      ]
    },
    "unite-1": {
      "verbs": [
        "s'appeler",
        "être",
        "habiter",
        "venir",
        "saluer",
        "présenter",
        "dire",
        "aimer"
      ],
      "conjugations": [
        "<strong>s'appeler</strong> : je m'appelle, tu t'appelles, il/elle s'appelle, nous nous appelons, vous vous appelez, ils/elles s'appellent",
        "<strong>venir</strong> : je viens, tu viens, il/elle vient, nous venons, vous venez, ils/elles viennent"
      ]
    },
    "unite-2": {
      "verbs": [
        "travailler",
        "vouloir",
        "aimer",
        "chercher",
        "changer",
        "faire",
        "avoir",
        "pouvoir"
      ],
      "conjugations": [
        "<strong>travailler</strong> : je travaille, tu travailles, il/elle travaille, nous travaillons, vous travaillez, ils/elles travaillent",
        "<strong>vouloir</strong> : je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent"
      ]
    },
    "unite-3": {
      "verbs": [
        "aller",
        "tourner",
        "continuer",
        "prendre",
        "descendre",
        "sortir",
        "partir",
        "voir"
      ],
      "conjugations": [
        "<strong>aller</strong> : je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont",
        "<strong>prendre</strong> : je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent"
      ]
    },
    "unite-4": {
      "verbs": [
        "penser",
        "croire",
        "devoir",
        "respecter",
        "choisir",
        "savoir",
        "pouvoir",
        "comprendre"
      ],
      "conjugations": [
        "<strong>penser</strong> : je pense, tu penses, il/elle pense, nous pensons, vous pensez, ils/elles pensent",
        "<strong>devoir</strong> : je dois, tu dois, il/elle doit, nous devons, vous devez, ils/elles doivent"
      ]
    },
    "unite-5": {
      "verbs": [
        "se lever",
        "se coucher",
        "commencer",
        "finir",
        "organiser",
        "se préparer",
        "partir",
        "revenir"
      ],
      "conjugations": [
        "<strong>se lever</strong> : je me lève, tu te lèves, il/elle se lève, nous nous levons, vous vous levez, ils/elles se lèvent",
        "<strong>finir</strong> : je finis, tu finis, il/elle finit, nous finissons, vous finissez, ils/elles finissent"
      ]
    },
    "unite-6": {
      "verbs": [
        "acheter",
        "prendre",
        "payer",
        "coûter",
        "choisir",
        "vouloir",
        "préférer",
        "comparer"
      ],
      "conjugations": [
        "<strong>acheter</strong> : j'achète, tu achètes, il/elle achète, nous achetons, vous achetez, ils/elles achètent",
        "<strong>payer</strong> : je paie, tu paies, il/elle paie, nous payons, vous payez, ils/elles paient"
      ]
    },
    "unite-7": {
      "verbs": [
        "manger",
        "préparer",
        "aimer",
        "goûter",
        "partager",
        "cuisiner",
        "servir",
        "choisir"
      ],
      "conjugations": [
        "<strong>manger</strong> : je mange, tu manges, il/elle mange, nous mangeons, vous mangez, ils/elles mangent",
        "<strong>préparer</strong> : je prépare, tu prépares, il/elle prépare, nous préparons, vous préparez, ils/elles préparent"
      ]
    },
    "unite-8": {
      "verbs": [
        "partir",
        "réserver",
        "visiter",
        "arriver",
        "raconter",
        "voyager",
        "voir",
        "revenir"
      ],
      "conjugations": [
        "<strong>partir</strong> : je pars, tu pars, il/elle part, nous partons, vous partez, ils/elles partent",
        "<strong>arriver</strong> : j'arrive, tu arrives, il/elle arrive, nous arrivons, vous arrivez, ils/elles arrivent"
      ]
    }
  },
  "dialogues": {
    "unite-0": [
      {
        "title": "Rencontre dans la classe",
        "context": "Vous rencontrez un(e) camarade au premier jour du cours de français.",
        "steps": [
          {
            "from": "bot",
            "text": "Bonjour ! Vous venez de quel pays ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Je viens du Maroc.",
                "ok": true,
                "fb": "Parfait ! \"Je viens de / du + pays\" est la bonne formule."
              },
              {
                "text": "Je suis Maroc.",
                "ok": false,
                "fb": "On dit \"Je viens du Maroc\" ou \"Je suis marocain(e)\"."
              },
              {
                "text": "Moi pays Maroc.",
                "ok": false,
                "fb": "Construisez une phrase : sujet + verbe + complément."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Et vous habitez où en Suisse ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "J'habite à Lausanne.",
                "ok": true,
                "fb": "Très bien ! \"J'habite à + ville\" est correct."
              },
              {
                "text": "Je suis dans Lausanne.",
                "ok": false,
                "fb": "On utilise \"à\" devant une ville, pas \"dans\"."
              },
              {
                "text": "Lausanne habite.",
                "ok": false,
                "fb": "Le sujet \"je\" est manquant. Dites \"J'habite à Lausanne\"."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Genève, c'est en Suisse romande, non ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Oui, c'est en Suisse romande.",
                "ok": true,
                "fb": "Exact ! On dit \"en Suisse\" car la Suisse est féminine."
              },
              {
                "text": "Oui, c'est au Suisse.",
                "ok": false,
                "fb": "On dit \"en Suisse\" (pays féminin), pas \"au Suisse\"."
              },
              {
                "text": "Genève est une langue.",
                "ok": false,
                "fb": "Genève est une ville, pas une langue."
              }
            ]
          }
        ]
      }
    ],
    "unite-1": [
      {
        "title": "Au secrétariat du cours",
        "context": "Vous arrivez pour vous inscrire à un cours de français.",
        "steps": [
          {
            "from": "bot",
            "text": "Bonjour, je peux vous aider ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Bonjour, je voudrais m'inscrire au cours.",
                "ok": true,
                "fb": "Parfait ! Clair, poli et grammaticalement correct."
              },
              {
                "text": "Bonjour je veux cours.",
                "ok": false,
                "fb": "Dites \"Je voudrais m'inscrire au cours\" avec l'article \"au\"."
              },
              {
                "text": "Salut, inscription !",
                "ok": false,
                "fb": "Trop familier. Utilisez \"Bonjour\" et une phrase complète."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Bien sûr ! Vous vous appelez comment ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Je m'appelle Sofia Benali.",
                "ok": true,
                "fb": "Excellent ! \"Je m'appelle + prénom nom\" est parfait."
              },
              {
                "text": "Sofia moi.",
                "ok": false,
                "fb": "Dites \"Je m'appelle Sofia\" avec le verbe pronominal."
              },
              {
                "text": "Mon nom c'est Sofia.",
                "ok": true,
                "fb": "Très bien ! Cette formule est aussi correcte."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Et vous venez d'où ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Je viens de Tunisie.",
                "ok": true,
                "fb": "Parfait ! \"Je viens de + pays féminin\" est correct."
              },
              {
                "text": "Moi Tunisie.",
                "ok": false,
                "fb": "Utilisez \"Je viens de Tunisie\" avec le sujet et le verbe."
              },
              {
                "text": "Je suis de la Tunisie.",
                "ok": false,
                "fb": "On dit \"Je viens de Tunisie\", sans article."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Enchantée ! Bienvenue dans le cours !"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Enchantée aussi, merci !",
                "ok": true,
                "fb": "Parfait ! \"Enchanté(e)\" est la réponse polie idéale."
              },
              {
                "text": "Ok bye.",
                "ok": false,
                "fb": "Trop familier. Dites \"Merci !\" ou \"Au revoir !\"."
              },
              {
                "text": "Merci beaucoup, au revoir !",
                "ok": true,
                "fb": "Très bien ! Simple et poli."
              }
            ]
          }
        ]
      }
    ],
    "unite-2": [
      {
        "title": "À l'ORP",
        "context": "Vous expliquez votre situation professionnelle à un(e) conseiller(ère) de l'ORP.",
        "steps": [
          {
            "from": "bot",
            "text": "Bonjour. Vous travaillez actuellement ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Non, je cherche du travail.",
                "ok": true,
                "fb": "Très bien ! \"Chercher du travail\" est la bonne expression."
              },
              {
                "text": "Non, pas travail moi.",
                "ok": false,
                "fb": "Dites \"Je cherche du travail\" avec le sujet et le verbe."
              },
              {
                "text": "Je suis sans emploi.",
                "ok": true,
                "fb": "Correct ! \"Être sans emploi\" est une expression formelle appropriée."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Quel était votre métier ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "J'étais aide-soignante.",
                "ok": true,
                "fb": "Parfait ! \"J'étais + métier\" utilise bien l'imparfait."
              },
              {
                "text": "Moi infirmière avant.",
                "ok": false,
                "fb": "Dites \"J'étais infirmière\" avec le sujet et le verbe être."
              },
              {
                "text": "Je travaille infirmière.",
                "ok": false,
                "fb": "\"Travailler\" ne s'utilise pas ainsi. Dites \"Je suis infirmière\"."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Et qu'est-ce que vous souhaitez faire maintenant ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Je voudrais travailler dans la santé.",
                "ok": true,
                "fb": "Excellent ! \"Voudrais + infinitif\" exprime bien un souhait."
              },
              {
                "text": "Vouloir travailler santé.",
                "ok": false,
                "fb": "Construisez une vraie phrase : \"Je voudrais travailler dans la santé.\""
              },
              {
                "text": "Je veux travailler, s'il vous plaît.",
                "ok": true,
                "fb": "Bien ! \"Vouloir + infinitif\" fonctionne aussi pour exprimer un souhait."
              }
            ]
          }
        ]
      }
    ],
    "unite-3": [
      {
        "title": "Demander son chemin",
        "context": "Vous êtes dans la rue à Lausanne et demandez votre chemin.",
        "steps": [
          {
            "from": "bot",
            "text": "Bonjour ! (vous voulez demander où est la gare)"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Excusez-moi, où est la gare, s'il vous plaît ?",
                "ok": true,
                "fb": "Parfait ! Poli et clair."
              },
              {
                "text": "Gare ? Où ?",
                "ok": false,
                "fb": "Trop court. Dites \"Excusez-moi, où est la gare ?\""
              },
              {
                "text": "Bonjour, la gare est ici ?",
                "ok": true,
                "fb": "Bien ! Cela fonctionne pour demander une information."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Continuez tout droit, puis tournez à gauche au feu."
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Merci beaucoup !",
                "ok": true,
                "fb": "Parfait ! Simple et poli."
              },
              {
                "text": "C'est loin ?",
                "ok": true,
                "fb": "Très bien ! Demander la distance est utile."
              },
              {
                "text": "Répéter, s'il vous plaît.",
                "ok": false,
                "fb": "Dites \"Pouvez-vous répéter, s'il vous plaît ?\" avec un verbe conjugué."
              }
            ]
          },
          {
            "from": "bot",
            "text": "C'est à cinq minutes à pied. Vous prenez le bus ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Non, je préfère y aller à pied.",
                "ok": true,
                "fb": "Excellent ! Phrase complète et naturelle."
              },
              {
                "text": "Moi pied.",
                "ok": false,
                "fb": "Dites \"Je préfère marcher\" ou \"Je vais à pied\"."
              },
              {
                "text": "Je prends le bus 8.",
                "ok": true,
                "fb": "Très bien ! Cela répond directement à la question."
              }
            ]
          }
        ]
      }
    ],
    "unite-4": [
      {
        "title": "Réunion de voisins",
        "context": "Il y a une réunion dans votre immeuble. On discute des règles de vie en commun.",
        "steps": [
          {
            "from": "bot",
            "text": "On propose de ne pas faire de bruit après 22h. Vous êtes d'accord ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Oui, je suis tout à fait d'accord.",
                "ok": true,
                "fb": "Parfait ! \"Je suis d'accord\" est la formule standard."
              },
              {
                "text": "Oui accord moi.",
                "ok": false,
                "fb": "Dites \"Je suis d'accord\" avec le sujet et le verbe."
              },
              {
                "text": "À mon avis, c'est une bonne règle.",
                "ok": true,
                "fb": "Excellent ! \"À mon avis\" est parfait pour donner une opinion."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Et pour les vélos dans le couloir, qu'en pensez-vous ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Je pense que c'est dangereux.",
                "ok": true,
                "fb": "Très bien ! \"Je pense que + phrase\" exprime une opinion."
              },
              {
                "text": "Moi pas aimer vélos là.",
                "ok": false,
                "fb": "Dites \"Je ne pense pas que c'est une bonne idée\" ou \"C'est dangereux\"."
              },
              {
                "text": "Ce n'est pas une bonne idée, selon moi.",
                "ok": true,
                "fb": "Excellent ! \"Selon moi\" est une belle formule d'opinion."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Avez-vous des questions sur le règlement ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Non, c'est clair. Merci.",
                "ok": true,
                "fb": "Parfait ! Simple et poli."
              },
              {
                "text": "Oui, il faut payer pour ça ?",
                "ok": true,
                "fb": "Bien ! C'est une question directe et naturelle."
              },
              {
                "text": "Règlement comprendre pas.",
                "ok": false,
                "fb": "Dites \"Je ne comprends pas bien le règlement.\""
              }
            ]
          }
        ]
      }
    ],
    "unite-5": [
      {
        "title": "Parler de sa journée",
        "context": "Une collègue de cours vous demande comment se passe votre semaine.",
        "steps": [
          {
            "from": "bot",
            "text": "Bonjour ! Comment se passe votre semaine ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Assez bien, merci ! Je suis très occupé(e).",
                "ok": true,
                "fb": "Parfait ! Naturel et poli."
              },
              {
                "text": "Semaine bien moi.",
                "ok": false,
                "fb": "Dites \"Ma semaine se passe bien\" ou \"Ça va bien, merci.\""
              },
              {
                "text": "Ça va, mais c'est chargé.",
                "ok": true,
                "fb": "Très bien ! \"Chargé\" est un bon mot pour une semaine pleine."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Qu'est-ce que vous faites le matin généralement ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Je me lève à 7h et je prends le bus.",
                "ok": true,
                "fb": "Excellent ! Vous utilisez bien les verbes du quotidien."
              },
              {
                "text": "Matin lever 7h bus.",
                "ok": false,
                "fb": "Dites \"Le matin, je me lève à 7h et je prends le bus.\""
              },
              {
                "text": "D'habitude, je prépare les enfants.",
                "ok": true,
                "fb": "Très bien ! \"D'habitude\" est parfait pour parler de routine."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Et le week-end, vous avez du temps libre ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Oui, le week-end je fais du sport.",
                "ok": true,
                "fb": "Parfait ! Phrase simple et claire."
              },
              {
                "text": "Week-end moi repos.",
                "ok": false,
                "fb": "Dites \"Le week-end, je me repose\" avec le verbe complet."
              },
              {
                "text": "Le dimanche, j'aime me promener.",
                "ok": true,
                "fb": "Excellent ! Très naturel et précis."
              }
            ]
          }
        ]
      }
    ],
    "unite-6": [
      {
        "title": "À la Migros",
        "context": "Vous faites vos courses à la Migros à Lausanne.",
        "steps": [
          {
            "from": "bot",
            "text": "Bonjour ! Je peux vous aider ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Oui, je cherche le lait, s'il vous plaît.",
                "ok": true,
                "fb": "Parfait ! Claire et poli."
              },
              {
                "text": "Lait où ?",
                "ok": false,
                "fb": "Dites \"Où est le lait, s'il vous plaît ?\" avec la formule de politesse."
              },
              {
                "text": "Excusez-moi, vous avez du lait ?",
                "ok": true,
                "fb": "Très bien ! \"Vous avez du...\" est naturel en magasin."
              }
            ]
          },
          {
            "from": "bot",
            "text": "C'est au rayon frais, allée 3. Autre chose ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Oui, c'est combien le fromage ?",
                "ok": true,
                "fb": "Très bien ! \"C'est combien ?\" est parfait pour demander un prix."
              },
              {
                "text": "Fromage prix combien.",
                "ok": false,
                "fb": "Dites \"C'est combien le fromage ?\" avec la structure correcte."
              },
              {
                "text": "Non merci, c'est tout.",
                "ok": true,
                "fb": "Parfait ! \"C'est tout\" est la formule idéale pour terminer les achats."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Vous payez comment ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Par carte, s'il vous plaît.",
                "ok": true,
                "fb": "Parfait ! Court et clair."
              },
              {
                "text": "Carte moi payer.",
                "ok": false,
                "fb": "Dites \"Je paye par carte\" ou \"Par carte, s'il vous plaît.\""
              },
              {
                "text": "Vous acceptez la carte ?",
                "ok": true,
                "fb": "Très bien ! C'est une question utile et naturelle."
              }
            ]
          }
        ]
      }
    ],
    "unite-7": [
      {
        "title": "Partager une recette",
        "context": "Vous partagez votre plat favori avec un(e) camarade de cours.",
        "steps": [
          {
            "from": "bot",
            "text": "Qu'est-ce que vous aimez cuisiner ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "J'aime préparer le couscous, c'est mon plat préféré.",
                "ok": true,
                "fb": "Parfait ! \"J'aime + infinitif\" est correct."
              },
              {
                "text": "Moi aimer couscous faire.",
                "ok": false,
                "fb": "Dites \"J'aime faire le couscous\" avec la bonne structure."
              },
              {
                "text": "Je cuisine souvent des tajines.",
                "ok": true,
                "fb": "Très bien ! \"Je cuisine souvent\" exprime une habitude."
              }
            ]
          },
          {
            "from": "bot",
            "text": "C'est quoi les ingrédients principaux ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Il y a de la semoule, des légumes et de la viande.",
                "ok": true,
                "fb": "Excellent ! \"Il y a de la / des\" est la bonne structure."
              },
              {
                "text": "Semoule, légumes, viande.",
                "ok": false,
                "fb": "Formez une phrase : \"Il y a de la semoule, des légumes et de la viande.\""
              },
              {
                "text": "Les ingrédients sont la semoule et les légumes.",
                "ok": true,
                "fb": "Très bien ! Structure claire et correcte."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Et c'est un plat pour quelle occasion ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "On mange ça en famille, souvent le vendredi.",
                "ok": true,
                "fb": "Parfait ! Naturel et précis."
              },
              {
                "text": "Famille manger vendredi.",
                "ok": false,
                "fb": "Dites \"On mange ça en famille le vendredi.\""
              },
              {
                "text": "C'est un plat de fête traditionnelle.",
                "ok": true,
                "fb": "Très bien ! \"Un plat de fête\" est une belle expression."
              }
            ]
          }
        ]
      }
    ],
    "unite-8": [
      {
        "title": "Raconter une sortie",
        "context": "Vous racontez à un(e) ami(e) votre week-end à Montreux.",
        "steps": [
          {
            "from": "bot",
            "text": "Alors, ce week-end à Montreux, c'était comment ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "C'était magnifique ! J'ai adoré le lac.",
                "ok": true,
                "fb": "Parfait ! \"C'était + adjectif\" pour le passé, bien utilisé."
              },
              {
                "text": "Montreux bien être.",
                "ok": false,
                "fb": "Dites \"C'était bien\" ou \"J'ai aimé Montreux.\" au passé."
              },
              {
                "text": "J'ai passé un très bon week-end.",
                "ok": true,
                "fb": "Très bien ! \"Passer un bon week-end\" est une expression naturelle."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Vous avez fait quoi là-bas ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "J'ai visité le château de Chillon et je me suis promené(e) au bord du lac.",
                "ok": true,
                "fb": "Excellent ! Passé composé bien utilisé, avec des activités précises."
              },
              {
                "text": "Moi visiter château, lac.",
                "ok": false,
                "fb": "Utilisez le passé composé : \"J'ai visité le château.\""
              },
              {
                "text": "J'ai pris beaucoup de photos.",
                "ok": true,
                "fb": "Très bien ! \"Prendre des photos\" est une activité touristique naturelle."
              }
            ]
          },
          {
            "from": "bot",
            "text": "Vous y retourneriez ?"
          },
          {
            "from": "user",
            "options": [
              {
                "text": "Oui, j'aimerais beaucoup y retourner !",
                "ok": true,
                "fb": "Parfait ! \"J'aimerais + infinitif\" pour un souhait."
              },
              {
                "text": "Oui moi retourner là-bas.",
                "ok": false,
                "fb": "Dites \"J'aimerais y retourner\" avec le verbe conjugué."
              },
              {
                "text": "Absolument ! C'est une belle région.",
                "ok": true,
                "fb": "Très bien ! \"Absolument\" renforce l'accord avec élégance."
              }
            ]
          }
        ]
      }
    ]
  }
};
