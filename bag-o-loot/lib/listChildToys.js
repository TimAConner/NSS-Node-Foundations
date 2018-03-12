'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

module.exports.listChildsToys = ({childName}) => new Promise((resolve, reject) => {
    db.all(`
    SELECT name 
    FROM toys 
    WHERE child_id = 
        (SELECT child_id 
            FROM children 
            WHERE name='${childName}'
        );
    `, (err, data) => {
        if(err) reject(err);
        else resolve(data);
    });
});