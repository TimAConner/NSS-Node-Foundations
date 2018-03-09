'use strict';
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

module.exports.removeToy = ({toyName, childName}) => new Promise((resolve, reject) => {
    db.run(`DELETE FROM toys WHERE name='${toyName}' AND child_id=(SELECT child_id FROM children WHERE name='${childName}')`, function(err, data){
        if(err) resolve(false);
        else resolve(true);
    });
});