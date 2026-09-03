import {
    Category,
    Media,
    Recipe,
    User
} from "../models/index.js";


const recipeIncludes = [
    {
        model: User,
        as: "author",
        attributes: ["id", "username"]
    },
    {
        model: Category,
        as: "category"
    },
    {
        model: Media,
        as: "media"
    }
];


/* CREER UNE RECETTE */

export const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create({
            ...req.body,
            user_id: req.user.id
        });

        return res.status(201).json(recipe);

    } catch (error) {
        console.error(
            "Erreur création recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la création de la recette."
        });
    }
};


/* RECUPERER TOUTES LES RECETTES */

export const getAllRecipes = async (req, res) => {
    try {
        const userId =
            req.query.userId;

        const mediaId =
            req.query.mediaId;

        const where = {};


        if (userId) {
            where.user_id = userId;
        }


        if (mediaId) {
            where.media_id = mediaId;
        }


        const recipes =
            await Recipe.findAll({
                where,
                include: recipeIncludes,
                order: [
                    ["date_created", "DESC"]
                ]
            });


        return res.status(200).json(
            recipes
        );

    } catch (error) {
        console.error(
            "Erreur récupération recettes :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération des recettes."
        });
    }
};


/* RECUPERER UNE RECETTE */

export const getRecipeById = async (
    req,
    res
) => {
    try {
        const recipe =
            await Recipe.findByPk(
                req.params.id,
                {
                    include:
                        recipeIncludes
                }
            );


        if (!recipe) {
            return res.status(404).json({
                message:
                    "Recette introuvable."
            });
        }


        return res.status(200).json(
            recipe
        );

    } catch (error) {
        console.error(
            "Erreur récupération recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération de la recette."
        });
    }
};


/* MODIFIER UNE RECETTE */

export const updateRecipe = async (
    req,
    res
) => {
    try {
        const recipe =
            await Recipe.findByPk(
                req.params.id
            );


        if (!recipe) {
            return res.status(404).json({
                message:
                    "Recette introuvable."
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
            media_id
        } = req.body;


        if (title !== undefined) {
            recipe.title = title;
        }

        if (description !== undefined) {
            recipe.description =
                description;
        }

        if (ingredients !== undefined) {
            recipe.ingredients =
                ingredients;
        }

        if (instructions !== undefined) {
            recipe.instructions =
                instructions;
        }

        if (difficulte !== undefined) {
            recipe.difficulte =
                difficulte;
        }

        if (image_url !== undefined) {
            recipe.image_url =
                image_url;
        }

        if (prep_time !== undefined) {
            recipe.prep_time =
                prep_time;
        }

        if (cook_time !== undefined) {
            recipe.cook_time =
                cook_time;
        }

        if (category_id !== undefined) {
            recipe.category_id =
                category_id;
        }

        if (media_id !== undefined) {
            recipe.media_id =
                media_id;
        }


        await recipe.save();


        return res.status(200).json(
            recipe
        );

    } catch (error) {
        console.error(
            "Erreur modification recette :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la modification de la recette."
        });
    }
};


/* SUPPRIMER UNE RECETTE */

export const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recette introuvable."
            });
        }

        await recipe.destroy();

        return res.status(204).send();

    } catch (error) {
        console.error("Erreur suppression recette :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la suppression de la recette."
        });
    }
};