const EventEmitter = require("events");

const events = new EventEmitter();

events.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

events.on("exit", () => {
    console.log("Program is exiting");
});

events.emit("greet", "Dhruv");
events.emit("exit");