const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  number: Number,
  main: Boolean,
  expireAt: Date,
});

PlayerSchema.indexes({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Player', PlayerSchema);
