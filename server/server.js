const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Load the Excel file
const workbook = xlsx.readFile(path.join(__dirname, 'data.xlsx')); // make sure 'data.xlsx' is in the same directory

// Convert each sheet to JSON data
const dataSheets = {};
workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  dataSheets[sheetName] = xlsx.utils.sheet_to_json(sheet);
});

// Endpoint to handle search queries for IEBC
app.get('/search/iebc', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = dataSheets['IEBC'].filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
  res.json(results);
});

// Endpoint to handle search queries for PWDs
app.get('/search/pwds', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = dataSheets['PWDs'].filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
  res.json(results);
});
// Endpoint to handle search queries for PWDs
app.get('/search/pwds/stats', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = dataSheets['PWDs_STATS'].filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
  res.json(results);
});

// Endpoint to handle search queries for Scholarship
app.get('/search/scholarships', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = dataSheets['SCHOLARHIPS'].filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
  res.json(results);
});
// Endpoint to handle search queries for Scholarship
app.get('/search/bursary', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = dataSheets['BURSARY'].filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
