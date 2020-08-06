const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRouter = Router();

usersRouter.get('/', UserController.index);
usersRouter.post('/', UserController.create);

module.exports = usersRouter;
