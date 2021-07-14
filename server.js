const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/keys');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
// Connect to Mongo
connectDB();

// Use Routes
app.use('/api/items', items);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set static foler
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
