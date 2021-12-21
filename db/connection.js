const mongoose = require('mongoose');

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://127.0.0.1:27017/snow-back-end';

mongoose
  .connect(mongoURI)
  .then((instance) => console.log(`DB on ${instance.connections[0].name}`))
  .catch((err) => console.log('connection failed', err));

module.exports = mongoose;
