const mongoose = require('../db/connection')

const SnowfallSchema = new mongoose.Schema({
    address: String

})

const Snowfall = mongoose.model('Snowfall' , SnowfallSchema)

module.exports - Snowfall