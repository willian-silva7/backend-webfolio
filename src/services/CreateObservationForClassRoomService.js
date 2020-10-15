/* eslint-disable no-underscore-dangle */
const AppError = require('../errors/AppError');
const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');
/// arrumar
class CreateObservationForClassRoomService {
  async execute({
    title,
    description,
    curriculum_parameters,
    files,
    portfolios,
  }) {
    if (!portfolios) {
      throw new AppError('Erro ao Criar as observações');
    }

    const portfoliosParsed = { ...portfolios };

    Object.keys(portfoliosParsed).map(async portfolio => {
      const portfolioFounded = await Portfolio.findById(
        portfoliosParsed[portfolio]._id,
      );

      if (!portfolioFounded) {
        throw new AppError('Erro ao Criar Observação');
      }

      const observation = await Observation.create({
        title,
        description,
        curriculum_parameters,
        files,
      });

      if (!observation) {
        throw new AppError('Erro ao Criar Observação');
      }

      portfolioFounded.observations.push(observation);

      await portfolioFounded.save();
    });

    return true;
  }
}

module.exports = CreateObservationForClassRoomService;
