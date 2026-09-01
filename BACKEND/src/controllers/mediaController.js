import { Media } from "../models/index.js";

/* CRÉER UN MÉDIA */

export const createMedia = async (req, res) => {
    try {
        const {
            title,
            image_url,
            type,
            description,
            release_date
        } = req.body;

        if (!title || !type) {
            return res.status(400).json({
                message: "Le titre et le type sont obligatoires."
            });
        }

        if (type !== "film" && type !== "serie") {
            return res.status(400).json({
                message: "Le type doit être 'film' ou 'serie'."
            });
        }

        const media = await Media.create({
            title: title.trim(),
            image_url,
            type,
            description,
            release_date
        });

        return res.status(201).json({
            message: "Média créé avec succès.",
            media
        });
    } catch (error) {
        console.error("Erreur création média :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la création du média."
        });
    }
};

/* RÉCUPÉRER TOUS LES MÉDIAS */

export const getAllMedia = async (req, res) => {
    try {
        const media = await Media.findAll({
            order: [["title", "ASC"]]
        });

        return res.status(200).json(media);
    } catch (error) {
        console.error("Erreur récupération médias :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la récupération des médias."
        });
    }
};

/* RÉCUPÉRER UN MÉDIA */

export const getMediaById = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);

        if (!media) {
            return res.status(404).json({
                message: "Média introuvable."
            });
        }

        return res.status(200).json(media);
    } catch (error) {
        console.error("Erreur récupération média :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la récupération du média."
        });
    }
};

/* MODIFIER UN MÉDIA */

export const updateMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);

        if (!media) {
            return res.status(404).json({
                message: "Média introuvable."
            });
        }

        const {
            title,
            image_url,
            type,
            description,
            release_date
        } = req.body;

        if (
            type !== undefined &&
            type !== "film" &&
            type !== "serie"
        ) {
            return res.status(400).json({
                message: "Le type doit être 'film' ou 'serie'."
            });
        }

        await media.update({
            title:
                title !== undefined
                    ? title.trim()
                    : media.title,

            image_url:
                image_url !== undefined
                    ? image_url
                    : media.image_url,

            type:
                type !== undefined
                    ? type
                    : media.type,

            description:
                description !== undefined
                    ? description
                    : media.description,

            release_date:
                release_date !== undefined
                    ? release_date
                    : media.release_date
        });

        return res.status(200).json({
            message: "Média modifié avec succès.",
            media
        });
    } catch (error) {
        console.error("Erreur modification média :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la modification du média."
        });
    }
};

/* SUPPRIMER UN MÉDIA */

export const deleteMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);

        if (!media) {
            return res.status(404).json({
                message: "Média introuvable."
            });
        }

        await media.destroy();

        return res.status(200).json({
            message: "Média supprimé avec succès."
        });
    } catch (error) {
        console.error("Erreur suppression média :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la suppression du média."
        });
    }
};