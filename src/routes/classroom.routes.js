const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ClassRoomController = require('../controllers/ClassRoomController');
const SearchPortfoliosByClassRoomController = require('../controllers/SearchPortfoliosByClassRoomController');

const classRoomRouter = Router();

classRoomRouter.use(ensureAuthenticated);
classRoomRouter.get('/', ClassRoomController.index);
classRoomRouter.get('/:classroom_id', ClassRoomController.show);
classRoomRouter.get(
  '/searchportfolios/:classroom_id',
  SearchPortfoliosByClassRoomController.index,
);

module.exports = classRoomRouter;
