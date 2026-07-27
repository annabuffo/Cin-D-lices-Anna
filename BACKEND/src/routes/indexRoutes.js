import { Router } from 'express';
import categoryRoutes from '../routes/categoryRoutes.js';
import commentRoutes from '../routes/commentRoutes.js';
import mediaRoutes from '../routes/mediaRoutes.js';
import recipeRoutes from '../routes/recipeRoutes.js';
import userRoutes from '../routes/userRoutes.js';

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);
router.use('/media', mediaRoutes);
router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);

export default router;
