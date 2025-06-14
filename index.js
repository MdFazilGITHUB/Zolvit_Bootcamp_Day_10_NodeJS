// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./routes/user');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
