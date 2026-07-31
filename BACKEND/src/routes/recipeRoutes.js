import { Router } from "express";
import * as recipeController from "../controllers/recipeController.js";
import { authMiddleware, isAdmin, isRecipeAuthor } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);
router.post("/", authMiddleware, recipeController.createRecipe);
router.put("/:id",authMiddleware, isRecipeAuthor, recipeController.updateRecipe);
router.delete("/:id",authMiddleware, isRecipeAuthor, recipeController.deleteRecipe);


export default router;