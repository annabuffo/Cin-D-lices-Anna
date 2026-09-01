import { Category } from "../models/index.js";

/* CREER UNE CATEGORIE */

export const createCategory = async (req, res) => {
    try {
        const {
            name,
            description
        } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                message: "Le nom de la catégorie est obligatoire."
            });
        }

        const existingCategory = await Category.findOne({
            where: {
                name: name.trim()
            }
        });

        if (existingCategory) {
            return res.status(409).json({
                message: "Cette catégorie existe déjà."
            });
        }

        const category = await Category.create({
            name: name.trim(),
            description:
                description?.trim() || null
        });

        return res.status(201).json({
            message: "Catégorie créée avec succès.",
            category
        });
    } catch (error) {
        console.error(
            "Erreur création catégorie :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la création de la catégorie."
        });
    }
};

/* RECUPERER TOUTES LES CATEGORIES */

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            order: [
                ["name", "ASC"]
            ]
        });

        return res.status(200).json(categories);
    } catch (error) {
        console.error(
            "Erreur récupération catégories :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération des catégories."
        });
    }
};

/* RECUPERER UNE CATEGORIE */

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(
            req.params.id
        );

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable."
            });
        }

        return res.status(200).json(category);
    } catch (error) {
        console.error(
            "Erreur récupération catégorie :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération de la catégorie."
        });
    }
};

/* MODIFIER UNE CATEGORIE */

export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(
            req.params.id
        );

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable."
            });
        }

        const {
            name,
            description
        } = req.body;

        if (
            name !== undefined &&
            !name.trim()
        ) {
            return res.status(400).json({
                message:
                    "Le nom de la catégorie ne peut pas être vide."
            });
        }

        await category.update({
            name:
                name !== undefined
                    ? name.trim()
                    : category.name,

            description:
                description !== undefined
                    ? description?.trim() || null
                    : category.description
        });

        return res.status(200).json({
            message:
                "Catégorie modifiée avec succès.",
            category
        });
    } catch (error) {
        if (
            error.name ===
            "SequelizeUniqueConstraintError"
        ) {
            return res.status(409).json({
                message:
                    "Cette catégorie existe déjà."
            });
        }

        console.error(
            "Erreur modification catégorie :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la modification de la catégorie."
        });
    }
};

/* SUPPRIMER UNE CATEGORIE */

export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(
            req.params.id
        );

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable."
            });
        }

        await category.destroy();

        return res.status(200).json({
            message:
                "Catégorie supprimée avec succès."
        });
    } catch (error) {
        console.error(
            "Erreur suppression catégorie :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la suppression de la catégorie."
        });
    }
};