const SendObservationFilesService = require('../services/SendObservationFilesService');

module.exports = {
  async update(request, response) {
    const { originalname, size, filename } = request.file;
    const { observation_id } = request.params;
    const { portfolio_id } = request.params;

    const file = { originalname, size, filename };

    const updateObservation = new SendObservationFilesService();

    const observation = await updateObservation.execute({
      file,
      observation_id,
    });

    return response.json(observation);
  },
};
