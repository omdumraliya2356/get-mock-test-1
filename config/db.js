const sql = require('mssql');

const webconfig = {
    user: "sa",
    password: "Zs94gpFcClovhW",
    server: "185.131.55.196",
    database: "gmt_test",
    options: {
        encrypt: false, // Use this if you're on Windows Azure
        trustServerCertificate: true, // Add this line to bypass the certificate validation
        port: 1533 // Specify the port here
    }
};

async function testConnection() {
    try {
        // Connect to the database
        await sql.connect(webconfig);
        console.log('Connection successful');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

testConnection();

module.exports = webconfig;