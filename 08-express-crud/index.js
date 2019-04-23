const express = require('express');		// Importing the express package
let { users } = require('./users');		// Importing users

const app = express();		// Instantiating express
app.use(express.json());	// middleware for pasrsing post json data


// GET Route - READ
app.get('/api/users', (req, res) => {
	res.send(users);		// Sending the Users array back as response
});

// POST Route - CREATE
app.post('/api/users', (req, res) => {
	let user = req.body;	// Assigning the value of the posted data to a user variable
	console.log(user);

	users.push(user);		// Pushing the new user to the user Array
	res.send(`User added, ID: ${user.id}`);		// Sending back the response with the id
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

// Listening on port
app.listen(5000, () => console.log('Node.js web server running at port 5000'));