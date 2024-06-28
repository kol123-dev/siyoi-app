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
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// Endpoint to handle search queries
app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = data.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
