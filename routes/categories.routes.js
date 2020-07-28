const express = require('express');
const router = express.Router();

// Categories Model
const Categories = require('../models/Categories');

router.get('/', (req, res) => {
  Categories.find().then((items) => res.json(items));
});

module.exports = router;
