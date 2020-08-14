const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');
const DeleteObservation = require('../services/DeleteObservation');

module.exports = {
  async create(request, response) {
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
    // return response.status(400).json(err.message);
  },

  async update(request, response) {
    try {
      return response.json({ ok: true });
    } catch (err) {
      return response.status(400).json('Erro ao carregar Portfolios');
    }
  },

  async index(request, response) {
    const { id } = request.user;
    const portfolios = await Portfolio.find({
      educator: id,
    }).populate('educator');

    return response.json(portfolios);
    // return response.status(400).json('Erro ao carregar Portfolios');
  },

  async show(request, response) {
    const { portfolio_id } = request.params;

    const portfolio = await Portfolio.findById(portfolio_id).populate(
      'educator',
    );

    return response.json(portfolio);
    // return response.status(400).json('Erro ao carregar Portfolio');
  },

  async delete(request, response) {
    const { observation_id, portfolio_id } = request.params;

    const deleteObservation = new DeleteObservation();

    const portfolio = await deleteObservation.execute({
      observation_id,
      portfolio_id,
    });

    return response.json(portfolio);
  },
};
