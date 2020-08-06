const { Router } = require('express');

const userRouter = require('./users.routes');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/users', userRouter);

module.exports = routes;
