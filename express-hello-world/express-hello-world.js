'use strict';
const express = require('express');
const app = express();
const {env: {PORT = 8080}} = process;

if(!isNaN(PORT)){
    app.get('/', (req, res) => {
        res.send(`<h1>Hello World</h1>`);
    });
    app.get('/time', (req, res) => {
        res.send(`${(new Date()).toISOString()}`);
    });
    
    app.listen(PORT, () => {
        console.log(`Listening to port: ${+PORT}`);
    });
} else {
    console.log('The port you provided is not a number.');
    console.log('Usage: [PORT=0000] node express-hello-world.js');
}