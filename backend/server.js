const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port = 8000; 
const cors = require("cors"); // Import the cors package

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Configure the database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // or your database host
  database: 'findadonor',
  password: 'dev@redlife',
  port: 5432, // or your database port
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  client.release();
});

// Your routes for handling form submissions will be defined here.
app.post('/submit-form', (req, res) => {
  // Extract data from the request body
  const {
    patient_name,
    your_name,
    email_address,
    phone_number,
    units_required,
    blood_group,
    city_region,
  } = req.body;


  // Insert the data into the PostgreSQL database
  const insertQuery = `
    INSERT INTO findadonor (patient_name, your_name, email_address, phone_number, units_required, blood_group, city_region)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  const values = [
    patient_name,
    your_name,
    email_address,
    phone_number,
    units_required,
    blood_group,
    city_region,
  ];

  // Execute the query and handle any errors
  pool.query(insertQuery, values, (error, result) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Error inserting data' });
    } else {
      res.status(201).json({ message: 'Form data inserted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
