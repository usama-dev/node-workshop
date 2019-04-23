// The fs (file system) module provides an API for interacting with the file system
const fs = require('fs');

// Every method in the fs module has both synchronous and asynchronous.

// Asynchronous read
fs.readFile('data.txt', (err, data) => {
	if (err) return console.log(err);
	console.log(`Asynchronous read: ${data}`);
 });
 
// Synchronous read
let data = fs.readFileSync('data.txt');
console.log(`Synchronous read: ${data}`);


// It is recommended to use the async functions to avoid blocking the main thread

// Creating and writing file content:
fs.writeFile('dummy.txt', 'Hello World!', (err) => { 	// First argument is the path and name of the file, second one is the content and the third one is the callback function
	if (err) console.log(err);
	else console.log('Write operation complete.');
});

// If you want to append content to an existing file:
fs.appendFile('dummy.txt', 'Hello World! This is append', (err) => { 
	if (err) console.log(err);
	else console.log('Append operation complete.');
});

// Rename an existing file:
fs.rename('oldFilename.txt', 'newFilename.txt', (err) => {
	if (err) console.log(err);
	console.log('File Renamed!');
});

// Delete an existing file:
fs.unlink('dummyDelete.txt', (err) => {
	if (err) console.log(err);
    console.log('File Deleted!');
});

// You can check all the available methods here: https://nodejs.org/api/fs.html