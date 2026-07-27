import { Comment, User, Recipe } from "../models/index.js";

export const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [
                {
                    model: User,
                    as: "author",
                    attributes: ["id", "username"]
                },
                {
                    model: Recipe,
                    as: "recipe"
                }
            ]
        });

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: "author",
                    attributes: ["id", "username"]
                },
                {
                    model: Recipe,
                    as: "recipe"
                }
            ]
        });

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable"
            });
        }

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable"
            });
        }

        await comment.update(req.body);

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);

        if (!comment) {
            return res.status(404).json({
                message: "Commentaire introuvable"
            });
        }

        await comment.destroy();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

