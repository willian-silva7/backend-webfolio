const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const authConfig = require('../config/auth');
const User = require('../models/User');
const AppError = require('../errors/AppError');

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await User.findOne({ email: `${email}` });

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (passwordMatched === false) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

module.exports = AuthenticateUserService;
