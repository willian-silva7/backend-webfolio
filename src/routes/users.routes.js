const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const usersRouter = Router();

usersRouter.get('/me', ensureAuthenticated, UserController.index);
usersRouter.post('/', UserController.create);

module.exports = usersRouter;
