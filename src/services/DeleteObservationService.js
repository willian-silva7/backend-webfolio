const AppError = require('../errors/AppError');
const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');

class DeleteObservationService {
  async execute({ observation_id, portfolio_id, educator_id }) {
    const portfolio = await Portfolio.findById(portfolio_id).populate(
      'educator',
      '-password',
    );

    if (!portfolio) {
      throw new AppError('Erro ao deletar Observação');
    }

    if (educator_id !== portfolio.educator.id) {
      throw new AppError('Você não tem permissão para esta ação');
    }

    const observation = await Observation.findByIdAndDelete(observation_id);

    if (!observation) {
      throw new AppError('Erro ao deletar Observação');
    }

    portfolio.observations.pop(observation_id);

    await portfolio.save();

    return portfolio;
  }
}

module.exports = DeleteObservationService;
