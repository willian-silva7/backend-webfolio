const User = require('../models/User');
const Portfolio = require('../models/Portfolio');

class CreateUserService {
  async execute({ nameChildren, id }) {
    const user = await User.findById(id);
    const portfolio = await Portfolio.create({
      nameChildren,
      educator: user,
    });

    return portfolio;
  }
}

module.exports = CreateUserService;
