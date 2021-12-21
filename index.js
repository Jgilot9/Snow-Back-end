const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers start
const controllerSF = require('./controllers/snowfall');
app.use('/', controllerSF);
// end
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
