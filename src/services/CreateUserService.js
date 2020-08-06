const User = require('../models/User');

class CreateUserService {
  async execute(name, email, password) {
    this.checkUserExist = await User.find(email);

    if (this.checkUserExist) {
      throw Error('email já existe no sistema');
    }

    this.user = await User.create({ name, email, password });

    return this.user;
  }
}

module.exports = CreateUserService;
