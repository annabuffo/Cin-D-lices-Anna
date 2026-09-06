# Ciné Délices

> Application web permettant de découvrir, rechercher et publier des recettes inspirées de films et de séries.

## Sommaire

- [Présentation du projet](#présentation-du-projet)
- [Cahier des charges](#cahier-des-charges)
- [Besoins utilisateurs](#besoins-utilisateurs)
- [User stories](#user-stories)
- [Conception de la base de données](#conception-de-la-base-de-données)
- [Préparation technique](#préparation-technique)
- [Frontend](#frontend)
- [Backend](#backend)
- [Fonctionnalités](#fonctionnalités)
- [Sécurité](#sécurité)
- [Installation locale](#installation-locale)
- [Structure du projet](#structure-du-projet)
- [Préparation à la présentation](#préparation-à-la-présentation)

---

## Présentation du projet

**Ciné Délices** est une application web qui associe l'univers culinaire au cinéma et aux séries.

L'objectif est de permettre aux visiteurs de rechercher et consulter des recettes inspirées de films ou de séries. Les utilisateurs authentifiés disposent d'un espace personnel leur permettant notamment de publier et gérer leurs propres recettes.

Le projet sépare le **frontend**, le **backend**, l'**API REST** et la **base de données PostgreSQL**.

### Objectif « moins de 3 clics »

L'interface doit rester simple et permettre à l'utilisateur d'accéder rapidement aux recettes et aux œuvres associées, en quelques clics.

---

# Cahier des charges

## Quel est le but de Ciné Délices ?

Le but de Ciné Délices est de créer une application web possédant une véritable interface utilisateur permettant de rechercher des recettes inspirées de films et de séries.

Le site associe l'univers culinaire au monde cinématographique grâce à différentes recettes liées à des œuvres de cinéma et de télévision.

## Qui utilise le site ?

Les contenus publics peuvent être consultés par les visiteurs.

L'inscription et les fonctionnalités nécessitant un compte sont destinées aux utilisateurs remplissant les conditions prévues par l'application, notamment l'âge minimum défini lors de l'inscription.

## Fonctionnalités principales

- Consultation des films et séries
- Consultation et recherche des recettes
- Filtrage des recettes par catégorie
- Filtrage des recettes par film ou série
- Affichage d'une fiche recette détaillée
- Affichage d'une fiche film/série et de ses recettes associées
- Inscription
- Authentification
- Espace personnel utilisateur
- Création d'une recette
- Modification d'une recette par son auteur
- Suppression d'une recette par son auteur
- Commentaires associés aux recettes
- Espace d'administration
- Gestion administrative des utilisateurs
- Gestion administrative des recettes
- Gestion administrative des catégories
- Gestion administrative des médias
- Modération des commentaires

## Données principales

L'application utilise cinq entités principales :

| Entité | Rôle |
| --- | --- |
| `User` | Stocker les comptes utilisateurs |
| `Recipe` | Stocker les recettes publiées |
| `Category` | Classer les recettes |
| `Media` | Stocker les films et séries associés |
| `Comment` | Stocker les commentaires associés aux recettes |

---

# Besoins utilisateurs

## Visiteur

Un visiteur doit pouvoir :

- consulter la page d'accueil ;
- rechercher des recettes ;
- filtrer les recettes ;
- consulter les films et séries ;
- consulter une fiche film/série ;
- consulter une fiche recette ;
- accéder aux pages À propos, Contact, Politique de confidentialité et Conditions d'utilisation ;
- créer un compte ;
- se connecter.

## Utilisateur authentifié

Un utilisateur authentifié doit pouvoir :

- accéder à son espace personnel ;
- consulter ses informations ;
- créer une recette ;
- modifier ses propres recettes ;
- supprimer ses propres recettes ;
- consulter les recettes et médias disponibles ;
- associer une recette à une catégorie ;
- associer une recette à un film ou une série.

## Administrateur

Un administrateur doit pouvoir :

- accéder à son tableau de bord ;
- gérer les utilisateurs ;
- gérer les recettes ;
- gérer les catégories ;
- gérer les films et séries ;
- modérer les commentaires.

---

# User stories

## Visiteur

| En tant que... | Je veux... | Afin de... |
| --- | --- | --- |
| Visiteur | consulter les recettes associées à des films et séries | découvrir des recettes inspirées du cinéma |
| Visiteur | rechercher une recette | trouver rapidement une recette précise |
| Visiteur | rechercher un film ou une série | découvrir les recettes qui lui sont associées |
| Visiteur | filtrer les recettes par catégorie | trouver le type de recette recherché |
| Visiteur | consulter une fiche recette | connaître ses ingrédients et ses instructions |
| Visiteur | consulter une fiche film/série | découvrir les recettes associées à cette œuvre |
| Visiteur | m'inscrire | créer un compte utilisateur |
| Visiteur | me connecter | accéder aux fonctionnalités réservées aux utilisateurs authentifiés |
| Visiteur | consulter la page À propos | comprendre le concept de Ciné Délices |
| Visiteur | consulter la page Contact | accéder aux informations de contact |
| Visiteur | consulter la Politique de confidentialité | connaître les règles relatives aux données |
| Visiteur | consulter les Conditions d'utilisation | connaître les règles d'utilisation du site |

## Utilisateur authentifié

| En tant que... | Je veux... | Afin de... |
| --- | --- | --- |
| Utilisateur | accéder à mon profil | consulter mon espace personnel |
| Utilisateur | créer une recette | publier une recette inspirée d'un film ou d'une série |
| Utilisateur | modifier ma recette | corriger ou mettre à jour son contenu |
| Utilisateur | supprimer ma recette | retirer une publication dont je suis l'auteur |
| Utilisateur | associer une recette à une catégorie | permettre son classement |
| Utilisateur | associer une recette à un film ou une série | relier la recette à l'œuvre qui l'inspire |
| Utilisateur | commenter une recette lorsque cette fonctionnalité est disponible | partager mon avis |

## Administrateur

| En tant que... | Je veux... | Afin de... |
| --- | --- | --- |
| Administrateur | accéder à un tableau de bord | gérer l'application |
| Administrateur | gérer les utilisateurs | administrer les comptes |
| Administrateur | gérer les recettes | administrer les contenus culinaires |
| Administrateur | gérer les catégories | maintenir le classement des recettes |
| Administrateur | gérer les médias | maintenir le catalogue de films et séries |
| Administrateur | modérer les commentaires | administrer les contenus publiés |

---

# Conception de la base de données

## MCD — Modèle Conceptuel de Données

Le **MCD** décrit les entités principales et leurs relations sans dépendre de leur implémentation SQL.

### Entités

- `USER`
- `RECIPE`
- `CATEGORY`
- `MEDIA`
- `COMMENT`

### Relations et cardinalités

#### USER — RECIPE

```text
USER (0,N) -------- crée -------- (1,1) RECIPE
```

Un utilisateur peut créer zéro ou plusieurs recettes.

Une recette est créée par un seul utilisateur.

#### CATEGORY — RECIPE

```text
CATEGORY (0,N) ----- classe ------ (1,1) RECIPE
```

Une catégorie peut contenir zéro ou plusieurs recettes.

Une recette appartient à une catégorie.

#### MEDIA — RECIPE

```text
MEDIA (0,N) ------- inspire ------ (1,1) RECIPE
```

Un film ou une série peut inspirer zéro ou plusieurs recettes.

Une recette est associée à un média.

#### USER — COMMENT

```text
USER (0,N) -------- écrit ------- (1,1) COMMENT
```

Un utilisateur peut écrire zéro ou plusieurs commentaires.

Un commentaire appartient à un utilisateur.

#### RECIPE — COMMENT

```text
RECIPE (0,N) ------ reçoit ------ (1,1) COMMENT
```

Une recette peut recevoir zéro ou plusieurs commentaires.

Un commentaire est associé à une recette.

---

# MLD — Modèle Logique de Données

Le **MLD** transforme les relations du MCD en tables, clés primaires et clés étrangères.

Dans une relation **1,N**, la clé étrangère est placée du côté **N**.

```text
USER
----
id (PK)
username
email
password
birth_date
role
date_created


CATEGORY
--------
id (PK)
name
description


MEDIA
-----
id (PK)
title
type
description
image_url
release_date


RECIPE
------
id (PK)
title
description
ingredients
instructions
difficulte
image_url
prep_time
cook_time
date_created
user_id (FK -> USER.id)
category_id (FK -> CATEGORY.id)
media_id (FK -> MEDIA.id)


COMMENT
-------
id (PK)
content
date_created
user_id (FK -> USER.id)
recipe_id (FK -> RECIPE.id)
```

## Placement des clés étrangères

- `user_id` dans `RECIPE` car une recette appartient à un utilisateur.
- `category_id` dans `RECIPE` car une recette appartient à une catégorie.
- `media_id` dans `RECIPE` car une recette appartient à un film ou une série.
- `user_id` dans `COMMENT` car un commentaire est écrit par un utilisateur.
- `recipe_id` dans `COMMENT` car un commentaire appartient à une recette.

---

# MPD — Modèle Physique de Données

Le **MPD** représente l'implémentation physique de la base de données dans PostgreSQL.

Les types et contraintes doivent rester cohérents avec les modèles Sequelize utilisés dans le projet.

```sql
users (
    id INTEGER PRIMARY KEY,
    username VARCHAR,
    email VARCHAR UNIQUE,
    password VARCHAR,
    birth_date DATE,
    role VARCHAR,
    date_created TIMESTAMP
)

categories (
    id INTEGER PRIMARY KEY,
    name VARCHAR,
    description TEXT
)

media (
    id INTEGER PRIMARY KEY,
    title VARCHAR,
    type VARCHAR,
    description TEXT,
    image_url TEXT,
    release_date DATE
)

recipes (
    id INTEGER PRIMARY KEY,
    title VARCHAR,
    description TEXT,
    ingredients TEXT,
    instructions TEXT,
    difficulte VARCHAR,
    image_url TEXT,
    prep_time INTEGER,
    cook_time INTEGER,
    date_created TIMESTAMP,
    user_id INTEGER REFERENCES users(id),
    category_id INTEGER REFERENCES categories(id),
    media_id INTEGER REFERENCES media(id)
)

comments (
    id INTEGER PRIMARY KEY,
    content TEXT,
    date_created TIMESTAMP,
    user_id INTEGER REFERENCES users(id),
    recipe_id INTEGER REFERENCES recipes(id)
)
```

---

# Préparation technique

## Frontend

- Svelte 5
- Vite
- JavaScript
- HTML
- CSS
- `svelte-spa-router`

## Backend

- Node.js
- Express
- Sequelize
- PostgreSQL

## Authentification et sécurité

- JSON Web Token (JWT)
- Argon2
- Helmet
- CORS
- Express Rate Limit
- Express Validator
- `dotenv`

## Outils

- Git
- GitHub
- Visual Studio Code
- npm

---

# Frontend

Le frontend constitue l'interface utilisateur de Ciné Délices.

Il comprend notamment :

- une interface responsive ;
- une navigation entre les différentes pages ;
- une page d'accueil ;
- une page Films / Séries ;
- une page Recettes ;
- des fiches détaillées ;
- les formulaires d'inscription et de connexion ;
- l'espace utilisateur ;
- l'espace administrateur ;
- les formulaires de création et modification de recettes ;
- les pages légales et informatives ;
- les appels vers l'API REST du backend.

L'URL du backend peut être définie par une variable d'environnement :

```env
VITE_API_URL=http://localhost:3000
```

---

# Backend

Le backend fournit une **API REST** utilisée par le frontend.

L'organisation repose notamment sur :

- les routes ;
- les controllers ;
- les models Sequelize ;
- les middlewares ;
- la connexion PostgreSQL ;
- les seeders et scripts de données ;
- l'authentification JWT.

## Principales ressources de l'API

```text
/api/auth
/api/users
/api/recipes
/api/categories
/api/media
/api/comments
```

Les opérations disponibles dépendent de la ressource, de l'authentification et du rôle de l'utilisateur.

## CRUD des recettes

Le projet met notamment en œuvre les quatre opérations fondamentales du CRUD :

- **Create** : création d'une recette ;
- **Read** : consultation des recettes ;
- **Update** : modification d'une recette ;
- **Delete** : suppression d'une recette.

---

# Fonctionnalités

## Fonctionnalités publiques

- Page d'accueil
- Consultation des films et séries
- Recherche de films et séries
- Consultation des recettes
- Recherche de recettes
- Filtrage par catégorie
- Filtrage par film/série
- Détail d'une recette
- Détail d'un film/série
- Consultation des recettes associées à un média
- Inscription
- Connexion
- Page À propos
- Page Contact
- Politique de confidentialité
- Conditions d'utilisation

## Espace utilisateur

- Profil utilisateur
- Création d'une recette
- Consultation de ses recettes
- Modification de ses recettes
- Suppression de ses recettes
- Association d'une recette à une catégorie
- Association d'une recette à un film ou une série

## Administration

- Tableau de bord
- Gestion des utilisateurs
- Gestion des recettes
- Gestion des catégories
- Gestion des médias
- Modération des commentaires

---

# Sécurité

Plusieurs mécanismes sont utilisés côté backend :

- hachage des mots de passe avec **Argon2** ;
- authentification par **JWT** ;
- routes protégées par middleware ;
- contrôle des droits sur certaines opérations ;
- en-têtes de sécurité avec **Helmet** ;
- configuration **CORS** ;
- limitation du nombre de requêtes avec **Express Rate Limit** ;
- validation de données avec **Express Validator** ;
- paramètres sensibles placés dans des variables d'environnement.

> **Important :** le fichier `.env` contenant les secrets ne doit jamais être envoyé sur GitHub.

---

# Installation locale

## Prérequis

Avant de lancer le projet :

- Node.js
- npm
- PostgreSQL
- une base de données configurée pour Ciné Délices

## Récupération du projet

```bash
git clone <URL_DU_DEPOT>
cd Cin-D-lices-Anna
```

## Installation du backend

```bash
cd BACKEND
npm install
```

Créer le fichier `.env` nécessaire à la connexion PostgreSQL et à l'authentification.

Exemple indicatif :

```env
PORT=3000
DATABASE_URL=<URL_POSTGRESQL>
JWT_SECRET=<SECRET_JWT>
```

Les noms exacts des variables doivent correspondre à ceux utilisés dans la configuration du projet.

Démarrer ensuite le backend avec le script défini dans `package.json`, par exemple :

```bash
npm run dev
```

## Installation du frontend

Dans un autre terminal :

```bash
cd FRONTEND
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite dans le terminal.

---

# Structure du projet

```text
Cin-D-lices-Anna/
│
├── BACKEND/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   │
│   ├── seed.js
│   ├── seed-recipes.js
│   └── package.json
│
├── FRONTEND/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# Préparation à la présentation

Pour présenter le projet, il est important de savoir expliquer :

- l'objectif de Ciné Délices ;
- le parcours d'un visiteur ;
- le parcours d'un utilisateur authentifié ;
- le rôle de l'administrateur ;
- la séparation frontend/backend ;
- le fonctionnement d'une API REST ;
- le CRUD ;
- le rôle des routes ;
- le rôle des controllers ;
- le rôle des models ;
- le rôle des middlewares ;
- le fonctionnement de Sequelize ;
- les relations entre les tables ;
- le MCD ;
- le MLD ;
- le MPD ;
- le fonctionnement de JWT ;
- le hachage des mots de passe avec Argon2 ;
- le rôle des variables d'environnement ;
- les principales mesures de sécurité.

---

# État du projet

Les principales fonctionnalités de **Ciné Délices** ont été développées et testées localement.

La prochaine étape consiste à effectuer :

1. les contrôles techniques finaux ;
2. la préparation au déploiement ;
3. le déploiement de l'application ;
4. la vérification de la version déployée ;
5. la finalisation des documents de présentation.

---

# Auteur

**Anna BUFFO**

Projet réalisé dans le cadre de la préparation au titre professionnel **Développeur Web et Web Mobile (DWWM)**.