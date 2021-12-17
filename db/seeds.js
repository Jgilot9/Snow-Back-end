const Snowfall = require('../models/snowfall')
const data = require('./seeds.json')

Snowfall.deleteMany({})
.then(() => Snowfall.insetMany(data))
.then(console.log)
.catch(console.error)
.finally(() => {return process.exit()})

  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
