const express = require("express");
const Snowfall = require("../models/snowfall");

const SnowfallRouter = express.Router();

SnowfallRouter.get("/", (req, res, next) => {
  Snowfall.find({})
    .then((snow) => res.json(snow))
    .catch(next);
});
SnowfallRouter.post("/", (req, res, next) => {
  Snowfall.create({})
    .then((snow) => res.json(snow))
    .catch(next);
});
SnowfallRouter.put("/", (req, res, next) => {
  Snowfall.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((snow) => res.json(snow))
    .catch(next);
});
SnowfallRouter.get("/", (req, res, next) => {
  Snowfall.findById(req.params.id)
    .then((snow) => res.json(snow))
    .catch(next);
});

module.exports = SnowfallRouter;
