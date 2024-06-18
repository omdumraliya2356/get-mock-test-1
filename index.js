// index.js
const express = require('express');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/adminRoute');
const pool = require('./config/db');
const mysql = require("mysql2/promise");
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());


const dbconnection = async () => {
    try {
        const connection = mysql.createPool(pool);
        console.log("Connected");
    }
    catch (error) {
        console.log(error, "== error ==");
    }
}

dbconnection();

app.use('/api', AdminRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
