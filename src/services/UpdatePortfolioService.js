const Portfolio = require('../models/Portfolio');
const AppError = require('../errors/AppError');

class SearchObjectService {
  async execute({ nameChildren, portfolio_id, email }) {
    const portfolio = await Portfolio.findById(portfolio_id);

    if (!portfolio) {
      throw new AppError('Portifolio não Encontrado');
    }

    portfolio.nameChildren = nameChildren;

    if (email) {
      portfolio.permissions.push(email);
    }

    await portfolio.save();

    return portfolio;
  }
}

module.exports = SearchObjectService;
