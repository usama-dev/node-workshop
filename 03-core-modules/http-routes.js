// We can create an http server with the help of built-in http module
const http = require('http'); 

// Creating server
const server = http.createServer(function (req, res) {   
	console.log(`URL requested: ${req.url}`);

	// Setting header
	res.writeHead(200, { 'Content-Type': 'text/html' }); 

	// Creating routes
	if (req.url == '/') {
        res.end('Homepage');
    }
    else if (req.url == '/info') {
        res.end('Info Page');
    }
    else if (req.url == '/admin') {
        res.end('Admin Page');
	}
	else {
		res.end('Page not found');
	}

});

// Listening on port
server.listen(5000);

console.log('Node.js web server running at port 5000');