const mongoose = require("../db/connection");

const SnowfallSchema = new mongoose.Schema({
  // id: { Object },

  address: { type: String, unique: true },
  geoaddress: [String],
  city: String,
  State: String,
  zip: String,
  createdAt: {
    type: Date,
    expires: 40, // 86400
    // default: Date.now,
  },
  status: Boolean,
  notes: String,
});
SnowfallSchema.set("timestamps", true);
const Snowfall = mongoose.model("Snowfall", SnowfallSchema);

module.exports = Snowfall;
