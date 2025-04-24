'use strict';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRoute } from './routes/auth.route.js';
import { resetPassRoute } from './routes/resetPass.route.js';
import { profileRoute } from './routes/profile.route.js';
import { pageNotFound } from './error/pageNotFound.js';

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_SERVER,
    credentials: true,
  }),
);
app.use(authRoute);
app.use('/password', resetPassRoute);
app.use('/profile', profileRoute);
app.use(pageNotFound);

app.listen(PORT);
