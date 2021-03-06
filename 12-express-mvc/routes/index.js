// UPDATED: All routes in one main index file as this helps in separation of concern with large number of endpoints

const express = require('express');
const router = express.Router();
const frontendRoutes = require('./frontend');	// Importing frontend routes
const backedRoutes = require('./backend');		// Importing backend routes

// Frontend routes are availble on /
router.use('/', frontendRoutes);

// Backend routes are availble on /api
router.use('/api', backedRoutes);

module.exports = router;