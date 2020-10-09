const mongoose = require('mongoose');

const classRoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ClassRoom', classRoomSchema);
