'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');
const { createTables } = require('./createDatabase');

createTables().then(data => {
    console.log('Tables Created!', data);
});