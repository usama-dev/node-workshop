// Node has a built-in events module and many of the core Node API is built around asynchronous event-driven architecture
const EventEmitter = require('events');

// Create an object of EventEmitter class
const emitter = new EventEmitter();

// Subscribing event
emitter.on('msg', (data) => {		// The first argument is the name of the event you want to register. The second arugument is the callback function. Also .on and .addListener are the same    
    console.log(`Event triggered: ${data}`);
});

// Firing event
emitter.emit('msg', 'Hey! This msg is from the emit');


// Complete Doc: https://nodejs.org/api/events.html