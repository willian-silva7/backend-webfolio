const { compare } = require('bcryptjs');
const User = require('../models/User');

class AuthenticateUserService {
  async execute({ email, password }) {
    const user = await User.findOne({ email: `${email}` });

    if (!user) {
      throw new Error('incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (passwordMatched === false) {
      throw new Error('incorrect email/password combination');
    }

    return { user };
  }
}

module.exports = AuthenticateUserService;
