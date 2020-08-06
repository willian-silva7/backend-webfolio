const Player = require('../models/Player');

module.exports = {
  async create(request, response) {
    const { name, password, email } = request.body;

    const user = { name, password, email };

    // save

    delete user.password;

    return response.json(user);
  },

  async index(request, response) {
    const user = await Player.find();

    return response.json(user);
  },
};
