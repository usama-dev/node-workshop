// Node.js path module is used for handling and transforming file paths

const path = require('path');

// Some Examples:
console.log(`Returns the basename of the file: ${path.basename('/path/to/folder/demo.js')}`);
console.log(`Returns extension of the file: ${path.extname('/path/to/folder/demo.js')}`);
console.log(`Normalize path: ${path.normalize('/folder1/folder2/../demo')}`);
console.log(`Join path: ${path.join('Folder1', 'Folder2', 'demo.js')}`);
console.log(`Resolve gives the full absolute path: ${path.resolve('main.js')}`);


// You can check all the available methods here: https://nodejs.org/api/path.html