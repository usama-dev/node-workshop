// The process object is a global that provides information about, and control over, the current Node.js process.


// You can check all the properties, methods attached to the process object.
console.log(process);


// There are multiple properties, methods and events attached to the process object


// 1- Properties examples:
console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`);  
console.log(`Process Platform: ${process.platform}`);  
console.log(`Process Version: ${process.version}`);  
console.log(`Env: ${process.env}`);  


// 2- Methods examples:
console.log(`Current directory: ${process.cwd()}`);  
console.log(`Memory Usage: ${process.memoryUsage()}`);  
console.log(`Uptime: ${process.uptime()}`);  


// 3- Events examples:
process.on('exit', (code) => console.log(`About to exit with code: ${code}`) );