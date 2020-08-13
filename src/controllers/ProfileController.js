const User = require('../models/User');

module.exports = {
  async put(request, response) {
    try {
      const { email, name, password } = request.body;
      const { id } = request.user;
      // const updated_at = Date.now;
      const user = await User.findOneAndUpdate(
        id,
        {
          email,
          name,
          password,
          updated_at: new Date(),
        },
        { new: true },
      );

      return response.json(user);
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
