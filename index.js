const express = require('express');
const app = express();

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
