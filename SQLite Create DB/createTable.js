"use strict";

module.exports = () => {
    return new Promise((resolve, reject) => {
        const sqlite3 = require("sqlite3");
        const db = new sqlite3.Database("company.sqlite");

        db.run(`DROP TABLE IF EXISTS employees`);

        db.run(`CREATE TABLE IF NOT EXISTS employees (
            id INTEGER PRIMARY KEY,
            firstName TEXT,
            lastName TEXT,
            jobTitle TEXT,
            address TEXT
        )`, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};