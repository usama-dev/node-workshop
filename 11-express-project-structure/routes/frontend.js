const express = require('express');
const router = express.Router();

let { users } = require('../data/users');		// Importing users

// Homepage
router.get('/', (req, res) => {
	res.render('home');
});

// Get Users Page
router.get('/getusers', (req, res) => {
	console.log(users);
	res.render('getusers', {users});
});

// Post User Page
router.get('/postusers', (req, res) => {
	res.render('postusers');
});

module.exports = router;