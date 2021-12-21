const express = require('express');
const SnowfallRouter = express.Router();
const Snowfall = require('../models/snowfall');

SnowfallRouter.get('/', (req, res, next) => {
  Snowfall.find()
    .then((snow) => res.json(snow))
    .catch(next);
});

SnowfallRouter.post('/', (req, res, next) => {
  Snowfall.create(req.body)
    .then((snow) => res.json(snow))
    .catch(next);
});

SnowfallRouter.put('/:id', (req, res, next) => {
  Snowfall.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((snow) => res.json(snow))
    .catch(next);
});

SnowfallRouter.get('/:id', (req, res, next) => {
  Snowfall.findById(req.params.id)
    .then((snow) => res.json(snow))
    .catch(next);
});

module.exports = SnowfallRouter;
