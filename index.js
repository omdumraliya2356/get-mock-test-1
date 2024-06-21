// index.js
const express = require('express');
const bodyParser = require('body-parser');
const AdminRoutes = require('./routes/adminRoute');
const pool = require('./config/db');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use('/api', AdminRoutes);

app.get('/', (req, res) => {
  res.send('Admins table creation triggered');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
