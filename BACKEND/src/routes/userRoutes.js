import { Router } from "express";

import * as userController from "../controllers/userController.js";

import {
    authMiddleware,
    isAdmin
} from "../middlewares/authMiddleware.js";

const router = Router();

/* RÉCUPÉRER TOUS LES UTILISATEURS */
/* ADMIN UNIQUEMENT */

router.get(
    "/",
    authMiddleware,
    isAdmin,
    userController.getAllUsers
);

/* RÉCUPÉRER UN UTILISATEUR */

router.get(
    "/:id",
    authMiddleware,
    userController.getUserById
);

/* CRÉER UN UTILISATEUR */
/* ADMIN UNIQUEMENT */

router.post(
    "/",
    authMiddleware,
    isAdmin,
    userController.createUser
);

/* MODIFIER UN UTILISATEUR */

router.put(
    "/:id",
    authMiddleware,
    userController.updateUser
);

/* SUPPRIMER UN UTILISATEUR */

router.delete(
    "/:id",
    authMiddleware,
    userController.deleteUser
);

export default router;