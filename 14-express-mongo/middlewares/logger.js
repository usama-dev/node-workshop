const logger = (req, res, next) => {
	console.log(`Log -- Request URL: ${req.url} -- Method: ${req.method} -- Time: ${new Date()}`);
	next();		// Pass the request to the next middleware
};

exports.logger = logger;