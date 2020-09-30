const AppError = require('../errors/AppError');
const File = require('../models/File');
const Observation = require('../models/Observation');

class DeleteFileService {
  async execute({ observation_id, file_id }) {
    const observation = await Observation.findById(observation_id);

    if (!observation) {
      throw new AppError('Erro ao deletar Arquivo');
    }

    const file = await File.findById(file_id);

    if (!file) {
      throw new AppError('Erro ao deletar Arquivo');
    }

    observation.files.pop(file_id);

    await file.remove();

    await observation.save();
  }
}

module.exports = DeleteFileService;
