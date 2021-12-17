const { application } = require('express');
const express = require('express');

// Controllers start
const controllerSF = require('./controllers/snowfall')  
app.use('/snow', controllerSF)
// end

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
  });
