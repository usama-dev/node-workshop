// Node.js os module provides a few basic operating-system related utility functions.
const os = require('os');

// Check all the properties and methods attached to os
console.log(os);


// Some of the examples:

console.log(`Type : ${os.type()}`);
console.log(`platform : ${os.platform()}`);
console.log(`Total memory : ${os.totalmem()}`);
console.log(`free memory : ${os.freemem()}`);
console.log(os.cpus());


// You can check all the available methods here: https://nodejs.org/api/os.html