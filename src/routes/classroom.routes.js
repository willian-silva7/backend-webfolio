const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ClassRoomController = require('../controllers/ClassRoomController');
const SearchPortfoliosClassRoomController = require('../controllers/SearchPortfoliosClassRoomController');

const classRoomRouter = Router();

classRoomRouter.use(ensureAuthenticated);
classRoomRouter.get('/', ClassRoomController.index);
classRoomRouter.get('/:classroom_id', ClassRoomController.show);
classRoomRouter.get(
  '/searchportfolios/:classroom_id',
  SearchPortfoliosClassRoomController.index,
);

module.exports = classRoomRouter;
