const { Router } = require('express');
const PortfolioController = require('../controllers/PortfolioController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const portfoliosRouter = Router();

portfoliosRouter.use(ensureAuthenticated);
portfoliosRouter.get('/', PortfolioController.index);
portfoliosRouter.post('/', PortfolioController.create);

module.exports = portfoliosRouter;
