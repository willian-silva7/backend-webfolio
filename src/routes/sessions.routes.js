const { Router } = require('express');
const UserController = require('../controllers/UserController');

const sessionsRouter = Router();

sessionsRouter.get('/', UserController.index);
sessionsRouter.post('/', UserController.create);

module.exports = sessionsRouter;
