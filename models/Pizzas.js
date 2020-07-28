const { Schema, model, Types } = require('mongoose');

const PizzasSchema = new Schema({
  // pizzas: Array,
  id: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  bases: { type: Array, required: true },
  sizes: { type: Array, required: true },
  price: { type: Number, required: true },
  category: { type: Number, required: true },
  rating: { type: Number, required: true },
});

module.exports = model('Pizzas', PizzasSchema);
