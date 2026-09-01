import jwt from "jsonwebtoken";

import {
    Recipe,
    Comment,
} from "../models/index.js";

/* VERIFIE QUE L'UTILISATEUR EST CONNECTE */

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Vous devez être connecté.",
            });
        }

        const parts = authHeader.split(" ");

        if (
            parts.length !== 2 ||
            parts[0] !== "Bearer" ||
            !parts[1]
        ) {
            return res.status(401).json({
                message: "Format du token invalide.",
            });
        }

        const token = parts[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Token invalide ou expiré.",
        });
    }
};

/* VERIFIE LE ROLE ADMIN */

export const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({
            message: "Accès réservé à l'administrateur.",
        });
    }

    next();
};

/* VERIFIE QUE L'UTILISATEUR EST L'AUTEUR DE LA RECETTE */

export const isRecipeAuthor = async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(
            req.params.id
        );

        if (!recipe) {
            return res.status(404).json({
                message: "Recette introuvable.",
            });
        }

        const isAuthor =
            recipe.user_id === req.user.id;

        const isAdministrator =
            req.user.role === "admin";

        if (!isAuthor && !isAdministrator) {
            return res.status(403).json({
                message:
                    "Vous n'êtes pas autorisé à modifier cette recette.",
            });
        }

        req.recipe = recipe;

        next();
    } catch (error) {
        console.error(
            "Erreur vérification auteur recette :",
            error
        );

        return res.status(500).json({
            message: "Erreur serveur.",
        });
    }
};

/* VERIFIE QUE L'UTILISATEUR EST L'AUTEUR DU COMMENTAIRE */

export const isCommentAuthor = async (req, res, next) => {
    try {
        const comment = await Comment.findByPk(
            req.params.id
        );

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable.",
            });
        }

        const isAuthor =
            comment.user_id === req.user.id;

        const isAdministrator =
            req.user.role === "admin";

        if (!isAuthor && !isAdministrator) {
            return res.status(403).json({
                message:
                    "Vous n'êtes pas autorisé à modifier ce commentaire.",
            });
        }

        req.comment = comment;

        next();
    } catch (error) {
        console.error(
            "Erreur vérification auteur commentaire :",
            error
        );

        return res.status(500).json({
            message: "Erreur serveur.",
        });
    }
};