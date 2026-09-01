import { Router } from "express";

import * as commentController from "../controllers/commentController.js";

import {
    authMiddleware,
    isCommentAuthor
} from "../middlewares/authMiddleware.js";

const router = Router();

/* RÉCUPÉRER TOUS LES COMMENTAIRES */

router.get(
    "/",
    commentController.getAllComments
);

/* RÉCUPÉRER UN COMMENTAIRE */

router.get(
    "/:id",
    commentController.getCommentById
);

/* CRÉER UN COMMENTAIRE */

router.post(
    "/",
    authMiddleware,
    commentController.createComment
);

/* MODIFIER UN COMMENTAIRE */

router.put(
    "/:id",
    authMiddleware,
    isCommentAuthor,
    commentController.updateComment
);

/* SUPPRIMER UN COMMENTAIRE */

router.delete(
    "/:id",
    authMiddleware,
    isCommentAuthor,
    commentController.deleteComment
);

export default router;