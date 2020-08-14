const Portfolio = require('../models/Portfolio');
const CreatePortfolioService = require('../services/CreatePortfolioService');

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

    return response.json(portfolios);
  },

  async show(request, response) {
    const { portfolio_id } = request.params;

    try {
      const portfolio = await Portfolio.findById(portfolio_id).populate([
        'educator',
        'observations',
      ]);

      return response.json(portfolio);
    } catch (err) {
      return response
        .status(400)
        .json('Erro ao encontrar o protfolio, tente novamente');
    }
  },

  async delete(request, response) {
    const { portfolio_id } = request.params;
    try {
      const portfolio = await Portfolio.findByIdAndDelete(portfolio_id);

      return response.json(portfolio);
    } catch (err) {
      return response.status(400).json('Erro ao deletar Portfolio');
    }
  },
};
