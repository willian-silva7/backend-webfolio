const { hash } = require('bcryptjs');
const User = require('../models/User');

class CreateUserService {
  async execute({ name, email, password }) {
    const checkUserExist = await User.findOne({ email: `${email}` });

    if (checkUserExist) {
      throw Error('email já está sendo usado');
    }

    const passwordHashed = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: passwordHashed,
    });

    return user;
  }
}

module.exports = CreateUserService;
