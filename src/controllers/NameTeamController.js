const NameTeam = require('../models/NameTeam');

module.exports = {
  async create(request, response) {
    const { name } = request.body;

    const nameTeam = await NameTeam.create({
      name,
    });

    return response.json(nameTeam);
  },

  async index(request, response) {
    const nameofTeams = await NameTeam.find();

    return response.json(nameofTeams);
  },
};
