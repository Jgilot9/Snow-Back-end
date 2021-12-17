const express = require('express')
const Snowfall = requrie('../models/snowfall')

const SnowfallRouter = express.Router()

SnowfallRouter.get('/', (req, res, next) => {
    Snowfall.find({})
    .then(snow => res.json(snow))
    .cath(next)
})

module.exports = SnowfallRouter