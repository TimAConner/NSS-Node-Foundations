'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');
const { children } = require('../data/children');
const { toys } = require('../data/toys');

module.exports.createTables = () => {
    return new Promise((resolve, reject) => {
        Promise.all([createToysTable(), createChildrenTable()]).then(values => {
            resolve(values);
        });
    });
};

const createToysTable = () => {
    return new Promise((resolve, reject) => {
        db.run('DROP TABLE IF EXISTS toys')
        .run(`CREATE TABLE IF NOT EXISTS toys (toy_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT, child_id TEXT)`, 
            err => {
                if (err) return reject(err);
                 resolve(insertToyRows());
        });
    });
};

const insertToyRows = () => {
    return Promise.all(toys.map(({name, child_id}) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO toys VALUES (null, "${name}", "${child_id}")`, function(err){
                if (err) return reject(err);
                resolve(this.lastID);
            });
        });
    }));
};

const createChildrenTable = () => {
    return new Promise((resolve, reject) => {
        db.run('DROP TABLE IF EXISTS children')
        .run(`CREATE TABLE IF NOT EXISTS children (child_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT)`, 
            err => {
                if (err) return reject(err);
                 resolve(insertChildrenRows());
        });
    });
};

const insertChildrenRows = () => {
    return Promise.all(children.map(({name}) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO children VALUES (null, "${name}")`, function(err){
                if (err) return reject(err);
                resolve(this.lastID);
            });
        });
    }));
};