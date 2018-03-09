'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

module.exports.addToy = ({toyName, childName}) => new Promise((resolve, reject) => {
    db.run(`INSERT INTO toys VALUES (null, '${toyName}', (SELECT child_id FROM children WHERE name = '${childName}'), 'false')`, function(err, data){
        if(err) reject(err);
        else resolve(this.lastID);
    });
});