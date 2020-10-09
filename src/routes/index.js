const { Router } = require('express');

const usersRouter = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const portfoliosRouter = require('./portfolios.routes');
const profileRouter = require('./profile.routes');
const observationsRouter = require('./observations.routes');
const passwordRouter = require('./password.routes');
const filesRouter = require('./files.routes');
const classRoomRouter = require('./classroom.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/portfolio', portfoliosRouter);
routes.use('/profile', profileRouter);
routes.use('/observation', observationsRouter);
routes.use('/password', passwordRouter);
routes.use('/files', filesRouter);
routes.use('/classrooms', classRoomRouter);

module.exports = routes;
