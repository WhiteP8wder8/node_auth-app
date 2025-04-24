import { User } from '../models/user.js';
import { mailService } from './mail.service.js';

async function register(name, email, hashedPassword, activationToken) {

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    activationToken,
  });
  await mailService.sendActivationEmail(email, activationToken);
}

export const userService = {
  register,
};
