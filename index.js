// index.js
const express = require('express');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/adminRoute');
const connection = require('./config/db');
const mysql2 = require("./tables/query");

const app = express();
app.use(bodyParser.json());

app.use('/api', AdminRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
