const EventEmitter = require("events");

const page = new EventEmitter();

page.on("click", (button) => {
    console.log(`${button} was clicked`);
});

page.on("mouseenter", (element) => {
    console.log(`Mouse entered ${element}`);
});

page.on("submit", (form) => {
    console.log(`${form} was submitted`);
});

page.on("change", (field, value) => {
    console.log(`${field} changed to ${value}`);
});

page.on("focus", (field) => {
    console.log(`${field} received focus`);
});

page.emit("mouseenter", "Login Button");
page.emit("click", "Login Button");
page.emit("focus", "Email Field");
page.emit("change", "Email Field", "dhruv@example.com");
page.emit("submit", "Login Form");