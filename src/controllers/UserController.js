const CreateUserService = require('../services/CreateUserService');
const User = require('../models/User');
const AppError = require('../errors/AppError');

module.exports = {
  async create(request, response) {
    const {
      name, password, email, institution,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      password,
      email,
      institution,
    });

    delete user.password;

    return response.json(user);
  },

  async index(request, response) {
    const { id } = request.params;
    console.log(id);

    const user = await User.findById(id, '-password');

    if (!user) {
      throw new AppError('Erro ao encontrar o Usuário, tente novamente');
    }

    return response.json(user);
  },
};
