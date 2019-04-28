const express = require('express');		// Importing the express package
let { users } = require('./users');		// Importing users

const app = express();		// Instantiating express


// -------------------------------- MIDDLEWARES START --------------------------------
// 1- Built-in middleware
app.use(express.json());			// Pasrsing post json data
app.use(express.urlencoded());		// Parses incoming requests with urlencoded payloads. Usually of form data like key1=value1&key2=value2. Use {extended = true} for rich objects and arrays to be encoded. 
app.use(express.static('public'));	// For serving static files

// Docs for built-in middlewares: https://expressjs.com/en/api.html#express

// 2- Custom Middleware
app.use((req, res, next) => {
	console.log(`Log -- Request URL: ${req.url} -- Method: ${req.method} -- Time: ${new Date()}`);
	next();		// Pass the request to the next middleware
});

// NOTE: The sequence of middleware matters. For example the following middleware function will run after the previous logging middleware
app.use((req, res, next) => {
	console.log(`Runs after logging`);
	next();
});

// 3- 3rd party Middleware
const responseTime = require('response-time');
app.use(responseTime());	// This will set a HTTP response header which tells the response time for requests

// More 3rd party middlewares can be found here: https://expressjs.com/en/resources/middleware.html

// -------------------------------- MIDDLEWARES END --------------------------------


// -------------------------------- TEMPLATE ENGINE START --------------------------------
app.set('view engine', 'pug');		// Loading the template engine
app.set('views', './');				// Setting the directory for pug files

// Homepage
app.get('/', (req, res) => {
	res.render('home');
});

// Get Users Page
app.get('/getusers', (req, res) => {
	console.log(users);
	res.render('getusers', {users});
});

// Post User Page
app.get('/postusers', (req, res) => {
	res.render('postusers');
});
// -------------------------------- TEMPLATE ENGINE END --------------------------------


// -------------------------------- API ROUTES START --------------------------------

// GET Route - READ
app.get('/api/users', (req, res) => {
	res.send(users);		// Sending the Users array back as response
});

// POST Route - CREATE
app.post('/api/users', (req, res) => {
	let user = req.body;	// Assigning the value of the posted data to a user variable
	console.log(user);

	users.push(user);		// Pushing the new user to the user Array
	res.redirect('/');		// Sending back the response with the id
});

// PUT Route - UPDATE
app.put('/api/users/:id', (req, res) => {
	const user = req.body;			// Assigning the value of the posted data to a user variable
	const id = req.params.id;		// Assessing the Route Parameter variable :id used in the URL

	const userIndex = users.findIndex(item => item.id == id);		// Finding the index of the user with the specified id in the request param

	users[userIndex].name = user.name;		// Setting the new name of the user provided in the body
	users[userIndex].age = user.age;		// Setting the new age of the user provided in the body

	res.send(`User updated, ID: ${id}`);	// Sending back the response with the id

});

// DELETE Route - DELETE
app.delete('/api/users/:id', (req, res) => {
	const id = req.params.id;		// Assessing the Route Parameter variable :id used in the URL

	users = users.filter(item => item.id != id)		// Filtering the Users Array and returing all the elements where id not equal to the id provided in the request and assigning the new array to the Users array.

	res.send(`User deleted, ID: ${id}`);	// Sending back the response with the id
	
})
// -------------------------------- API ROUTES END --------------------------------


// Listening on port
app.listen(5000, () => console.log('Node.js web server running at port 5000'));