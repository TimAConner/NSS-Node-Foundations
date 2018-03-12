'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

module.exports.deliverToys = ({childName}) => new Promise((resolve, reject) => {
    db.run(`
    UPDATE toys
    SET is_delivered = 'true'
    WHERE child_id = (SELECT child_id FROM children WHERE name='${childName}');
    `, (err, data) => {
        if(err) reject(false);
        else resolve(true);
    });
    return [];
});
