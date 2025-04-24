import express from 'express';
import { existUserMiddleware } from '../middlewares/ExistUserMiddleware.js';
import { authController } from '../controllers/auth.controller.js';
import { isGuest } from '../middlewares/isGuestMiddleware.js';
import { isAuth } from '../middlewares/isAuthMiddleware.js';

export const authRoute = new express.Router();

authRoute.post(
  '/registration',
  isGuest,
  existUserMiddleware,
  authController.register,
);
authRoute.get('/activation/:activationToken', isGuest, authController.activate);
authRoute.post('/login', isGuest, authController.login);
authRoute.post('/logout', isAuth, authController.logout);
