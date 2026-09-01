import {
    Comment,
    User,
    Recipe,
} from "../models/index.js";

/* INCLUDES COMMUNS */

const commentIncludes = [
    {
        model: User,
        as: "author",
        attributes: ["id", "username"],
    },
    {
        model: Recipe,
        as: "recipe",
        attributes: ["id", "title"],
    },
];

/* CREER UN COMMENTAIRE */

export const createComment = async (req, res) => {
    try {
        const {
            content,
            recipe_id,
        } = req.body;

        if (!content || !content.trim() || !recipe_id) {
            return res.status(400).json({
                message:
                    "Le contenu du commentaire et la recette sont obligatoires.",
            });
        }

        const recipe = await Recipe.findByPk(recipe_id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recette introuvable.",
            });
        }

        const comment = await Comment.create({
            content: content.trim(),
            recipe_id,
            user_id: req.user.id,
        });

        const createdComment = await Comment.findByPk(
            comment.id,
            {
                include: commentIncludes,
            }
        );

        return res.status(201).json({
            message: "Commentaire ajouté avec succès.",
            comment: createdComment,
        });
    } catch (error) {
        console.error(
            "Erreur création commentaire :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la création du commentaire.",
        });
    }
};

/* RECUPERER TOUS LES COMMENTAIRES */

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: commentIncludes,

            order: [
                ["date_created", "DESC"],
            ],
        });

        return res.status(200).json(comments);
    } catch (error) {
        console.error(
            "Erreur récupération commentaires :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération des commentaires.",
        });
    }
};

/* RECUPERER UN COMMENTAIRE */

export const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(
            req.params.id,
            {
                include: commentIncludes,
            }
        );

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable.",
            });
        }

        return res.status(200).json(comment);
    } catch (error) {
        console.error(
            "Erreur récupération commentaire :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération du commentaire.",
        });
    }
};

/* MODIFIER UN COMMENTAIRE */

export const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(
            req.params.id
        );

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable.",
            });
        }

        const {
            content,
        } = req.body;

        if (!content || !content.trim()) {
            return res.status(400).json({
                message:
                    "Le contenu du commentaire est obligatoire.",
            });
        }

        await comment.update({
            content: content.trim(),
        });

        const updatedComment = await Comment.findByPk(
            comment.id,
            {
                include: commentIncludes,
            }
        );

        return res.status(200).json({
            message:
                "Commentaire modifié avec succès.",
            comment: updatedComment,
        });
    } catch (error) {
        console.error(
            "Erreur modification commentaire :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la modification du commentaire.",
        });
    }
};

/* SUPPRIMER UN COMMENTAIRE */

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(
            req.params.id
        );

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable.",
            });
        }

        await comment.destroy();

        return res.status(200).json({
            message:
                "Commentaire supprimé avec succès.",
        });
    } catch (error) {
        console.error(
            "Erreur suppression commentaire :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la suppression du commentaire.",
        });
    }
};