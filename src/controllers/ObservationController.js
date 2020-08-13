const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');

module.exports = {
  async create(request, response) {
    try {
      const { title, description, curriculum_parameters, file } = request.body;
      const { portfolio_id } = request.params;

      const portfolio = await Portfolio.findById(portfolio_id);

      const observation = await Observation.create({
        title,
        description,
        curriculum_parameters,
        file,
      });

      portfolio.observations.push(observation);

      await portfolio.save();

      return response.json(observation);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async update(request, response) {
    try {
      return response.json({ ok: true });
    } catch (err) {
      return response.status(400).json('Erro ao carregar Portfolios');
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

      const portfolio = await Portfolio.findById(portfolio_id).populate(
        'educator',
      );

      return response.json(portfolio);
    } catch (err) {
      return response.status(400).json('Erro ao carregar Portfolio');
    }
  },

  async delete(request, response) {
    try {
      const { observation_id, portfolio_id } = request.params;

      console.log(observation_id);
      console.log(portfolio_id);

      const portfolio = await Portfolio.findById(portfolio_id).populate(
        'educator',
      );

      await Observation.findByIdAndDelete(observation_id);

      await portfolio.save();

      return response.json(portfolio);
    } catch (err) {
      return response.status(400).json('Erro ao deletar Portfolio');
    }
  },
};
