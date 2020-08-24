const { v4: uuidv } = require('uuid');
const User = require('../models/User');
const AppError = require('../errors/AppError');
const Mail = require('../models/Mail');
const UserToken = require('../models/UserToken');
const EtherealMailProvider = require('../providers/EtherealMailProvider');

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

    const mailProvider = new EtherealMailProvider();
    await mailProvider.sendMail({
      to: user,
      body: `Pedido de Recuperação de Senha recebido: ${userToken.token}`,
    });

    return user;
  }
}

module.exports = SendForgotPasswordEmailService;
