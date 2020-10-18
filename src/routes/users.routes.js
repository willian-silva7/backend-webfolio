const { Router } = require('express');
const multer = require('multer');
const { celebrate, Segments, Joi } = require('celebrate');
const UserController = require('../controllers/UserController');
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const uploadConfig = require('../config/upload');

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      type: Joi.string().required(),
    },
  }),
  UserController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  UserAvatarController.update,
);
// usar upload.any para um ou vários arquivos
module.exports = usersRouter;
