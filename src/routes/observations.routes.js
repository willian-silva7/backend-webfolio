const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ObservationController = require('../controllers/ObservationController');

const observationsRouter = Router();

observationsRouter.use(ensureAuthenticated);
observationsRouter.put(
  '/:portfolio_id/:observation_id',
  ObservationController.update,
);

observationsRouter.get('/:observation_id', ObservationController.show);

module.exports = observationsRouter;
