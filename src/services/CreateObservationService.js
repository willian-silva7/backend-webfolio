const AppError = require('../errors/AppError');
const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');
const File = require('../models/File');

class CreateObservationService {
  async execute({
    title,
    description,
    curriculum_parameters,
    requestFile,
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
    });

    if (!observation) {
      throw new AppError('Erro ao Criar Observação');
    }

    await Promise.all(
      requestFile.map(async file => {
        const newFile = new File({
          name: file.originalname,
          size: file.size,
          key: file.filename,
          path: file.path,
          url: '',
        });

        await newFile.save();

        observation.files.push(newFile);
      }),
    );

    await observation.save();

    portfolio.observations.push(observation);
    await portfolio.save();

    return observation;
  }
}

module.exports = CreateObservationService;
