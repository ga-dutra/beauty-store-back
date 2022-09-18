import express from 'express';
import { checkNewUser, checkUserLogin } from '../schemas/auth.schemas.js';
import { postUser, postLogin } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/sign-up', checkNewUser, postUser);
router.post('/login', checkUserLogin, postLogin);

export default router;