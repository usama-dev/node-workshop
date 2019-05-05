const mongoose = require('mongoose');
const User = mongoose.model('User');

// Homepage
exports.getHome = async (req, res) => {
	
	res.render('home');
};

// Get Users Page
exports.getUsers = async (req, res) => {

	const users = await User.find();	// Find all Users

	res.render('getusers', {users});
};

// Post User Page
exports.postUsers = async (req, res) => {
	res.render('postusers');
};