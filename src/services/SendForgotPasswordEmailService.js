const { v4: uuidv } = require('uuid');
const path = require('path');
const User = require('../models/User');
const AppError = require('../errors/AppError');
const UserToken = require('../models/UserToken');
const EtherealMailProvider = require('../providers/MailProvider/EtherealMailProvider');

class SendForgotPasswordEmailService {
  async execute({ email }) {
    const user = await User.findOne({ email: `${email}` });

    if (!user) {
      throw new AppError('Usuário não existe');
    }

    const token = uuidv();
    const userToken = await UserToken.create({
      token,
      user_id: user.id,
    });

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    console.log(forgotPasswordTemplate);

    const mailProvider = new EtherealMailProvider();
    await mailProvider.sendMail({
      to: user,
      body: `Pedido de Recuperação de Senha recebido: ${userToken.token}`,
      forgotPasswordTemplate,
    });
  }
}

module.exports = SendForgotPasswordEmailService;
