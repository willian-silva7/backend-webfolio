const User = require('../models/User');
const CreateUserService = require('../services/CreateUserService');
const AppError = require('../errors/AppError');

module.exports = {
  async create(request, response) {
    const { name, password, email } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, password, email });

    delete user.password;

    return response.json(user);
  },

  async index(request, response) {
    const { id } = request.user;
    const user = await User.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado no sistema, tente mais tarde');
    }

    delete user.password;
    return response.json(user);
  },
};
