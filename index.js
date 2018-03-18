const express = require('express');

// App Setup
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Express server started on port ${port}.`);
});

// Static files directory
app.use(express.static('public'));
