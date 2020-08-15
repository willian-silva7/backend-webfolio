const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ObservationController = require('../controllers/ObservationController');

const observationsRouter = Router();

observationsRouter.use(ensureAuthenticated);
observationsRouter.put(
  '/:portfolio_id/:observation_id',
  ObservationController.update,
);

module.exports = observationsRouter;
