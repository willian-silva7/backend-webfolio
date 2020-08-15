const Portfolio = require('../models/Portfolio');
const CreatePortfolioService = require('../services/CreatePortfolioService');
const AppError = require('../errors/AppError');

module.exports = {
  async create(request, response) {
    const { nameChildren } = request.body;
    const { id } = request.user;

    const portifolioService = new CreatePortfolioService();

    const portfolio = await portifolioService.execute({
      nameChildren,
      id,
    });

    return response.json(portfolio);
  },

  async index(request, response) {
    const { id } = request.user;
    const portfolios = await Portfolio.find({
      educator: id,
    }).populate('educator');

    if (!portfolios) {
      throw new AppError('Erro ao encontrar o portfolio, tente novamente');
    }

    return response.json(portfolios);
  },

  async show(request, response) {
    const { portfolio_id } = request.params;
    const portfolio = await Portfolio.findById(portfolio_id).populate([
      'educator',
      'observations',
    ]);

    if (!portfolio) {
      throw new AppError('Erro ao encontrar o portfolio, tente novamente');
    }

    return response.json(portfolio);
  },

  async delete(request, response) {
    const { portfolio_id } = request.params;
    const portfolio = await Portfolio.findByIdAndDelete(portfolio_id);

    if (!portfolio) {
      throw new AppError('Erro ao deletar Portfolio');
    }

    return response.json(portfolio);
  },
};
