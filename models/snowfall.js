const mongoose = require('../db/connection');

const SnowfallSchema = new mongoose.Schema({
  // id: { Object },

  address: { type: String, unique: true },
  coordinates: { x: Number, y: Number },

  city: String,
  State: String,
  zip: String,
  createdAt: {
    type: Date,
    expires: 40, // 86400
    // default: Date.now,
  },
  status: { type: Boolean, default: false },

  notes: { type: String, default: '' },
});

const Snowfall = mongoose.model('Snowfall', SnowfallSchema);

module.exports = Snowfall;
