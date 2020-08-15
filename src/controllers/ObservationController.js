const Portfolio = require('../models/Portfolio');
const Observation = require('../models/Observation');
const DeleteObservationService = require('../services/DeleteObservationService');
const CreateObservationService = require('../services/CreateObservationService');
const AppError = require('../errors/AppError');

module.exports = {
  async create(request, response) {
    const { title, description, curriculum_parameters, file } = request.body;
    const { portfolio_id } = request.params;

    const createObservation = new CreateObservationService();

    const observation = await createObservation.execute({
      title,
      description,
      curriculum_parameters,
      file,
      portfolio_id,
    });

    return response.json(observation);
  },

  // async update(request, response) {
  //   try {
  // const user = await User.findOneAndUpdate(
  //   user_id,
  //   {
  //     email,
  //     name,
  //     password: passwordHashed,
  //     updated_at: new Date(),
  //   },
  //   { new: true },
  // );
  //     return response.json({ ok: true });
  //   } catch (err) {
  //     return response.status(400).json('Erro ao carregar Portfolios');
  //   }
  // },

  // async index(request, response) {
  //   const { id } = request.user;
  //   const portfolios = await Portfolio.find({
  //     educator: id,
  //   }).populate('educator');

  //   if (!portfolios) {
  //     throw new AppError('Erro ao carregar Observação');
  //   }

  //   return response.json(portfolios);
  // },

  // async show(request, response) {
  //   const { portfolio_id } = request.params;

  //   const portfolio = await Portfolio.findById(portfolio_id).populate(
  //     'educator',
  //   );

  //   if (!portfolio) {
  //     throw new AppError('Erro ao carregar Observação');
  //   }

  //   return response.json(portfolio);
  // },

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
