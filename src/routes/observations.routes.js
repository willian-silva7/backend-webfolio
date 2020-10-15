const { Router } = require('express');
const multer = require('multer');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ObservationController = require('../controllers/ObservationController');
const FilesController = require('../controllers/FilesController');
const ObservationToClassroom = require('../controllers/ObservationToClassroom');

const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

const observationsRouter = Router();

observationsRouter.use(ensureAuthenticated);
observationsRouter.post(
  '/',
  upload.array('files'),
  ObservationToClassroom.create,
);

observationsRouter.put(
  '/:portfolio_id/:observation_id',
  ObservationController.update,
);

observationsRouter.get('/:observation_id', ObservationController.show);

observationsRouter.put(
  '/file/:portfolio_id/:observation_id',
  upload.single('file'),
  FilesController.update,
);

module.exports = observationsRouter;
