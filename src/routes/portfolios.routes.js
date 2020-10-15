const { Router } = require('express');
const multer = require('multer');
const { celebrate, Segments, Joi } = require('celebrate');
const PortfolioController = require('../controllers/PortfolioController');
const PermissionController = require('../controllers/PermissionController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ObservationController = require('../controllers/ObservationController');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

const portfoliosRouter = Router();

portfoliosRouter.use(ensureAuthenticated);
portfoliosRouter.get('/', PortfolioController.index);
portfoliosRouter.get('/:portfolio_id', PortfolioController.show);
portfoliosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nameChildren: Joi.string().required(),
      age: Joi.number().required(),
      classRoom: Joi.string().required(),
    },
  }),
  PortfolioController.create,
);

portfoliosRouter.delete('/:portfolio_id', PortfolioController.delete);
portfoliosRouter.put(
  '/:portfolio_id',
  celebrate({
    [Segments.BODY]: {
      nameChildren: Joi.string().required(),
      age: Joi.number().required(),
      classRoom: Joi.string().required(),
    },
  }),
  PortfolioController.update,
);

portfoliosRouter.put(
  '/:portfolio_id/permission',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  PermissionController.update,
);

portfoliosRouter.post(
  '/:portfolio_id/observation',
  upload.array('files'),
  ObservationController.create,
);

portfoliosRouter.delete(
  '/:portfolio_id/observation/:observation_id',
  ObservationController.delete,
);

module.exports = portfoliosRouter;
