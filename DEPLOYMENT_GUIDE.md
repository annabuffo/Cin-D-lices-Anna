# 📋 Guide Déploiement & Soutenance - Cin-D-lices Anna

## 🎯 État du Projet

✅ **Backend**: Fonctionnel, connecté PostgreSQL  
✅ **Frontend**: Build validé, API intégrée  
✅ **Auth**: JWT + Argon2 opérationnel  
✅ **Recettes & Favoris**: API-driven  
⚠️ **Minor**: Warning Svelte non-bloquant sur editRecipe.svelte

---

## 🚀 Déploiement Backend (Render)

### Étape 1 : Préparer le Backend

1. **Fichier `.env` à créer** (à la racine du dossier BACKEND) :
```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://user:password@hostname:5432/cin_delices
JWT_SECRET=your_super_secret_jwt_key_change_this
FRONTEND_URL=https://your-frontend-domain.com
```

2. **Fichier `Procfile`** (pour Render) à créer à la racine du BACKEND :
```
web: node server.js
```

3. **package.json** : Vérifier que `"start": "node server.js"` existe dans scripts.

### Étape 2 : Déployer sur Render

1. Va sur https://render.com et crée un compte
2. Connecte ton repo GitHub ou fais un push manuel
3. Crée un nouveau **Web Service**
   - Nom : `cin-delices-api`
   - Environment : Node
   - Build command : `npm install`
   - Start command : `npm start`
4. Ajoute les variables d'environnement (Environment) :
   - `DATABASE_URL` → PostgreSQL URI (Render peut l'héberger)
   - `JWT_SECRET` → Une clé secrète forte
   - `FRONTEND_URL` → L'URL de ton frontend (Vercel, Netlify, etc.)

5. Déploie et récupère l'URL : `https://cin-delices-api.onrender.com`

---

## 🎨 Déploiement Frontend (Vercel)

### Étape 1 : Préparer le Frontend

1. **Fichier `.env.production`** (à la racine du FRONTEND) :
```env
VITE_API_URL=https://cin-delices-api.onrender.com
```

2. **vite.config.js** : Vérifier que `base: '/'` ou `base: './'` selon ta config.

3. **Build local** : `npm run build` doit passer sans erreur bloquante.

### Étape 2 : Déployer sur Vercel

1. Va sur https://vercel.com et crée un compte
2. Connecte ton repo GitHub
3. Clique **"Import Project"** et sélectionne le dossier FRONTEND
4. **Framework**: Vite
5. **Build command**: `npm run build`
6. **Output directory**: `dist`
7. Ajoute les variables d'environnement :
   - `VITE_API_URL=https://cin-delices-api.onrender.com`
8. Déploie et récupère l'URL : `https://cin-delices.vercel.app` (ou ton domaine custom)

---

## 🔧 Alternative : Déploiement Local pour Soutenance

Si tu dois faire une démo en soutenance sur ta machine :

### 1. Démarrer PostgreSQL
```powershell
C:\Program Files\PostgreSQL\17\bin\pg_ctl.exe -D "C:\Program Files\PostgreSQL\17\data" start
```
Ou utiliser pgAdmin.

### 2. Démarrer le Backend
```powershell
cd "c:\Users\User\Cin-D-lices-Anna\BACKEND"
npm start
```
→ Doit afficher `✅ Connexion à PostgreSQL réussie.`

### 3. Lancer le Frontend (en dev)
```powershell
cd "c:\Users\User\Cin-D-lices-Anna\FRONTEND"
npm run dev
```
→ Ouvrira http://localhost:5173

### 4. Tester les flows
- Aller sur http://localhost:5173/register → créer un compte
- Aller sur http://localhost:5173/login → se connecter
- Aller sur http://localhost:5173/recipes → consulter les recettes
- Ajouter/supprimer favoris
- Consulter le profil
- Ajouter une recette (admin ou utilisateur autorisé)

---

## ✅ Checklist Finale Avant Soutenance

- [ ] Frontend build sans erreur bloquante : `npm run build` ✓
- [ ] Backend démarre avec PostgreSQL active : `npm start` ✓
- [ ] Auth fonctionne : login/register/logout
- [ ] Recettes s'affichent depuis l'API
- [ ] Favoris sont sauvegardés
- [ ] Profil utilisateur fonctionne
- [ ] Ajout/suppression de recettes fonctionne
- [ ] Pas d'erreur console (F12)
- [ ] Responsive (mobile/tablette/desktop)
- [ ] .env configuré pour production
- [ ] DATABASE_URL et JWT_SECRET sécurisés

---

## 📦 Base de Données

### Création/Réinitialisation

Si tu dois réinitialiser la base en développement :

```bash
# Dans le dossier BACKEND
npm run seed
# Cela exécute BACKEND/src/seeders/demo-data.js
```

Vérifie que `package.json` contient :
```json
"scripts": {
  "seed": "node src/seeders/demo-data.js"
}
```

---

## 🐛 Troubleshooting

### Backend : "Erreur de connexion PostgreSQL"
- Vérifie que PostgreSQL est actif : `pg_ctl status -D "C:\Program Files\PostgreSQL\17\data"`
- Redémarre PostgreSQL si besoin

### Frontend : "Erreur de CORS"
- Vérifie que `FRONTEND_URL` dans le backend `.env` correspond à l'URL du frontend
- Vérifie que `VITE_API_URL` dans le frontend `.env.production` correspond à l'URL du backend

### Build Svelte échoue
- Exécute `npm install` dans le dossier FRONTEND
- Supprime `node_modules` et `package-lock.json`, puis `npm install` à nouveau

---

## 📝 Dossier Professionnel

Inclure dans ton dossier de projet :

1. **README.md** (racine) → Déjà présent
2. **Architecture.md** → Expliquer les choix tech (Svelte, Express, PostgreSQL, Sequelize, JWT)
3. **API_DOCUMENTATION.md** → endpoints /api/auth, /api/recipes, /api/users
4. **SETUP.md** → Instructions pour démarrer le projet localement
5. **DEPLOYMENT.md** → Ce fichier (guide de déploiement)
6. **.env.example** → Template des variables d'environnement (sans secrets)

---

## 🎤 Points Clés pour la Soutenance

- **Pourquoi Svelte ?** → Réactivité, bundle léger, pas d'état global complexe
- **Pourquoi Sequelize ?** → ORM simplifie les migrations et relations, pas de SQL brut
- **Pourquoi JWT ?** → Stateless auth, scalable, standard industrie
- **Sécurité** → Hash Argon2, CORS, JWT validation, inputValidation côté serveur
- **Scalabilité** → Prête pour le cloud (Render/Vercel), DB séparable, architecture monolithique → microservices facile
- **Favoris** → Utilise le localStorage ET l'API (hybride pour MVP)

---

## 📞 Support Rapide

| Problème | Solution |
|----------|----------|
| Build échoue | `npm install` + clear `node_modules` |
| DB inaccessible | Vérifier PostgreSQL actif |
| CORS error | Vérifier .env FRONTEND_URL/VITE_API_URL |
| Token invalide | Vérifier JWT_SECRET identique partout |
| Port 3000 occupé | `netstat -ano \| findstr :3000` puis kill le process |

---

**Généré le**: `2024`  
**Statut**: ✅ Prêt pour déploiement et soutenance
