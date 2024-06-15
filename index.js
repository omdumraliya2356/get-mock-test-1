// index.js
const express = require('express');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/adminRoute');

const app = express();
app.use(bodyParser.json());

app.use('/api', AdminRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
