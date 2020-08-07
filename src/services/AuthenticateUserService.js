const { compare } = require('bcryptjs');
const User = require('../models/User');

class AuthenticateService {
  async execute({ email, password }) {
    this.user = await User.findOne({ where: { email } });

    if (!this.user) {
      throw new Error('incorrect email/password combination');
    }

    const passwordMatched = compare(password, this.user.password);

    if (!passwordMatched) {
      throw new Error('incorrect email/password combination');
    }

    return this.user;
  }
}

module.exports = AuthenticateService;
