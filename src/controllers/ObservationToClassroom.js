const CreateObservationForClassRoomService = require('../services/CreateObservationForClassRoomService');

module.exports = {
  async create(request, response) {
    const requestFile = request.files;

    const {
      title,
      description,
      curriculum_parameters,
      portfolios,
    } = request.body;

    const createObservation = new CreateObservationForClassRoomService();

    const updatedPortfolios = await createObservation.execute({
      title,
      description,
      curriculum_parameters,
      requestFile,
      portfolios,
    });

    return response.json(updatedPortfolios);
  },
};
