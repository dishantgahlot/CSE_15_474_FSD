const fs = require("fs");

console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("nextTick");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

fs.readFile(__filename, () => {
    console.log("File read");

    setTimeout(() => {
        console.log("File setTimeout");
    }, 0);

    setImmediate(() => {
        console.log("File setImmediate");
    });

    process.nextTick(() => {
        console.log("File nextTick");
    });
});

console.log("End");