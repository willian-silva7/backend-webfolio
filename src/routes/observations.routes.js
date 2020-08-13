const { Router } = require('express');
const PortfolioController = require('../controllers/PortfolioController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const observationsRouter = Router();

observationsRouter.use(ensureAuthenticated);
observationsRouter.get('/:portfolio_id', PortfolioController.index);
observationsRouter.get('/:portfolio_id', PortfolioController.show);
observationsRouter.post('/:portfolio_id/', PortfolioController.create);
observationsRouter.delete('/:portfolio_id', PortfolioController.delete);

module.exports = observationsRouter;
