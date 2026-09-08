const http = require('http');

const server = http.createServer((req, res) => {

    console.log('HTTP Method:', req.method);
    console.log('URL:', req.url);

    if (req.method === 'GET' && req.url === '/') {
        res.end('Home Page');
    }

    else if (req.method === 'GET' && req.url === '/about') {
        res.end('About Page');
    }

    else if (req.method === 'POST' && req.url === '/users') {
        res.end('User Created');
    }

    else {
        res.statusCode = 404;
        res.end('Route Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});