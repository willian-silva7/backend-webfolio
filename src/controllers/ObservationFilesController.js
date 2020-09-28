const UpdateObservationService = require('../services/UpdateObservationService');

module.exports = {
  async update(request, response) {
    const observationFilename = request.file;
    const { observation_id } = request.params;
    const { portfolio_id } = request.params;

    const updateObservation = new UpdateObservationService();

    const observation = await updateObservation.execute({
      files: observationFilename,
      portfolio_id,
      observation_id,
    });

    return response.json(observation);
  },
};
