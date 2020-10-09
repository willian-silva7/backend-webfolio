const ClassRoom = require('../models/ClassRoom');
const AppError = require('../errors/AppError');

module.exports = {
  async index(request, response) {
    const classRoom = await ClassRoom.find();

    if (!classRoom) {
      throw new AppError('Nenhuma Turma encontrada');
    }

    return response.json(classRoom);
  },

  async show(request, response) {
    const { classroom_id } = request.params;

    const classRoom = await ClassRoom.findById(classroom_id);

    if (!classRoom) {
      throw new AppError('Turma não encontrada');
    }

    return response.json(classRoom);
  },
};
