const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRouter = Router();

usersRouter.post('/', UserController.create);

module.exports = usersRouter;
