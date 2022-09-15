import express from 'express';
import { checkNewUser, checkUserLogin } from '../schemas/auth.schemas.js';
import { postUser, postLogin } from '../controllers/auth.controllers.js';

const authRouter = express.Router();

authRouter.post('/sign-up', checkNewUser, postUser);
authRouter.post('/login', checkUserLogin, postLogin);

export default authRouter;