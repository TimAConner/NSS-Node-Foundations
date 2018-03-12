'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

module.exports.listToys = () => new Promise((resolve, reject) => {
    db.all(`
    SELECT DISTINCT c.name FROM toys t 
    LEFT JOIN children c
    ON t.child_id = c.child_id
    WHERE c.name not null;
    `, (err, data) => {
        if(err) reject(err);
        else resolve(data);
    });
});
