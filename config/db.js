// config/db.js
const mysql2 = require('mysql2');

// const {
//     createPool
// } = require('mysql2');

// const pool = createPool({
//     host: '185.131.55.196',
//     user: 'sa',
//     password: 'Zs94gpFcCIovhW',
//     database: 'nodejs',
//     port : 1533

//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodejs',
// });


const connection = mysql2.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'nodejs',

    host: '185.131.55.196',
    user: 'sa',
    password: 'Zs94gpFcCIovhW',
    database: 'TESTDB',
    port : 1533,
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID', connection.threadId);
});


module.exports = connection;
