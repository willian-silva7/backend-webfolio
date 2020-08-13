const Portfolio = require('../models/Portfolio');
const CreatePortfolioService = require('../services/CreatePortfolioService');

module.exports = {
  async create(request, response) {
    try {
      const { nameChildren } = request.body;
      const { id } = request.user;

      const portifolioService = new CreatePortfolioService();

      const portfolio = await portifolioService.execute({
        nameChildren,
        id,
      });

      return response.json(portfolio);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async index(request, response) {
    try {
      const { id } = request.user;
      const portfolios = await Portfolio.find({
        educator: id,
      }).populate('educator');

      return response.json(portfolios);
    } catch (err) {
      return response.status(400).json('Erro ao carregar Portfolios');
    }
  },

  async show(request, response) {
    try {
      const { portfolio_id } = request.params;

      const portfolio = await Portfolio.findById(portfolio_id).populate([
        'educator',
        'observations',
      ]);

      return response.json(portfolio);
    } catch (err) {
      return response.status(400).json('Erro ao carregar Portfolio');
    }
  },

  async delete(request, response) {
    try {
      const { portfolio_id } = request.params;

      const portfolio = await Portfolio.findByIdAndDelete(portfolio_id);

      return response.json(portfolio);
    } catch (err) {
      return response.status(400).json('Erro ao deletar Portfolio');
    }
  },
};
