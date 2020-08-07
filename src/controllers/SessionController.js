const AuthenticateUserService = require('../services/AuthenticateUserService');

module.exports = {
  async index(request, response) {
    try {
      const { email, password } = request.body;

      const authenticateUserService = new AuthenticateUserService();

      const { user } = await authenticateUserService.execute({
        email,
        password,
      });

      delete user.password;

      return response.json({ user });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
