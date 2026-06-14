# Modifier Les Exercices

Tout le contenu des exercices d'entrainement est maintenant centralise dans :

- `js/exercise-content/a1.js`
- `js/exercise-content/a2.js`
- `js/exercise-content/b1.js`
- `js/exercise-content/b2.js`
- `js/exercise-content/c1c2.js`

Chaque fichier contient plusieurs unites :

```js
"unite-0": {
  "entry": { ... },
  "vraiFaux": [ ... ],
  "quiz": [ ... ],
  "apparier": [ ... ],
  "completer": [ ... ],
  "ecouter": [ ... ],
  "conjugaison": { ... },
  "motsMeles": [ ... ],
  "flashcards": [ ... ],
  "anagrammes": [ ... ],
  "dialogue": [ ... ],
  "construire": [ ... ],
  "validation": [ ... ]
}
```

## Quel fichier modifier

- Unites A1 : `js/exercise-content/a1.js`
- Unites A2 : `js/exercise-content/a2.js`
- Unites B1 : `js/exercise-content/b1.js`
- Unites B2 : `js/exercise-content/b2.js`
- Unites C1/C2 : `js/exercise-content/c1c2.js`

## Types d'exercices

### `vraiFaux`

Pour modifier une affirmation et dire si elle est vraie ou fausse :

```js
"vraiFaux": [
  { "phrase": "Le mot bonjour veut dire hello.", "correct": true },
  { "phrase": "Le mot merci veut dire goodbye.", "correct": false }
]
```

- `phrase` = l'affirmation affichee
- `correct: true` = la phrase est vraie
- `correct: false` = la phrase est fausse

### `quiz`

```js
"quiz": [
  {
    "prompt": "Que veut dire bonjour ?",
    "choices": ["hello", "goodbye", "please"],
    "answer": 0
  }
]
```

- `prompt` = la question
- `choices` = les reponses possibles
- `answer` = l'index de la bonne reponse
- `0` = premier choix, `1` = deuxieme, `2` = troisieme

### `apparier`

```js
"apparier": [
  { "word": "bonjour", "definition": "hello" }
]
```

### `completer`

```js
"completer": [
  {
    "display": "Je ___ Alex.",
    "answer": "m'appelle",
    "full": "Je m'appelle Alex."
  }
]
```

- `display` = phrase avec trou
- `answer` = mot attendu
- `full` = phrase complete

### `ecouter`

```js
"ecouter": [
  {
    "prompt": "Comment tu t'appelles ?",
    "choices": ["Je m'appelle Alex.", "J'ai faim.", "Il fait beau."],
    "answer": 0
  }
]
```

Le texte dans `prompt` est lu par la voix du navigateur.

### `conjugaison`

```js
"conjugaison": {
  "verbs": ["etre", "avoir"],
  "conjugations": [
    "je suis, tu es, il est, nous sommes, vous etes, ils sont",
    "j'ai, tu as, il a, nous avons, vous avez, ils ont"
  ]
}
```

### `motsMeles`

```js
"motsMeles": ["BONJOUR", "MERCI", "SALUT"]
```

- utiliser de preference des mots simples
- majuscules conseillees

### `flashcards`

```js
"flashcards": [
  { "word": "bonjour", "definition": "hello" }
]
```

### `anagrammes`

```js
"anagrammes": [
  { "word": "salut", "definition": "hello" }
]
```

- preferer un seul mot
- eviter les espaces

### `dialogue`

```js
"dialogue": [
  {
    "title": "Se presenter",
    "context": "Vous rencontrez quelqu'un.",
    "steps": [
      { "from": "bot", "text": "Bonjour !" },
      {
        "from": "user",
        "options": [
          { "text": "Bonjour !", "ok": true, "fb": "Bonne reponse." },
          { "text": "Au revoir !", "ok": false, "fb": "Ce n'est pas adapte ici." }
        ]
      }
    ]
  }
]
```

### `construire`

```js
"construire": [
  "Je m'appelle Alex.",
  "J'habite a Lausanne."
]
```

### `validation`

```js
"validation": [
  { "word": "bonjour", "definition": "hello" }
]
```

Le jeu affiche la definition et l'utilisateur doit taper le mot.

## Exemple concret : unite 0

Le contenu de l'unite 0 A1 est dans :

- `js/exercise-content/a1.js`

Blocs utiles :

- `unite-0`
- `vraiFaux`
- `quiz`
- `apparier`
- `completer`
- `ecouter`
- `conjugaison`
- `motsMeles`
- `flashcards`
- `anagrammes`
- `dialogue`
- `construire`
- `validation`

## Textes d'interface

Les textes communs des boutons, titres et messages des jeux sont dans :

- `js/game-text.js`

Exemples :

- bouton "Suivant"
- message "Correct"
- titres des cartes de jeux

## Textes generaux du site

Les textes generaux du site sont dans :

- `js/site-text.js`

## Important

- Modifier seulement les valeurs, pas la structure JSON/JS autour
- Garder les virgules entre les elements
- Garder les guillemets
- Si une page ne change pas, verifier que le bon fichier de niveau a ete modifie
