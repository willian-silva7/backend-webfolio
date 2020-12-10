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
    educator_id,
    notes,
  }) {
    const portfolio = await Portfolio.findById(portfolio_id).populate(
      'educator',
      '-password',
    );

    if (!portfolio) {
      throw new AppError('Erro ao Atualizar Observação');
    }

    if (educator_id !== portfolio.educator.id) {
      throw new AppError('Você não tem permissão para esta ação');
    }

    const observation = await Observation.findByIdAndUpdate(
      observation_id,
      {
        title,
        description,
        curriculum_parameters,
        notes,
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
