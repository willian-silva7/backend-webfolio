const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  nameChildren: { type: String, required: true },
  observations: [{ type: String }],
  educator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
