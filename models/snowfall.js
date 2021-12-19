const mongoose = require("../db/connection");

const SnowfallSchema = new mongoose.Schema({
  id: Object,

  address: { type: String, unique: true },

  status: Boolean,
  notes: String,
});

const Snowfall = mongoose.model("Snowfall", SnowfallSchema);

module.exports = Snowfall;
