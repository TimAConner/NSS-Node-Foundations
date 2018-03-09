'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('acme.sqlite');
const { children } = require('../data/children');

module.exports.createTables = () => {
    return new Promise((resolve, reject) => {
        db.run('DROP TABLE IF EXISTS children')
        .run(`CREATE TABLE IF NOT EXISTS children (child_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT)`, 
            err => {
                if (err) return reject(err);
                 resolve(insertRows());
        });
    });
};

const insertRows = () => {
    return Promise.all(customers.map(({name}) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO children VALUES (null, "${name}")`, function(err){
                if (err) return reject(err);
                resolve(this.lastID);
            });
        });
    }));
};