const Observation = require('../models/Observation');
const DeleteObservationService = require('../services/DeleteObservationService');
const CreateObservationService = require('../services/CreateObservationService');
const UpdateObservationService = require('../services/UpdateObservationService');
const AppError = require('../errors/AppError');

module.exports = {
  async create(request, response) {
    const { title, description, curriculum_parameters, files } = request.body;
    const { portfolio_id } = request.params;

    const createObservation = new CreateObservationService();

    const observation = await createObservation.execute({
      title,
      description,
      curriculum_parameters,
      files,
      portfolio_id,
    });

    return response.json(observation);
  },

  async update(request, response) {
    const { title, description, curriculum_parameters, files } = request.body;
    const { observation_id } = request.params;
    const { portfolio_id } = request.params;

    const updateObservation = new UpdateObservationService();

    const observation = await updateObservation.execute({
      title,
      description,
      curriculum_parameters,
      files,
      portfolio_id,
      observation_id,
    });

    return response.json(observation);
  },

  async show(request, response) {
    const { observation_id } = request.params;

    const observation = await Observation.findById(observation_id);

    if (!observation) {
      throw new AppError('Erro ao carregar Observação');
    }

    return response.json(observation);
  },

  async delete(request, response) {
    const { observation_id, portfolio_id } = request.params;

    const deleteObservation = new DeleteObservationService();

    const portfolio = await deleteObservation.execute({
      observation_id,
      portfolio_id,
    });

    return response.json(portfolio);
  },
};
