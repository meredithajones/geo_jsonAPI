const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// load environment variables
dotenv.config({ path: './config/config.env'});