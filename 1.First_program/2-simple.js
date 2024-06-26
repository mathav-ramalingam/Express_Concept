const express = require('express');
const app = express();
const port = 3000;

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route for about page
app.get('/about', (req, res) => {
  res.send('<h1>About us page</h1>');
});

// Route for contact page
app.post('/contact', (req, res) => {
  res.send('Contact us at: contact@example.com');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});