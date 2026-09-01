import argon2 from "argon2";
import jwt from "jsonwebtoken";

import { User } from "../models/index.js";

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );
}

/* CONNEXION */

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email et mot de passe requis.",
            });
        }

        const user = await User.findOne({
            where: {
                email: email.trim().toLowerCase(),
            },
        });

        if (!user) {
            return res.status(401).json({
                message: "Identifiants invalides.",
            });
        }

        const isPasswordValid = await argon2.verify(
            user.password_hash,
            password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Identifiants invalides.",
            });
        }

        const token = generateToken(user);

        const userResponse = user.toJSON();

        delete userResponse.password_hash;

        return res.status(200).json({
            message: "Connexion réussie.",
            user: userResponse,
            token,
        });
    } catch (error) {
        console.error("Erreur login :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la connexion.",
        });
    }
};

/* INSCRIPTION */

export const register = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            birth_date,
        } = req.body;

        if (!username || !email || !password || !birth_date) {
            return res.status(400).json({
                message:
                    "Nom d'utilisateur, email, mot de passe et date de naissance requis.",
            });
        }

        const cleanUsername = username.trim();
        const cleanEmail = email.trim().toLowerCase();

        const existingUser = await User.findOne({
            where: {
                email: cleanEmail,
            },
        });

        if (existingUser) {
            return res.status(409).json({
                message:
                    "Un utilisateur avec cette adresse e-mail existe déjà.",
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
            birth_date: birth_date
        });

        const token = generateToken(user);

        const userResponse = user.toJSON();

        delete userResponse.password_hash;

        return res.status(201).json({
            message: "Inscription réussie.",
            user: userResponse,
            token,
        });
    } catch (error) {
        console.error("Erreur register :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de l'inscription.",
        });
    }
};