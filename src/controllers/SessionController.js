const AuthenticateService = require('../services/AuthenticateUserService');

module.exports = {
  async index(request, response) {
    try {
      const { email, password } = request.body;

      const authenticateService = new AuthenticateService();

      const { user } = authenticateService.execute({ email, password });

      delete user.password;

      return response.json({ user });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },
};
