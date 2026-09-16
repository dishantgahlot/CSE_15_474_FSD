const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ id: 1, name: "laptop" }));
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});