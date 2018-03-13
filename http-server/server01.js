const http = require('http');
const { readFile } = require('fs');
const server = http.createServer();
server.on('request', (req, res) => {
    console.log('Request received for:', req.url);
    readFile('./index.html', (err, file) => {
        console.log('Returned index.html');
        res.end(file);
    });
})
server.listen(8080);