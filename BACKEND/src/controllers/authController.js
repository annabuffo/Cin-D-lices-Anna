import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("EMAIL REÇU :", email);
        console.log("PASSWORD REÇU :", password);

        const user = await User.findOne({
            where: { email }
        });

        console.log("UTILISATEUR TROUVÉ :", user ? true : false);

        if (!user) {
            return res.status(401).json({
                message: "Identifiants invalides"
            });
        }

        const isPasswordValid = await argon2.verify(
            user.password_hash,
            password
        );

        console.log("MOT DE PASSE VALIDE :", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Identifiants invalides"
            });
        }

        const token = generateToken(user);

        const userResponse = user.toJSON();
        delete userResponse.password_hash;

        return res.status(200).json({
            user: userResponse,
            token
        });

    } catch (error) {
        console.log("ERREUR LOGIN :", error);

        return res.status(500).json({
            error: error.message
        });
    }
};

export const register = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            birth_date
        } = req.body;

        
        const hashedPassword = await argon2.hash(password);

        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Un utilisateur avec cette adresse e-mail existe déjà."
            });
        }

        const user = await User.create({
            username,
            email,
            password_hash: hashedPassword,
            birth_date
        });

        const token = generateToken(user);

        const userResponse = user.toJSON();
        delete userResponse.password_hash;

        return res.status(201).json({
            user: userResponse,
            token
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

