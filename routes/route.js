const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>Home Page</h1>
            <p>Welcome to my website!</p>
        `);
    }

    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h1>About Page</h1>
            <p>This is the about page.</p>
        `);
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <a href="http://localhost:3000"/">Go back to Home Page</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});