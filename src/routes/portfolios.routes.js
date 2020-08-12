const { Router } = require('express');
const PortfolioController = require('../controllers/PortfolioController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const portfoliosRouter = Router();

portfoliosRouter.use(ensureAuthenticated);
portfoliosRouter.get('/', PortfolioController.index);
portfoliosRouter.get('/:portfolio_id', PortfolioController.show);
portfoliosRouter.post('/', PortfolioController.create);
portfoliosRouter.delete('/:portfolio_id', PortfolioController.delete);

module.exports = portfoliosRouter;
