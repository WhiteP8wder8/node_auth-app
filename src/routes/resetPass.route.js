import express from 'express';
import { isGuest } from '../middlewares/isGuestMiddleware.js';
import { resetPassController } from '../controllers/resetPass.controller.js';

export const resetPassRoute = new express.Router();

resetPassRoute.post('/reset', isGuest, resetPassController.generateToken);

resetPassRoute.put(
  '/reset/:resetToken',
  isGuest,
  resetPassController.updatePass,
);
