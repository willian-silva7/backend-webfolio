const { verify } = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = function ensureAuthenticated(request, response, next) {
  // validação do Token JWT
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // console.log(decoded);

    const { sub } = decoded; // qual usuario criou o Token

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new Error('Invalid JWT token', 401);
  }
};
