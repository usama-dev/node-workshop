let { users } = require('../data/users');		// Importing users

// Homepage
exports.getHome = (req, res) => {
	res.render('home');
};

// Get Users Page
exports.getUsers =  (req, res) => {
	console.log(users);
	res.render('getusers', {users});
};

// Post User Page
exports.postUsers =  (req, res) => {
	res.render('postusers');
};