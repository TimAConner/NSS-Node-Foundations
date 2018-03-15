'use strict';
const express = require('express');
const app = express();
const routes = require("./routes/");

const PORT = 8080;

app.use(`/`, routes);

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));