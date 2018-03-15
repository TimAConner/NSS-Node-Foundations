'use strict';
const { Router } = require("express");
const chickenRoute = Router();
const path = require('path');

chickenRoute.get("/see-our-chickens", (req, res) => {
    res.sendFile('our-chickens.html', { root: path.join(__dirname, '../public') });
});

module.exports = chickenRoute;