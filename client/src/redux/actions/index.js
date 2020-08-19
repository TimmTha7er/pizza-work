export {
  setSortCategory,
  setFilterCategory,
  setSortOrder,
  fetchCategories,
} from './categories';
export { fetchPizzas, setActiveBase, setActiveSize } from './pizzas-list';

export { fetchPizza } from './edit-pizza';

export {
  pizzaAddedToCart,
  pizzaRemovedFromCart,
  allPizzasRemovedFromCart,
  pizzaIncrease,
  pizzaDecrease,
} from './cart';
