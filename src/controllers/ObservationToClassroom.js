const CreateObservationForClassRoomService = require('../services/CreateObservationForClassRoomService');

module.exports = {
  async create(request, response) {
    const {
      title,
      description,
      curriculum_parameters,
      files,
      portfolios,
    } = request.body;

    const createObservation = new CreateObservationForClassRoomService();

    const observation = await createObservation.execute({
      title,
      description,
      curriculum_parameters,
      files,
      portfolios,
    });

    // const observation = {
    //   title,
    //   description,
    //   curriculum_parameters,
    //   files,
    //   portfolios,
    // };

    return response.json({ ok: true });
  },
};
