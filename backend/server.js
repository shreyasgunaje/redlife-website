const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port = 8000; 
const cors = require("cors"); // Import the cors package

const dbPassword = 'gunaje@551'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Configure the database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // or your database host
  database: 'findadonor',
  password: dbPassword,
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

// Route for handling form submission of find a donor.

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
// Route for handling form submission of Organize a camp.
app.post('/submit-form2', (req, res) => {
    // Extract data from the request body
    const {
      your_name,
      email_address,
      phone_number,
      city_region,
      name_of_organization,
    } = req.body;
  
  
    // Insert the data into the PostgreSQL database
    const insertQuery = `
      INSERT INTO organizeacamp (your_name, email_address, phone_number, city_region, name_of_organization)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [
      your_name,
      email_address,
      phone_number,
      city_region,
      name_of_organization,
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

  //Route for fetching the donor from the database based on clause
  app.get('/get-donors', (req, res) => {
    const { city_region } = req.query;
  
    // Implementation of the logic to fetch donors from the database based on the provided city/region
    const selectQuery = `
      SELECT donor_name, email_address, phone_number, blood_group
      FROM donor
      WHERE city_region = $1
    `;
  
    pool.query(selectQuery, [city_region], (error, result) => {
      if (error) {
        console.error('Error fetching donors:', error);
        res.status(500).json({ error: 'Error fetching donors' });
      } else {
        const donors = result.rows;
        res.status(200).json({ donors });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
