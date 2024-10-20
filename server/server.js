const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: ["http://localhost:3000/", "https://mernify-to-do-app.netlify.app/"]
}));
app.use(express.json());

app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));