const { Router } = require('express');
const UserController = require('../controllers/UserController');

const userRouter = Router();

userRouter.get('/', UserController.index);
userRouter.post('/', UserController.create);

module.exports = userRouter;
