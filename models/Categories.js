const { Schema, model, Types } = require('mongoose');

const CategoriesSchema = new Schema({
  // pizzas: Array,
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

module.exports = model('Categories', CategoriesSchema);
