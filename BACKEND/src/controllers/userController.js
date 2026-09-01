import argon2 from "argon2";

import { User } from "../models/index.js";

/* RETIRE LE MOT DE PASSE DES DONNEES RENVOYEES */

function cleanUser(user) {
    const userData = user.toJSON();

    delete userData.password_hash;

    return userData;
}

/* CREER UN UTILISATEUR */
/* ROUTE ADMIN */

export const createUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            birth_date,
            role,
        } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message:
                    "Nom d'utilisateur, email et mot de passe requis.",
            });
        }

        const cleanUsername = username.trim();
        const cleanEmail = email.trim().toLowerCase();

        const existingEmail = await User.findOne({
            where: {
                email: cleanEmail,
            },
        });

        if (existingEmail) {
            return res.status(409).json({
                message:
                    "Cette adresse e-mail est déjà utilisée.",
            });
        }

        const existingUsername = await User.findOne({
            where: {
                username: cleanUsername,
            },
        });

        if (existingUsername) {
            return res.status(409).json({
                message:
                    "Ce nom d'utilisateur est déjà utilisé.",
            });
        }

        const hashedPassword = await argon2.hash(password);

        const user = await User.create({
            username: cleanUsername,
            email: cleanEmail,
            password_hash: hashedPassword,
            birth_date: birth_date || null,
            role: role === "admin" ? "admin" : "user",
        });

        return res.status(201).json({
            message: "Utilisateur créé avec succès.",
            user: cleanUser(user),
        });
    } catch (error) {
        console.error(
            "Erreur création utilisateur :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la création de l'utilisateur.",
        });
    }
};

/* RECUPERER TOUS LES UTILISATEURS */
/* ADMIN UNIQUEMENT */

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ["password_hash"],
            },

            order: [
                ["id", "ASC"],
            ],
        });

        return res.status(200).json(users);
    } catch (error) {
        console.error(
            "Erreur récupération utilisateurs :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération des utilisateurs.",
        });
    }
};

/* RECUPERER UN UTILISATEUR */

export const getUserById = async (req, res) => {
    try {
        const userId = Number(req.params.id);

        const isOwner =
            req.user.id === userId;

        const isAdministrator =
            req.user.role === "admin";

        if (!isOwner && !isAdministrator) {
            return res.status(403).json({
                message:
                    "Vous n'êtes pas autorisé à consulter cet utilisateur.",
            });
        }

        const user = await User.findByPk(userId, {
            attributes: {
                exclude: ["password_hash"],
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "Utilisateur introuvable.",
            });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(
            "Erreur récupération utilisateur :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la récupération de l'utilisateur.",
        });
    }
};

/* MODIFIER UN UTILISATEUR */

export const updateUser = async (req, res) => {
    try {
        const userId = Number(req.params.id);

        const isOwner =
            req.user.id === userId;

        const isAdministrator =
            req.user.role === "admin";

        if (!isOwner && !isAdministrator) {
            return res.status(403).json({
                message:
                    "Vous n'êtes pas autorisé à modifier cet utilisateur.",
            });
        }

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: "Utilisateur introuvable.",
            });
        }

        const {
            username,
            email,
            password,
            birth_date,
            role,
        } = req.body;

        if (username !== undefined) {
            user.username = username.trim();
        }

        if (email !== undefined) {
            user.email = email.trim().toLowerCase();
        }

        if (birth_date !== undefined) {
            user.birth_date = birth_date || null;
        }

        if (password) {
            user.password_hash =
                await argon2.hash(password);
        }

        /* SEUL UN ADMIN PEUT MODIFIER LE ROLE */

        if (
            isAdministrator &&
            role !== undefined
        ) {
            if (
                role !== "user" &&
                role !== "admin"
            ) {
                return res.status(400).json({
                    message:
                        "Le rôle doit être user ou admin.",
                });
            }

            user.role = role;
        }

        await user.save();

        return res.status(200).json({
            message:
                "Utilisateur modifié avec succès.",
            user: cleanUser(user),
        });
    } catch (error) {
        if (
            error.name ===
            "SequelizeUniqueConstraintError"
        ) {
            return res.status(409).json({
                message:
                    "Le nom d'utilisateur ou l'adresse e-mail est déjà utilisé.",
            });
        }

        console.error(
            "Erreur modification utilisateur :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la modification de l'utilisateur.",
        });
    }
};

/* SUPPRIMER UN UTILISATEUR */

export const deleteUser = async (req, res) => {
    try {
        const userId = Number(req.params.id);

        const isOwner =
            req.user.id === userId;

        const isAdministrator =
            req.user.role === "admin";

        if (!isOwner && !isAdministrator) {
            return res.status(403).json({
                message:
                    "Vous n'êtes pas autorisé à supprimer cet utilisateur.",
            });
        }

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: "Utilisateur introuvable.",
            });
        }

        await user.destroy();

        return res.status(200).json({
            message:
                "Utilisateur supprimé avec succès.",
        });
    } catch (error) {
        console.error(
            "Erreur suppression utilisateur :",
            error
        );

        return res.status(500).json({
            message:
                "Erreur serveur lors de la suppression de l'utilisateur.",
        });
    }
};