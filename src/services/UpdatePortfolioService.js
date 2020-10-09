const Portfolio = require('../models/Portfolio');
const ClassRoom = require('../models/ClassRoom');
const AppError = require('../errors/AppError');

class UpdatePortfolioService {
  async execute({ nameChildren, portfolio_id, age, classRoom }) {
    const portfolio = await Portfolio.findById(portfolio_id);

    if (!portfolio) {
      throw new AppError('Portifolio não Encontrado');
    }

    const classRoomExist = await ClassRoom.findOne({ name: classRoom });

    if (!classRoomExist) {
      await ClassRoom.create({ name: classRoom });
    }

    portfolio.nameChildren = nameChildren;
    portfolio.age = age;
    portfolio.classRoom = classRoom;

    await portfolio.save();

    return portfolio;
  }
}

module.exports = UpdatePortfolioService;
