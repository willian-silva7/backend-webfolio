const { hash } = require('bcryptjs');
const User = require('../models/User');

class CreateUserService {
  async execute(name, email, password) {
    this.checkUserExist = await User.findOne({ where: { email } });

    if (this.checkUserExist) {
      throw Error('email já está sendo usado');
    }

    const passwordHashed = hash(password, 8);

    const user = await User.create({ name, email, password: passwordHashed });

    return user;
  }
}

module.exports = CreateUserService;
