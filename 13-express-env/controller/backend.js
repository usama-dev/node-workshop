let { users } = require('../model/users');		// Importing users

// GET Route - READ
exports.getUsers = (req, res) => {
	res.send(users);		// Sending the Users array back as response
};

// POST Route - CREATE
exports.postUser = (req, res) => {
	let user = req.body;	// Assigning the value of the posted data to a user variable
	console.log(user);

	users.push(user);		// Pushing the new user to the user Array
	res.redirect('/');		// Sending back the response with the id
};

// PUT Route - UPDATE
exports.putUser = (req, res) => {
	const user = req.body;			// Assigning the value of the posted data to a user variable
	const id = req.params.id;		// Assessing the Route Parameter variable :id used in the URL

	const userIndex = users.findIndex(item => item.id == id);		// Finding the index of the user with the specified id in the request param

	users[userIndex].name = user.name;		// Setting the new name of the user provided in the body
	users[userIndex].age = user.age;		// Setting the new age of the user provided in the body

	res.send(`User updated, ID: ${id}`);	// Sending back the response with the id

};

// DELETE Route - DELETE
exports.delUser = (req, res) => {
	const id = req.params.id;		// Assessing the Route Parameter variable :id used in the URL

	users = users.filter(item => item.id != id)		// Filtering the Users Array and returing all the elements where id not equal to the id provided in the request and assigning the new array to the Users array.

	res.send(`User deleted, ID: ${id}`);	// Sending back the response with the id
	
};