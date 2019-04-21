const exportedModule = require('./lib/module');

// Check what's exported in module
console.log(exportedModule);

// You can call the functions attached to the exported module
exportedModule.printName('Jeff!');

// Access the variable
console.log(exportedModule.name);

