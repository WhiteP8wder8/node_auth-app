import express from 'express';
import { isGuest } from '../middlewares/isGuestMiddleware.js';
import { ressetPassController } from '../controllers/resetPass.controller.js';

export const resetPassRoute = new express.Router();

resetPassRoute.post('/reset', isGuest, ressetPassController.genetareToken);
resetPassRoute.put(
  '/reset/:resetToken',
  isGuest,
  ressetPassController.updatePass,
);
