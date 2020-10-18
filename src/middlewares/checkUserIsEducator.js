const AppError = require('../errors/AppError');
const User = require('../models/User');

module.exports = async function checkUserIsEducator(request, response, next) {
  const { id } = request.user;
  const user = await User.findById(id);

  if (!user) {
    throw new AppError('Você não possui permissão para fazer isso...', 403);
  }

  if (user.role !== 'educator') {
    throw new AppError('Você não possui permissão para fazer isso...', 403);
  }
  next();
};
