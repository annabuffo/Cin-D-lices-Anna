import { Router } from "express";

import * as mediaController from "../controllers/mediaController.js";

import {
    authMiddleware,
    isAdmin,
} from "../middlewares/authMiddleware.js";

const router = Router();

/* LECTURE PUBLIQUE */

router.get(
    "/",
    mediaController.getAllMedia
);

router.get(
    "/:id",
    mediaController.getMediaById
);

/* ADMIN UNIQUEMENT */

router.post(
    "/",
    authMiddleware,
    isAdmin,
    mediaController.createMedia
);

router.put(
    "/:id",
    authMiddleware,
    isAdmin,
    mediaController.updateMedia
);

router.delete(
    "/:id",
    authMiddleware,
    isAdmin,
    mediaController.deleteMedia
);

export default router;