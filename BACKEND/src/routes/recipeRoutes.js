import { Router } from "express";

import * as recipeController from "../controllers/recipeController.js";

import {
    authMiddleware,
    isRecipeAuthor,
} from "../middlewares/authMiddleware.js";

const router = Router();

/* LECTURE */

router.get(
    "/",
    recipeController.getAllRecipes
);

router.get(
    "/:id",
    recipeController.getRecipeById
);

/* CREATION */

router.post(
    "/",
    authMiddleware,
    recipeController.createRecipe
);

/* MODIFICATION */

router.put(
    "/:id",
    authMiddleware,
    isRecipeAuthor,
    recipeController.updateRecipe
);

/* SUPPRESSION */

router.delete(
    "/:id",
    authMiddleware,
    isRecipeAuthor,
    recipeController.deleteRecipe
);

export default router;