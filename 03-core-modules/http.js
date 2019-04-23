// We can create an http server with the help of built-in http module
const http = require('http'); 

// Creating server
const server = http.createServer(function (req, res) {   
	console.log(`URL requested: ${req.url}`);

	// Setting header
	res.writeHead(200, { 'Content-Type': 'application/json' });

	// Set the response content
	res.write(JSON.stringify({ message: "Hello World"}));  
	
	// End response
	res.end();  

});

// Listening on port
server.listen(5000, () => console.log('Node.js web server running at port 5000'));


// Complete Doc: https://nodejs.org/api/http.html