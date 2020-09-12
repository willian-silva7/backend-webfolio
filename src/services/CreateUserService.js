const { hash } = require('bcryptjs');
const User = require('../models/User');
const AppError = require('../errors/AppError');

class CreateUserService {
  async execute({ name, email, password }) {
    const checkUserExist = await User.findOne({ email: `${email}` });

    if (checkUserExist) {
      throw new AppError('email já está sendo usado');
    }

    const passwordHashed = await hash(password, 8);

    const createUser = await User.create({
      name,
      email,
      password: passwordHashed,
      avatar:
        'https://images.unsplash.com/photo-1585570796212-2af28ee5c118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=60',
    });

    const user = await User.findById(createUser.id, '-password');

    return user;
  }
}

module.exports = CreateUserService;
