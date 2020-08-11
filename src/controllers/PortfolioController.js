// const User = require('../models/User');
// const CreateUserService = require('../services/CreateUserService');

module.exports = {
  async create(request, response) {
    try {
      const { id } = request.user;
      return response.json(id);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async index(request, response) {
    console.log(request.user);
    return response.json({ ok: true });
  },
};
