const express = require('express');

const app = express();

// Defining route
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Listening on port
app.listen(5000, () => console.log('Node.js web server running at port 5000'));