'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("company.sqlite");
const createTable = require('./createTable');

const sqlPromise = (sqlFunction, sqlCode, printIndividualLines) => {
    return new Promise((resolve, reject) => {
        db[sqlFunction](sqlCode, (err, data) => {
            if(printIndividualLines){
                for(let sqlRow of data){
                    for(let prop in sqlRow){
                        console.log(prop, sqlRow[prop]);
                    }
                }
            }
            if (err) reject(err);
            else resolve(data);
        });
    });
};

createTable().then(() => {
    sqlPromise('run', `INSERT INTO employees VALUES ('01', 'Tim', 'Conner', 'The Indubitable Man', '247 My House Lane');`)
    .then(() => sqlPromise('run', `INSERT INTO employees VALUES ('02', 'Joe', 'Conner', 'The Indubitable Fly', '247 My House Lane');`))
    .then(() => sqlPromise('run', `INSERT INTO employees VALUES ('03', 'Sarah', 'Conner', 'The Fly', '247 My House Lane');`))
    .then(() => sqlPromise('run', `INSERT INTO employees VALUES ('04', 'Kylie', 'Conner', 'The Indubitable Rock', '247 My House Lane');`))
    .then(() => sqlPromise('run', `INSERT INTO employees VALUES ('05', 'Blue', 'Conner', 'The Indubitable Boot', '247 My House Lane');`))
    .then(() => sqlPromise('run', `INSERT INTO employees VALUES ('06', 'Dorothy', 'Conner', 'The Indubitable', '247 My House Lane');`))
    .then(() => sqlPromise('all', `SELECT * FROM employees`))
    .then(data => console.log('Write a statement to query the database and console.log() all employee records.', data))
    .then(() => sqlPromise('all', `SELECT jobTitle FROM employees`, true))
    .then(() => sqlPromise('all', `SELECT firstName, lastName, address FROM employees`, true))
    .catch(err => console.log('err', err));
});

