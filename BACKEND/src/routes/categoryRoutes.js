import { Router } from "express";

import * as categoryController from "../controllers/categoryController.js";

import {
    authMiddleware,
    isAdmin,
} from "../middlewares/authMiddleware.js";

const router = Router();

/* LECTURE PUBLIQUE */

router.get(
    "/",
    categoryController.getAllCategories
);

router.get(
    "/:id",
    categoryController.getCategoryById
);

/* ADMIN UNIQUEMENT */

router.post(
    "/",
    authMiddleware,
    isAdmin,
    categoryController.createCategory
);

router.put(
    "/:id",
    authMiddleware,
    isAdmin,
    categoryController.updateCategory
);

router.delete(
    "/:id",
    authMiddleware,
    isAdmin,
    categoryController.deleteCategory
);

export default router;