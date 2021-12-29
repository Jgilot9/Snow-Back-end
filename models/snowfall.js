const mongoose = require('../db/connection');

const SnowfallSchema = new mongoose.Schema({
  matchedAddress: { type: String },
  coordinates: {
    x: { type: Number, unique: true },
    y: { type: Number, unique: true },
  },
  addressComponents: { zip: String },
  createdAt: {
    type: Date,
    expires: 86400,
    default: Date.now,
  },
  status: { type: Boolean, default: false },

  notes: { type: String, default: '' },
});

const Snowfall = mongoose.model('Snowfall', SnowfallSchema);

module.exports = Snowfall;
