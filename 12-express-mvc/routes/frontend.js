// UPDATED: The functionality of routes are moved to the controller folder.

const express = require('express');
const router = express.Router();
const frontendController = require('../controller/frontend');

// Homepage
router.get('/', frontendController.getHome);

// Get Users Page
router.get('/getusers', frontendController.getUsers);

// Post User Page
router.get('/postusers', frontendController.postUsers);

module.exports = router;