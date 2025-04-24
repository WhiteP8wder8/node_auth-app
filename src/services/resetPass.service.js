import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user.js';
import { mailService } from './mail.service.js';

async function resetPass(email) {
  const resetToken = uuidv4();

  await User.update({ resetToken: resetToken }, { where: { email } });
  await mailService.sendResetPassEmail(email, resetToken);
}

export const resetPassService = {
  resetPass,
};
