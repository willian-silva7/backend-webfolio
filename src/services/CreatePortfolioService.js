const User = require('../models/User');
const Portfolio = require('../models/Portfolio');
const AppError = require('../errors/AppError');

class CreateUserService {
  async execute({ nameChildren, id }) {
    const user = await User.findById(id);

    if (!user) {
      throw new AppError('Usuário não possui cadastro no sistema');
    }

    const portfolio = await Portfolio.create({
      nameChildren,
      educator: user,
    });

    if (!portfolio) {
      throw new AppError('Não foi possível criar portifólio, tente novamente');
    }

    return portfolio;
  }
}

module.exports = CreateUserService;
