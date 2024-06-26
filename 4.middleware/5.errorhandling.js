const express = require('express');
const app = express();

// Middleware to log requests
app.use(function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
});

// Route that intentionally throws an error
app.get('/error', function(req, res, next) {
    // Simulate an error
    const err = new Error('Intentional Error');
    next(err);
});

// Error handling middleware for 404 Not Found
app.use(function(req, res, next) {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// Error handling middleware for other errors
app.use(function(err, req, res, next) {
    console.error('Error:', err.message);

    // Set HTTP status code
    res.status(err.status || 500).send('Error: ' + (err.message || 'Internal Server Error'));;

    // Send error message
    res.send('Error: ' + (err.message || 'Internal Server Error'));
});

// Start the server
const port = 3000;
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});
