const { Router } = require('express');
const PortfolioController = require('../controllers/PortfolioController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ObservationController = require('../controllers/ObservationController');

const portfoliosRouter = Router();

portfoliosRouter.use(ensureAuthenticated);
portfoliosRouter.get('/', PortfolioController.index);
portfoliosRouter.get('/:portfolio_id', PortfolioController.show);
portfoliosRouter.post('/', PortfolioController.create);
portfoliosRouter.delete('/:portfolio_id', PortfolioController.delete);
portfoliosRouter.put('/:portfolio_id', PortfolioController.update);

portfoliosRouter.post(
  '/:portfolio_id/observation',
  ObservationController.create,
);

portfoliosRouter.delete(
  '/:portfolio_id/observation/:observation_id',
  ObservationController.delete,
);

module.exports = portfoliosRouter;
