# 🎬 Guide Démo - Cin-D-lices Anna

## 👤 Identifiants de Test

### 🔑 Compte ADMIN
```
Email: admin@cinedelices.com
Mot de passe: Demo2026!
```

### 👥 Compte USER
```
Email: user@cinedelices.com
Mot de passe: Demo2026!
```

---

## 🚀 Démarrage Rapide pour la Démo

### Étape 1: Démarrer PostgreSQL
```powershell
C:\Program Files\PostgreSQL\17\bin\pg_ctl.exe -D "C:\Program Files\PostgreSQL\17\data" start
```

### Étape 2: Lancer le Backend
```powershell
cd c:\Users\User\Cin-D-lices-Anna\BACKEND
npm start
```
✅ Doit afficher: `🚀 Serveur démarré sur http://localhost:3000`

### Étape 3: Lancer le Frontend (dev)
```powershell
cd c:\Users\User\Cin-D-lices-Anna\FRONTEND
npm run dev
```
✅ Doit afficher: `➜  Local:   http://localhost:5173/`

### Étape 4: Ouvrir le navigateur
```
http://localhost:5173
```

---

## 📋 Scénarios de Démo (5-10 min)

### Scénario 1: Authentification USER
**Durée**: 1 min

1. Aller sur http://localhost:5173
2. Cliquer sur "Se connecter"
3. Entrer:
   - Email: `user@cinedelices.com`
   - Mot de passe: `Demo2026!`
4. ✅ Vous êtes connecté
5. Vérifier le Header affiche le username "ChefCinema"

**Points à noter**:
- ✅ Login fonctionne
- ✅ Token sauvegardé en localStorage
- ✅ Redirection vers home réussie

---

### Scénario 2: Navigation Recettes (USER)
**Durée**: 2 min

1. Aller sur "Toutes les Recettes"
2. ✅ Voir la liste des recettes depuis l'API
3. Tester les filtres:
   - Par catégorie (Entrée, Plat principal, Dessert)
   - Par film/série
4. Tester la recherche (ex: "Pâtes", "Pizza")
5. Cliquer sur une recette → voir les détails

**Points à noter**:
- ✅ API-driven, pas de données statiques
- ✅ Filtres et recherche fonctionnent
- ✅ Images chargent correctement

---

### Scénario 3: Favoris (USER)
**Durée**: 1 min

1. Sur la page "Toutes les Recettes"
2. Cliquer ❤️ sur une recette (ajouter aux favoris)
3. Aller sur "Mes Favoris" (menu profil)
4. ✅ Voir la recette ajoutée
5. Cliquer "RETIRER DES FAVORIS"
6. ✅ Recette disparaît immédiatement

**Points à noter**:
- ✅ Favoris sauvegardés en localStorage
- ✅ Synchro UI immédiate
- ✅ Suppression en temps réel

---

### Scénario 4: Profil USER
**Durée**: 1 min

1. Cliquer sur votre username (top-right)
2. Aller sur "Mon Profil"
3. ✅ Voir les infos utilisateur:
   - Nom: ChefCinema
   - Email: user@cinedelices.com
   - Rôle: user
4. Voir "MES RECETTES" section (possiblement vide)
5. Voir le bouton "+ AJOUTER UNE RECETTE"

**Points à noter**:
- ✅ Infos récupérées de localStorage
- ✅ Layout responsive
- ✅ Boutons de gestion recettes

---

### Scénario 5: Admin Dashboard
**Durée**: 2 min

1. **Déconnexion** (logout du compte USER)
2. **Reconnecter** avec compte ADMIN:
   - Email: `admin@cinedelices.com`
   - Mot de passe: `Demo2026!`
3. ✅ Après login, voir le Header change
4. Aller sur "Admin Dashboard" (si visible dans menu)
5. Explorer les sections:
   - 📊 Statistiques (recettes, utilisateurs)
   - 👥 Gestion des utilisateurs
   - 🍽️ Gestion des recettes
   - 📂 Gestion des catégories
   - 🎬 Gestion des films/séries

**Points à noter**:
- ✅ Rôle "admin" appliqué correctement
- ✅ Access control fonctionne
- ✅ Interface admin différente de user

---

## 🎯 Points Clés à Souligner en Soutenance

### Architecture
```
Utilisateur → Frontend (Svelte) → Backend (Express) → PostgreSQL
                ↑                      ↑
            Vite Build            Node.js Server
```

### Sécurité
- ✅ **JWT Authentication**: Token dans Authorization header
- ✅ **Password Hashing**: Argon2 (resistant aux attaques GPU)
- ✅ **CORS**: Whitelist frontend URL
- ✅ **Role-Based Access**: admin vs user

### Fonctionnalités Clés
- ✅ **Register/Login**: Authentification complète
- ✅ **CRUD Recettes**: API-driven, pas de données statiques
- ✅ **Favoris**: localStorage + API sync
- ✅ **Profil Utilisateur**: Gestion des données
- ✅ **Responsive Design**: Mobile, tablette, desktop

---

## ⚠️ Troubleshooting Démo

| Problème | Solution |
|----------|----------|
| Port 3000 occupé | Tuer le process: `netstat -ano \| findstr :3000` |
| DB pas accessible | Démarrer PostgreSQL avant le backend |
| Blanc blanc au chargement | Attendre 2-3 sec, refresh F5 |
| Erreur CORS | Vérifier FRONTEND_URL dans .env backend |
| Token expiré | Logout/Login pour régénérer le token |

---

## 📸 Captures d'Écran à Préparer

Avant la soutenance, prendre screenshots de:
1. ✅ Page login réussie
2. ✅ Recettes chargées (API)
3. ✅ Favoris ajoutés/retirés
4. ✅ Profil utilisateur
5. ✅ Admin dashboard

---

## 🎤 Discours Recommandé (30 sec)

> "Voici Cin-D-lices, une application web permettant de découvrir des recettes inspirées par vos films et séries préférés.
>
> L'architecture utilise un **frontend Svelte** pour l'interface réactive, un **backend Express** avec **Sequelize ORM**, et **PostgreSQL** pour la persistence.
>
> Niveau sécurité: authentification JWT avec hash Argon2, CORS restrictif, et role-based access control.
>
> Je vais vous montrer une démo rapide:
> 1. Connexion utilisateur
> 2. Consultation des recettes
> 3. Gestion des favoris
> 4. Et l'interface admin"

---

**Bonne démo! 🎬🍽️**
