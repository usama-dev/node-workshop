const express = require('express');
const app = express();
const responseTime = require('response-time');
const routes = require('./routes/index');	// Importing main routes index file
const {logger} = require('./middlewares/logger');

// Setting Template Engine
app.set('view engine', 'pug');		// Loading the template engine
app.set('views', './views');		// Setting the directory for pug files. Default is /views so we can ignore this.

// Setting Built-in Middlewares
app.use(express.json());							// Pasrsing post json data
app.use(express.urlencoded( {extended: true} ));	// Parses incoming requests with urlencoded payloads. Usually of form data like key1=value1&key2=value2. 
app.use(express.static('public'));					// For serving static files


// UPDATED: We want to use logger in just the dev environment. We can access the environment variables using process.env
if (process.env.NODE_ENV == 'dev') {
	app.use(logger);			// Custom logger
	app.use(responseTime());	// Response time for requests
}

// Routes
app.use('/', routes);

// UPDATED: Listening on port set in env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Node.js web server running at port ${PORT}`));