const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const pg = require('pg');
const bcrypt = require('bcrypt');

const app = express();

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // logging HTTP requests

// Session middleware
// Configure this as per your requirement
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Database connection
// Configure your PostgreSQL connection here

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add more routes as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
