const mongoose = require('mongoose');
const User = mongoose.model('User');

// GET Route - READ
exports.getUsers = async (req, res) => {

	const result = await User.find();	// Find all Users
	res.send(result);
};

// POST Route - CREATE
exports.postUser = async (req, res) => {

	const user = req.body;		// Assigning the value of the posted data to a user variable

	console.log(`User name: ${user.name}, age: ${user.age}`);

	const newUser = new User(user);			// Creating new obj with the post data
	const result = await newUser.save();	// Saving the doc in DB

	res.send(`User added: ${result.name}`);
};

// PUT Route - UPDATE
exports.putUser = async (req, res) => {

	const user = req.body;			// Assigning the value of the posted data to a 'user' variable
	const _id = req.params.id;		// Assessing the Route Parameter variable :id used in the URL

	console.log(`New user name: ${user.name}, age: ${user.age}`);
	console.log(`Update for ID: ${_id}`);

	await User.updateOne({_id}, user);	// Update the doc for the condition provided in the first argument that is _id, second argument is obj of fields that needs to be updated.
	res.send(`User updated`);
};

// DELETE Route - DELETE
exports.delUser = async (req, res) => {

	const _id = req.params.id;		// Assessing the Route Parameter variable :id used in the URL
	
	await User.deleteOne({_id});	// Find the doc with the _id and delete it
	res.send(`User deleted`);
};