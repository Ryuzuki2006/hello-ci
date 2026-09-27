const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the <h1> tag on the root route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to CI/CD</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;