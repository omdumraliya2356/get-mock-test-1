// models/adminModel.js
const connection = require('../config/db');

const Admin = {
    create: (data, callback) => {
        const query = 'INSERT INTO admins (userName, password) VALUES (?, ?)';
        connection.execute(query, [data.userName, data.password], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },
    findAdmin: (callback) => {
        const query = 'SELECT * FROM admins';
        connection.execute(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM admins WHERE id = ?';
        connection.execute(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM admins WHERE id = ?';
        connection.execute(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findByUsername: (username, callback) => {
        const query = 'SELECT * FROM admins WHERE userName = ?';
        connection.execute(query, [username], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    update: (id, data, callback) => {
        const query = 'UPDATE admins SET userName = ?, password = ? WHERE id = ?';
        connection.execute(query, [data.userName, data.password, id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM admins WHERE id = ?';
        connection.execute(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }
};

module.exports = Admin;
