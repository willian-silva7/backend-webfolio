const User = require('../models/User');

module.exports = {
  async put(request, response) {
    try {
      return response.json({ ok: true });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  },

  async show(request, response) {
    const { id } = request.user;
    const user = await User.findById(id);
    delete user.password;
    return response.json(user);
  },
};
