const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// load environment variables
dotenv.config({ path: './config/config.env'});

const app = express();

//Body Parser Middleware
app.use(express.json());

//Enable CORS
app.use(cors());

// Routes
app.use('/api/v1/stores', require ('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV}
mode on port ${PORT}`))