const { Router } = require('express');

const ForgotPasswordController = require('../controllers/ForgotPasswordController');
const ResetPasswordController = require('../controllers/ResetPasswordController');

const passwordRouter = Router();

passwordRouter.post('/forgot', ForgotPasswordController.create);

passwordRouter.post('/reset', ResetPasswordController.create);

module.exports = passwordRouter;
