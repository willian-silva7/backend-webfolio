const ClassRoom = require('../models/ClassRoom');
const AppError = require('../errors/AppError');

module.exports = {
  async index(request, response) {
    const user = await ClassRoom.find();

    if (!user) {
      throw new AppError('Nenhuma Turma encontrada');
    }

    return response.json(user);
  },

  async show(request, response) {
    const { classroom_id } = request.params;

    const user = await ClassRoom.findById(classroom_id);

    if (!user) {
      throw new AppError('Turma não encontrada');
    }

    return response.json(user);
  },
};
