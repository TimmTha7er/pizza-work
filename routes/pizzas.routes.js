const express = require('express');
const router = express.Router();

// Pizzas Model
const Pizzas = require('../models/Pizzas');

// @route GET api/pizzas
// @descr Get All Pizzas
// @Access Public
// сделать рефакторинг
router.get('/', (req, res) => {
  const { _order, _sort, _filter } = req.query;
  const order = _order === 'descr' ? -1 : 1;
  let sort;

  if (_sort === 'популярности') {
    sort = 'rating';
  } else if (_sort === 'цене') {
    sort = 'price';
  } else if (_sort === 'алфавиту') {
    sort = 'name';
  }

  if (!_filter || _filter === '0') {
    Pizzas.find()
      .sort({ [sort]: order })
			.then((items) => res.json(items));
		
		return;
  }

  if (_order && _sort && _filter) {
    Pizzas.find()
      .where('category')
      .equals(_filter)
      .sort({ [sort]: order })
			.then((items) => res.json(items));
			
		return;
  }
});

module.exports = router;
