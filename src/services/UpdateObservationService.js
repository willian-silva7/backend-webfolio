const AppError = require('../errors/AppError');
const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');

class UpdateObservationService {
  async execute({
    title,
    description,
    curriculum_parameters,
    portfolio_id,
    observation_id,
  }) {
    const portfolio = await Portfolio.findById(portfolio_id);
    if (!portfolio) {
      throw new AppError('Erro ao Atualizar Observação');
    }

    const observation = await Observation.findByIdAndUpdate(
      observation_id,
      {
        title,
        description,
        curriculum_parameters,
        updated_at: new Date(),
      },
      { new: true },
    );

    if (!observation) {
      throw new AppError('Erro ao Atualizar Observação');
    }

    portfolio.observations[observation_id] = observation;

    await portfolio.save();

    return observation;
  }
}

module.exports = UpdateObservationService;
