# Modifier Les Lecons

Le contenu des lecons est maintenant centralise ici :

- `js/course-data/levels/a1.js`
- `js/course-data/levels/a2.js`
- `js/course-data/levels/b1.js`
- `js/course-data/levels/b2.js`
- `js/course-data/levels/c1c2.js`

Le fichier `js/content.js` ne contient plus le gros contenu. Il sert seulement de pont pour le site.

## Structure d'un fichier de niveau

Chaque fichier contient un bloc comme :

```js
window.COURSE_DATA_PARTS.a1 = {
  section: { ... },
  units: {
    "unite-0": { ... },
    "unite-1": { ... }
  },
  verbs: {
    "unite-0": { ... }
  },
  dialogues: {
    "unite-1": [ ... ]
  }
};
```

## Ou modifier le texte d'une lecon

Dans `units`, chaque unite contient le texte principal de la lecon.

Exemple :

```js
"unite-0": {
  "swissContextHtml": "...",
  "objectives": [ ... ],
  "vocabulary": [ ... ],
  "examples": [ ... ],
  "grammarTitle": "...",
  "grammarRules": [ ... ],
  "grammarError": "...",
  "expressionsPlus": [ ... ],
  "textAuth": { ... }
}
```

## Champs principaux

### `swissContextHtml`

Texte sur le contexte suisse romand.

```js
"swissContextHtml": "<p>Texte...</p>"
```

### `objectives`

Objectifs de la lecon.

```js
"objectives": [
  "comprendre ...",
  "utiliser ...",
  "reutiliser ..."
]
```

### `vocabulary`

Vocabulaire affiche dans les cartes.

```js
"vocabulary": [
  { "word": "bonjour", "definition": "salutation" }
]
```

### `examples`

Exemples de phrases.

```js
"examples": [
  "Je m'appelle Alex.",
  "J'habite a Lausanne."
]
```

### `grammarTitle`

Titre du point de grammaire.

```js
"grammarTitle": "Le verbe etre"
```

### `grammarRules`

Regles de grammaire.

```js
"grammarRules": [
  "Je suis",
  "Tu es",
  "Il est"
]
```

### `grammarError`

Erreur frequente a afficher.

```js
"grammarError": "On dit je suis, pas je est."
```

### `expressionsPlus`

Expressions utiles.

```js
"expressionsPlus": [
  { "text": "Bonjour madame.", "register": "formel" },
  { "text": "Salut !", "register": "familier" }
]
```

### `textAuth`

Document authentique avec questions.

```js
"textAuth": {
  "source": "Annonce",
  "text": "Texte...",
  "questions": [
    { "question": "Qui parle ?", "answer": "..." }
  ]
}
```

## Conjugaison

Les verbes affiches dans la section conjugaison sont dans `verbs`.

Exemple :

```js
"verbs": {
  "unite-0": {
    "verbs": ["etre", "avoir"],
    "conjugations": [
      "<strong>etre</strong> : je suis ...",
      "<strong>avoir</strong> : j'ai ..."
    ]
  }
}
```

## Dialogues

Les dialogues lies aux unites sont dans `dialogues`.

Exemple :

```js
"dialogues": {
  "unite-1": [
    {
      "title": "Se presenter",
      "context": "Premiere rencontre",
      "steps": [ ... ]
    }
  ]
}
```

## Quel fichier choisir

- unites `unite-*` : `js/course-data/levels/a1.js`
- unites `a2-unite-*` : `js/course-data/levels/a2.js`
- unites `b1-unite-*` : `js/course-data/levels/b1.js`
- unites `b2-unite-*` : `js/course-data/levels/b2.js`
- unites `c1c2-unite-*` : `js/course-data/levels/c1c2.js`

## Exemple concret

Pour modifier la lecon A1 unite 0 :

- ouvrir `js/course-data/levels/a1.js`
- chercher `"unite-0"`
- modifier les blocs utiles dedans

Pour modifier la lecon A2 unite 3 :

- ouvrir `js/course-data/levels/a2.js`
- chercher `"a2-unite-3"`

## Important

- garder la structure du fichier
- garder les virgules
- garder les guillemets
- si vous modifiez du HTML dans `swissContextHtml` ou `textAuth.text`, verifier les balises
- pour une recherche rapide dans VS Code : chercher directement l'id de l'unite
