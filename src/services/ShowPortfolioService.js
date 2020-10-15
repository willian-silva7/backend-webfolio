const Portfolio = require('../models/Portfolio');
const AppError = require('../errors/AppError');
const User = require('../models/User');

class ShowPortfolioService {
  async execute({ portfolio_id, user_id }) {
    const checkedUser = await User.findById(user_id);

    const portfolio = await Portfolio.findById(portfolio_id).populate([
      ('educator', '-password'),
      'observations',
    ]);

    if (!portfolio) {
      throw new AppError('Erro ao encontrar o portfolio, tente novamente');
    }

    const { permissions } = portfolio;

    if (permissions.indexOf(checkedUser.email) > -1) {
      return portfolio;
    }
    throw new AppError(
      'Você não possui permissão para visualizar este Portifólio',
    );
  }
}

module.exports = ShowPortfolioService;
