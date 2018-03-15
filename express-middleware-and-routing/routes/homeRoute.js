'use strict';
const { Router } = require("express");
const homeRouter = Router();
const path = require('path');

homeRouter.get("/home", (req, res) => {
    res.sendFile('home.html', { root: path.join(__dirname, '../public') });
});

module.exports = homeRouter;

