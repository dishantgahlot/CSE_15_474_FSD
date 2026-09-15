// SYNCHRONOUS:
// Code executes one task at a time.
// Each task must finish before the next task starts.

console.log("Synchronous: Task 1");
console.log("Synchronous: Task 2");
console.log("Synchronous: Task 3");


// ASYNCHRONOUS:
// Code does not wait for the asynchronous task to finish.
// Other code can execute while the task is running.

console.log("Asynchronous: Task 1");

setTimeout(() => {
    console.log("Asynchronous: Task 2");
}, 2000);

console.log("Asynchronous: Task 3");