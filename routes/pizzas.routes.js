const express = require('express');
const router = express.Router();

// Pizzas Model
const Pizzas = require('../models/Pizzas');

// сделать рефакторинг

// @route GET api/pizzas
// @descr Get All Pizzas
// @Access Public
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

// @route POST api/pizzas
// @descr Create A Pizza
// @Access Private
router.post('/', (req, res) => {
  const newPizza = new Pizzas({
    // id: req.body.id,
    // imageUrl: req.body.imageUrl,
    // name: req.body.name,
    // bases: req.body.bases,
    // sizes: req.body.sizes,
    // price: req.body.price,
    // category: req.body.category,
    // rating: req.body.rating,
    ...req.body,
  });

  newPizza.save().then((pizza) => res.json(pizza));
});

// @route DELETE api/pizzas/:id
// @descr Delete A Pizza
// @Access Private
// здесь нужен _id из MongoDB (например 5f20480b03b3161f08617afa)
router.delete('/:id', (req, res) => {
  Pizzas.findById(req.params.id)
    .then((pizza) => pizza.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
