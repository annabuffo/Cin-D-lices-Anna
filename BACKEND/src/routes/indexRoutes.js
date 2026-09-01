import { Router } from "express";

import categoryRoutes from "./categoryRoutes.js";
import commentRoutes from "./commentRoutes.js";
import mediaRoutes from "./mediaRoutes.js";
import recipeRoutes from "./recipeRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/comments", commentRoutes);
router.use("/media", mediaRoutes);
router.use("/recipes", recipeRoutes);
router.use("/users", userRoutes);

export default router;