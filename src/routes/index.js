const { Router } = require('express');

// const nameteamsRouter = require('./nameteams.routes');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});
// routes.use('/teamname', nameteamsRouter);

module.exports = routes;
