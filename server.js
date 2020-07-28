const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');

const pizzas = require('./routes/pizzas.routes');
const categories = require('./routes/categories.routes');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(console.log(`MongoDB Connected...`))
  .catch((err) => {
    console.log(err);
  });

// Use Routes
app.use('/api/pizzas', pizzas);
app.use('/api/categories', categories);

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
