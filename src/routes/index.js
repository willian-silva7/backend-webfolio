const { Router } = require('express');

const usersRouter = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const portfoliosRouter = require('./portfolios.routes');
const profileRouter = require('./profile.routes');
const observationsRouter = require('./observations.routes');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/portifolio', portfoliosRouter);
routes.use('/profile', profileRouter);
routes.use('/observation', observationsRouter);

module.exports = routes;
