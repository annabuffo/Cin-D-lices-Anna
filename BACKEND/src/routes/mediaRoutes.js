import { Router } from "express";
import * as mediaController from "../controllers/mediaController.js";

const router = Router();

router.get("/", mediaController.getAllMedia);
router.get("/:id", mediaController.getMediaById);
router.post("/", mediaController.createMedia);
router.put("/:id", mediaController.updateMedia);
router.delete("/:id", mediaController.deleteMedia);

export default router;