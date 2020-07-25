import cartReducer from './cart';
import categoriesReducer from './categories';
import pizzasListReducer from './pizzas-list';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  pizzasList: pizzasListReducer,
});

export default rootReducer;
