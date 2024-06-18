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


// const connection = mysql.createConnection({
//     // host: 'localhost',
//     // user: 'root',
//     // password: '',
//     // database: 'nodejs',

//     host: '185.131.55.196',
//     user: 'sa',
//     password: 'Zs94gpFcCIovhW',
//     database: 'TESTDB',
//     port : 1533,

//     // host: 'localhost',
//     // user: 'u739277164_demo',
//     // database: 'u739277164_demo',
//     // password: 'Demo@007',
//     // port : 3306,
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.stack);
//         return;
//     }
//     console.log('Connected to MySQL as ID', connection.threadId);
// });


// Create a connection pool
const pool ={
  host: "185.131.55.196",
  port: 1533,
  user: "sa",
  password: "Zs94gpFcClovhW",
  database: "gmt_test"
};

// Example usage of the pool to create a table
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const sql = `CREATE TABLE IF NOT EXISTS admins (
//     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
//     userName VARCHAR(255),
//     password VARCHAR(255)
//   )`;

//   connection.query(sql, (err, result) => {
//     // Release the connection back to the pool
//     connection.release();

//     if (err) {
//       console.error(err);
//     } else {
//       console.log("Table created");
//     }
//   });
// });

module.exports = pool;
