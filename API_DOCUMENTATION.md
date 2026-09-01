# 📚 API Documentation - Cin-D-lices Anna

**Base URL**: `http://localhost:3000` (dev) | `https://cin-delices-api.onrender.com` (prod)

---

## 🔐 Authentication Routes

### POST `/api/auth/register`
Créer un nouveau compte utilisateur.

**Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "username": "johndoe"
}
```

**Response** (201):
```json
{
  "message": "Utilisateur créé avec succès",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "username": "johndoe",
    "role": "user"
  },
  "token": "eyJhbGc..."
}
```

---

### POST `/api/auth/login`
Se connecter et obtenir un JWT.

**Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response** (200):
```json
{
  "message": "Connexion réussie",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "username": "johndoe",
    "role": "user"
  },
  "token": "eyJhbGc..."
}
```

**Error** (401):
```json
{
  "error": "Identifiants incorrects"
}
```

---

## 👤 User Routes

### GET `/api/users/:id`
Récupérer les infos d'un utilisateur.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
{
  "id": 1,
  "email": "user@example.com",
  "username": "johndoe",
  "role": "user",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

### PUT `/api/users/:id`
Mettre à jour le profil utilisateur.

**Headers**:
```
Authorization: Bearer <token>
```

**Body**:
```json
{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

**Response** (200):
```json
{
  "message": "Profil mis à jour",
  "user": {
    "id": 1,
    "username": "newusername",
    "email": "newemail@example.com"
  }
}
```

---

## 🍽️ Recipe Routes

### GET `/api/recipes`
Récupérer toutes les recettes.

**Query Params** (optionnel):
- `categoryId`: Filtrer par catégorie
- `page`: Pagination
- `limit`: Nombre de résultats

**Response** (200):
```json
[
  {
    "id": 1,
    "title": "Pâtes carbonara",
    "description": "Une vraie carbonara italienne",
    "image_url": "https://...",
    "preparation": 15,
    "cooking": 20,
    "servings": 4,
    "category": {
      "id": 1,
      "name": "Plat principal"
    },
    "media": {
      "id": 2,
      "title": "La Vita è Bella"
    },
    "user": {
      "id": 1,
      "username": "johndoe"
    }
  }
]
```

---

### GET `/api/recipes/:id`
Récupérer une recette spécifique.

**Response** (200):
```json
{
  "id": 1,
  "title": "Pâtes carbonara",
  "description": "...",
  "image_url": "https://...",
  "preparation": 15,
  "cooking": 20,
  "servings": 4,
  "ingredients": "400g pâtes\n200g lard\n4 œufs",
  "instructions": "1. Cuire les pâtes\n2. Faire revenir le lard\n3. Mélanger œufs et pâtes",
  "category": { ... },
  "media": { ... },
  "user": { ... },
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

### POST `/api/recipes`
Créer une nouvelle recette (utilisateur authentifié).

**Headers**:
```
Authorization: Bearer <token>
```

**Body**:
```json
{
  "title": "Pâtes carbonara",
  "description": "Une vraie carbonara italienne",
  "image_url": "https://...",
  "preparation": 15,
  "cooking": 20,
  "servings": 4,
  "ingredients": "400g pâtes\n200g lard\n4 œufs",
  "instructions": "1. Cuire les pâtes\n2. Faire revenir le lard",
  "categoryId": 1,
  "mediaId": 2
}
```

**Response** (201):
```json
{
  "message": "Recette créée avec succès",
  "recipe": {
    "id": 5,
    "title": "Pâtes carbonara",
    ...
  }
}
```

---

### PUT `/api/recipes/:id`
Mettre à jour une recette (propriétaire ou admin).

**Headers**:
```
Authorization: Bearer <token>
```

**Body**:
```json
{
  "title": "Pâtes carbonara améliorées",
  "description": "...",
  ...
}
```

**Response** (200):
```json
{
  "message": "Recette mise à jour",
  "recipe": { ... }
}
```

---

### DELETE `/api/recipes/:id`
Supprimer une recette (propriétaire ou admin).

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
{
  "message": "Recette supprimée avec succès"
}
```

---

## 📂 Category Routes

### GET `/api/categories`
Récupérer toutes les catégories.

**Response** (200):
```json
[
  {
    "id": 1,
    "name": "Plat principal"
  },
  {
    "id": 2,
    "name": "Dessert"
  },
  {
    "id": 3,
    "name": "Entrée"
  }
]
```

---

## 🎬 Media Routes

### GET `/api/media`
Récupérer tous les films/séries.

**Response** (200):
```json
[
  {
    "id": 1,
    "title": "Harry Potter à l'école des sorciers"
  },
  {
    "id": 2,
    "title": "La Vita è Bella"
  }
]
```

---

## ❤️ Favorites Routes

### GET `/api/favorites`
Récupérer les favoris de l'utilisateur.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
[
  {
    "recipeId": 1,
    "recipe": {
      "id": 1,
      "title": "Pâtes carbonara",
      ...
    }
  }
]
```

---

### POST `/api/favorites/:recipeId`
Ajouter une recette aux favoris.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (201):
```json
{
  "message": "Ajouté aux favoris"
}
```

---

### DELETE `/api/favorites/:recipeId`
Retirer une recette des favoris.

**Headers**:
```
Authorization: Bearer <token>
```

**Response** (200):
```json
{
  "message": "Retiré des favoris"
}
```

---

## 🔍 Error Responses

### 400 Bad Request
```json
{
  "error": "Validation error",
  "details": { ... }
}
```

### 401 Unauthorized
```json
{
  "error": "Token invalide ou expiré"
}
```

### 403 Forbidden
```json
{
  "error": "Vous n'avez pas les permissions pour cette action"
}
```

### 404 Not Found
```json
{
  "error": "Ressource non trouvée"
}
```

### 500 Server Error
```json
{
  "error": "Erreur serveur interne"
}
```

---

## 🔑 Authentication Header Format

Toutes les routes protégées demandent un JWT dans le header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczNzc0NDAwfQ...
```

Le token est retourné lors du login ou register et doit être stocké localement côté client.

---

## 📝 Codes de Statut HTTP

| Code | Signification |
|------|---------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

**Généré**: 2024  
**Version API**: 1.0
