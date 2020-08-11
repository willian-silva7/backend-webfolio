const User = require('../models/User');
const CreateUserService = require('../services/CreateUserService');

module.exports = {
  async create(request, response) {
    try {
      const { name, password, email } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({ name, password, email });

      delete user.password;

      return response.json(user);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async index(request, response) {
    const nomeEmail = 'will@hotmail.com';
    const users = await User.findOne({ email: `${nomeEmail}` });
    // const user = users.remove();
    return response.json(users);
  },
};
