'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

module.exports.addToy = ({toyName, childName}) => new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
        db.get(`SELECT child_id FROM children WHERE name = '${childName}'`, (err, data) => {
            if (err) reject(err);
            // The child is currently present
            if (data) {
                db.run(`INSERT INTO toys VALUES (null, '${toyName}', (SELECT child_id FROM children WHERE name = '${childName}'), 'false')`, function(err, data){
                    if (err) reject(err);
                    else resolve(this.lastID);
                });
            } else {
                // The child is not present, create it.
                db.run(`INSERT INTO "children" ("child_id", "name")
                VALUES (null, '${childName}')`, (err, data) => {
                    db.run(`INSERT INTO toys VALUES (null, '${toyName}', (SELECT child_id FROM children WHERE name = '${childName}'), 'false')`, function(err, data){
                        if (err) reject(err);
                        else resolve(this.lastID);
                    });
                });
            }
        });
    });
});