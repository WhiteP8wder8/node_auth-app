import express from 'express';
import { profileController } from '../controllers/profile.controller.js';
import { isAuth } from '../middlewares/isAuthMiddleware.js';

export const profileRoute = new express.Router();

profileRoute.put('/change-name', isAuth, profileController.changeName);
profileRoute.put('/change-password', isAuth, profileController.changePass);
profileRoute.post('/change-mail', isAuth, profileController.changeMail);
profileRoute.get(
  '/change-mail/:resetToken',
  isAuth,
  profileController.activate,
);
profileRoute.put(
  '/change-mail/:resetToken',
  isAuth,
  profileController.applyNewMail,
);
