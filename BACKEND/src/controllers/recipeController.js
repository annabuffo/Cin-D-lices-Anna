import {
    Category,
    Media,
    Recipe,
    User,
} from "../models/index.js";

/* INCLUDES COMMUNS */

const recipeIncludes = [
    {
        model: User,
        as: "author",
        attributes: ["id", "username"],
    },
    {
        model: Category,
        as: "category",
    },
    {
        model: Media,
        as: "media",
    },
];

/* CREER UNE RECETTE */

export const createRecipe = async (req, res) => {
    try {
        const {
            title,
            description,
            ingredients,
            instructions,
            difficulte,
            image_url,
            prep_time,
            cook_time,
            category_id,
            media_id,
        } = req.body;

        if (
            !title ||
            !ingredients ||
            !instructions ||
            !category_id ||
            !media_id
        ) {
            return res.status(400).json({
                message:
                    "Titre, ingrédients, instructions, catégorie et média requis.",
            });
        }

        const category = await Category.findByPk(category_id);

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable.",
            });
        }

        const media = await Media.findByPk(media_id);

        if (!media) {
            return res.status(404).json({
                message: "Film ou série introuvable.",
            });
        }

        const recipe = await Recipe.create({
            title: title.trim(),
            description,
            ingredients,
            instructions,
            difficulte,
            image_url,
            prep_time,
            cook_time,

            category_id,
            media_id,

            user_id: req.user.id,
        });

        const createdRecipe = await Recipe.findByPk(
            recipe.id,
            {
                include: recipeIncludes,
            }
        );

        return res.status(201).json({
            message: "Recette créée avec succès.",
            recipe: createdRecipe,
        });
    } catch (error) {
        console.error(
            "Erreur création recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la création de la recette.",
            error: error.message,
        });
    }
};

/* RECUPERER TOUTES LES RECETTES */

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll({
            include: recipeIncludes,

            order: [
                ["date_created", "DESC"],
            ],
        });

        return res.status(200).json(recipes);
    } catch (error) {
        console.error(
            "Erreur récupération recettes :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération des recettes.",
        });
    }
};

/* RECUPERER UNE RECETTE */

export const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(
            req.params.id,
            {
                include: recipeIncludes,
            }
        );

        if (!recipe) {
            return res.status(404).json({
                message: "Recette introuvable.",
            });
        }

        return res.status(200).json(recipe);
    } catch (error) {
        console.error(
            "Erreur récupération recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération de la recette.",
        });
    }
};

/* MODIFIER UNE RECETTE */

export const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(
            req.params.id
        );

        if (!recipe) {
            return res.status(404).json({
                message: "Recette introuvable.",
            });
        }

        const {
            title,
            description,
            ingredients,
            instructions,
            difficulte,
            image_url,
            prep_time,
            cook_time,
            category_id,
            media_id,
        } = req.body;

        if (category_id) {
            const category =
                await Category.findByPk(category_id);

            if (!category) {
                return res.status(404).json({
                    message:
                        "Catégorie introuvable.",
                });
            }
        }

        if (media_id) {
            const media =
                await Media.findByPk(media_id);

            if (!media) {
                return res.status(404).json({
                    message:
                        "Film ou série introuvable.",
                });
            }
        }

        await recipe.update({
            title:
                title !== undefined
                    ? title.trim()
                    : recipe.title,

            description:
                description !== undefined
                    ? description
                    : recipe.description,

            ingredients:
                ingredients !== undefined
                    ? ingredients
                    : recipe.ingredients,

            instructions:
                instructions !== undefined
                    ? instructions
                    : recipe.instructions,

            difficulte:
                difficulte !== undefined
                    ? difficulte
                    : recipe.difficulte,

            image_url:
                image_url !== undefined
                    ? image_url
                    : recipe.image_url,

            prep_time:
                prep_time !== undefined
                    ? prep_time
                    : recipe.prep_time,

            cook_time:
                cook_time !== undefined
                    ? cook_time
                    : recipe.cook_time,

            category_id:
                category_id !== undefined
                    ? category_id
                    : recipe.category_id,

            media_id:
                media_id !== undefined
                    ? media_id
                    : recipe.media_id,
        });

        const updatedRecipe =
            await Recipe.findByPk(
                recipe.id,
                {
                    include: recipeIncludes,
                }
            );

        return res.status(200).json({
            message:
                "Recette modifiée avec succès.",
            recipe: updatedRecipe,
        });
    } catch (error) {
        console.error(
            "Erreur modification recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la modification de la recette.",
        });
    }
};

/* SUPPRIMER UNE RECETTE */

export const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(
            req.params.id
        );

        if (!recipe) {
            return res.status(404).json({
                message: "Recette introuvable.",
            });
        }

        await recipe.destroy();

        return res.status(200).json({
            message:
                "Recette supprimée avec succès.",
        });
    } catch (error) {
        console.error(
            "Erreur suppression recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la suppression de la recette.",
        });
    }
};