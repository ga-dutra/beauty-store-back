import express from 'express';
import authRouter from './auth.routers.js';
import userRouter from './user.routers.js';
import productsRouter from './products.routers.js';

const router = express.Router();

router.use(authRouter);
router.use(userRouter);
router.use(productsRouter);

export default router;