
const printName = (name) => {
	console.log(`The name is ${name}`);
}

let name = 'Jeff';

let private = 'Private Var';

// This is how you export the module. You can choose what you want to export
module.exports.name = name;
module.exports.printName = printName;

// Can also be done like:
// exports.name = name;