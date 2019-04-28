const express = require('express');
const app = express();
const responseTime = require('response-time');
const backendRoutes = require('./routes/backend');
const frontendRoutes = require('./routes/frontend');
const {logger} = require('./middlewares/logger');

// Setting Template Engine
app.set('view engine', 'pug');		// Loading the template engine
app.set('views', './views');		// Setting the directory for pug files

// Setting Built-in Middlewares
app.use(express.json());							// Pasrsing post json data
app.use(express.urlencoded( {extended: true} ));	// Parses incoming requests with urlencoded payloads. Usually of form data like key1=value1&key2=value2. 
app.use(express.static('public'));					// For serving static files

// Custom Middlewares
app.use(logger);

// 3rd party Middlewares
app.use(responseTime());	// Response time for requests

// Routes
app.use('/', frontendRoutes);
app.use('/', backendRoutes);

// Listening on port
app.listen(5000, () => console.log('Node.js web server running at port 5000'));