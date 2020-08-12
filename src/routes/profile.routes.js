const { Router } = require('express');
const ProfileController = require('../controllers/ProfileController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const profileRouter = Router();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', ProfileController.show);
profileRouter.put('/', ProfileController.put);

module.exports = profileRouter;
