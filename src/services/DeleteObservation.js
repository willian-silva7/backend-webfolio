const AppError = require('../errors/AppError');
const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');

class CreateUserService {
  async execute({ observation_id, portfolio_id }) {
    const portfolio = await Portfolio.findById(portfolio_id).populate(
      'educator',
    );

    if (!portfolio) {
      throw new AppError('Erro ao deletar Portfolio');
    }

    const observation = await Observation.findByIdAndDelete(observation_id);

    if (!observation) {
      throw new AppError('Erro ao deletar Portfolio');
    }

    portfolio.observations.pop(observation_id);

    await portfolio.save();

    return portfolio;
  }
}

module.exports = CreateUserService;
