import { Recipe } from '../models/index.js';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Vous devez être connecté." });
        }

        //JavaScript coupe la chaîne au niveau de l'espace et obtient :["Bearer","abcdef123456"]

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Authentification requise." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token invalide ou expiré." });
    }

};

export const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
    }
    next();
};

export const isRecipeAuthor = async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }

        if (recipe.user_id !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Non autorisé' });
        }

        req.recipe = recipe;
        next();
    } catch {
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};
