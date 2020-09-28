const path = require('path');
const fs = require('fs');
const AppError = require('../errors/AppError');
const uploadConfig = require('../config/upload');

const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');

class SendObservationFilesService {
  async execute({ portfolio_id, observation_id, files }) {
    const portfolio = await Portfolio.findById(portfolio_id);
    if (!portfolio) {
      throw new AppError('Erro ao Atualizar Observação');
    }

    files.map(async file => {
      const observationFilePath = path.join(uploadConfig.directory, file);
      const observationFileExist = await fs.promises.stat(observationFilePath);

      if (observationFileExist) {
        await fs.promises.unlink(observationFilePath);
      }
    });

    const observation = await Observation.findByIdAndUpdate(
      observation_id,
      {
        files,
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

module.exports = SendObservationFilesService;
