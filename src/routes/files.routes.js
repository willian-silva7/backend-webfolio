const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ObservationFilesController = require('../controllers/ObservationFilesController');

const filesRouter = Router();

filesRouter.use(ensureAuthenticated);
filesRouter.delete(
  '/:observation_id/:file_id',
  ObservationFilesController.delete,
);

module.exports = filesRouter;
