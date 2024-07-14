import express from 'express';
const router = express.Router();
import userRoutes from './botRoutes.js';

router.use('/bot', userRoutes);

export default router;
