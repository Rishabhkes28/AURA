const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./src/lib/db.js');
const authRoutes = require("./src/routes/auth.route.js");
const authController = require("./src/controllers/auth.controller.js");
const { connect } = require('http2');
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use('/api/auth', authRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Server is running on port' + PORT);
    connectDB()
    });