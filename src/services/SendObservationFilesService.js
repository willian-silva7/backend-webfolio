const AppError = require('../errors/AppError');
const Observation = require('../models/Observation');
const File = require('../models/File');

class SendObservationFilesService {
  async execute({ observation_id, file }) {
    const createdFile = await File.create({
      name: file.originalname,
      size: file.size,
      key: file.filename,
      url: '',
    });

    const observation = await Observation.findById(observation_id);

    if (!observation) {
      throw new AppError('Erro ao Atualizar Observação');
    }

    observation.files.push(createdFile);
    observation.updated_at = new Date();
    await observation.save();

    return observation;
  }
}

module.exports = SendObservationFilesService;
