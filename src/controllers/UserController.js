const CreateUserService = require('../services/CreateUserService');

module.exports = {
  async create(request, response) {
    const { name, password, email } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, password, email });

    delete user.password;

    return response.json(user);
  },
};
