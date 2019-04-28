// UPDATED: The functionality of routes are moved to the controller folder.

const express = require('express');
const router = express.Router();
const backendController = require('../controller/backend');

// UPDATED: We can use the following shortcut if we have multiple HTTP methods on same endpoint.
router.route('/users')
	.get(backendController.getUsers)
	.post(backendController.postUser)

router.route('/users/:id')
	.put(backendController.putUser)
	.delete(backendController.delUser)


module.exports = router;