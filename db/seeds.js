const Snowfall = require('../models/snowfall');
const data = require('./seeds.json');

Snowfall.deleteMany()
  .then(() => {
    return Snowfall.insertMany(data);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
