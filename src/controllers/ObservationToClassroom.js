const CreateObservationForClassRoomService = require('../services/CreateObservationForClassRoomService');
/// arrumar
module.exports = {
  async create(request, response) {
    const requestFiles = request.files;

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
      requestFiles,
      portfolios,
    });

    return response.json(updatedPortfolios);
  },
};
