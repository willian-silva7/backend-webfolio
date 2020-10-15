const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const FilesController = require('../controllers/FilesController');

const filesRouter = Router();

filesRouter.use(ensureAuthenticated);
filesRouter.delete('/:observation_id/:file_id', FilesController.delete);

module.exports = filesRouter;
