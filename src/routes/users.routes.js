const { Router } = require('express');
const multer = require('multer');
const UserController = require('../controllers/UserController');
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const uploadConfig = require('../config/upload');

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', UserController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  UserAvatarController.update,
);
// usar upload.any para um ou vários arquivos
module.exports = usersRouter;
