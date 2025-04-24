import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user.js';
import { mailService } from './mail.service.js';

const changeMail = async (user, newEmail) => {
  const resetToken = uuidv4();

  await User.update(
    { resetToken: resetToken },
    { where: { email: user.email } },
  );
  await mailService.sendResetEmailEmail(newEmail, resetToken);
};

const applyNewMail = async (user, newEmail) => {
  await mailService.sendWarningEmail(user.email);

  user.email = newEmail;
  user.resetToken = null;
  await user.save();
};

export const profileService = {
  changeMail,
  applyNewMail,
};
