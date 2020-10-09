const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ClassRoomController = require('../controllers/ClassRoomController');

const classRoomRouter = Router();

classRoomRouter.use(ensureAuthenticated);
classRoomRouter.get('/', ClassRoomController.index);
classRoomRouter.get('/:classroom_id', ClassRoomController.show);

module.exports = classRoomRouter;
