const { Router } = require('express');

const usersRouter = require('./users.routes');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);

module.exports = routes;
