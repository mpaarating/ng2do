// Set up
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes/routes');
const config = require('./config');
const path = require('path');

const app = express();

// configuration
mongoose.connect('mongodb://localhost/twodew');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// Routes
app.use('/api', routes);

// start the app
app.listen(config.port, () => {
  console.log(`Successfully started application service on port ${config.port}...`);
});
