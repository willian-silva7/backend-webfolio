const AppError = require('../errors/AppError');
const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');

class DeleteObservationService {
  async execute({
    title,
    description,
    curriculum_parameters,
    file,
    portfolio_id,
  }) {
    const portfolio = await Portfolio.findById(portfolio_id);
    if (!portfolio) {
      throw new AppError('Erro ao Criar Observação');
    }

    const observation = await Observation.create({
      title,
      description,
      curriculum_parameters,
      file,
    });

    if (!observation) {
      throw new AppError('Erro ao Criar Observação');
    }

    portfolio.observations.push(observation);

    await portfolio.save();

    return observation;
  }
}

module.exports = DeleteObservationService;
