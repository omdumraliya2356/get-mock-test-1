// models/adminModel.js
const pool = require('../config/db');

const Admin = {
    create: (data, callback) => {
        const query = 'INSERT INTO admins (userName, password) VALUES (?, ?)';
        pool.query(query, [data.userName, data.password], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },
    findAdmin: (callback) => {
        const query = 'SELECT * FROM admins';
        pool.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM admins WHERE id = ?';
        pool.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findByUsername: (username, callback) => {
        const query = 'SELECT * FROM admins WHERE userName = ?';
        pool.query(query, [username], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    update: (id, data, callback) => {
        const query = 'UPDATE admins SET userName = ?, password = ? WHERE id = ?';
        pool.query(query, [data.userName, data.password, id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM admins WHERE id = ?';
        pool.query(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }
};

module.exports = Admin;
