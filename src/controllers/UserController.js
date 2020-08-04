const Player = require('../models/Player');
const generateNumber = require('../utils/generateNumber');

module.exports = {
  async store(request, response) {
    const numberPlayers = await Player.countDocuments();
    const { name } = request.body;
    const number = generateNumber();

    if (numberPlayers <= 34) {
      const main = true;
      await Player.create({
        name,
        number,
        main,
        expireAt: Date.now(),
      });
      return response.json({ message: 'Main' });
    }
    const main = false;
    await Player.create({
      name,
      number,
      main,
    });
    return response.json({ message: 'Reserve' });
  },

  async index(request, response) {
    const playersList = await Player.find();

    return response.json(playersList);
  },
};
