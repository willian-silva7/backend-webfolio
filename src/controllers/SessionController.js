const AuthenticateUserService = require('../services/AuthenticateUserService');

module.exports = {
  async index(request, response) {
    try {
      const { email, password } = request.body;

      const authenticateUserService = new AuthenticateUserService();

      const { user, token } = await authenticateUserService.execute({
        email,
        password,
      });

      delete user.password;

      return response.json({ user, token });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
