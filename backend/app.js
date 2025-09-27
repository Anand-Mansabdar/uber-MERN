const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');


const app = express();
const userRoutes = require('./Routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use('/users', userRoutes);


module.exports = app;