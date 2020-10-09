const User = require('../models/User');
const Portfolio = require('../models/Portfolio');
const ClassRoom = require('../models/ClassRoom');
const AppError = require('../errors/AppError');

class CreatePortifolioService {
  async execute({ nameChildren, user_id, classRoom, age }) {
    const user = await User.findById(user_id, '-password');

    if (!user) {
      throw new AppError('Usuário não possui cadastro no sistema');
    }

    const classRoomExist = await ClassRoom.findOne({ name: classRoom });

    if (!classRoomExist) {
      await ClassRoom.create({ name: classRoom });
    }

    const portfolio = await Portfolio.create({
      nameChildren,
      age,
      classRoom,
      educator: user,
      permissions: user.email,
    });

    if (!portfolio) {
      throw new AppError('Não foi possível criar portifólio, tente novamente');
    }

    return portfolio;
  }
}

module.exports = CreatePortifolioService;
