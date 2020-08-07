// const User = require('../models/User');
const CreateUserService = require('../services/CreateUserService');

module.exports = {
  async create(request, response) {
    try {
      const { name, password, email } = request.body;

      const createUser = new CreateUserService();
      console.log('chego aqui');

      const user = await createUser.execute({ name, password, email });

      console.log(user);
      delete user.password;

      return response.json(user);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async index(request, response) {
    // const user = await Player.find();

    return response.json({ message: 'ok' });
  },
};
